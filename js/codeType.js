var lastTypedIndex = 0;

const allCodes =
    [
        'if (fullCodeString.length >= lastTypedIndex - 1) { \n document.getElementById("codingArea").innerHTML += fullCodeString[i]; \n } else { \n continue; \n }',
    ];

var fullCodeString = "";

function getCodeString() {
    var finalString = "";

    if (fullCodeString == "") {
        // first initialize
        lastTypedIndex = -1;
        finalString = allCodes[Math.floor(Math.random() * allCodes.length)];
    } else if (lastTypedIndex == fullCodeString - 1) {
        lastTypedIndex = -1;
        finalString = allCodes[Math.floor(Math.random() * allCodes.length)];
    } else {
        finalString = fullCodeString;
    }

    return finalString;
}

function typeCode() {
    fullCodeString = getCodeString();

    if (fullCodeString == undefined) {
        throw new Error("Error retrieving code string.");
    }

    document.getElementById("codingArea").innerHTML = "";
    document.getElementById("codingArea").innerHTML = fullCodeString.slice(0, lastTypedIndex);

    for (var i = 0; i < 4; i++) {
        lastTypedIndex++;

        if (fullCodeString.length >= lastTypedIndex - 1) {
            document.getElementById("codingArea").innerHTML += fullCodeString.charAt(i);
        } else {
            continue;
        }
    }
}