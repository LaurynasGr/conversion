(function() {
  const { location, sessionStorage } = window;

  const checkIsStyles = () => /\/user\/quiz\/styles/.test(location.pathname);
  const checkIsSocial = () => /\/user\/quiz\/social/.test(location.pathname);
  const checkIsRegister = () => /\/user\/quiz\/register/.test(location.pathname);

  const updateRegister = (poll = false) => {
    const styles = JSON.parse(sessionStorage.getItem('cy-styles'));
    let totPolled = 0;

    const trigger = () => {
      const $container = document.querySelector('.cv-signup p:first-of-type');

      if (!$container && ++totPolled < 120) {
        return requestAnimationFrame(trigger);
      }

      $container.innerHTML = `We’ll be carefully selecting your <b>${styles.join(' ')}</b> package.`;
    };

    if (styles && (poll || checkIsRegister())) {
      trigger();
    }
  };
  const setStyles = () => {
    if (checkIsSocial()) {
      return updateRegister(true);
    }

    if (checkIsStyles()) {
      const $selectedOptions = document.querySelectorAll('.layout .box .option-image input.radio:checked');
      const styles = [];

      $selectedOptions.forEach($option => {
        styles.push($option.closest('.option-image').getAttribute('alt'));
      });

      sessionStorage.setItem('cy-styles', JSON.stringify(styles));
    }
  };

  let $button = document.querySelector('[data-testid="quiz-step"]');
  const addListener = () => {
    if ($button) {
      $button.addEventListener('click', setStyles);
    }
  }

  window.addEventListener('popstate', () => {
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
