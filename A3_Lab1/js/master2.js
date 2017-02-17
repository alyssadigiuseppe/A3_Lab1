(function() {
  var cars = document.querySelectorAll('.thumbInfo img'),
      modelN = document.querySelector('.modelName'),
      priceI = document.querySelector('.priceInfo'),
      modelD = document.querySelector('.modelDetails');

      function makeRequest() {
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
          var carData = JSON.parse(httpRequest.responseText);
          //
          cars.innerHTML = carData.thumbInfo;
          modelN.innerHTML = carData.modelName;
          priceI.innerHTML = carData.pricing;
          modelD.innerHTML = carData.modelDetails;

          [].forEach.call(document.querySelectorAll('.hidden'), function(item) {
            item.classList.remove('hidden');
        });

          /*critterImage.src = "images/" + pokeData.pokeImage + '.png';
          critterDesc.firstChild.nodeValue = pokeData.pokeDesc;
          habHeader.firstChild.nodeValue = pokeData.pokeName;
          critterHab.src = "images/" + pokeData.bgImage +'.jpg';*/

      }
    }

      //event handling
      [].forEach.call(cars, function(img) {
        img.addEventListener('click', makeRequest, false);
      })
})();
