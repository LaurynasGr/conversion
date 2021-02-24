
(function () {
  var html = "\n<div id=\"cv-lightbox\">\n  <div class=\"lightbox-content\">\n    <div class=\"lightbox-countdown\">\n      <label>This offer expires in</label>\n      <div class=\"value\">2:00</div>\n    </div>\n    <button class=\"lightbox-close\" title=\"Close\">\n      <svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M10.014 8.5L16.6862 1.82775C17.1046 1.40941 17.1046 0.73209 16.6862 0.313753C16.2679 -0.104584 15.5906 -0.104584 15.1722 0.313753L8.5 6.986L1.82775 0.313753C1.40941 -0.104584 0.73209 -0.104584 0.313753 0.313753C-0.104584 0.73209 -0.104584 1.40941 0.313753 1.82775L6.986 8.5L0.313753 15.1722C-0.104584 15.5906 -0.104584 16.2679 0.313753 16.6862C0.73209 17.1046 1.40941 17.1046 1.82775 16.6862L8.5 10.014L15.1722 16.6862C15.5906 17.1046 16.2679 17.1046 16.6862 16.6862C17.1046 16.2679 17.1046 15.5906 16.6862 15.1722L10.014 8.5Z\" fill=\"#A9A9A9\"/>\n      </svg>\n    </button>\n    <h1 class=\"lightbox-heading\">GET 10% OFF NOW</h1>\n    <h3 class=\"lightbox-subheading\">just by subscribing to our newsletter</h3>\n    <form class=\"lightbox-form\">\n      <input type=\"email\" placeholder=\"Enter your email address\" />\n      <button type=\"submit\">GET 10% OFF</button>\n    </form>\n    <div class=\"lightbox-footer\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.\n    </div>\n  </div>\n  <div class=\"lightbox-bg\"></div>\n</div>";
  var $ = jQuery;
  var $container = $(html);
  var $countdown = $container.find('.lightbox-countdown .value');
  var timeLeft = 120;
  var interval;

  var paddWithZeros = function paddWithZeros(num) {
    return num < 10 ? "0".concat(num) : "".concat(num);
  };

  var stop = function stop() {
    return clearInterval(interval);
  };

  var close = function close() {
    window.removeEventListener('keydown', handleKeyPress);
    $container.removeClass('active');
    stop();
  };

  var setTime = function setTime() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft - minutes * 60;
    $countdown.html("".concat(minutes, ":").concat(paddWithZeros(seconds)));

    if (timeLeft > 0) {
      timeLeft -= 1;
    } else {
      stop();
    }
  };

  interval = setInterval(setTime, 1000);
  setTime();
  $('body').append($container);
  setTimeout(function () {
    return $container.addClass('active');
  }, 1000);
  $container.find('.lightbox-close, .lightbox-bg').on('click', close);

  function handleKeyPress(_ref) {
    var code = _ref.code;

    if (code === 'Escape') {
      close();
    }
  }

  ;
  window.addEventListener('keydown', handleKeyPress);
})();
