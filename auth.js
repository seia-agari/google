const commonUrl = "https://script.google.com/macros/s/AKfycbz1_9L7zCCsczPPUyKk6ZjYfOU4_N_8vHxoXlb59k_kBtVM2awIF0PyX1-ITb3Yfj0YOg/exec";

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
