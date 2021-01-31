const friendsArray = ["Jon", "Jamarcy", "B-Ry", "Gabe", "M. Little"];

document.addEventListener("DOMContentLoaded", function () {
    const divToHoldButton = document.createElement("div"); // created a div
    const button = document.createElement("button"); // put button in div
    button.textContent = "Sing!"

    document.body.appendChild(divToHoldButton); // allows div to display on screen
    divToHoldButton.appendChild(button); // allows button to display on screen

    button.addEventListener("click", function () {
    // Outer loop to pick the friend
    for (let i = 0; i < friendsArray.length; i++) {
        console.log(friendsArray[i].toUpperCase() + ":");

        let lines_of_code = 99;
        // Inner loop to iterate through the lyrics
        while (lines_of_code >= 2) {
            console.log(lines_of_code + " lines of code in the file, " + (lines_of_code - 1) + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out...");
            lines_of_code--;
        }
        // This is the code for when there is only 1 line of code left
        console.log(lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
    }
    
    for (let j = 0; j < friendsArray.length; j++) {
        const divToHoldFriends = document.createElement("div");
        document.body.appendChild(divToHoldFriends);

        divToHoldFriends.className = "friend";

        // let h3WithFriendsName = document.createElement("h3");
        // console.log(h3WithFriendsName.className = friendsArray[j]);
    }




    })


})


