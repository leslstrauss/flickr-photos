// $(function() {
    $.ajax({
        type: "GET",
        url: "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=98a80bf27f25bb1381e9bea26b6282e5&per_page=500&format=json&nojsoncallback=1",
        dataType: "json",
        success: function (json) {
          var photos = json.photos.photo;
          $.each(photos, function(key, photo) {
            var farmID = photo.farm;
            var serverID = photo.server;
            var id = photo.id;
            var secret = photo.secret;
            var imageURL = 'https://farm' +
              farmID + '.staticflickr.com/' +
              serverID + '/' +
              id + '_' +
              secret + '.jpg';

            $('<img>')
              .attr('src', imageURL)
              .attr('alt', 'Image')
              .addClass('th')
              .appendTo('li');

            $('<a>')
            .attr('href', imageURL)
            .appendTo('li');
          });

        },
        error: function(xhr, status, error) {
          console.log(xhr);
          console.log(status);
          console.log(error);
        }
    });
// });
// url: "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=b944cc8b49d1fefb91be5009980232c0&format=json&nojsoncallback=1&auth_token=72157647854321898-cf20a8088a540415&api_sig=20332eae5cb39101438ea4d92c4b5323",

