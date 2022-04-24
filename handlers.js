/* eslint-disable import/prefer-default-export */
const speechOutput = document.querySelector('.speechOutput');

function logWords(results) {
  speechOutput.innerText = results[results.length - 1][0].transcript;
}

export function handleResult(event) {
  logWords(event.results);
}
