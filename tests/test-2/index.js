(function() {
  const $container = document.querySelector('#main-layout-scroller');
  const update = () => {
    const $links = $container.querySelectorAll('[href^="https://assetstore.unity.com/packages/"] > div > div > div > div');

    for (let i = 0; i < $links.length; i++) {
      const $link = $links[i];
      const text = $link.textContent;
      const isCurrency = text[0] === '$' || text[0] === '€';

      if (isCurrency && !$link.getAttribute('style')) {
        const price = +text.substring(1);

        if (price > 20) {
          $link.setAttribute('style', 'color: red')
        }
      }
    }
  }

  let updated = false;
  const observer = new MutationObserver((mutationsList, observer) => {
    if (!updated && mutationsList.some(mutation => mutation.addedNodes.length > 0)) {
      update();
      updated = true;
      setTimeout(() => updated = false, 100);
    }
  });

  observer.observe($container, { childList: true, subtree: true });
  update();
})();
