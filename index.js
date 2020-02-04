const glob = require('glob');

const imageScale = require('./image-scale-threaded');

(async () => {
  await Promise.all(
    glob
      .sync('./images/*.jpeg')
      .filter(img => img.indexOf('small') < 0)
      .map(imageScale)
  );
})();
