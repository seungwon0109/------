function clicked() {
  document.getElementById("output").innerHTML = "";
  let qrcode = new QRCode("output", {
    width: 350,
    height: 350,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  const curr_time = new Date();
  const info = {
    product: document.getElementById("product").value,
    no: document.getElementById("no").value,
    price: document.getElementById("price").value,
    url: document.getElementById("url").value,
    ctime: curr_time.getTime()
  }
  // JSON object를 string으로 변환 
  const infoString = JSON.stringify(info);
  qrcode.makeCode(infoString);
  document.getElementById("qrstring").innerHTML = infoString;

  // JSON string을 JSON object로 변환 
  let infoObj = JSON.parse(infoString);

  document.getElementById("product_info").innerHTML = infoObj.product;
  document.getElementById("no_info").innerHTML = infoObj.no;
  document.getElementById("price_info").innerHTML = infoObj.price;
  document.getElementById("url_info").innerHTML = infoObj.url;
  document.getElementById("ctime_info").innerHTML = new Date(infoObj.ctime);

}

function erase() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("product_info").innerHTML = "";
  document.getElementById("no_info").innerHTML = "";
  document.getElementById("price_info").innerHTML = "";
  document.getElementById("url_info").innerHTML = "";
  document.getElementById("ctime_info").innerHTML = "";
  document.getElementById("qrstring").innerHTML = "";
  document.getElementById("output").innerHTML = "";
}
