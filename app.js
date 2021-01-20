let friends = ["Jon", "Jamarcy", "B-Ry", "Gabe", "M. Little"];

// Outer loop to pick the friend
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i] + ":");

    let lines_of_code = 99;
    // Inner loop to iterate through the lyrics
    while (lines_of_code >= 2) {
        console.log(lines_of_code + " lines of code in the file, " + lines_of_code + " lines of code; " + friends[i] + " strikes one out, clears it all out...");
        lines_of_code--;
    }

    // This is the code for when there is only 1 line of code left
    console.log(lines_of_code + " line of code in the file, " + lines_of_code + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
}


