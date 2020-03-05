import { css } from 'lit-element';

export const quoteStyle = css`
  body {
    background-color: #2e4a99;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;
  }

  h1 {
    text-align: center;
    font-weight: bold;
  }

  nav {
    width: 80%;
    max-width: 400px;
    display: flex;
    justify-content: center;
  }

  a {
    color: #fff;
  }

  nav a {
    margin: 10px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    margin: 5px;
    list-style: none;
  }

  input {
    font-size: 16px;
    padding: 10px;
  }

  button {
    margin: 5px;
    cursor: pointer;
    border: 2px solid #fff;
    background-color: #2e4a99;
    color: #fff;
    padding: 10px;
    font-size: 16px;
  }

  button:hover {
    background-color: #5788fa;
    transition: background-color 0.2s;
  }

  #quote-container {
    padding: 10px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .single-quote {
    padding: 10px;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }

  .attribution {
    width: 100%;
  }

  .quote-text {
    font-style: italic;
  }

  #quoteDiv {
    padding-bottom: 5px;
  }

  #authorDiv {
    padding-bottom: 5px;
  }

  #idDiv {
    width: 80%;
  }
`;
