"use client";

import React, { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // choose the theme you like
import "prismjs/components/prism-javascript"; // for JS syntax highlighting
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, Toaster } from "react-hot-toast";
import RecordAudio from "./RecordAudio";

const CounterComponent = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const [isCopied, setIsCopied] = useState(false);

  const [audioFile, setAudioFile] = useState<File | undefined>(undefined);


  const handleCopy = () => {
    setIsCopied(true);
    toast.success("Code copied to clipboard!");
  };

  const handleCopyLeave = () => {
    setIsCopied(false);
  };


  const codeString = `import React from "react";
import {RecordAudio} from "react-microphone-recorder";

const RecordAudio: React.FC = () => {
    const [audioFile, setAudioFile] = useState<File | undefined>(undefined);
  
    return (
      <div className="flex flex-col items-center w-1/2 mx-auto">
        <RecordAudio setAudioFile={setAudioFile} />
      </div>
    );
  };
  
export default RecordAudio;
  `;
  return (
    <>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "preview" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`tab ${activeTab === "code" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>
      {activeTab === "preview" ? (
        <div className="preview">
          <div className="w-1/2 mx-auto">
            <RecordAudio setAudioFile={setAudioFile} />
          </div>
        </div>
      ) : (
        <div className="relative">
          <pre className="language-javascript">
            <code
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  codeString,
                  Prism.languages.javascript,
                  "javascript"
                ),
              }}
            />
          </pre>
          <div className="absolute top-0 right-0 p-2">
            <CopyToClipboard text={codeString}>
              <button
                className="copy-btn"
                onClick={handleCopy}
                onMouseLeave={handleCopyLeave}
              >
                {isCopied ? "✔️" : "📋"}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default CounterComponent;
