import { apiUrl } from "./api.js";

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newColorScheme = e.matches
      ? (document.querySelector("nav").classList.remove("navlightmode"),
        document.querySelector("nav").classList.add("navdarkmode"),
        document.querySelector("body").classList.remove("bodylightmode"),
        document.querySelector("body").classList.add("bodydarkmode"))
      : (document.querySelector("nav").classList.remove("navdarkmode"),
        document.querySelector("nav").classList.add("navlightmode"),
        document.querySelector("body").classList.remove("bodydarkmode"),
        document.querySelector("body").classList.add("bodylightmode"));
  });

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newColorScheme = e.matches
      ? console.log("dark")
      : console.log("light");
  });

async function getData() {
  document.querySelector(".loading").style.display = "block";
  const user = JSON.parse(localStorage.getItem("user"));

  const userfavchr = user.chrnm;

  document.querySelector('.username').innerHTML = user.name;

  console.log(userfavchr);

  const res = await fetch(apiUrl);
  const json = await res.json();

  const arr = json.data.results;

  document.querySelector(".loading").style.display = "none";

  arr.forEach((element) => {
    document.querySelector(
      ".characterContainer"
    ).innerHTML += `<div class="card">
                    <img src="${element.thumbnail.path}/portrait_xlarge.jpg" alt="">
                    <span class="name"><b>${element.name}</b></span>
                    <span><b>Modified</b>:<span class="">${element.modified}</span></span>
                    <span><b>Available Series</b>:<span class="">${element.series.available}</span></span>
                </div>`;
  });

  const theUserObj = arr.find(({ name }) => name === userfavchr);

  document.querySelector(
    "#avt"
  ).src = `${theUserObj.thumbnail.path}/portrait_xlarge.jpg`;
}

getData();
