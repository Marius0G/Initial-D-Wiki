const scenes = [
    {
        songName: "Running in the 90s",
        description: "AE86 Trueno vs. R32 Skyline GT-R",
        srcFile: "assets/Videos/running in the 90s.mp4"
    },
    {
        songName: "Déjà Vu",
        description: "AE86 Trueno vs. EG6 Civic"
    },
    {
        songName: "Gas Gas Gas",
        description: "AE86 Trueno vs. MR2 SW20"
    },
    {
        songName: "Night of Fire",
        description: "Impact Blue S13 Silvia & AE86 Trueno"
    },
    {
        songName: "Space Boy",
        description: "AE86 Trueno (Delivery Run)"
    },
    {
        songName: "No One Sleep in Tokyo",
        description: "AE86 Trueno vs. FD3S RX-7"
    },
    {
        songName: "Beat of the Rising Sun",
        description: "AE86 Trueno vs. FC3S RX-7"
    },
    {
        songName: "Dancing",
        description: "S13 Silvia vs. EG6 Civic"
    },
    {
        songName: "Be My Babe",
        description: "AE86 Trueno vs. S14 Silvia"
    },
    {
        songName: "Doctor Love",
        description: "AE86 Trueno vs. AE86 Levin"
    },
    {
        songName: "Secret Love",
        description: "AE86 Trueno vs. Miata NA6C"
    },
    {
        songName: "Killing My Love",
        description: "AE86 Trueno vs. 180SX"
    },
    {
        songName: "I Won't Fall Apart",
        description: "AE86 Trueno vs. EVO III"
    }
];

function createSongElement(scene) {
    let songDiv = document.createElement("div");
    songDiv.classList.add("song");
    songDiv.innerHTML = `
        <img src="assets/Images/playbutton.png" alt="">
        <div class="songDescription">
            <p>${scene.songName}</p>
            <small>${scene.description}</small>
        </div>
    `;
    return songDiv;
}

window.onload = function() {

    const songsLeftContainer = document.getElementById("songsLeftContainer");
    const songsRightContainer = document.getElementById("songsRightContainer");
    
    for(let i=0; i<scenes.length; i++) {
        if(i % 2 === 0) {
            songsLeftContainer.appendChild(createSongElement(scenes[i]));
        } else {
            songsRightContainer.appendChild(createSongElement(scenes[i]));
        }
    }
}
