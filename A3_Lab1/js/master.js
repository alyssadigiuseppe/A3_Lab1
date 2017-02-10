(function () {
  console.log('fired!');

  var name = document.querySelectorAll('.modelName'),
      price = document.querySelectorAll('.priceInfo'),
      details = document.querySelectorAll('.modelDetails'),
      blue = document.querySelector('#F55'),
      yellow = document.querySelector('#F56'),
      red = document.querySelector('#R58');

      function changeIt () {
        httpRequest = new XMLHttpRequest();
        //its a js api (virtual object) has properties and events
                if (!httpRequest) {
                  //if its too old it wont have the objecty built in
                  console.log('your browser sucks');
                  return false;
                }
                httpRequest.onreadystatechange = showInfo;
                //function that fires, everytime it fires run this function
                httpRequest.open('GET', 'includes/ajaxQuery.php' + '?model=' + this.id);
                //go retrieve this from the database, select from table where this matches. ? is a query parameter, php grabs what comes after it
                httpRequest.send();
      }

      function showInfo() {
      if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
        //parse stringified result
        var pokeData = JSON.parse(httpRequest.responseText);
        //
        name.firstChild.nodeValue = pokeData.pokeName;

        [].forEach.call(document.querySelectorAll('.hidden'), function(item) {
          item.classList.remove('hidden');
      });



      [].forEach.call(name, function(modName){
        modName.addEventListener('click', changeIt, false);
})();
