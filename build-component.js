const fs = require('fs-extra');
const concat = require('concat');


build = async () =>{
    const files = [
        './dist/SnakeGame/runtime.js',
        './dist/SnakeGame/polyfills.js',
        './dist/SnakeGame/main.js'
      ];

      await fs.ensureDir('game');
      await concat(files, 'game/snake-game.js');
}

build();

