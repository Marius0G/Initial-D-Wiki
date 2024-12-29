const scenes = [
    {
        songName: "Running in the 90s",
        description: "AE86 Trueno vs. R32 Skyline GT-R",
        srcFile: "assets/Videos/running in the 90s.mp4"
    },
    {
        songName: "Love Killer",
        description: "AE86 Trueno vs. EVO IV",
        srcFile: "assets/Videos/love killer.mp4"
    },
    {
        songName: "Night of Fire",
        description: "S14 Silvia & AE86 Trueno",
        srcFile: "assets/Videos/night of fire.mp4"
    },
    {
        songName: "Remember Me",
        description: "AE86 Trueno (Delivery Run)",
        srcFile: "assets/Videos/remember me.mp4"
    },
    {
        songName: "No One Sleep in Tokyo",
        description: "AE86 Trueno vs. FD3S RX-7",
        srcFile: "assets/Videos/no one sleep in tokyo.mp4"
    },
    {
        songName: "Beat of the Rising Sun",
        description: "AE86 Trueno vs. FC3S RX-7",
        srcFile: "assets/Videos/beat of the rising sun.mp4"
    },
    {
        songName: "Dancing",
        description: "S13 Silvia vs. EG6 Civic",
        srcFile: "assets/Videos/dancing.mp4"
    },
    {
        songName: "Make Up Your Mind",
        description: "AE86 Trueno revs to 11,000 RPM",
        srcFile: "assets/Videos/make up your mind.mp4"
    },
    {
        songName: "Doctor Love",
        description: "AE86 Trueno vs. AE86 Levin",
        srcFile: "assets/Videos/doctor love.mp4"
    },
    {
        songName: "I Need Your Love",
        description: "AE86 Trueno vs. EG6 Civic",
        srcFile: "assets/Videos/i need your love.mp4"
    },
    {
        songName: "Be My Babe",
        description: "AE86 Trueno vs. 180SX",
        srcFile: "assets/Videos/be my babe.mp4"
    },
    {
        songName: "Speed Lover",
        description: "AE86 Trueno vs. EVO III",
        srcFile: "assets/Videos/speed lover.mp4"
    }
];

function createSongElement(scene) {
    let songDiv = document.createElement("div");
    songDiv.classList.add("song");
    songDiv.innerHTML = `
        <svg id="playButton" width="30" height="30" viewBox="0 0 225 225" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 C8.11218517 0.10699525 13.57677278 4.21636901 20.09619141 8.56835938 C22.34989123 10.03791272 24.68322027 11.30830604 27.0625 12.5625 C39.90445422 19.45981072 52.40222371 27.01495135 64.95703125 34.41796875 C68.27661014 36.37454174 71.6054043 38.31480423 74.9375 40.25 C78.19771827 42.14578991 81.44343354 44.06245613 84.671875 46.01171875 C85.33815918 46.41382568 86.00444336 46.81593262 86.69091797 47.23022461 C87.98290405 48.01145122 89.27367886 48.79468605 90.56298828 49.58032227 C94.23751281 51.80343447 97.97266705 53.77005446 101.8125 55.6875 C104.39847051 57.14813443 106.94848357 58.66766417 109.5 60.1875 C111.01008273 61.0812936 112.52051265 61.97450082 114.03125 62.8671875 C114.81371094 63.32963867 115.59617187 63.79208984 116.40234375 64.26855469 C120.4236118 66.63601923 124.46084704 68.97571575 128.5 71.3125 C129.30187744 71.77648193 130.10375488 72.24046387 130.92993164 72.71850586 C135.59014421 75.41165581 140.25996146 78.08707141 144.9375 80.75 C182.58863543 102.23977087 182.58863543 102.23977087 185.8125 108.6875 C186.39382875 115.77971077 186.39382875 115.77971077 184.2265625 119.1640625 C181.40649925 122.1118956 178.34624819 124.16966707 174.875 126.25 C174.1855127 126.67200684 173.49602539 127.09401367 172.78564453 127.52880859 C164.36699328 132.63873844 155.79026136 137.48246901 147.21728516 142.32714844 C143.93035103 144.18651869 140.65223152 146.06110033 137.375 147.9375 C134.08949376 149.81548303 130.80352416 151.69261538 127.515625 153.56640625 C116.79648763 159.67927837 106.120894 165.866813 95.44775391 172.05957031 C85.4970263 177.83311525 75.52616923 183.56890041 65.53027344 189.26391602 C59.17832154 192.88963475 52.87089464 196.58576387 46.57739258 200.31176758 C41.86931757 203.09033154 37.10415207 205.73874149 32.2890625 208.328125 C27.1386154 211.15518429 22.14641139 214.25439652 17.140625 217.328125 C15.83351563 218.12476563 15.83351563 218.12476563 14.5 218.9375 C13.72011719 219.41703125 12.94023438 219.8965625 12.13671875 220.390625 C6.13162039 223.74136896 0.64983441 224.75155358 -6.1875 223.6875 C-8.71355704 221.40201982 -9.69818645 219.6661271 -11.1875 216.6875 C-11.29198003 213.98035949 -11.33529548 211.29856646 -11.33467102 208.59088135 C-11.33834771 207.744027 -11.3420244 206.89717266 -11.3458125 206.02465606 C-11.35687691 203.17040269 -11.36069784 200.31618569 -11.36450195 197.46191406 C-11.37076452 195.42211795 -11.37741113 193.382323 -11.38441467 191.3425293 C-11.40184354 185.78870695 -11.41238155 180.23489323 -11.4206202 174.6810503 C-11.42576629 171.21320508 -11.43184219 167.74536255 -11.43813133 164.27751923 C-11.45718855 153.43327626 -11.47141864 142.58904014 -11.4797433 131.74478364 C-11.48951908 119.21611163 -11.51584538 106.68761615 -11.55624419 94.15900636 C-11.58637829 84.48251768 -11.6012096 74.80607967 -11.60452431 65.12954497 C-11.60687787 59.34678434 -11.61587804 53.56421218 -11.64098549 47.78150177 C-11.66422382 42.34126224 -11.66851644 36.90133582 -11.65822411 31.46105957 C-11.65772761 29.46399648 -11.66408155 27.46691821 -11.67778015 25.46990204 C-11.69543542 22.74357537 -11.68842436 20.01838011 -11.67524719 17.29205322 C-11.68621644 16.50157727 -11.69718568 15.71110131 -11.70848733 14.89667153 C-11.61843381 7.18037861 -8.25015903 0.5010218 0 0 Z " fill="#FEFEFE" transform="translate(25.1875,0.3125)"/>
        <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C1 3 1 3 -1.8203125 3.1953125 C-2.91085938 3.17210937 -4.00140625 3.14890625 -5.125 3.125 C-6.22070312 3.10695312 -7.31640625 3.08890625 -8.4453125 3.0703125 C-9.28835937 3.04710937 -10.13140625 3.02390625 -11 3 C-11 2.67 -11 2.34 -11 2 C-10.06027344 1.90912109 -10.06027344 1.90912109 -9.1015625 1.81640625 C-7.87566406 1.69072266 -7.87566406 1.69072266 -6.625 1.5625 C-5.81289063 1.48128906 -5.00078125 1.40007812 -4.1640625 1.31640625 C-1.95727195 1.10909886 -1.95727195 1.10909886 0 0 Z " fill="#484848" transform="translate(32,222)"/>
        </svg>
        <div class="songDescription">
            <p>${scene.songName}</p>
            <small>${scene.description}</small>
        </div>
    `;
    return songDiv;
}

function handleSongClick(index) {
    let pathsAll = document.querySelectorAll("path");
    pathsAll.forEach(function(path) {
        path.style.fill = "#FFFFFF";
    });
    for(let i=0; i<songDivArray.length; i++) {
        songDivArray[i].classList.remove("playing");
    }
    songDivArray[index].classList.add("playing");
    let paths = songDivArray[index].querySelectorAll("path");
    paths.forEach(function(path) {
        path.style.fill = "#dc143c";
    });
    videoM.src = scenes[index].srcFile;
    videoM.load();
}
var songDivArray = [];

window.onload = function() {

    const songsLeftContainer = document.getElementById("songsLeftContainer");
    const songsRightContainer = document.getElementById("songsRightContainer");
    
    const videoM = document.getElementById("videoM");

    for(let i=0; i<scenes.length; i++) {
        let currentSong = createSongElement(scenes[i]);
        songDivArray.push(currentSong);
        if(i % 2 === 0) {
            songsLeftContainer.appendChild(currentSong);
        } else {
            songsRightContainer.appendChild(currentSong);
        }
    }
    songDivArray.forEach(function(songDiv, index) {
        songDiv.addEventListener("click", function() {
            handleSongClick(index);
        });
    });
}

function playRandomSong() {
    let randomButton = document.getElementById("playRandomSong");
    randomButton.style.backgroundColor = getRandomColor();
    randomButton.style.borderColor = getRandomBorderColor();
    let randomIndex = Math.floor(Math.random() * scenes.length);
    handleSongClick(randomIndex);
}

function getRandomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

function getRandomBorderColor(){
    let blackorwhite = Math.floor(Math.random()*2);
    if(blackorwhite == 0){
        return "black";
    } else {
        return "white";
    }

}