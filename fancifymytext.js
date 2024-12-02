function applyStylesAndAlert() {
    const textArea = document.getElementById("textArea");
    const fancy = document.getElementById("fancy");

    textArea.style.fontWeight = fancy.checked ? "bold" : "normal";
    textArea.style.color = fancy.checked ? "blue" : "black";
    textArea.style.textDecoration = fancy.checked ? "underline" : "none";

    alert(`The style has been changed to: ${fancy.checked ? "FancyShmancy" : "BoringBetty"}`);
}

function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function makeTextMoo() {
    const textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(". ");
    
    sentences = sentences.map(sentence => {
        let words = sentence.split(" ");
        words[words.length - 1] += "-Moo";
        return words.join(" ");
    });
    
    textArea.value = sentences.join(". ");
}
