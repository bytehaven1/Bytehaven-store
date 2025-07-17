
document.querySelectorAll('.contact').forEach(button => {
  button.addEventListener('click', () => {
    window.open('https://t.me/egc121', '_blank');
  });
});

document.querySelectorAll('button:not(.contact)').forEach(button => {
  button.addEventListener('click', () => {
    alert('Added to cart!');
  });
});
