# Kano Javascript Style Guide

Following [Paul's proposal](https://github.com/KanoComputing/rfc/issues/5) in January 2018,
we agreed to adopt new Javascript style that makes more sense as we use more ES6 features.
This will apply to all new projects. We'll be moving old code to the new style as we go.

## Style Guide

We use the [Airbnb Style Guide](https://github.com/airbnb/javascript) and evolve the configuration with our own preferences

## ESLint Configuration

The AirBnB guys provide an ESLint config that we're extending. See [eslintrc.js](https://github.com/KanoComputing/eslint-config-kano/blob/master/eslintrc.js) for more information.

## Adding Kano ESLint config to your project

Add the following dev-depencencies:

```bash
yarn add --dev @kano/eslint-config
```

Create an eslint configuration file in your repo `.eslintrc.js`:

```js
module.exports = {
    extends: "kano",
    rules: {
        /* add any project-specific rules */
    }
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

For Sublime Text, install the following packages

* [SublimeLinter](http://www.sublimelinter.com/en/latest/)
* [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint)

Make sure to install the packages in that order, otherwise the eslint plugin won't be picked up.

The default configuration is enough to pick up both `eslint` and `.eslintrc.js` from the project folder.
