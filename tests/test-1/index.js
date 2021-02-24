(function() {
  const html = `
<div id="cv-lightbox" style="display: none">
  <div class="lightbox-content">
    <div class="lightbox-countdown">
      <label>This offer expires in</label>
      <div class="value">2:00</div>
    </div>

    <button class="lightbox-close" title="Close">
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.014 8.5L16.6862 1.82775C17.1046 1.40941 17.1046 0.73209 16.6862 0.313753C16.2679 -0.104584 15.5906 -0.104584 15.1722 0.313753L8.5 6.986L1.82775 0.313753C1.40941 -0.104584 0.73209 -0.104584 0.313753 0.313753C-0.104584 0.73209 -0.104584 1.40941 0.313753 1.82775L6.986 8.5L0.313753 15.1722C-0.104584 15.5906 -0.104584 16.2679 0.313753 16.6862C0.73209 17.1046 1.40941 17.1046 1.82775 16.6862L8.5 10.014L15.1722 16.6862C15.5906 17.1046 16.2679 17.1046 16.6862 16.6862C17.1046 16.2679 17.1046 15.5906 16.6862 15.1722L10.014 8.5Z" fill="#A9A9A9"/>
      </svg>
    </button>

    <h1 class="lightbox-heading">GET 10% OFF NOW</h1>
    <h3 class="lightbox-subheading">just by subscribing to our newsletter</h3>

    <form class="lightbox-form">
      <input type="email" placeholder="Enter your email address" />
      <button type="submit">GET 10% OFF</button>
    </form>

    <div class="lightbox-footer">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
    </div>
  </div>

  <div class="lightbox-bg"></div>
</div>`;

  const $ = jQuery;
  const $container = $(html);
  const $countdown = $container.find('.lightbox-countdown .value');
  let timeLeft = 120;
  let interval;

  const paddWithZeros = num => num < 10 ? `0${num}` : `${num}`;
  const stop = () => clearInterval(interval);
  const close = () => {
    window.removeEventListener('keydown', handleKeyPress);
    $container.removeClass('active');
    stop();
  };
  const setTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    $countdown.html(`${minutes}:${paddWithZeros(seconds)}`);
    
    if (timeLeft > 0) {
      timeLeft -= 1;
    } else {
      stop();
    }
  };

  interval = setInterval(setTime, 1000);
  setTime();

  $('body').append($container);
  $container.show();

  setTimeout(() => $container.addClass('active'), 1000);
  $container.find('.lightbox-close, .lightbox-bg').on('click', close);

  function handleKeyPress({ code }) {
    if (code === 'Escape') {
      close();
    }
  };
  window.addEventListener('keydown', handleKeyPress);
})();

