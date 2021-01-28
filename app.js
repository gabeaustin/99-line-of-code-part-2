document.addEventListener("DOMContentLoaded", function() { // line 35
    let divToHoldButton = document.createElement("div"); // created a div
    let button = document.createElement("button"); // put button in div
    let buttonText = document.createTextNode("Sing!"); // changed text of button

    document.body.appendChild(divToHoldButton); // allows div to display on screen
    divToHoldButton.appendChild(button); // allows button to display on screen
    divToHoldButton.style.border = "1px solid black"; // for testing only
    button.appendChild(buttonText); // allowed changed text of button to show


    button.addEventListener("click", function() { // line 34

    //     let h3 = document.createElement("h3");
    //     let h3Text = document.createTextNode("Friend 1 - Test"); // for testing only
    //     h3.appendChild(h3Text);
    //     document.body.appendChild(h3);

    let friends = ["Jon", "Jamarcy", "B-Ry", "Gabe", "M. Little"];

    // Outer loop to pick the friend
    for (let i = 0; i < friends.length; i++) { // line 33
        console.log(friends[i].toUpperCase() + ":");

    let lines_of_code = 99;
    // Inner loop to iterate through the lyrics
    while (lines_of_code >= 2) { // line 29
        console.log(lines_of_code + " lines of code in the file, " + (lines_of_code - 1) + " lines of code; " + friends[i] + " strikes one out, clears it all out...");
        lines_of_code--;
    }
    // This is the code for when there is only 1 line of code left
        console.log(lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
        }

    let divToHoldFriends = document.createElement("div");
    document.body.appendChild(divToHoldFriends);

    for (let j = 0; j < friends.length; j++) {
        divToHoldFriends.className = "friend";

        let h3WithFriendsName = document.createElement("h3");
        console.log(h3WithFriendsName.className = friends[j]);

    }


    // let divToHoldButton = document.createElement("div"); // created a div
    // let button = document.createElement("button"); // put button in div
    // let buttonText = document.createTextNode("Sing!"); // changed text of button

    // document.body.appendChild(divToHoldButton); // allows div to display on screen
    // divToHoldButton.appendChild(button); // allows button to display on screen
    // divToHoldButton.style.border = "1px solid black"; // for testing only
    // button.appendChild(buttonText); // allowed changed text of button to show
    })
})

