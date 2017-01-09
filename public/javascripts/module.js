$(document).ready(function() {
    $.get("/templates/events").then((eventInfo) => {
        $("#event-info").html(eventInfo)
    }).catch(error => console.error);

    $.get("/templates/news").then((newsInfos) => {
        $("#news-info").html(newsInfos)
    }).catch(error => console.error);

    navigator.geolocation.getCurrentPosition(function(result) {
      console.log(result);
      let xCoord = result.coords.latitude;
      let yCoord = result.coords.longitude;
      $.get(`/templates/maps?xCoord=${xCoord}&yCoord=${yCoord}`).then((mapInfos) => {
          $("#map-info").html(mapInfos)
      }).catch(error => console.error);
    })


    $.get("/templates/sports").then((sportsInfo) => {
        $("#sports-info").html(sportsInfo)
    }).catch(error => console.error);
})
