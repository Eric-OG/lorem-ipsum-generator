import { loremIpsum } from "./node_modules/lorem-ipsum/";

const generatedText = loremIpsum({
    count: paragraphsNum,                // Number of "words", "sentences", or "paragraphs"
    format: "plain",         // "plain" or "html"
    paragraphLowerBound: sentencesNum,  // Min. number of sentences per paragraph.
    paragraphUpperBound: sentencesNum,  // Max. number of sentences per paragarph.
    sentenceLowerBound: wordsNum,   // Min. number of words per sentence.
    sentenceUpperBound: wordsNum,  // Max. number of words per sentence.
    suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
    units: "paragraphs",      // paragraph(s), "sentence(s)", or "word(s)"
})

console.log(generatedText);