// Extra zoom blocking for iOS Safari, which can ignore the viewport tag
['gesturestart', 'gesturechange', 'gestureend'].forEach(evt => {
  document.addEventListener(evt, e => e.preventDefault());
});

// Dice roller
let sides = 20;
const result = document.getElementById('result');

document.querySelectorAll('.die').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.die.selected').classList.remove('selected');
    btn.classList.add('selected');
    sides = Number(btn.dataset.sides);
  });
});

document.getElementById('roll-btn').addEventListener('click', () => {
  const roll = Math.floor(Math.random() * sides) + 1;
  result.textContent = `d${sides}: ${roll}`;
});
