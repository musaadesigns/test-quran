

    function getRandomNumber() {

      let getNumber = function (min, max) {
          let getRandom = Math.floor((Math.random() * max) + min);
          while(getRandom > max || getRandom < min) {
            getRandom = Math.floor((Math.random() * max) + min);
          }
          return getRandom;
        }

      var min = document.getElementById("min").options[document.getElementById("min").selectedIndex].value;
      var max = document.getElementById("max").options[document.getElementById("max").selectedIndex].value;

      var generatedNum = getRandomNumber(min, max);

      var api = "http://sample-api/v1/#/" + generatedNum;

      var nextNumber = generatedNum + 1;
      var apiPlus = "http://sample-api/v1/#/" + nextNumber;

      console.log(min);
      console.log(max);
      console.log(generatedNum);
      console.log(api);
    };

    function revealNext() {
      console.log(api);
      console.log(apiPlus);

    };




  // }


  // function revealnext() {
  //   var apiPlus = "http://api.alquran.cloud/v1/ayah/" + ayah + 1;
  //
  //   // var ayahNext = ayah += 1 ;
  //
  //   console.log(ayah);
  //   console.log(ayahNext);
  //
  //
  //   console.log(api);
  //   console.log(apiPlus);
  //
  //   fetch(apiPlus)
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     console.log(data.data.number);
  //     const { text , surah , numberInSurah } = data.data;
  //
  //     // Set DOM elements from the API
  //     Verse.textContent = text;
  //     Surah.textContent = surah.englishName;
  //     SurahAyah.textContent = numberInSurah;
  //   });


// WINDOW LOAD CLOSING TAG
// })
