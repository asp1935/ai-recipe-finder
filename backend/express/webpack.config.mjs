import path from 'path';
import { fileURLToPath } from 'url';
import Dotenv from 'dotenv-webpack';
import TerserPlugin from 'terser-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode: 'production',
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'module',
    },
    target: 'node',
    resolve: {
        extensions: ['.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new Dotenv(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    externalsPresets: { node: true },
    externals: [
        ({ request }, callback) => {
            if (/^[a-zA-Z0-9-_]+$/.test(request)) {
                return callback(null, `module ${request}`);
            }
            callback();
        },
    ],
    experiments: {
        outputModule: true, // Required for 'module' libraryTarget
    },
};
