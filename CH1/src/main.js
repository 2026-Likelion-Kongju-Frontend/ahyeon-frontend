function changeRandomColor() {
  const sections = document.querySelectorAll('section');

  const r = Math.floor(Math.random() * 56) + 200;
  const g = Math.floor(Math.random() * 56) + 200;
  const b = Math.floor(Math.random() * 56) + 200;
  const randomColor = `rgb(${r}, ${g}, ${b})`;

  sections.forEach(section => {
    section.style.backgroundColor = randomColor;
    section.style.transition = 'background-color 0.5s ease';
  });
}