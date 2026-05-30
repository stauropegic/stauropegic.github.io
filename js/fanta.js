const banner = `
  o8boooo ,8b.     888  ,d8 888888888 ,8b.       <3
  88booop 88'8o    888_dPY8    '88d   88'8o        
  88b     88PPY8.  8888' 88   '888    88PPY8.      
  88P     8b   \`Y' Y8P   Y8 '88p      8b   \`Y' 

  Oh man idk who this guy is but he is really cool -fanta
    `;
    console.log(banner);
const songs = [
    {
        name: "I want a cigarette ~ Grimwell",
        file: "audios/fantas/i want a cigarette.mp3"
    },
    {
        name: "Hair ~ $uicideboy$",
        file: "audios/fantas/hair.mp3"
    },
    {
        name: "Dead by dawn ~ Sematary, Ghost Mountain",
        file: "audios/fantas/deadbydawn.mp3"
    },
    {
        name: "Transgressions ~ $uicideboy$",
        file: "audios/fantas/trans.mp3"
    },
    {
        name: "Aphrodite {The Aquatic Ape Theory} ~ $uicideboy$",
        file: "audios/fantas/aphro.mp3"
    },
    {
        name: "All That Glitter Is Not Gold, but Its Still Damn Beautiful ~ $uicideboy$",
        file: "audios/fantas/glitter.mp3"
    },
    {
        name: "Coil ~ Ghost Mountain",
        file: "audios/fantas/coil.mp3"
    },
    {
        name: "Nevada ~ Sematary",
        file: "audios/fantas/nevada.mp3"
    },
    {
        name: "Carried Away ~ $uicideboy$",
        file: "audios/fantas/carriedaway.mp3"
    },
    {
        name: "AM / PM ~ $uicideboy$",
        file: "audios/fantas/Am_Pm 4.mp3"
    },
    {
        name: "Arson ~ Sematary, Ghost Mountain",
        file: "audios/fantas/arson.mp3"
    },
    {
        name: "Blood Angel ~ Sematary",
        file: "audios/fantas/bloodangel.mp3"
    }
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
const pfpButton = document.getElementById("pfpButton");
const skid = document.getElementById("skids")
const aboutPage = document.getElementById("aboutPage");
const friendsPage = document.getElementById("friendsPage");

let showingFriends = false;

pfpButton.onclick = () => {

    showingFriends = !showingFriends;

    if (showingFriends) {

        aboutPage.style.display = "none";
        friendsPage.style.display = "block";

    } else {

        aboutPage.style.display = "block";
        friendsPage.style.display = "none";

    }
};