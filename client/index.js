const updateText = () => {
    const paragraphInput = document.getElementById('paragraphs')
    const sentencesInput = document.getElementById('sentences')
    const wordsInput = document.getElementById('words')

    const paragraphs = paragraphInput.value;
    const sentences = sentencesInput.value;
    const words = wordsInput.value;

    const generatedText = document.getElementById('generatedText');
    fetch(`http://localhost:5000/api/${paragraphs}/${sentences}/${words}`)
        .then(res => res.json())
        .then(data => { generatedText.innerHTML = data.text })
}

const generateButton = document.getElementById('generateButton')
generateButton.onclick = updateText