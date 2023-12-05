// Dummy car data
const cars = [
    { model: 'Sedan', available: true },
    { model: 'SUV', available: true },
    { model: 'Convertible', available: false },
];

// Display available cars
function displayCars() {
    const carListSection = document.querySelector('.car-list');
    carListSection.innerHTML = '';

    cars.forEach(car => {
        const status = car.available ? 'Available' : 'Rented';
        carListSection.innerHTML += `<p>${car.model} - ${status}</p>`;
    });
}

// Initial display of available cars
displayCars();
