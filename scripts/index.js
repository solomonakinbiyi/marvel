window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newColorScheme = e.matches
      ? (document.querySelector(".form__card").classList.add("darkmode--form"),
        document
          .querySelector(".form__card")
          .classList.remove("lightmode--form"))
      : (document.querySelector(".form__card").classList.add("lightmode--form"),
        document
          .querySelector(".form__card")
          .classList.remove("darkmode--form"));
  });

const toggleForm = (id) => {
  const userDoesNotExists = localStorage.getItem("user") === null ? true : false
  id === "loginform"
    ? userDoesNotExists &&
      ((document.querySelector("#loginform").style.opacity = "0"),
      (document.querySelector("#loginform").style.visibility = "hidden"),
      (document.querySelector("#regform").style.opacity = "1"),
      (document.querySelector("#regform").style.visibility = "visible"))
    : ((document.querySelector("#regform").style.opacity = "0"),
      (document.querySelector("#regform").style.visibility = "hidden"),
      (document.querySelector("#loginform").style.opacity = "1"),
      (document.querySelector("#loginform").style.visibility = "visible"));
  !userDoesNotExists &&
    Swal.fire({
      position: "top-end",
      icon: "info",
      text: "Your account is already created",
      showConfirmButton: false,
      timer: 3000,
    });
};
