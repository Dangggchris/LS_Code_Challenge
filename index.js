$(document).ready(function() {

  // Get tomorrow's date
  let date = moment(new Date()).add(1,'days').format("YYYY-MM-DD");

  // TV Maze API
  var queryURL = "https://api.tvmaze.com/schedule?country=US&date=" + date; 

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {

    for (let i = 0; i < 24; i++) {
      if (response[i].show.image === null) {
        break;
      }
      else {
        let img = '<div class="slide"><img src= "' + response[i].show.image.medium + '"width="125px" height="200px"></div>'
        $('.multiple-items').slick('slickAdd', img);
      }
    }
  })

  // Initialize Carousel
  function slickCarousel () {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true
    });
  }
  
  slickCarousel();
})