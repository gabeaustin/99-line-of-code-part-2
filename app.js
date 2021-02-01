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
        const displayNamesOnScreen = document.createTextNode(friendsArray[i]); // keep
        const paraToHoldLyrics = document.createElement("p");
        const nameTitlesUppercase = document.createTextNode(friendsArray[i].toUpperCase() + ":");

        divToHoldFriends.className = "friend";
    
        document.body.appendChild(divToHoldFriends);
        h3WithFriendsName.appendChild(nameTitlesUppercase);
        divToHoldFriends.appendChild(h3WithFriendsName);
        

        let lines_of_code = 99;
        // Inner loop to iterate through the lyrics
        while (lines_of_code >= 2) {
            console.log(lines_of_code + " lines of code in the file, " + (lines_of_code - 1) + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out...");
            lines_of_code--;
        }
        // This is the code for when there is only 1 line of code left
        console.log(lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
        let songVerses = document.createTextNode(lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
    }
    
    for (let j = 0; j < friendsArray.length; j++) {
        // const displayNamesOnScreen = h3WithFriendsName.innerHTML = friendsArray[j]; // keep
        // console.log(displayNamesOnScreen);
        // const displayNamesOnScreen = document.createTextNode(friendsArray[j]);
        }
    })
})


