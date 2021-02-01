const friendsArray = ["Jon", "Jamarcy", "B-Ry", "Gabe", "M. Little"];

document.addEventListener("DOMContentLoaded", function () {
    const divToHoldButton = document.createElement("div"); // created a div
    const button = document.createElement("button"); // put button in div
    const buttonText = document.createTextNode("Sing!");

    document.body.appendChild(divToHoldButton); // allows div to display on screen
    divToHoldButton.appendChild(button); // allows button to display on screen
    button.appendChild(buttonText);


    button.addEventListener("click", function () {
        // Outer loop to pick the friend
        for (let i = 0; i < friendsArray.length; i++) {
            const divToHoldFriends = document.createElement("div");
            const h3WithFriendsName = document.createElement("h3");
            const nameTitlesUppercase = document.createTextNode(friendsArray[i].toUpperCase() + ":");

            divToHoldFriends.className = "friend";

            document.body.appendChild(divToHoldFriends);
            h3WithFriendsName.appendChild(nameTitlesUppercase);
            divToHoldFriends.appendChild(h3WithFriendsName);
        }

        for (let j = 0; j < friendsArray.length; j++) {
            let lines_of_code = 99;

            // Inner loop to iterate through the lyrics
            while (lines_of_code >= 2) {
                const paraToHoldLyrics = document.createElement("p");
                const pluralSongVerses = (lines_of_code + " lines of code in the file, " + (lines_of_code - 1) + " lines of code; " + friendsArray[j] + " strikes one out, clears it all out...");
                const singularSongVerses = (lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friendsArray[j] + " strikes one out, clears it all out, no more lines of code in the file");
                const displayNamesOnScreen = document.createTextNode(friendsArray[i]); // keep

                paraToHoldLyrics.appendChild(pluralSongVerses);
                paraToHoldLyrics.appendChild(singularSongVerses);
                divToHoldFriends.appendChild(paraToHoldLyrics);
                lines_of_code--;
            }

            document.appendChild(divToHoldFriends);
            displayNamesOnScreen.appendChild(paraToHoldLyrics);
            paraToHoldLyrics.appendChild(singularSongVerses);
        }
    })
})


