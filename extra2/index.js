function Magic8Ball() {
    possibleMessages = ["Sorry, I'm out of my depth", "I would rather not answer", "Excuse me?!", "Absolutely", "Yes, that's right", "Follow your heart", "Certainly", "I would love that for you!", "It seems like it"]
    value = Math.random() * possibleMessages.length;
    indexValue = Math.floor(value);
    return possibleMessages[indexValue];
}

console.log(Magic8Ball())