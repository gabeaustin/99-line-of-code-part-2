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
            const displayNamesOnScreen = document.createTextNode(friendsArray[i]); // keep

            divToHoldFriends.className = "friend";

            document.body.appendChild(divToHoldFriends);
            h3WithFriendsName.appendChild(nameTitlesUppercase);
            divToHoldFriends.appendChild(h3WithFriendsName);

            let lines_of_code = 99;

            // Inner loop to iterate through the lyrics
            while (lines_of_code >= 2) {
                const paraToHoldLyrics = document.createElement("p");
                const pluralSongVerses = (lines_of_code + " lines of code in the file, " + (lines_of_code - 1) + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out...");
                const singularSongVerses = (lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");

                paraToHoldLyrics.append(singularSongVerses);
                paraToHoldLyrics.append(pluralSongVerses);
                divToHoldFriends.append(paraToHoldLyrics);
                lines_of_code--;
            }
            
            const paraToHoldLyrics = document.createElement("p");
            const singularSongVerses = (lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
                
            document.body.appendChild(divToHoldFriends);
            divToHoldFriends.append(paraToHoldLyrics);
            paraToHoldLyrics.append(singularSongVerses);
        }

        

        
    })
})


