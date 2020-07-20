import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import SuggestionOptions from "./components/SuggestionOptions/SuggestionOptions";

const config = {
  botName: "SuggestionBot",
  initialMessages: [
      createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
          widget: "suggestionOptions",
      }),
    ],
  customStyles: {
      botMessageBox: {
          backgroundColor: "#376B7E",
      },
      chatButton: {
          backgroundColor: "#376B7E",
      },
  },
  widgets: [
      {
          widgetName: "suggestionOptions",
          widgetFunc: (props) => <SuggestionOptions {...props} />,
      }
  ]
};

export default config;
