(function () {
  var $container = document.querySelector('#main-layout-scroller');

  var update = function update() {
    var $links = $container.querySelectorAll('[href^="https://assetstore.unity.com/packages/"] > div > div > div > div');
    $links.forEach(function ($link) {
      var text = $link.textContent;
      var isCurrency = text[0] === '$' || text[0] === '€';

      if (isCurrency && !$link.getAttribute('style')) {
        var price = +text.substring(1);

        if (price > 20) {
          $link.setAttribute('style', 'color: red');
        }
      }
    });
  };

  var updated = false;
  var observer = new MutationObserver(function (mutationsList, observer) {
    if (!updated && mutationsList.some(function (mutation) {
      return mutation.addedNodes.length > 0;
    })) {
      update();
      updated = true;
      setTimeout(function () {
        return updated = false;
      }, 100);
    }
  });
  observer.observe($container, {
    childList: true,
    subtree: true
  });
  update();
})();
