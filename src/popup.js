'use strict';

import readLocalStorage from '../utils/readLocalStorage';
import './popup.css';

(() => {
  chrome.runtime.sendMessage({
    type: 'START',
  });

  /* Adding an event listener to the input element with id inputTimeClipYoutube. */
  document.addEventListener('DOMContentLoaded', function () {
    document
      .getElementById('inputTimeClipYoutube')
      .addEventListener('change', changeTimestampClipYoutube);
  });

  const changeTimestampClipYoutube = async () => {
    /* Getting the videoId and videoTimestamp from the local storage. */
    const timestamp = await readLocalStorage('videoTimestamp');
    const videoId = await readLocalStorage('videoId');
    const videoEnd = parseInt(
      document.getElementById('inputTimeClipYoutube').value
    );

    /* Checking if the end time is less than or equal to 0. If it is, it will alert the user that the end
 time must be greater than 0. */
    if (videoEnd <= 0) {
      alert('The end time must be greater than 0');
      return;
    }

    /* Setting the innerHTML of the element with id urlClipYoutube to the url of the youtube video. */
    document.getElementById(
      'urlClipYoutube'
    ).innerHTML = `https://www.youtube.com/embed/${videoId}?start=${timestamp}&end=${
      timestamp + videoEnd
    }&autoplay=1`;
  };
  chrome.runtime.onMessage.addListener((request) => {
    /* Checking if the message is something_completed. */
    if (request.msg === 'something_completed') {
      const videoId = request.data.url.split('=')[1];
      const videoTimestamp = request.data.time;

      /* Setting the innerHTML of the element with id urlClipYoutube to the url of the youtube video. */
      document.getElementById(
        'urlClipYoutube'
      ).innerHTML = `https://www.youtube.com/embed/${videoId}?start=${videoTimestamp}&end=${
        videoTimestamp + 10
      }&autoplay=1`;

      /* Setting the videoId and videoTimestamp in the local storage. */
      chrome.storage.local.set({
        videoId,
      });
      chrome.storage.local.set({
        videoTimestamp,
      });
    }
  });
})();
