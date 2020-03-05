import { LitElement, html, css } from 'lit-element';

import { quoteStyle } from './styles.js';

class QuoteContainer extends LitElement {

  static get styles() {
    const mainStyle = css``;
    return [mainStyle, quoteStyle]
  }

  constructor() {
    super();
    this.quotes = [];
  }

  static get properties() {
    return {
      quotes: {
        type: Array,
      },
    };
  }

  render(){
    return html`

      <quote-menu></quote-menu>

      <div>
        ${this.quotes.map(quote => html`
          <div id="quoteDiv" class="quote">${quote.quote}</div>
        `)}
      </div>
    `;
  }

  async firstUpdated() {
    const quotesResponse = await fetch('http://localhost:4001/api/quotes/all');
    console.log(quotesResponse);
    if (quotesResponse.ok) {
      this.quotes = await quotesResponse.json();
    }
  }
}

customElements.define('quote-container', QuoteContainer);
