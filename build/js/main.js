/* eslint-disable no-unused-expressions */
'use strict';

(function () {

  /* Slider one Блок Номера*/
  var active = 0;
  var prev = 0;
  var numbersLeftArrow = document.querySelector('.numbers__left_arrow');
  var numbersRightArrow = document.querySelector('.numbers__right_arrow');
  var numbersItem = document.getElementsByClassName('numbers__item');
  var numbersButtonSlide = document.getElementsByClassName('numbers__button_slide');
  var numbersActive = document.querySelectorAll('.numbers__button_slide');

  var clickRightArrow = function () {
    numbersRightArrow.addEventListener('click', function () {
      active >= 0 && active < numbersItem.length - 1 ? ++active : active = 0;
      changeActiveSlide();
      buttonActiveSlide();
    });
  };
  clickRightArrow();

  var clickLeftArrow = function () {
    numbersLeftArrow.addEventListener('click', function () {
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

  /* Slider two Блок Номера*/
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

  /* Slider one Блок Номера*/
  var reviewsLeftArrow = document.querySelector('.reviews__left_arrow');
  var reviewsRightArrow = document.querySelector('.reviews__right_arrow');
  var reviewsItem = document.getElementsByClassName('reviews__item');
  var reviewsButtonSlide = document.getElementsByClassName('reviews__button_slide');
  var reviewsActive = document.querySelectorAll('.reviews__button_slide');

  var reviewsClickRightArrow = function () {
    reviewsRightArrow.addEventListener('click', function () {
      active >= 0 && active < reviewsItem.length - 1 ? ++active : active = 0;
      reviewsChangeActiveSlide();
      reviewsButtonActiveSlide();
    });
  };
  reviewsClickRightArrow();

  var reviewsClickLeftArrow = function () {
    reviewsLeftArrow.addEventListener('click', function () {
      active > 0 ? --active : active = reviewsItem.length - 1;
      reviewsChangeActiveSlide();
      reviewsButtonActiveSlide();
    });
  };
  reviewsClickLeftArrow();

  var reviewsChangeActiveSlide = function () {
    reviewsItem[prev].classList.remove('reviews__item_active');
    reviewsItem[active].classList.add('reviews__item_active');
    for (var q = 0; q < reviewsItem.length; q++) {
      reviewsItem[q].style.transform = 'translate(' + -(active * 100) + '%)';
    }
  };

  var reviewsButtonActiveSlide = function () {
    for (var q = 0; q < reviewsActive.length; q++) {
      reviewsActive[q].classList.remove('reviews__active');
    }
    reviewsButtonSlide[active].classList.add('reviews__active');
  };

  /* Slider two Блок Номера*/
  for (var q = 0; q < reviewsButtonSlide.length; q++) {
    // eslint-disable-next-line no-shadow
    var reviewsfuncButton = function (q) {
      reviewsButtonSlide[q].addEventListener('click', function () {
        prevItem = activeItem;
        activeItem = q;
        active = activeItem;
        reviewsChangeActiveItem();
        reviewsChangeActiveSlide();
      });
    };
    reviewsfuncButton(q);
  }

  var reviewsChangeActiveItem = function () {
    reviewsButtonSlide[prevItem].classList.remove('reviews__active');
    reviewsButtonSlide[activeItem].classList.add('reviews__active');
  };

  /* Scrolls шапка*/
  var variables = document.getElementById('variables');
  var variablesScroll = document.querySelector('.variables__scroll');

  var variablesScrollClick = function () {
    variablesScroll.addEventListener('click', function (evt) {
      evt.preventDefault();
      variables.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  variablesScrollClick();

  var numbers = document.getElementById('numbers');
  var numbersScroll = document.querySelector('.numbers__scroll');

  var numbersScrollClick = function () {
    numbersScroll.addEventListener('click', function (evt) {
      evt.preventDefault();
      numbers.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  numbersScrollClick();

  var reviews = document.getElementById('reviews');
  var reviewsScroll = document.querySelector('.reviews__scroll');

  var reviewsScrollClick = function () {
    reviewsScroll.addEventListener('click', function (evt) {
      evt.preventDefault();
      reviews.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  reviewsScrollClick();

  var feedback = document.getElementById('feedback');
  var feedbackScroll = document.querySelector('.feedback__scroll');

  var feedbackScrollClick = function () {
    feedbackScroll.addEventListener('click', function (evt) {
      evt.preventDefault();
      feedback.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  feedbackScrollClick();

  /* Scrolls подвал*/
  var basementVariablesScroll = document.querySelector('.basement__variables_scroll');

  var basementVariablesScrollClick = function () {
    basementVariablesScroll.addEventListener('click', function (evt) {
      evt.preventDefault();
      variables.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  basementVariablesScrollClick();

  var basementNumbersScroll = document.querySelector('.basement__numbers_scroll');

  var basementNumbersScrollClick = function () {
    basementNumbersScroll.addEventListener('click', function (evt) {
      evt.preventDefault();
      numbers.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  basementNumbersScrollClick();

  var basementReviewsScroll = document.querySelector('.basement__reviews_scroll');

  var basementReviewsScrollClick = function () {
    basementReviewsScroll.addEventListener('click', function (evt) {
      evt.preventDefault();
      reviews.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  basementReviewsScrollClick();

  var basementFeedbackScroll = document.querySelector('.basement__feedback_scroll');

  var basementFeedbackScrollClick = function () {
    basementFeedbackScroll.addEventListener('click', function (evt) {
      evt.preventDefault();
      feedback.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  basementFeedbackScrollClick();
})();
