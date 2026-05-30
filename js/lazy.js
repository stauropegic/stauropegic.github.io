const banner = `
  888      ,8b.     PPPPP88p'888   88   <3
  888      88'8o        ,dP' 888ooo88     
  888      88PPY8.    ,dP'         88     
  888PPPPP 8b   \`Y' YPPPPPPP PPPPPP8P     
    `;
    console.log(banner);
const pfpButton = document.getElementById("pfpButton");
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