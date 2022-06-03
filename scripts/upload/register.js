document.querySelector("#regformid").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("psw");
  const chrnm = formData.get("chrnm");
  const user = { name, email, password, chrnm };
  if (localStorage.getItem("user") === null)
    localStorage.setItem("user", JSON.stringify(user));
  Swal.fire({
    position: "top-end",
    icon: "success",
    // title: "Success",
    text: "Your account has been created successfully",
    showConfirmButton: false,
    timer: 3000,
  });
  setTimeout(() => {
    window.history.replaceState(null, null, window.location.pathname);
    window.location.replace("../../profile/");
  }, 900);
});
