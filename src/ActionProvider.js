class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Hi there! Welcome to SuggestionBot"
    );
    this.updateChatbotState(greetingMessage);
  }

  help() {
    const helpMessage = this.createChatBotMessage(
      "Need some help? Please click on the city names to get started!"
    );
    this.updateChatbotState(helpMessage);
  }

  handleNewYorkList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on New York:",
      {
        widget: "newyorkLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleNewOrleansList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on New Orleans:",
      {
        widget: "neworleansLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleTrentonList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Trenton:",
      {
        widget: "trentonLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleSanDiegoList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on San Diego:",
      {
        widget: "sandiegoLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleDallasList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Dallas:",
      {
        widget: "dallasLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
