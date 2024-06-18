// 1. Book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// 2. UI class: UI를 다루는 기능
class UI {
  // 2.1 Display books
  static displayBooks() {
    // const books = [
    //   {
    //     title: 'Book one',
    //     author: 'John Doe',
    //     isbn: '436763'
    //   },
    //   {
    //     title: 'Book two',
    //     author: 'John Lennon',
    //     isbn: '664323'
    //   },
    //   {
    //     title: 'Book three',
    //     author: 'Michael Jackson',
    //     isbn: '81662'
    //   }
    // ];

    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  // 2.2 Add book to UI
  static addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href="#" class="btn btn-danger btn-sm delete"> X </a> </td>
    `;
    list.appendChild(row);
  }

  // 2.3 Delete book from UI
  static deleteBook(target) {
    // console.log(target);
    target.parentElement.parentElement.remove();
  }

  // 2.4 알림메시지 표시
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }

  // 2.5 Clear Fields
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// 3. 사용자 Event 처리 기능

// 3.1 Event: Display books (페이지 초기 로드시 실행)
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// 3.2 Event: Add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.target);

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // validation, 입력 검증
  if (title === "" || author === "" || isbn === "") {
    // alert("모든 필드를 입력해 주세요...");
    UI.showAlert("모든 필드를 입력해 주세요", "danger");
  } else {
    const book = new Book(title, author, isbn);

    // 화면 테이블에 추가
    UI.addBookToList(book);

    // Store에 저장하기
    Store.addBook(book);

    UI.showAlert("책이 저장되었습니다", "success");

    // Clear field
    UI.clearFields();
  }
});

// 3.3 Event: Remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  console.log(e.target.parentElement.previousElementSibling.textContent);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // 메시지 표시
  UI.showAlert("책을 삭제했습니다", "info");
});

// 4. Store class : localStorage에 저장하는 기능
class Store {
  // 4.1 localStorage에서 책정보를 읽어옴
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  // 4.2 localStorage에 새로운 책을 저장함
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  // 4.3 localStorage에서 책정보를 지움
  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}
