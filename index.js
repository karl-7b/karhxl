// Initialize Lenis
const lenis = new Lenis({
    lerp: 0.08,
    smooth: true,
    direction: "vertical"
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const light_effect_targets = document.querySelectorAll(".light_effects")
const rand = (min, max) => Math.random() * (max - min) + min;

function randomShadow(blurmin, blurmax) {
    const x = rand(-1, 1);
    const y = rand(-1, 1);
    const blur = rand(blurmin, blurmax);
    const color = "#fff"
    return `${x}px ${y}px ${blur}px ${color}`;
  }


  setInterval(() => {
    if (rand(0, 10) > 7) {
        light_effect_targets.forEach(el => el.style.textShadow = randomShadow(10, 20));
    } else {
        light_effect_targets.forEach(el => el.style.textShadow = randomShadow(5, 10));
    }
  }, 200);