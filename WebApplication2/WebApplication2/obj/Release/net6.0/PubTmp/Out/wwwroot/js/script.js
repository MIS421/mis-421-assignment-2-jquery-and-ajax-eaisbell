var len;
var results = '';


function timeNow() {
    var time = new Date();
    time = time.getHours() + ":" + time.getMinutes();
    $('#time').html('<p class = "text">' + time + '</p>');
    $('#time').css("visibility", "visible");
}

function timeView() {
    timeNow();
    $('#time').dialog();
}

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
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
        var Search = document.getElementById("searchResults"); 
        Search.style.visibility = "visible"; 

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




function backgroundChange() {
    document.body.style.backgroundImage = "url('https://cdn.zmescience.com/wp-content/uploads/2017/05/Mount_Alice_and_Temple_Crag_in_the_Sierra_Nevada_28U.S.29.jpg')";
}

function getLucky() {
    
}