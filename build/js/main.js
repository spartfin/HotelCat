/* eslint-disable new-cap */
/* eslint-disable no-undef */
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

  /* Popup*/
  var ESC_KEYCODE = 27;
  var popupButton = document.querySelector('.numbers__button');
  var popup = document.querySelector('.popup');
  var closePopup = popup.querySelector('.popup__close');
  var form = popup.querySelector('form');
  var login = popup.querySelector('[name=login]');
  var phone = popup.querySelector('[name=phone]');
  var textarea = popup.querySelector('[name=textarea]');
  var overlay = document.querySelector('.overlay');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('login');
  } catch (err) {
    isStorageSupport = false;
  }

  popupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup__hidden');
    overlay.classList.add('popup__hidden');
    if (storage) {
      login.value = storage;
    }
    login.focus();
  });

  closePopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup__hidden');
    overlay.classList.remove('popup__hidden');
  });

  form.addEventListener('submit', function (evt) {
    if (!login.value || !phone.value || !textarea.value) {
      evt.preventDefault();
      var newFormData = new FormData(form);
      upload(newFormData, onSucces);
    } else {
      if (isStorageSupport) {
        localStorage.setItem('login', login.value);
      }
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      if (popup.classList.contains('popup__hidden')) {
        popup.classList.remove('popup__hidden');
        overlay.classList.remove('popup__hidden');
      }
    }
  });

  overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (popup.classList.contains('popup__hidden')) {
      popup.classList.remove('popup__hidden');
      overlay.classList.remove('popup__hidden');
    }
  });

  /* Mask в попапе */
  IMask(document.getElementById('popup-phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });

  /* Текущая дата в input
  var showCurrentDate = function () {
    var getCurrentDay = new Date();
    var year = getCurrentDay.getFullYear();
    var month = '';
    var monthCurrent = getCurrentDay.getMonth() + 1;
    if (monthCurrent < 10) {
      month = '0' + monthCurrent;
    } else {
      month = monthCurrent;
    }
    var day = '';
    if (getCurrentDay.getDate() < 10) {
      day = '0' + getCurrentDay.getDate();
    } else {
      day = getCurrentDay.getDate();
    }
    var placeholderCurrent = day + '.' + month + '.' + year;
    placeholderCurrent.toString();
    document.getElementById('from-date').placeholder = placeholderCurrent;
    document.getElementById('by-date').placeholder = placeholderCurrent;
  };
  showCurrentDate(); */

  // Mask даты в форме
  IMask(document.getElementById('from-date'), {
    mask: Date,
    min: new Date(2020, 0, 1),
    max: new Date(2025, 0, 1),
    lazy: false
  });

  IMask(document.getElementById('by-date'), {
    mask: Date,
    min: new Date(2020, 0, 1),
    max: new Date(2026, 0, 1),
    lazy: false
  });

  // AJAX
  var AJAX_STATUS_OK = 200;
  var URL = 'https://echo.htmlacademy.ru/data';
  var URL_POST = 'https://echo.htmlacademy.ru';

  window.load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.timeout = 10000;

    xhr.addEventListener('load', function () {
      if (xhr.status === AJAX_STATUS_OK) {
        var responseArray = xhr.response.slice();
        for (var t = 0; t < responseArray.length; t++) {
          responseArray[t].id = t;
        }
        onSuccess(responseArray);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.open('GET', URL);
    xhr.send();
  };

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.addEventListener('error', function () {
      window.onError();
    });

    xhr.open('POST', URL_POST);
    xhr.send(data);
  };

  // Реализация всплытия об успешной или не успешной отправки формы бронирования('error');
  var main = document.querySelector('main');

  // Показываем диалоговое окно
  var openWindow = function (dialogWindow) {
    var successWindow = document.querySelector('#' + dialogWindow).content.querySelector('.' + dialogWindow);
    var message = successWindow.cloneNode(true);
    main.appendChild(message);
  };

  // Удаляем диалоговое окно
  var closeWindow = function (dialogWindow) {
    var dialog = main.querySelector('.' + dialogWindow);
    var dialogButton = dialog.querySelectorAll('.' + dialogWindow + '__button');

    var onEscPress = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        dialog.remove();
      }
      return evt;
    };

    var dialogElementRemove = function () {
      dialog.remove();
    };

    // Если клик не по окну
    var dialogRemove = function (evt) {
      if (!evt.target.closest('.' + dialogWindow + '__inner')) {
        dialogElementRemove();
      }
    };

    // Закрывает на ESC
    document.addEventListener('keydown', onEscPress);
    // закрывает по клику на любую область экрана
    dialog.addEventListener('click', dialogRemove);
    // закрывает на кнопки
    dialogButton.forEach(function (button) {
      button.addEventListener('click', dialogElementRemove);
    });
  };

  // функция успешной отправки
  var onSucces = function () {
    openWindow('success');
    closeWindow('success');
  };
})();
