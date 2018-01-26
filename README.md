# Kano Javascript Style Guide

Following [Paul's proposal](https://github.com/KanoComputing/rfc/issues/5) in January 2018,
we agreed to adopt new Javascript style that makes more sense as we use more ES6 features.
This will apply to all new projects. We'll be moving old code to the new style as we go.

## Style Guide

Use the [Airbnb Style Guide](https://github.com/airbnb/javascript) with the following modifications:

 * Use 4 spaces for indentation instead of 2
 * Allow leading underscore for identifiers.

## ESLint Configuration

The AirBnB guys provide an ESLint config that we're extending. See [eslintrc.js](https://github.com/KanoComputing/eslint-config-kano/blob/master/eslintrc.js) for more information.

## Adding Kano ESLint config to your project

Add the following dev-depencencies:

```bash
npm i --save-dev eslint eslint-config-kano eslint-plugin-import eslint-plugin-html
```

Create an eslint configuration file in your repo `.eslintrc.js`:

```js
module.exports = {
    extends: "kano",
    rules: [
        /* add any project-specific rules */
    ]
};
```

Then you'll need to configure your editor to run eslint using the project configuration.

## VSCode Configuration

Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) from the VS Code marketplace.

In User Settings, set the following:

```json
{
    "javascript.validate.enable": false
}
```

This will disable the default javascript linter to avoid conflicts with eslint. If you have jshint or jscs installed, make sure to disable those as well.

Restart VSCode and you should be all set!

## Atom Configuration

Install the [linter-eslint](https://atom.io/packages/linter-eslint) package. It will pick up the project configuration by default.

Make sure to disable `linter-jshint`, `linter-jscs` and other linters that might give you conflicting messages.

## Sublime Text Configuration

Somebody will need to fill this in.