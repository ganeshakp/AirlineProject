// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            STABLE_FEATURE: JSON.stringify(true),
            EXPERIMENTAL_FEATURE: JSON.stringify(false)
        })
    ]
};