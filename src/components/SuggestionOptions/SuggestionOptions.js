import React from "react";

import "./SuggestionOptions.css";

const SuggestionOptions = (props) => {
    const options = [
        { text: "Option 1", handler: () => {}, id: 1 },
        { text: "Option 1", handler: () => {}, id: 2 },
        { text: "Option 1", handler: () => {}, id: 3 },
        { text: "Option 1", handler: () => {}, id: 4 },
        { text: "Option 1", handler: () => {}, id: 5 }
    ];

    const optionsMarkup = options.map((option) => (
        <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;

};

export default SuggestionOptions;
