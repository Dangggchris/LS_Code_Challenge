let date = moment(new Date()).add(1,'days').format("YYYY-MM-DD");

  // TV Maze API

  const imgList = {};
  var queryURL = "http://api.tvmaze.com/schedule?country=US&date=" + date; 

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {

      for (let i = 0; i < 25; i++) {

        if (response[i].show.image === null) {
          break;
        }
        else {
          imgList[i] = response[i].show.image.medium;
        }
    
    }
})

console.log(imgList)

$(document).ready(function() {

  function slickCarousel () {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 4
    });
  }

  slickCarousel();

  
})

        // console.log(i + 1);
        // console.log(response[i].show.image);
        // console.log(response[i].show.name);
        // console.log(response[i].show.image);