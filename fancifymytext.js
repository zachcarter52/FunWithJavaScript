// Font increase call
function fontSizeChange() {
    document.getElementById("textarea").style.fontSize= "24pt";
}

// Alert call
function alertCall() {
    alert("Hello World");
}

// Font Bold call
function makeFancy() {
    document.getElementById("textarea").style.fontWeight= "bold"; 
    document.getElementById("textarea").style.color = "blue"; 
    document.getElementById("textarea").style.textDecoration= "underline";
}

// undo bold call
function makeBoring(){
    document.getElementById("textarea").style.fontWeight= "normal";
    document.getElementById("textarea").style.color = "black"; 
    document.getElementById("textarea").style.textDecoration= "none";
}

// Moo call 
function moo() {
    const textArea = document.getElementById("textarea");
    let text = textArea.value;

    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (sentence.length === 0) continue;


        let words = sentence.split(" ");
        let lastIndex = words.length - 1;
        words[lastIndex] = words[lastIndex] + "-Moo";

        sentences[i] = words.join(" ");
    }

    let newText = sentences.join(". ");
    textArea.value = newText;
}
