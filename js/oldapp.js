// window.addEventListener("load", () => {
  var Verse = document.querySelector('.verse');
  var Surah = document.querySelector('.surah');
  var SurahAyah = document.querySelector('.surah-ayah');

    // document.getElementById("getquote").addEventListener("click", getquote);
    // document.getElementById("revealnext").addEventListener("click", revealnext);


    function getquote() {

      // document.getElementById("revealnext").addEventListener("click", revealNext);


      let getAyah = function (minJuz, maxJuz) {
          let getRandom = Math.floor((Math.random() * maxJuz) + minJuz);
          while(getRandom > maxJuz || getRandom < minJuz) {
            getRandom = Math.floor((Math.random() * maxJuz) + minJuz);
          }
          return getRandom;
        }

      var minJuz = document.getElementById("min-juz").options[document.getElementById("min-juz").selectedIndex].value;
      var maxJuz = document.getElementById("max-juz").options[document.getElementById("max-juz").selectedIndex].value;

      var ayah = getAyah(minJuz, maxJuz);

      var api = "http://api.alquran.cloud/v1/ayah/" + ayah;

      var ayahNext = ayah + 1;
      var apiPlus = "http://api.alquran.cloud/v1/ayah/" + ayahNext;

      console.log(minJuz);
      console.log(maxJuz);
      console.log(ayah);
      console.log(api);

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        // console.log(data.data.number);
        const { text , surah , numberInSurah } = data.data;

        // Set DOM elements from the API
        Verse.textContent = text;
        Surah.textContent = surah.englishName;
        SurahAyah.textContent = numberInSurah;
      });
    };

    function increment() {
        generatedRandom = parseInt(generatedRandom) + 1;
        updateAPI(generatedRandom);
    }
    function updateAPI(num) {
        apiUrl = 'http://sample-api/v1/#/' + num;
        console.log(apiUrl);
    }

    function revealNext() {
      console.log(api);
      console.log(apiPlus);

      fetch(apiPlus)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(data.data.number);
        const { text , surah , numberInSurah } = data.data;

        // Set DOM elements from the API
        Verse.textContent = text;
        Surah.textContent = surah.englishName;
        SurahAyah.textContent = numberInSurah;
      });
    };

      // function revealNext() {
      //
      //
      //
      //   // // var ayahNext = ayah += 1 ;
      //   //
      //   // console.log(ayah);
      //   // console.log(ayahNext);
      //   //
      //   //
      //
      // };









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
