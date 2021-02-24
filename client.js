(function (){
  const socketScript = document.createElement('script');
  const style = document.createElement('style');

  socketScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.1/socket.io.js';
  socketScript.addEventListener('load', () => {
    const socket = io('http://localhost:4000');

    socket.on('js', code => {
      console.log({ code });

      try {
        eval(`(function() {${code}})()`);
      } catch (err) {
        console.error("Error occured in the Experience script");
        console.error(err);
      }      
    });

    socket.on('css', code => {
      console.log({ code });

      style.innerHTML = code;
    });
  });

  document.head.appendChild(style);
  document.head.appendChild(socketScript);
})();
