(function () {
  var _window = window,
      location = _window.location,
      sessionStorage = _window.sessionStorage;

  var checkIsStyles = function checkIsStyles() {
    return /\/user\/quiz\/styles/.test(location.pathname);
  };

  var checkIsSocial = function checkIsSocial() {
    return /\/user\/quiz\/social/.test(location.pathname);
  };

  var checkIsRegister = function checkIsRegister() {
    return /\/user\/quiz\/register/.test(location.pathname);
  };

  var updateRegister = function updateRegister() {
    var poll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var styles = JSON.parse(sessionStorage.getItem('cy-styles'));
    var totPolled = 0;

    var trigger = function trigger() {
      var $container = document.querySelector('.cv-signup p:first-of-type');

      if (!$container && ++totPolled < 120) {
        return requestAnimationFrame(trigger);
      }

      $container.innerHTML = "We\u2019ll be carefully selecting your <b>".concat(styles.join(' '), "</b> package.");
    };

    if (styles && (poll || checkIsRegister())) {
      trigger();
    }
  };

  var setStyles = function setStyles() {
    if (checkIsSocial()) {
      return updateRegister(true);
    }

    if (checkIsStyles()) {
      var $selectedOptions = document.querySelectorAll('.layout .box .option-image input.radio:checked');
      var styles = [];
      $selectedOptions.forEach(function ($option) {
        styles.push($option.closest('.option-image').getAttribute('alt'));
      });
      sessionStorage.setItem('cy-styles', JSON.stringify(styles));
    }
  };

  var $button = document.querySelector('[data-testid="quiz-step"]');

  var addListener = function addListener() {
    if ($button) {
      $button.addEventListener('click', setStyles);
    }
  };

  window.addEventListener('popstate', function () {
    if (!$button || !document.contains($button)) {
      $button = document.querySelector('[data-testid="quiz-step"]');
      addListener();
    }

    if (checkIsRegister()) {
      updateRegister();
    }
  });
  updateRegister();
  addListener();
})();
