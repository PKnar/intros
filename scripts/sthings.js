(function () {
  const playButton = document.querySelector(".play");
  const audio = document.querySelector("audio");
  const title = document.querySelector(".title");
  const intro = document.querySelector(".intro-screen");

  playButton.addEventListener("click", (e) => {
    intro.classList.add("hide");

    audio.play();
  });

  audio.addEventListener(
    "timeupdate",
    function () {
      var currentTimeMs = Math.floor(audio.currentTime);
      if (currentTimeMs === 8) {
        title.classList.add("show");
      }
    },
    false
  );
})();
