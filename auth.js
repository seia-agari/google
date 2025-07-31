const endpoint = "https://script.google.com/macros/s/AKfycbzKcct8pXoapKfj-F5MR5MNMJShJ9EXZKWkyomWZDcOe-xnFYiK5OyPSWy8zepazcEF4g/exec"; 

function checkLogin() {
  const id = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();

  fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({ id: id, password: pass })
  })
  .then(response => response.text())
  .then(result => {
    if (result === "OK") {
      // 成功時の遷移先
      window.location.href = "https://script.google.com/macros/s/AKfycbz1_9L7zCCsczPPUykk6ZjYfOu4_N_8vHxoXlb59k_kBtVM2awIF0PyX1-ITb3Yfj0YOg/exec";
    } else {
      alert("ユーザーIDまたはパスワードが間違っています");
    }
  });
}
