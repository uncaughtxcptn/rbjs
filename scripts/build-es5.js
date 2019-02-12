const fs = require('fs');
const path = require('path');
const util = require('util');
const babel = require('@babel/core');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

const readdir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
const rmrf = util.promisify(rimraf);
const mkdir = util.promisify(mkdirp);

const OUTPUT_DIR = path.resolve(__dirname, '../es5');
const METHODS_INPUT_DIR = path.resolve(__dirname, '../methods');
const METHODS_OUTPUT_DIR = path.resolve(__dirname, '../es5/methods');

(async () => {
    const methods = await readdir(METHODS_INPUT_DIR);
    const transformMap = [
        ...methods.map(methodName => ({
            input: path.resolve(METHODS_INPUT_DIR, `${methodName}/index.js`),
            output: path.resolve(METHODS_OUTPUT_DIR, `${methodName}.js`)
        })), {
            input: path.resolve(__dirname, '../index.js'),
            output: path.join(OUTPUT_DIR, 'index.js')
        }
    ];

    // Delete and re-create output directory
    await rmrf(OUTPUT_DIR);
    await mkdir(METHODS_OUTPUT_DIR);

    const babelOptions = {
        presets: ['@babel/preset-env'],
        plugins: ['add-module-exports']
    };

    await Promise.all(transformMap.map(async ({input, output}) => {
        // Transform source file to ES5
        const {code} = await babel.transformFileAsync(input, babelOptions);

        // Write transformed code to the output file
        // NOTE: We are doing additional transformation on the transformed
        //       code, to convert `../` imports to `./`, since the output
        //       directory restructures the method definition files.
        await writeFile(output, code.replace(/\.\.\//g, './'));
    }));
})();
