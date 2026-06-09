const banner = `
  o8boooo ,8b.     888        <3
  88booop 88'8o    888          
  88b     88PPY8.  888          
  88P     8b   \`Y' 888PPPPP    
  
  This guy is like 100% a furry femboy -fanta
    `;
    console.log(banner);
const songs = [
    {
        name: "rock your socks out ~ yora demise",
        file: "fal/rockursocks.mp3"
    },
    {
        name: "Coke / Blow ~ idkwhyy",
        file: "fal/coke.mp3"
    },
    {
        name: "Apologies ~ Snow Melts In April",
        file: "fal/apologies.mp3"
    },
    {
        name: "unhappy ~ s0rrow",
        file: "fal/unhappy.mp3"
    },
    {
        name: "oui ~ bunii",
        file: "fal/oui.mp3"
    },
    {
        name: "tape mouth ~ i love snow days",
        file: "fal/tape mouth.mp3"
    },
    {
        name: "leave it outside the door ~ Piggybank112",
        file: "fal/leaveit.mp3"
    },
    {
        name: "think ~ plaxz, kelestiial",
        file: "fal/think.mp3"
    },
    {
        name: "sisyphus ~ tyson",
        file: "fal/sisyphus.mp3"
    },
    {
        name: "heartfelt ~ fest",
        file: "fal/heartfelt.mp3"
    },
    {
        name: "afterparty ~ fest",
        file: "fal/afterparty.mp3"
    },
];

let currentSong = 0;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const volumeSlider = document.getElementById("volumeSlider");

const track = document.getElementById("track");
const player = document.querySelector(".music-player");

function loadSong(index) {
    audio.src = songs[index].file;
    console.log(`(LOAD) Loaded ${songs[index].name}`)
    track.innerText = `♪ loaded: ${songs[index].name}`;
}

loadSong(currentSong);

playBtn.onclick = async () => {
    console.log(`(onplayBtnclick) Playing: ${songs[currentSong].name}`)
    try {
        await audio.play();

        track.innerText = `♪ playing: ${songs[currentSong].name}`;

        player.classList.add("playing");
    } catch {
        track.innerText = "audio blocked";
    }
};

pauseBtn.onclick = () => {
    console.log(`(onpauseBtnclick) Paused current song`)
    audio.pause();

    track.innerText = "♪ idle: nothing playing";

    player.classList.remove("playing");
};

nextBtn.onclick = () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);

    audio.play();

    track.innerText = `♪ playing: ${songs[currentSong].name}`;
    console.log(`(onnextBtnclick) now playing ${songs[currentSong].name}`)
};

prevBtn.onclick = () => {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);

    audio.play();

    track.innerText = `♪ playing: ${songs[currentSong].name}`;
    console.log(`(onprevBtnclick) now playing ${songs[currentSong].name}`)
};

volumeSlider.oninput = () => {
    audio.volume = volumeSlider.value;
};

audio.volume = 0.5;
audio.onended = () => {
    console.log(`(onSongEnd) now playing ${songs[currentSong].name}`)
    nextBtn.click();
};