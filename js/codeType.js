var lastTypedIndex = 0;

var allCodes =
    [
        "",
        "",
        ""
    ];

var fullCodeString = "";

function getCodeString() {
    var finalString = "";

    if (fullCodeString == "") {
        // first initialize
        lastTypedIndex = -1;
        finalString = allCodes[Math.random(0, allCodes.length - 1)];
    } else if (lastTypedIndex == fullCodeString - 1) {
        lastTypedIndex = -1;
        finalString = allCodes[Math.random(0, allCodes.length - 1)];
    } else {
        finalString = fullCodeString;
    }

    return finalString;
}

function typeCode() {
    fullCodeString = getCodeString();

    for (var i = 0; i < 4; i++) {
        lastTypedIndex++;

        if (fullCodeString.length >= lastTypedIndex - 1) {

        }
    }
}