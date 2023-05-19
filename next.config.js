/** @type {import('next').NextConfig} */
module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker",
          },
        },
      ],
    });
    config.module.rules.unshift({
      test: /canvas\.node$/,
      loader: "file-loader",
      options: {
        publicPath: "/_next/static/canvas",
        outputPath: "static/canvas",
      },
    });

    return config;
  },
};