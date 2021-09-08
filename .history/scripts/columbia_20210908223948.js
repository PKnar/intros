(function () {
  const btn = document.querySelector("#btn");
  const introScreen = document.querySelector(".intro-screen");
  const header = document.querySelector("header");

  const audio = document.querySelector("audio");

  btn.addEventListener("click", (e) => {
    introScreen.classList.add("hide");

    header.classList.add("show");
    audio.currentTime = 2;
    audio.play();
  });
})();
