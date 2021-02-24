const path = require('path');
const fs = require('fs');

const socketIo = require('socket.io');
const chokidar = require('chokidar');

const io = socketIo(4000, { cors: true });
const testDir = path.join(__dirname, 'tests/test-3');

chokidar.watch(testDir).on('change', file => {
  const code = fs.readFileSync(file, 'utf-8');
  
  console.log('Udated:', path.basename(file));

  if (/.*\.css$/.test(file)) {
    io.emit('css', code);
  } else {
    io.emit('js', code);
  }
});

io.on('connect', () => {
  const js = fs.readFileSync(path.join(testDir, 'index.js'), 'utf-8');
  const css = fs.readFileSync(path.join(testDir, 'index.css'), 'utf-8');
  io.emit('js', js);
  io.emit('css', css);
});
