document.addEventListener("DOMContentLoaded", function() {
    let divToHoldButton = document.createElement("div");
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Sing!");

    divToHoldButton.style.border = "1px solid salmonpink";
    button.appendChild(buttonText);
    document.body.appendChild(button);
    button.body.appendChild(buttonText);

    button.addEventListener("click", function() {
        // console.log("clicked");

        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode("Friend 1 - Test");
        h3.appendChild(h3Text);
        document.body.appendChild(h3);
    })


    // let divToHoldHeader = document.createElement("div");
    // let headerText = document.createTextNode("Friends");
    
    
    
    // button.appendChild(buttonText);
    // document.body.appendChild(button);
    // document.body.appendChild(buttonText);

    // divToHoldHeader.appendChild(headerText);
    // divToHoldButton.appendChild(button);
    // button.appendChild(buttonText);


//     button.addEventListener("click", function() {
//         let friends = ["Jon", "Jamarcy", "B-Ry", "Gabe", "M. Little"];

//         // Outer loop to pick the friend
//         for (let i = 0; i < friends.length; i++) {
//             console.log(friends[i].toUpperCase() + ":");

//             let lines_of_code = 99;
//             // Inner loop to iterate through the lyrics
//             while (lines_of_code >= 2) {
//                 console.log(lines_of_code + " lines of code in the file, " + (lines_of_code - 1) + " lines of code; " + friends[i] + " strikes one out, clears it all out...");
//                 lines_of_code--;
//             }

//             // This is the code for when there is only 1 line of code left
//             console.log(lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
//         }
// }
})

// )


