const updateText = () => {
    const generatedText = document.getElementById('generatedText');
    const paragraphInput = document.getElementById('paragraphs');
    const sentencesInput = document.getElementById('sentences');
    const wordsInput = document.getElementById('words');

    const paragraphs = paragraphInput.value;
    const sentences = sentencesInput.value;
    const words = wordsInput.value;

    fetch(`http://localhost:5000/api/${paragraphs}/${sentences}/${words}`)
        .then(res => res.json())
        .then(data => { generatedText.innerHTML = data.text })
}

const copyToClipboard = () => {
    const generatedText = document.getElementById('generatedText');
    window.navigator.clipboard.writeText(generatedText.innerText);
}

const generateButton = document.getElementById('generateButton');
generateButton.onclick = updateText;

const copyButton = document.getElementById('copyButton');
copyButton.onclick = copyToClipboard;