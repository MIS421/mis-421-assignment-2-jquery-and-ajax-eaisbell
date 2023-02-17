var len;
var results = '';
var date = new Date(); 
var hours = date.GetHours(); 
var mins = date.getMinutes(); 
if (hours > 12) {
    hours = '0' + (hours - 12);
}
if (mins < 10) {
    mins = '0' + (mins);
}
var time = hours + ':' + mins;


function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "44e79b7b12984082aa8c10ae02079350");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function search(){
    apiSearch();
}

function BackgroundChange() {
    document.body.style.backgroundImage = "url('https://cdn.jacksonholenet.com/images/content/426_rR5a2_Moulton_Barn_in_Grand_Teton_National_Park_lg.jpg')";
}

function showTime() {
    $('#time').html('<p class = "text">' + time + '</p>'); 

    $('#time').css("visibility", "visible"); 
}

function timeShift() {
    $('#time').dialog();
}

function getLucky() {

}