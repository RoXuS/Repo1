const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send(randomQuote);
})

app.get('/api/quotes/all', (req, res, next) => {
    res.send(quotes);
})

app.get('/api/quotes', (req, res, next) => {
    const searchQuote = quotes.filter(q => {
        const regex = new RegExp(`.*${req.query.person}*.`, 'gi');
        return regex.exec(q.person) !== null;
  })
  res.send(searchQuote);
})

app.post('/api/quotes/add', (req, res, next) => {
    const newQuote = {
        quote: req.query.quote,
        person: req.query.person,
        id: req.query.id
        };
        if (newQuote.quote && newQuote.person && newQuote.id) {
        quotes.push(newQuote);
        res.send({ quote: newQuote });
        } else {
        resgit.status(400).send();
        }
        });

app.listen(PORT, () => {
    console.log(`Your server is up and running on port ${PORT}`);
})