/* eslint-disable no-unused-expressions */
'use strict';

(function () {

  /* Slider one*/
  var active = 0;
  var prev = 0;
  var leftArrow = document.querySelector('.numbers__left_arrow');
  var rightArrow = document.querySelector('.numbers__right_arrow');
  var numbersItem = document.getElementsByClassName('numbers__item');
  var numbersButtonSlide = document.getElementsByClassName('numbers__button_slide');
  var numbersActive = document.querySelectorAll('.numbers__button_slide');

  var clickRightArrow = function () {
    rightArrow.addEventListener('click', function () {
      active >= 0 && active < numbersItem.length - 1 ? ++active : active = 0;
      changeActiveSlide();
      buttonActiveSlide();
    });
  };
  clickRightArrow();

  var clickLeftArrow = function () {
    leftArrow.addEventListener('click', function () {
      active > 0 ? --active : active = numbersItem.length - 1;
      changeActiveSlide();
      buttonActiveSlide();
    });
  };
  clickLeftArrow();

  var changeActiveSlide = function () {
    numbersItem[prev].classList.remove('numbers__item_active');
    numbersItem[active].classList.add('numbers__item_active');
    for (var i = 0; i < numbersItem.length; i++) {
      numbersItem[i].style.transform = 'translate(' + -(active * 100) + '%)';
    }
  };

  var buttonActiveSlide = function () {
    for (var i = 0; i < numbersActive.length; i++) {
      numbersActive[i].classList.remove('numbers__active');
    }
    numbersButtonSlide[active].classList.add('numbers__active');
  };

  /* Slider one*/
  var activeItem = 0;
  var prevItem = 0;

  for (var i = 0; i < numbersButtonSlide.length; i++) {
    // eslint-disable-next-line no-shadow
    var funcButton = function (i) {
      numbersButtonSlide[i].addEventListener('click', function () {
        prevItem = activeItem;
        activeItem = i;
        active = activeItem;
        changeActiveItem();
        changeActiveSlide();
      });
    };
    funcButton(i);
  }

  var changeActiveItem = function () {
    numbersButtonSlide[prevItem].classList.remove('numbers__active');
    numbersButtonSlide[activeItem].classList.add('numbers__active');
  };
})();
