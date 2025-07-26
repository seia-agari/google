const commonUrl = "https://x.gd/mrIX3";

// 👤 講師ごとのIDとパスワード
const users = {
  "seia": "4869"
};

// ✅ 修正済み：関数名を大文字始まりに
function checkLogin() {
  const id = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();

  if (users[id] === pass) {
    window.location.href = commonUrl;
  } else {
    alert("ユーザーIDまたはパスワードが間違っています");
  }
}
