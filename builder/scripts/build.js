const webpack = require('webpack');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const paths = require('./paths');

module.exports = function (config) {
    // Warn and crash if required files are missing
    if (!checkRequiredFiles([paths.entryPoint, paths.packageJSON])) {
        process.exit(1);
    }

    console.log(`Creating an optimized ${process.env.NODE_ENV} build...`);

    const compiler = webpack(config);

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                if (!err.message) {
                    return reject(err);
                }

                let errMessage = err.message;

                reject(formatWebpackMessages({
                    errors: [errMessage],
                    warnings: [],
                }));
            }

            return resolve();
        });
    })
        .then(() => console.log('Compiled successfully'))
        .catch((err) => console.error(err));
}
