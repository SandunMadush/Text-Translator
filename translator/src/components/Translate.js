import React, { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import TranslateIcon from "@mui/icons-material/Translate";
import axios from "axios";

export default function Translate() {
  const [inputText, setInputText] = useState('');
  const [resultTest, setResultText] = useState('');
  const [detectLanguageKey, setdetectedLanguageKey] = useState('');
  const [languagesList, setLanguagesList] = useState([]);
  const [selectedLanguageKey, setLanguageKey] = useState('');
  const getLanguageSource = () => {
    axios.post('https://libretranslate.com/detect', {
        q: inputText
      })
      .then((response) => {
        setdetectedLanguageKey(response.data[0].language);
      });
  };
  useEffect(() => {
    axios.get('https://libretranslate.com/languages').then((response) => {
      setLanguagesList(response.data);
    });
    getLanguageSource()
  }, [inputText]);
  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value)
  }
  const translateText = () => {
    getLanguageSource();

    let data = {
        q : inputText,
        source: detectLanguageKey,
        target: selectedLanguageKey
    }
    axios.post("https://libretranslate.com/translate", data)
    .then((response) => {
        setResultText(response.data.translatedText)
    })
}
  return (
    <div>
      <div className="app-header">
        <h2 className="header">Text-Translator</h2>
      </div>

      <div className="app-body">
        <div>
          <form>
            <TextareaAutosize
              aria-label="empty textarea"
              minRows={3}
              placeholder="Enter the text here to translate..."
              style={{ width: 400 }}
              onChange={(e) => setInputText(e.target.value)}
            />
          </form>
          <form>
            <select
              class="form-select form-select-sm"
              className="language-select"
              aria-label=".form-select-sm example"
              onChange={languageKey}
            >
              <option>Please Select Language..</option>
              {languagesList.map((language) => {
                return <option value={language.code}>{language.name}</option>;
              })}
            </select>
          </form>
          <form>
            <TextareaAutosize
              aria-label="empty textarea"
              minRows={3}
              placeholder="Your result of translation..."
              style={{ width: 400 }}
              value={resultTest}
            />
          </form>
          <form>
            <Button
              variant="contained"
              startIcon={<TranslateIcon />}
              size="medium"
              color="success"
              onClick={translateText}
            >
              Translate
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
