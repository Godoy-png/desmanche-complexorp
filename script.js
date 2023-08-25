const searchInput = document.getElementById('search');
const carCards = document.querySelectorAll('.car-card');

searchInput.addEventListener('keyup', function () {
  const query = searchInput.value.toLowerCase();

  carCards.forEach(carCard => {
    const carName = carCard.querySelector('.car-name').textContent.toLowerCase();
    carCard.style.display = carName.includes(query) ? 'block' : 'none';
  });
});
