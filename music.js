// MUSICS:
const ul = document.querySelector(".musicList");
const btnSubmit = document.querySelector("button");
const addForm = document.querySelector(".musicForm");
var newAdd = [];

// PLAYLIST:
const ulPlayList = document.querySelector(".playlistList");
const playListForm = document.querySelector(".playlistForm");
var playListInput = document.querySelector("#playlist");

var newPlayList = [];

function addToMyPlayList(list) {
  const newPlayList = `
  <li
class="list-group-item d-flex justify-content-between align-items-center">
<span>${list}</span>
<i class="far fa-trash-alt delete"></i>
</li>
  `;
  ulPlayList.innerHTML = ulPlayList.innerHTML + newPlayList;
}

playListInput.addEventListener("keypress", (e) => {
  search = document.getElementById("playlist").value;

  if (e.keyCode === 13 || e.keyCode === "Enter") {
    e.preventDefault();
    addToMyPlayList(search);
    newPlayList.push(search);
  }

  localStorage.setItem("My Play List", JSON.stringify(newPlayList));
});

ulPlayList.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    e.target.parentElement.remove();
  }
});

// MUSICS:

function addToMyList(myList) {
  const newList = `
  <li
class="list-group-item d-flex justify-content-between align-items-center">
<span>${myList}</span>
<i class="far fa-trash-alt delete"></i>
</li>
`;
  ul.innerHTML = ul.innerHTML + newList;
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  catchMusicInput = document.getElementById("music").value;
  // console.log(catchInputMusic);

  catchYoutubeInput = document.getElementById("youtubeLink").value;

  if (catchMusicInput.trim().length > 0) {
    addToMyList(catchMusicInput);
    newAdd.push(catchMusicInput);
    localStorage.setItem("My Music List", JSON.stringify(newAdd));
  }

  if (catchYoutubeInput.trim().length > 0) {
    addToMyList(catchYoutubeInput);
    newAdd.push(catchYoutubeInput);
    localStorage.setItem("My Youtube List", JSON.stringify(newAdd));
  }
  addForm.reset();
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    e.target.parentElement.remove();
  }
});

window.addEventListener("load", (e) => {
  newAdd = [...JSON.parse(localStorage.getItem("My Music List"))];
  newAdd = [...JSON.parse(localStorage.getItem("My Youtube List"))];
  console.log(JSON.parse(localStorage.getItem("My Youtube List")));

  console.log(JSON.parse(localStorage.getItem("My Play List")));
  newPlayList = [...JSON.parse(localStorage.getItem("My Play List"))];

  newAdd.forEach((add) => {
    addToMyList(add);
  });

  newPlayList.forEach((val) => {
    addToMyPlayList(val);
  });
});
