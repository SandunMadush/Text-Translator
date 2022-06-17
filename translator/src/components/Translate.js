import React, { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TranslateIcon from "@mui/icons-material/Translate";

export default function Translate() {
  const [inputText, setInputText] = useState("");
  const [resultTest, setResultText] = useState("");

  const translateText = () => {
    setResultText(inputText);
  };

  return (
    <div>
      <div className="app-header">
        <h2 className="header">Text Translator</h2>
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
              aria-label=".form-select-sm example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
