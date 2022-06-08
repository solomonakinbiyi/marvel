document.querySelector("#loginformid").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("psw");
  if (localStorage.getItem("user") !== null) {
    var user = JSON.parse(localStorage.getItem("user"));
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      text: "User does not exist",
      showConfirmButton: false,
      timer: 3000,
    });
  }
  if (user.email === email && user.password === password) {
    localStorage.setItem("session", "set");
    Swal.fire({
      position: "top-end",
      icon: "success",
      text: "Successfully authenticated",
      showConfirmButton: false,
      timer: 3000,
    });
    setTimeout(() => {
      window.history.replaceState(null, null, window.location.pathname);
      window.location.replace("../../profile/");
    }, 900);
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      text: "User does not exist",
      showConfirmButton: false,
      timer: 3000,
    });
  }
});
