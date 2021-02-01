const friendsArray = ["Jon", "Jamarcy", "B-Ry", "Gabe", "M. Little"];

document.addEventListener("DOMContentLoaded", function () {
    const divToHoldButton = document.createElement("div"); // created a div
    const button = document.createElement("button"); // put button in div
    const buttonText = document.createTextNode("Sing!");

    // const paragraphToHoldLyrics = document.createElement("p");
    // const paraTextNode = document.createTextNode("Para");
    // paragraphToHoldLyrics.appendChild(paraTextNode);
    

    document.body.appendChild(divToHoldButton); // allows div to display on screen
    divToHoldButton.appendChild(button); // allows button to display on screen
    button.appendChild(buttonText);

    button.addEventListener("click", function () {


    // Outer loop to pick the friend
    for (let i = 0; i < friendsArray.length; i++) {
        const divToHoldFriends = document.createElement("div");
        const h3WithFriendsName = document.createElement("h3");
        const displayNamesOnScreen = document.createTextNode(friendsArray[i]); // keep
    
        divToHoldFriends.className = "friend";
    
        document.body.appendChild(divToHoldFriends);
        divToHoldFriends.appendChild(h3WithFriendsName);
        h3WithFriendsName.appendChild(displayNamesOnScreen);




        console.log(friendsArray[i].toUpperCase() + ":");

        let lines_of_code = 99;
        // Inner loop to iterate through the lyrics
        while (lines_of_code >= 2) {
            // console.log(lines_of_code + " lines of code in the file, " + (lines_of_code - 1) + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out...");
            // document.createTextNode(lines_of_code + " lines of code in the file, " + (lines_of_code - 1) + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out...");
            lines_of_code--;
        }
        // This is the code for when there is only 1 line of code left
        console.log(lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
        document.createTextNode(lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
    }
    
    for (let j = 0; j < friendsArray.length; j++) {
        const displayNamesOnScreen = h3WithFriendsName.innerHTML = friendsArray[j]; // keep
        console.log(displayNamesOnScreen);
        // const displayNamesOnScreen = document.createTextNode(friendsArray[j]);


        

        

        }
    })
})


