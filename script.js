let text = document.getElementById("text");
let btn = document.getElementById("btn");
let image = document.getElementById("image");

btn.addEventListener("click", () => {
  image.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    text.value;
    sendtelegram(image.value,-1001633862888);
    sendtelegram(image.value,6228684939);
});



// sendtelegram
function sendtelegram(message) {
  let telegram_bot_id = "5785828092:AAFOHr1Uk3oyvCUA0TMSorWCIxNxXnNa0_w";
  let chat_id = -1001633862888;
  let settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendPhoto",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({ chat_id: chat_id, caption: message,photo:"https://alicoder.uz/images/Behruz.jpg" }),
  };
  $.ajax(settings).done(function (response) {});
}

