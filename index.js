/* eslint-disable max-len */
import { handleResult } from './handlers.js';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  // see if their browser supports this
  if (!('SpeechRecognition' in window)) { // checks for such property
    console.log('Sorry. Your browser does not support speech recognition currently.');
    return;
  }
  console.log('Starting...');
  // make a new speech reco
  const recognition = new SpeechRecognition();
  recognition.continuous = true; // whether or not to keep looking for it or stop once it has recognized some speech. true means keep looking.
  recognition.interimResults = true; // gives results while still speaking
  recognition.onresult = handleResult; // onresult is like the event listener
  recognition.start();
}

start();
