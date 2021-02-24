(function () {
  var style = "\n@font-face {\n  font-family: 'Helvetica Neue';\n  src: url('https://static.webnsurf.com/conversion/fonts/HelveticaNeue/HelveticaNeue.ttf')  format('truetype');\n}\n\n@font-face {\n  font-family: 'Soundtrack Bold';\n  src: url('https://static.webnsurf.com/conversion/fonts/SoundtrackBold/SoundtrackBold.woff2')  format('woff2'),\n    url('https://static.webnsurf.com/conversion/fonts/SoundtrackBold/SoundtrackBold.woff')  format('woff'),\n    url('https://static.webnsurf.com/conversion/fonts/SoundtrackBold/SoundtrackBold.ttf')  format('truetype');\n}\n\n#cv-lightbox {\n  transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms, visibility 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  visibility: hidden;\n  opacity: 0;\n  position: fixed;\n  padding: 55px 10px 10px;\n  text-align: center;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n  top: 0;\n  left: 0;\n}\n\n#cv-lightbox:before {\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n  pointer-events: none;\n  visibility: hidden;\n  content: '';\n}\n\n.lightbox-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 1;\n}\n\n.lightbox-content {\n  background: url('https://static.webnsurf.com/conversion/images/background-lines.png') repeat center,\n  url('https://static.webnsurf.com/conversion/images/flowers.png') no-repeat bottom left,\n    radial-gradient(100.91% 249.56% at 0% 0%, #70A929 0%, #86B935 100%);\n  border: 5px solid #FFFFFF;\n  /* min-height: 351px; */\n  font-size: 20px;\n  width: 552px;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  max-width: calc(100% - 20px);\n  padding: 10px;\n  z-index: 2;\n}\n\n#cv-lightbox.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.lightbox-close {\n  position: absolute;\n  height: 29px;\n  width: 29px;\n  right: -17px;\n  top: -17px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.3));\n}\n\n.lightbox-close:hover {\n  background: #efefef;\n}\n\n.lightbox-countdown {\n  position: absolute;\n  height: 85px;\n  width: 185px;\n  top: -47px;\n  left: calc(50% - 92px);\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n.lightbox-countdown label {\n  line-height: 19px;\n  font-size: 16px;\n  color: #666;\n}\n\n.lightbox-countdown .value {\n  font-size: 40px;\n  line-height: 47px;\n  color: #F29D26;\n  font-weight: 700;\n}\n\n.lightbox-heading {\n  font-family: 'Soundtrack Bold', Helvetica, Arial, sans-serif;\n  font-size: 95px;\n  line-height: 1.17;\n  color: #FFF;\n  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);\n  margin-top: 30px;\n}\n\n.lightbox-subheading {\n  line-height: 23px;\n  text-align: center;\n  color: #FFF;\n}\n\n.lightbox-form {\n  text-align: center;\n  margin: 25px 0 17px;\n}\n\n.lightbox-form input {\n  font-size: 20px;\n  line-height: 23px;\n  background: #FFF;\n  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.6);\n  border-radius: 3px;\n  border: none;\n  display: block;\n  margin: 0 auto 15px;\n  width: 100%;\n  color: #AAA;\n  text-align: center;\n  max-width: 460px;\n  height: 44px;\n}\n\n.lightbox-form button {\n  background: linear-gradient(180deg, #F3A427 0%, #EF8F24 100%);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  font-size: 20px;\n  width: 290px;\n  height: 43px;\n  color: #fff;\n  max-width: 100%;\n  font-family: Helvetica;\n}\n\n.lightbox-footer {\n  font-size: 11px;\n  line-height: 13px;\n  color: #fff;\n} \n\n@media (max-width: 510px) {\n  .lightbox-heading {\n    font-size: 75px;\n  }\n}\n\n@media (max-width: 430px) {\n  .lightbox-heading {\n    font-size: 65px;\n  }\n  .lightbox-content,\n  .lightbox-form input,\n  .lightbox-form button {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 374px) {\n  .lightbox-heading {\n    font-size: 55px;\n  }\n}";
  var html = "\n<div id=\"cv-lightbox\" style=\"display: none\">\n  <div class=\"lightbox-content\">\n    <div class=\"lightbox-countdown\">\n      <label>This offer expires in</label>\n      <div class=\"value\">2:00</div>\n    </div>\n\n    <button class=\"lightbox-close\" title=\"Close\">\n      <svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M10.014 8.5L16.6862 1.82775C17.1046 1.40941 17.1046 0.73209 16.6862 0.313753C16.2679 -0.104584 15.5906 -0.104584 15.1722 0.313753L8.5 6.986L1.82775 0.313753C1.40941 -0.104584 0.73209 -0.104584 0.313753 0.313753C-0.104584 0.73209 -0.104584 1.40941 0.313753 1.82775L6.986 8.5L0.313753 15.1722C-0.104584 15.5906 -0.104584 16.2679 0.313753 16.6862C0.73209 17.1046 1.40941 17.1046 1.82775 16.6862L8.5 10.014L15.1722 16.6862C15.5906 17.1046 16.2679 17.1046 16.6862 16.6862C17.1046 16.2679 17.1046 15.5906 16.6862 15.1722L10.014 8.5Z\" fill=\"#A9A9A9\"/>\n      </svg>\n    </button>\n\n    <h1 class=\"lightbox-heading\">GET 10% OFF NOW</h1>\n    <h3 class=\"lightbox-subheading\">just by subscribing to our newsletter</h3>\n\n    <form class=\"lightbox-form\">\n      <input type=\"email\" placeholder=\"Enter your email address\" />\n      <button type=\"submit\">GET 10% OFF</button>\n    </form>\n\n    <div class=\"lightbox-footer\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.\n    </div>\n  </div>\n\n  <div class=\"lightbox-bg\"></div>\n</div>";
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
  $('body').append($container).append("<style>".concat(style, "</style>"));
  $container.show();
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
