import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "5baf2o9bt204cc528f4b02b039af34cd";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Type a word"
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
