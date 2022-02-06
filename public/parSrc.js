const maxParticles = 100;
window.addEventListener("load", (event) => {
  particlesJS.load("particles-js", "particles.json", function () {
    console.log("Stars loaded!");
    const pJSIndex = 0;
    const pJS = pJSDom[pJSIndex].pJS;
    pJS.particles.array.splice(0, pJS.particles.array.length - maxParticles);
    pJS.interactivity.el.addEventListener("click", () => {
      pJS.particles.array.splice(0, pJS.particles.array.length - maxParticles);
    });
  });
});

/*
window.addEventListener("resize", () => {
  particlesJS.load("particles-js", "particles.json", function () {
    console.log("star loaded");
  });
});
*/
