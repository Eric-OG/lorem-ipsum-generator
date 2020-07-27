import express from 'express';
const cors = require('cors');
import { loremIpsum } from 'lorem-ipsum';

const app = express();

app.use(cors());

app.get('/api/:paragraphs/:sentences/:words', (req, res) => {
    const paragraphs = parseInt(req.params.paragraphs);
    const sentences = parseInt(req.params.sentences);
    const words = parseInt(req.params.words)
    const generatedText = loremIpsum({
        count: paragraphs,                // Number of "words", "sentences", or "paragraphs"
        format: "plain",         // "plain" or "html"
        paragraphLowerBound: sentences,  // Min. number of sentences per paragraph.
        paragraphUpperBound: sentences,  // Max. number of sentences per paragarph.
        sentenceLowerBound: words,   // Min. number of words per sentence.
        sentenceUpperBound: words,  // Max. number of words per sentence.
        suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
        units: "paragraphs",      // paragraph(s), "sentence(s)", or "word(s)"
    })

    res.json({ text: generatedText });
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(5000, () => { console.log("Server running") });