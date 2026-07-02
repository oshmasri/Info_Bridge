function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
}

function showSignup() {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
}

/* LOGIN */
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token);
    window.location.href = "../schemes/index.html";
  } else {
    alert(data.message);
  }
});

/* SIGNUP */
document.getElementById("signupBtn").addEventListener("click", async () => {
  const name = document.getElementById("signupName").value;
  const phone = document.getElementById("signupPhone").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, email, password })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Account created successfully!");
    showLogin();
  } else {
    alert(data.message);
  }
});
