import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Translate() {
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
              placeholder="Enter the text here..."
              style={{ width: 400 }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
