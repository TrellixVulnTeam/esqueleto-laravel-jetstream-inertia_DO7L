const path = require('path');

module.exports = {
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
            {
                loader: 'sass-loader',
                options: {
                  // you can also read from a file, e.g. `variables.scss`
                  // use `prependData` here if sass-loader version = 8, or
                  // `data` if sass-loader version < 8
                  additionalData: `@import "resources/css/sass/allImports.scss";`,
                }
              }
            ]
          }
        ]
      },
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
};
