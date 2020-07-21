import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import SuggestionOptions from "./components/SuggestionOptions/SuggestionOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "VacationBot",
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm here to help. Where are you looking to visit?",
      {
        widget: "suggestionOptions",
      }
    ),
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
    },
    {
      widgetName: "newyorkLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "New York State Website",
            url: "https://www1.nyc.gov/",
            id: 1,
          },
          {
            text: "Official New York City Guide",
            url: "https://www.nycgo.com/",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "neworleansLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Offical New Orleans Website",
            url: "https://nola.gov/",
            id: 1,
          },
          {
            text: "Visit New Orleans",
            url: "https://www.neworleans.com/",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "trentonLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Offical Trenton Website",
            url: "https://www.trentonnj.org/",
            id: 1,
          },
          {
            text: "11 Things to Know about Trenton",
            url:
              "https://theculturetrip.com/north-america/usa/new-jersey/articles/11-things-to-know-before-visiting-trenton-nj/",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "sandiegoLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Offical San Diego Website",
            url: "https://www.sandiego.gov/",
            id: 1,
          },
          {
            text: "Explore San Diego",
            url: "https://www.sandiego.org/explore.aspx",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "dallasLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Offical Dallas Website",
            url: "https://dallascityhall.com/Pages/default.aspx/",
            id: 1,
          },
          {
            text: "Visit Dallas",
            url: "https://www.visitdallas.com/",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
