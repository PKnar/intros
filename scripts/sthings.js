(function () {
  const playButton = document.querySelector(".play");
  const audio = document.querySelector("audio");
  const title = document.querySelector(".title");
  const intro = document.querySelector(".intro-screen");
  const A = document.querySelector('.A');
  const N = document.querySelector('.N-large');

  playButton.addEventListener("click", (e) => {
  
    intro.classList.add("hide");
    A.classList.add('show');
    N.classList.add('show')


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
