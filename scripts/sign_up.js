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

const characters = [
    "Takumi Fujiwara",
    "Bunta Fujiwara",
    "Ryosuke Takahashi",
    "Keisuke Takahashi",
    "Kenji",
    "Takeshi Nakazato",
    "Shingo Shoji",
    "Kyoichi Sudo",
    "Seiji Iwaki",
    "Toshiya Joushima (God Hand)",
    "Kozo Hoshino (God Foot)",
    "Wataru Akiyama"
  ];

window.onload = function() {
    let carSelect = document.getElementById("favcar");
    for(let car of cars) {
        let option = document.createElement("option");
        option.text = car;
        option.value = car.toLowerCase().replace(/ /g, "_");
        carSelect.appendChild(option);
    }

    let charSelectDiv = document.getElementById("favcharacterdiv");
    for(let char of characters) {
        let divChar = document.createElement("div");
        let charInput = document.createElement("input");
        let charLabel = document.createElement("label");
        charInput.type = "radio";
        charInput.id = char.toLowerCase().replace(/ /g, "_");
        charInput.name = "favcharacter";
        charInput.value = char.toLowerCase().replace(/ /g, "_");
        charLabel.htmlFor = char.toLowerCase().replace(/ /g, "_");
        charLabel.textContent = char;
        divChar.appendChild(charInput);
        divChar.appendChild(charLabel);
        charSelectDiv.appendChild(divChar);
    }
}