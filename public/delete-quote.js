const deleteButton = document.getElementById('delete-button');
const deleteContainer = document.getElementById('delete-container');
const quoteContainer = document.getElementById('quote-container');

//render all quotes

const resetQuotes = () => {
    quoteContainer.innerHTML = '';
  }


const renderError = response => {
    quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
  <p>Code: ${response.status}</p>
  <p>${response.statusText}</p>`;
  }

const renderQuotes = (quotes = []) => {
    resetQuotes();
    if (quotes.length > 0) {
      quotes.forEach(quote => {
        const newQuote = document.createElement('div');
        newQuote.className = 'single-quote';
        newQuote.innerHTML = `<div id="checkboxes">
        <div>
          <div>
                <div id="quoteDiv">${quote.quote}</div>
                <div id="authorDiv">Author: ${quote.person}</div>
                <div id="idDiv">Id: ${quote.id}</div>
                <input type="checkbox">
          </div>
        </div>
      </div>`;
        quoteContainer.appendChild(newQuote);
      });
    } else {
      quoteContainer.innerHTML = '<p>Your request returned no quotes.</p>';
    }
  }

const renderAllQuotes = () => {
    fetch('/api/quotes/all')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then(response => {
      renderQuotes(response);
    });
  };

renderAllQuotes();
