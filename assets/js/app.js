'use strict';

$(document).ready(function() {
  var topics = [
    'quokka',
    'puppy',
    'kitten',
    'panda',
    'hippo',
    'dolphin',
    'elephant',
    'baby swan',
    'duckling',
    'polar bear cub'
  ];

  function addTopic() {
    event.preventDefault();
    var topic = $('#topic-input').val();
    topics.push(topic);
    $('#button-holder').empty();
    renderButtons();
  }

  $('#add').on('click', addTopic);

  function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
      var btn = $('<button>');
      btn.attr('id', topics[i]);
      btn.text(topics[i]);
      btn.on('click', getJson);
      $('#button-holder').append(btn);
    }
  }

  function getJson() {
    var searchTerm = $(this).attr('id');
    var limit = 10;
    var rating = 'G';
    var apiKey = 'Xon9MP7X2uR0jVetMBZoD8fQeb5hPodw';
    var queryURL =
      'https://api.giphy.com/v1/gifs/search?api_key=' +
      apiKey +
      '&q=' +
      searchTerm +
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

  function parseJson(response) {
    console.log('response');
    console.log(response.data);
  }

  function renderGifs() {
    $('#gif-holder').empty();
  }
  renderButtons();
});
