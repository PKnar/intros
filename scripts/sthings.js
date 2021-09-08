(function () {
  const playButton = document.querySelector(".play");
  const audio = document.querySelector("audio");
  const title = document.querySelector(".title");
  const intro = document.querySelector(".intro-screen");

  playButton.addEventListener("click", (e) => {
    intro.classList.add("hide");
    //title.classList.add('show');
    audio.play();
  });
})();
