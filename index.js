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
        let img = '<div class="slide"><img src= "' + response[i].show.image.medium + '"width="150px" height="200px"></div>'
        $('.multiple-items').slick('slickAdd', img);
      }
    }
  })

  // Initialize Carousel
  function slickCarousel () {
    // $('.multiple-items').slick({
    //   infinite: true,
    //   slidesToShow: 6,
    //   slidesToScroll: 1,
    //   arrows: true
    // });
    $('.multiple-items').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  
  slickCarousel();
})