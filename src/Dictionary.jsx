import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhoto] = useState([]);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePictureResponse(response) {
    console.log(response);
    setPhoto(response.data.photos);
  }

  function search() {
    let apiKey = "5baf2o9bt204cc528f4b02b039af34cd";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pictureApiKey = "5baf2o9bt204cc528f4b02b039af34cd";
    let pictureUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pictureApiKey}`;

    axios.get(pictureUrl).then(handlePictureResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              placeholder="Type a word"
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">suggested words: book, chair, computer etc</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
