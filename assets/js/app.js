'use strict';

$(document).ready(function() {
  var topic;

  $('#add').on('click', renderButton);

  function renderButton() {
    event.preventDefault();
    topic = $('#topic-input').val();

    console.log('topic: ' + topic);
    var btn = $('<button>');
    btn.attr('id', topic);
    btn.text(topic);
    btn.on('click', getJson);
    $('#button-holder').append(btn);
  }

  function getJson() {
    // var searchTerm = $('#topic-input').val();
    var limit = 10;
    var rating = 'G';
    var apiKey = 'Xon9MP7X2uR0jVetMBZoD8fQeb5hPodw';
    var queryURL =
      'https://api.giphy.com/v1/gifs/search?api_key=' +
      apiKey +
      '&q=' +
      topic +
      '&limit=' +
      limit +
      '&offset=0&rating=' +
      rating +
      '&lang=en';

    $.ajax({
      url: queryURL,
      method: 'GET'
    })
      .then(parseJson)
      .then(renderGifs)
      .catch(function(error) {
        console.log(error);
      });
  }

  function renderGifs() {
    // var gif = $('<img>');
  }

  function dummyFunction() {
    console.log($(this).attr('id'));
  }

  function parseJson(response) {
    console.log('response');
    console.log(response);
  }

  // getJson();
});
