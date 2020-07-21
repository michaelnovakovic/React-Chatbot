class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("help")) {
      this.actionProvider.help();
    }

    if (lowerCaseMessage.includes("new york")) {
      this.actionProvider.handleNewYorkList();
    }

    if (lowerCaseMessage.includes("new orleans")) {
      this.actionProvider.handleNewOrleansList();
    }

    if (lowerCaseMessage.includes("trenton")) {
      this.actionProvider.handleTrentonList();
    }

    if (lowerCaseMessage.includes("san diego")) {
      this.actionProvider.handleSanDiegoList();
    }

    if (lowerCaseMessage.includes("dallas")) {
      this.actionProvider.handleDallasList();
    }
  }
}

export default MessageParser;
