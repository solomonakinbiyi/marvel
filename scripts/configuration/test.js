global.fetch = require("node-fetch/");

async function getData() {
  const apiUrl =
    // "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9bf030b9c842dd0fa6fcd887a8cad5e5&hash=60ef9ce26f3859138320ba22525902d7";
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9bf030b9c842dd0fa6fcd887a8cad5e5&hash=60ef9ce26f3859138320ba22525902d7";

  const res = await fetch(apiUrl);
  const json = await res.json();

  const arr = json.data.results;

  // arr.forEach(element => {
  //   console.log(element.name)
  // });
//   arr.forEach(element => {
//     console.log(element.thumbnail)
//   });

  console.log(arr[3]);
//   console.log(arr[0].stories);

  // console.log(arr.find(({ name }) => name === "Iron Man"))

  // console.log(arr.find(({ title }) => title === "Marvel Previews (2017)"));
}

getData();
