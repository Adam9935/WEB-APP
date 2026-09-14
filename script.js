const el = {
  l: document.getElementById("l"),
  o: document.getElementById("o"),
  v: document.getElementById("v"),
  e: document.getElementById("e"),
  u: document.getElementById("u"),
  y: document.getElementById("y"),
  ou: document.getElementById("ou"),
  you: document.getElementById("you"),
  blop: new Audio("https://assets.mixkit.co/sfx/preview/mixkit-game-ball-tap-2073.mp3")
};

function crtLoveTL() {
  const move = 1000;
  const easing = "sin.inOut";
  const easingBoom = "sin.in";
  const delta = 150;

  return new mojs.Timeline().add([
    new mojs.Tween({
      duration: move,
      onUpdate: (progress) => {
        [el.l, el.o, el.v, el.e, el.u, el.y, el.ou, el.you].forEach((char, i) => {
          if (progress >= (i * delta) / move) {
            char.style.opacity = 1;
          }
        });
      },
      onComplete: () => {
        [el.l, el.o, el.v, el.e, el.u, el.y, el.ou, el.you].forEach(elm => {
          elm.style.opacity = 0;
        });
        el.blop.play();
      }
    })
  ]);
}

// Trigger animation on page load
window.onload = () => {
  crtLoveTL().play();
};