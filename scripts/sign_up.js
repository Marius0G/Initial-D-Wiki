const cars = [
    "Toyota AE86 Sprinter Trueno",
    "Mazda RX-7 FD3S",
    "Mazda RX-7 FC3S",
    "Nissan Skyline GT-R R32",
    "Nissan Silvia S13",
    "Nissan Silvia S14",
    "Nissan 180SX RPS13",
    "Subaru Impreza WRX STi GC8",
    "Mitsubishi Lancer Evolution III",
    "Mitsubishi Lancer Evolution IV",
    "Honda Civic EG6",
    "Honda Civic EK9 Type R",
    "Toyota MR2 SW20",
    "Toyota Altezza RS200",
    "Toyota Supra JZA80",
    "Suzuki Cappuccino EA11R"
  ];
window.onload = function() {
    let carSelect = document.getElementById("favcar");
    for(let car of cars) {
        let option = document.createElement("option");
        option.text = car;
        option.value = car.toLowerCase().replace(/ /g, "_");
        console.log(option.value);
        carSelect.appendChild(option);
    }
}