"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors = require('cors');
var lorem_ipsum_1 = require("lorem-ipsum");
var app = express_1.default();
app.use(cors());
app.get('/api/:paragraphs/:sentences/:words', function (req, res) {
    var paragraphs = parseInt(req.params.paragraphs);
    var sentences = parseInt(req.params.sentences);
    var words = parseInt(req.params.words);
    var generatedText = lorem_ipsum_1.loremIpsum({
        count: paragraphs,
        format: "plain",
        paragraphLowerBound: sentences,
        paragraphUpperBound: sentences,
        sentenceLowerBound: words,
        sentenceUpperBound: words,
        suffix: "\n",
        units: "paragraphs",
    });
    res.json({ text: generatedText });
});
app.get('/', function (req, res) {
    res.send('Hello');
});
app.listen(5000, function () { console.log("Server running"); });
