function handleFirstTab(e) {
  if (e.keyCode === 9) { // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}

window.addEventListener('keydown', handleFirstTab);

// $('#menu-trigger').click(function () {
//   $('.overlay').addClass('active');
//
//   $('#slide-menu').toggleClass('active');
//         // $('#slide-menu').slideOut(300);
// });
// $('#menu-close-trigger').click(function () {
//         $('#slide-menu').toggleClass('active');
//         // $('#slide-menu').slideOut(300);
// });

$(function() {
  $("#menu-trigger").on("click", function(e) {
    // $('.overlay').addClass('active');
    $('#slide-menu').addClass('active');
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is("#slide-menu") === false) {
      $('#slide-menu').removeClass('active');
      // $('.overlay').removeClass('active');
    }
  });
});

$('#menu-close-trigger').click(function() {
  $('#slide-menu').removeClass('active');
  // $('.overlay').removeClass('active');
});

$(document).ready(function() {
  console.log('ready');
  /*Dropdown Menu*/
  $('.dropdown1').click(function() {
    console.log('1clicked');
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).parents('.dropdown-container').find('.dropdown1-menu').slideToggle(300);
  });
  $('.dropdown1').focusout(function() {
    $(this).removeClass('active');
    $(this).parents('.dropdown-container').find('.dropdown1-menu').slideUp(300);
  });
  $('.dropdown-container .dropdown1-menu li').click(function() {
    $(this).parents('.dropdown-container').find('span').text($(this).text());
    $(this).parents('.dropdown-container').find('input').attr('value', $(this).attr('id'));
    $(this).parents('.dropdown-container').find('.dropdown1-menu').slideUp(300);

    var val = $(this).parents('.dropdown-container').find('input').val();
    console.log(val);

    var xyz = 'http://api.alquran.cloud/v1/quran/quran-uthmani';

    // var apiSurah =


    fetch(xyz)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const surahs = data.data.surahs;

        // console.log(data);
        // console.log(data.data.surahs);
        // console.log(data.data.surahs[0].englishName);
        // console.log(data.data.surahs[0].ayahs[0].number);
        // console.log(data.data.surahs[0].ayahs[0].text);
        // console.log(data.data.surahs[1].ayahs[0].number);
        // console.log(data.data.surahs[1].ayahs.length - 1);
        // console.log(data.data.surahs[1].ayahs[data.data.surahs[1].ayahs.length - 1].number);
        // console.log(surahs[1].ayahs[data.data.surahs[1].ayahs.length - 1].number);
        // console.log(surahs[1].ayahs[surahs[1].ayahs.length - 1].number);
        // console.log(surahs[0].ayahs[surahs[0].ayahs.length - 1].number);

        // const {text, surah, number, numberInSurah, juz, page, manzil, hizbQuarter, ruku, sajda} = data.data;


        // var surah1 =

        if (val == "juz") {


          // #min
          $('.dropdown2 .select span').html('From');
          $('.dropdown2-menu').empty();
          // $('.dropdown2-menu').append('<input type="text" placeholder="Search.." id="myInput" value="" onkeyup="filterFunctionFrom()">');
          $(".dropdown2-menu").html('<li value="1">Juz 1</li><li value="149">Juz 2</li><li value="260">Juz 3</li><li value="386">Juz 4</li><li value="517">Juz 5</li><li value="641">Juz 6</li><li value="751">Juz 7</li><li value="900">Juz 8</li><li value="1042">Juz 9</li><li value="1201">Juz 10</li><li value="1328">Juz 11</li><li value="1479">Juz 12</li><li value="1649">Juz 13</li><li value="1803">Juz 14</li><li value="2030">Juz 15</li><li value="2215">Juz 16</li><li value="2484">Juz 17</li><li value="2674">Juz 18</li><li value="2876">Juz 19</li><li value="3215">Juz 20</li><li value="3386">Juz 21</li><li value="3564">Juz 22</li><li value="3733">Juz 23</li><li value="4090">Juz 24</li><li value="4265">Juz 25</li><li value="4511">Juz 26</li><li value="4706">Juz 27</li><li value="5105">Juz 28</li><li value="5242">Juz 29</li><li value="5673">Juz 30</li>');

          // #max
          $('.dropdown3 .select span').html('To');
          $('.dropdown3-menu').empty();
          // $('.dropdown23-menu').append('<input type="text" placeholder="Search.." id="myInput3" value="" onkeyup="filterFunctionFrom()">');
          $(".dropdown3-menu").html('<li value="148">Juz 1</li><li value="259">Juz 2</li><li value="516">Juz 4</li><li value="640">Juz 5</li><li value="750">Juz 6</li><li value="899">Juz 7</li><li value="1041">Juz 8</li><li value="1200">Juz 9</li><li value="1327">Juz 10</li><li value="1478">Juz 11</li><li value="1648">Juz 12</li><li value="1802">Juz 13</li><li value="2029">Juz 14</li><li value="2214">Juz 15</li><li value="2483">Juz 16</li><li value="2673">Juz 17</li><li value="2875">Juz 18</li><li value="3214">Juz 19</li><li value="3385">Juz 20</li><li value="3563">Juz 21</li><li value="3732">Juz 22</li><li value="4089">Juz 23</li><li value="4264">Juz 24</li><li value="4510">Juz 25</li><li value="4705">Juz 26</li><li value="5104">Juz 27</li><li value="5241">Juz 28</li><li value="5672">Juz 29</li><li value="6236">Juz 30</li>');

        } else if (val == "surahs") {

          $('.dropdown2 .select span').html('From');
          $('.dropdown2-menu').empty();
          // $('.dropdown2-menu').append('<input type="text" placeholder="Search.." id="myInput" value="" onkeyup="filterFunctionFrom()">');


          console.log('changing dropdown 2 menu');
          data.data.surahs.forEach(function(items) {

            // var $search = $('<input type="text" placeholder="search" id="searchInput" onkeyup="filterFunction()">');
            var $surahLi = $('<li class="clickable" value="' + items.ayahs[0].number + '">' + items.englishName + ' - ' + items.name + '</li>');

            // $('.dropdown2-menu').append($search);
            $('.dropdown2-menu').append($surahLi);

          });


          $('.dropdown3 .select span').html('To');
          $('.dropdown3-menu').empty();
          // $('.dropdown3-menu').append('<input type="text" placeholder="Search.." id="myInput3" value="" onkeyup="filterFunctionTo()">');

          console.log('changing dropdown 3 menu');
          data.data.surahs.forEach(function(items) {

            var $surahLi = $('<li value="' + items.ayahs[items
              .ayahs.length - 1].number + '">' + items.englishName + ' - ' + items.name + '</li>');

            $('.dropdown3-menu').append($surahLi);
            // $('.dropdown3-menu li')[0].attr('tabindex','0');
            // $('.dropdown3-menu li')[1].attr('tabindex','-1');

          });
        }

      });

  });


  //   $(document).keydown(
  //       function(e)
  //       {
  //           if (e.keyCode == 40) {
  //
  //             if ($('.dropdown2').hasClass('active')) {
  //               console.log('focus');
  //               $(".dropdown2-menu li").focus();
  //               console.log('focus moved');
  //             }
  //
  //
  //           }
  //           if (e.keyCode == 38) {
  //               $(".dropdown-container li:focus").prev().focus();
  //
  //           }
  //       }
  //   );
  //
  // });

});



$('.dropdown2').click(function() {
  $(this).addClass('active');
  $('.dropdown2-menu').slideDown(300);

  $('.dropdown-container .dropdown2-menu li').unbind().click(function() {
    $(this).parents('.dropdown-container').find('span').text($(this).text());
    console.log($(this).text() + 'clicked');
    $(this).parents('.dropdown-container').find('input.hidden-value').attr('value', $(this).attr('value'));
    $(this).parents('.dropdown-container').find('.search input.search-input').val($(this).text());
    console.log('value is ' + $(this).parents('.dropdown-container').find('input.hidden-value').val());
    $(this).parents('.dropdown-container').find('.dropdown2-menu').slideUp(300);


  });


  // Get all the <li> elements into a collection
  var listItems = $(".dropdown2-menu .clickable");

  // Set up a counter to keep track of which <li> is selected
  var countClickable = $(".dropdown2-menu .clickable").length;
  console.log(countClickable);
  var ind = listItems.index();
  console.log(ind);
  var currentLI = 0;
  // var currentLI = ind;

  // Initialize first li as the selected (focused) one:

  // Set up a key event handler for the document
  document.addEventListener("keydown", function(event) {
    // Check for up/down key presses
    switch (event.keyCode) {
      case 38: // Up arrow
        // Remove the highlighting from the previous element
        listItems[currentLI].classList.remove("highlight");

        currentLI = currentLI > 0 ? --currentLI : 0; // Decrease the counter
        listItems[currentLI].classList.add("highlight"); // Highlight the new element
        break;
      case 40: // Down arrow
        console.log(countClickable);
        console.log(ind);
        // Remove the highlighting from the previous element
        // listItems[currentLI].classList.remove("highlight");
        listItems[currentLI].classList.add("highlight", "current");
        console.log(listItems.length);
        $('.dropdown2-menu .clickable').removeClass("highlight");
        console.log(listItems.length);
        console.log(currentLI);
        console.log(listItems[currentLI]);
        currentLI = currentLI < listItems.length - 1 ? ++currentLI : listItems.length - 1; // Increase counter
        console.log(currentLI);
        listItems[currentLI].classList.add("highlight"); // Highlight the new element
        break;
      case 13: // Enter Key

        listItems[currentLI].click();
        // Remove the highlighting from the previous element
        listItems[currentLI].classList.remove("highlight");
        //
        // currentLI = currentLI < listItems.length-1 ? ++currentLI : listItems.length-1; // Increase counter
        // listItems[currentLI].classList.add("highlight");       // Highlight the new element
        break;
    }
  });




  // $(document).keydown(
  //     function(e)
  //     {
  //         if (e.keyCode == 40) {
  //             $('.dropdown2').next('.dropdown2-menu').children('li:first').focus();
  //             // $(".dropdown2-menu li:first").focus();
  //             console.log('focus moved');
  //
  //             if (e.keyCode == 40 && $(".dropdown2-menu li:focus") ) {
  //               $(".dropdown2-menu li:focus").next().focus();
  //             }
  //           // } else if (e.keyCode == 38) {
  //           //   $(".dropdown-container li:focus").prev().focus();
  //           //
  //         }
  //     }
  // );

});



$('.dropdown2').focusout(function() {
  $(this).removeClass('active');
  $(this).parents('.dropdown-container').find('.dropdown2-menu').slideUp(300);
  console.log('slideup');
});


$('.dropdown3').click(function() {
  $(this).addClass('active');
  $('.dropdown3-menu').slideToggle(300);


  $('.dropdown-container .dropdown3-menu li').unbind().click(function() {
    $(this).parents('.dropdown-container').find('span').text($(this).text());
    console.log($(this).text() + 'clicked');
    $(this).parents('.dropdown-container').find('input.hidden-value').attr('value', $(this).attr('value'));
    $(this).parents('.dropdown-container').find('.search input.search-input').val($(this).text());
    console.log('value is ' + $(this).parents('.dropdown-container').find('input.hidden-value').val());
    // console.log($(this).parents('.dropdown-container').find('.search input.search-input').val($(this).text()));
    $(this).parents('.dropdown-container').find('.dropdown3-menu').slideUp(300);


  });

});

$('.dropdown3').focusout(function() {
  $(this).removeClass('active');
  $(this).parents('.dropdown-container').find('.dropdown3-menu').slideUp(300);
  console.log('slideup');
});

// $('.dropdown2').click(function () {
//
//     $(this).attr('tabindex', 2).focus();
//     $(this).toggleClass('active');
//     // $(this).find('.dropdown2-menu').slideToggle(300);
//     // console.log('slidetoggle dropdown2');
//     $(this).find('.dropdown2-menu').slideDown(300);
//     console.log('slide down');
//
//
//     $('.dropdown2 .dropdown2-menu li').unbind().click(function () {
//         $(this).parents('.dropdown2').find('span').text($(this).text());
//         console.log($(this).text() + 'clicked');
//         $(this).parents('.dropdown2').find('input').attr('value', $(this).attr('value'));
//         console.log('value is ' + $(this).parents('.dropdown2').find('input').val());
//
//
//     });
//
//
// });



// $('.dropdown3').click(function () {
//     $(this).attr('tabindex', 3).focus();
//     $(this).toggleClass('active');
//     $(this).find('.dropdown3-menu').slideToggle(300);
//     console.log('slidetoggle dropdown3');
//
//
//     $('.dropdown3 .dropdown3-menu li').unbind().click(function () {
//         $(this).parents('.dropdown3').find('span').text($(this).text());
//         console.log($(this).text() + 'clicked');
//         $(this).parents('.dropdown3').find('input').attr('value', $(this).attr('value'));
//         console.log('value is ' + $(this).parents('.dropdown3').find('input').val());
//
//     });
// });
// $('.dropdown3').focusout(function () {
//     $(this).removeClass('active');
//     $(this).find('.dropdown3-menu').slideUp(300);
//     console.log('click out');
// });


function filterFunctionFrom() {
  console.log('running');
  // var input, filter, ul, li, a, i;
  var input = $("#myInput");
  // var filter = $("#myInput").attr('value');
  var filter = document.getElementById("myInput").value.toUpperCase();
  var ul = $(".dropdown2-menu");
  var li = $(".dropdown2-menu li");
  for (i = 0; i < li.length; i++) {
    // console.log(li.length);
    txtValue = li[i].textContent || li[i].innerText;
    // console.log(li[i].textContent);
    // console.log(li[i].innerText);
    // console.log(txtValue.indexOf(filter));
    // console.log(li[i]);
    // console.log(filter);
    // console.log($("#myInput").attr('value'));
    if (txtValue.toUpperCase().indexOf(filter) > -1) {

      li[i].style.display = "";
    } else {
      li[i].classList.remove("clickable")
      li[i].style.display = "none";
    }
  };

};


function filterFunctionTo() {
  console.log('running');
  // var input, filter, ul, li, a, i;
  var input = $("#myInput3");
  // var filter = $("#myInput").attr('value');
  var filter = document.getElementById("myInput3").value.toUpperCase();
  var ul = $(".dropdown3-menu");
  var li = $(".dropdown3-menu li");
  for (i = 0; i < li.length; i++) {
    // console.log(li.length);
    txtValue = li[i].textContent || li[i].innerText;
    // console.log(li[i].textContent);
    // console.log(li[i].innerText);
    // console.log(txtValue.indexOf(filter));
    // console.log(li[i]);
    // console.log(filter);
    // console.log($("#myInput").attr('value'));
    if (txtValue.toUpperCase().indexOf(filter) > -1) {

      li[i].style.display = "";


    } else {
      li[i].style.display = "none";
    }
    // return false;
  };
};






// function filterFunction() {
// console.log('running');
// // var input, filter, ul, li, a, i;
// var input = $("#myInput");
// // var filter = $("#myInput").attr('value');
// // var filter = $("myInput").value.toUpperCase();
// var filter = document.getElementById("myInput").value.toUpperCase();
// // var className = "$('." + $("#myInput").parents('ul').attr('class') + "');";
// // console.log(className);
// var ul = '$(".' + $("#myInput").parents('ul').attr('class') + '");';
// console.log(ul);
// // var $li = '$(".' + $("#myInput").parents('ul').attr('class') + ' li");';
// // console.log($li);
// // var li = '$(".' + $("#myInput").parents('ul').attr('class') + ' li");';
// var li = $($("#myInput").parents('ul').attr('class')).find('li');
// console.log(li);
//
//
// for (i = 0; i < li.length; i++) {
//   console.log(li);
//   console.log(li.length);
//   // console.log(.length);
//   console.log(i);
//   console.log(li[i]);
//   console.log()
//   txtValue = li[i].textContent || li[i].innerText;
//   console.log(li[i].textContent);
//   console.log(li[i].innerText);
//   console.log(txtValue.indexOf(filter));
//   console.log(li[i]);
//   console.log(filter);
//   console.log($("#myInput").attr('value'));
//   if (txtValue.toUpperCase().indexOf(filter) > -1) {
//
//     li[i].style.display = "";
//   } else {
//     li[i].style.display = "none";
//   }
// };









// function() {
//   if ($('#collapse-section').hasClass('')) {
//
//   }
// }

// $('#collapse-select.open').click(function () {
//   $('#collapse-select').removeClass('open');
//   $('#collapse-select').addClass('closed');
//   $('.select-container').slideToggle(300);
//   $('#arrow').removeClass('icofont-arrow-down');
//   $('#arrow').addClass('icofont-arrow-up');
// });
//
// $('#collapse-select.closed').click(function () {
//   console.log('click');
//   $('#collapse-select').removeClass('closed');
//   $('#collapse-select').addClass('open');
//   $('.select-container').slideToggle(300);
//   $('#arrow').removeClass('icofont-arrow-up');
//   $('#arrow').addClass('icofont-arrow-down');
// });

$('#collapse-select').click(function() {
  $(this).toggleClass('open');
  $('.select-container').slideToggle(300);

  if ($('#collapse-select').hasClass('open')) {
    console.log('opened')
    $('.collapse-p').html('Click to collapse');
    $('.icofont-arrow-up').css('display', 'none');
    $('.icofont-arrow-down').css('display', 'block');
  } else if ($('#collapse-select').not('open')) {
    $('.collapse-p').html('Click to open');
    $('.icofont-arrow-up').css('display', 'block');
    $('.icofont-arrow-down').css('display', 'none');
  }
});


/*End Dropdown Menu*/

(function($) {
  $('.js-share-twitter-link').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    window.open(href, "Twitter", "height=285,width=550,resizable=1");
  });
  $('.js-share-facebook-link').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    window.open(href, "Facebook", "height=269,width=550,resizable=1");
  });
})(jQuery);


var Verse = document.querySelector('.verse');
var Surah = document.querySelector('.surah');
var SurahAyah = document.querySelector('.surah-ayah');
var VerseVoice = document.querySelector('.verse-voice');
var VerseTranslation = document.querySelector('.verse-english');
var MoreInfoSurahName = document.querySelector('.more-info-surah-name');
var MoreInfoSurahNameTranslation = document.querySelector('.more-info-surah-name-translation');
var MoreInfoSurahNumber = document.querySelector('.more-info-surah-number');
var MoreInfoNumberOfAyahs = document.querySelector('.more-info-number-of-ayahs');
var MoreInfoRevelationType = document.querySelector('.more-info-revelation-type');
var MoreInfoVerse = document.querySelector('.more-info-verse');
var MoreInfoVerseEnglish = document.querySelector('.more-info-verse-english');
var MoreInfoAyahNumber = document.querySelector('.more-info-ayah-number');
var MoreInfoJuz = document.querySelector('.more-info-juz');
var MoreInfoPage = document.querySelector('.more-info-page');
var MoreInfoManzil = document.querySelector('.more-info-manzil');
var MoreInfoHizb = document.querySelector('.more-info-hizb');
var MoreInfoRuku = document.querySelector('.more-info-ruku');
var MoreInfoSajda = document.querySelector('.more-info-sajda');


var ayah = 1;
var apiUrl = 'http://api.alquran.cloud/v1/ayah/';
// var apiUrl = 'http://api.alquran.cloud/v1/quran/quran-uthmani/surahs/2/';

function getAyah(min, max) {

  let getRandom = Math.floor((Math.random() * max) + min);
  while (getRandom > max || getRandom < min) {
    getRandom = Math.floor((Math.random() * max) + min);
  }
  return getRandom;
}

function getquote() {
  // var min = document.getElementById('min').value;
  // var max = document.getElementById('max').value;
  var min = $('.dropdown2').find('input.hidden-value').val();
  var max = $('.dropdown3').find('input.hidden-value').val();

  // Check whether either are not a number
  if (isNaN(parseInt(min)) || isNaN(parseInt(max))) {
    ayah = 1;
  } else {
    ayah = getAyah(min, max)
  }
  var api = apiUrl + ayah + '/quran-uthmani';
  var apiVoice = apiUrl + ayah + '/ar.alafasy';
  var apiTranslation = apiUrl + ayah + '/editions/en.sahih';



  console.log(min);
  console.log(max);
  console.log(ayah);
  console.log(api);
  console.log(apiTranslation);


  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(data.data.number);
      const {
        text,
        surah,
        number,
        numberInSurah,
        juz,
        page,
        manzil,
        hizbQuarter,
        ruku,
        sajda
      } = data.data;

      // Set DOM elements from the API
      Verse.textContent = text;
      Surah.textContent = surah.englishName;
      SurahAyah.textContent = surah.number + ':' + numberInSurah;

      MoreInfoSurahName.textContent = 'Surah name: ' + surah.englishName + ' - ' + surah.name;
      MoreInfoSurahNameTranslation.textContent = 'Surah name translation: ' + surah.englishNameTranslation;
      MoreInfoSurahNumber.textContent = 'Surah number: ' + surah.number;
      MoreInfoNumberOfAyahs.textContent = 'Number of ayahs in surah: ' + surah.numberOfAyahs;
      MoreInfoRevelationType.textContent = 'Revelation type: ' + surah.revelationType;
      MoreInfoRevelationType.textContent = 'Revelation type: ' + surah.revelationType;
      MoreInfoVerse.textContent = text;
      MoreInfoAyahNumber.textContent = 'Ayah number: ' + numberInSurah;
      MoreInfoJuz.textContent = 'Juz: ' + juz;
      MoreInfoPage.textContent = 'Page: ' + page;
      MoreInfoManzil.textContent = 'Manzil: ' + manzil;
      MoreInfoHizb.textContent = 'Hizb: ' + hizbQuarter;
      MoreInfoRuku.textContent = 'Ruku: ' + ruku;

      //SAJDA AYAH

      function checkSajdaRecommended() {
        return sajda.recommended;
      }

      function checkSajdaObligatory() {
        return sajda.obligatory;
      }

      console.log(checkSajdaRecommended());
      console.log(checkSajdaObligatory());

      if (checkSajdaRecommended() === true) {
        MoreInfoSajda.textContent = 'This is a sajda ayah';
        $('.sajda-note').addClass('active');
      } else if (checkSajdaRecommended() === false) {

        if (checkSajdaObligatory() === true) {
          MoreInfoSajda.textContent = 'This is a sajda ayah';
          $('.sajda-note').addClass('active');
        }

      } else {
        MoreInfoSajda.textContent = 'This is a not sajda ayah';
        $('.sajda-note').removeClass('active');
      }
    });

  fetch(apiVoice)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(data.data.audioSecondary[1]);
      const {
        audioSecondary
      } = data.data;

      // Set DOM elements from the API
      VerseVoice.src = audioSecondary[1];
    });

  fetch(apiTranslation)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(data.data[0].text);
      console.log('fetched');
      const {
        text
      } = data.data[0];

      // Set DOM elements from the API
      VerseTranslation.textContent = text;
      MoreInfoVerseEnglish.textContent = text;
    });


  audio.pause();
  isPlaying = false;
  document.querySelector('.audio-container').style.width = "1%";
  $('#togglePlayIcon').removeClass('icofont-pause');
  $('#togglePlayIcon').addClass('icofont-play-alt-1');

}

function revealnext() {
  ayah = parseInt(ayah) + 1;
  updateAPI(ayah);
}

function previous() {
  ayah = parseInt(ayah) - 1;
  updateAPI(ayah);
}

function updateAPI(num) {
  apiNext = 'http://api.alquran.cloud/v1/ayah/' + num + '/quran-uthmani';
  apiVoiceNext = 'http://api.alquran.cloud/v1/ayah/' + num + '/ar.alafasy';
  apiTranslationNext = 'http://api.alquran.cloud/v1/ayah/' + num + '/editions/en.sahih';

  console.log(apiNext);
  console.log(apiVoiceNext);
  console.log(apiTranslationNext);

  fetch(apiNext)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      // console.log(data.data.number);
      const {
        text,
        surah,
        number,
        numberInSurah,
        juz,
        page,
        manzil,
        hizbQuarter,
        ruku,
        sajda
      } = data.data;

      // Set DOM elements from the API
      Verse.textContent = text;
      Surah.textContent = surah.englishName;
      SurahAyah.textContent = surah.number + ':' + numberInSurah;

      MoreInfoSurahName.textContent = 'Surah name: ' + surah.englishName + ' - ' + surah.name;
      MoreInfoSurahNameTranslation.textContent = 'Surah name translation: ' + surah.englishNameTranslation;
      MoreInfoSurahNumber.textContent = 'Surah number: ' + surah.number;
      MoreInfoNumberOfAyahs.textContent = 'Number of ayahs in surah: ' + surah.numberOfAyahs;
      MoreInfoRevelationType.textContent = 'Revelation type: ' + surah.revelationType;
      MoreInfoRevelationType.textContent = 'Revelation type: ' + surah.revelationType;
      MoreInfoVerse.textContent = text;
      MoreInfoAyahNumber.textContent = 'Ayah number: ' + numberInSurah;
      MoreInfoJuz.textContent = 'Juz: ' + juz;
      MoreInfoPage.textContent = 'Page: ' + page;
      MoreInfoManzil.textContent = 'Manzil: ' + manzil;
      MoreInfoHizb.textContent = 'Hizb: ' + hizbQuarter;
      MoreInfoRuku.textContent = 'Ruku: ' + ruku;

      //SAJDA AYAH

      function checkSajdaRecommended() {
        return sajda.recommended;
      }

      function checkSajdaObligatory() {
        return sajda.obligatory;
      }

      console.log(checkSajdaRecommended());
      console.log(checkSajdaObligatory());

      if (checkSajdaRecommended() === true) {
        MoreInfoSajda.textContent = 'This is a sajda ayah';
        $('.sajda-note').addClass('active');
      } else if (checkSajdaRecommended() === false) {

        if (checkSajdaObligatory() === true) {
          MoreInfoSajda.textContent = 'This is a sajda ayah';
          $('.sajda-note').addClass('active');
        }

      } else {
        MoreInfoSajda.textContent = 'This is a not sajda ayah';
        $('.sajda-note').removeClass('active');
      }

    });

  fetch(apiVoiceNext)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      // console.log(data.data.audioSecondary[1]);
      const {
        audioSecondary
      } = data.data;

      // Set DOM elements from the API
      VerseVoice.src = audioSecondary[1];
    });

  fetch(apiTranslationNext)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      // console.log(data.data[0].text);
      const {
        text
      } = data.data[0];

      // Set DOM elements from the API
      VerseTranslation.textContent = text;
      MoreInfoVerseEnglish.textContent = text;

      // Set audio to default
      // $('#player').addClass('default');
      // $('#player').pause;
      audio.pause();
      isPlaying = false;
      document.querySelector('.audio-container').style.width = "1%";
      $('#togglePlayIcon').removeClass('icofont-pause');
      $('#togglePlayIcon').addClass('icofont-play-alt-1');
    });
}

// MORE INFO CONTAINER

$(function() {
  $(".more-info").on("click", function(e) {
    $('.overlay').addClass('active');
    $('.more-info-container').addClass('active');
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".more-info-container") === false) {
      $('.more-info-container').removeClass('active');
      $('.overlay').removeClass('active');
    }
  });
});

$('.more-info-container .close').click(function() {
  $('.more-info-container').removeClass('active');
  $('.overlay').removeClass('active');
});

// KEYBOARD KEYS

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    // add || e.keyCode == 13 for enter key
    getquote();
  }
  if (e.keyCode == 39) {
    revealnext();
  }
  if (e.keyCode == 37) {
    previous();
  }
}

// PLAY PAUSE BUTTON

var timer;
var percent = 0;
var audio = document.getElementById("player");
var moreinfoaudio = document.getElementById("more-info-player");

audio.addEventListener("playing", function(_event) {
  var duration = _event.target.duration;
  advance(duration, audio);
});
audio.addEventListener("pause", function(_event) {
  clearTimeout(timer);
});
var advance = function(duration, element) {
  var progress = document.getElementById("progress");
  increment = 10 / duration
  percent = Math.min(increment * element.currentTime * 10, 100);
  progress.style.width = percent + '%'
  startTimer(duration, element);
}
var startTimer = function(duration, element) {
  if (percent < 100) {
    timer = setTimeout(function() {
      advance(duration, element)
    }, 100);
  }
}

function togglePlay(e) {
  e = e || window.event;
  var btn = e.target;
  if (!audio.paused) {
    btn.classList.remove('active');
    document.querySelector('.audio-container').style.width = "1%";
    audio.pause();
    isPlaying = false;
    $('#togglePlayIcon').removeClass('icofont-pause');
    $('#togglePlayIcon').addClass('icofont-play-alt-1');
  } else {
    btn.classList.add('active');
    document.querySelector('.audio-container').style.width = "80%";
    audio.play();
    isPlaying = true;
    $('#togglePlayIcon').removeClass('icofont-play-alt-1');
    $('#togglePlayIcon').addClass('icofont-pause');
    // audioComplete();
  }
}

audio.addEventListener("ended", function() {
  audio.currentTime = 0;
  console.log("ended");
  audio.pause();
  isPlaying = false;
  document.querySelector('.audio-container').style.width = "1%";
  $('#togglePlayIcon').removeClass('icofont-pause');
  $('#togglePlayIcon').addClass('icofont-play-alt-1');
});

$(window).resize(function() {
  $('.verse-container').css("margin-bottom", $("#tester").height() + $("#collapse-select").height());
}).resize();

// function audioComplete() {
//   while (audio.duration >= 100){
//     audio.pause();
//     isPlaying = false;
//     document.querySelector('.audio-container').style.width="1%";
//     }
//   }
//
//   audioComplete();



/*
Reference: http://jsfiddle.net/BB3JK/47/
*/
