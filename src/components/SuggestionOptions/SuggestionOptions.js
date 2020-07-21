import React from "react";

import "./SuggestionOptions.css";

const SuggestionOptions = (props) => {
  const options = [
    {
      text: "New York",
      handler: props.actionProvider.handleNewYorkList,
      id: 1,
    },
    {
      text: "New Orleans",
      handler: props.actionProvider.handleNewOrleansList,
      id: 2,
    },
    { text: "Trenton", 
      handler: props.actionProvider.handleTrentonList, 
      id: 3 
    },
    {
      text: "San Diego",
      handler: props.actionProvider.handleSanDiegoList,
      id: 4,
    },
    { text: "Dallas", 
      handler: props.actionProvider.handleDallasList, 
      id: 5 
    },
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
