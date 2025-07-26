const commonUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdgr6L6BusiaI_8sqo8W1KtLPbdrucwViklOjMA0ykY34klyw/viewform?usp=header";

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