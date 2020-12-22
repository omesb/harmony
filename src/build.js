const fs = require('fs');
const mustache = require('mustache');

const manifest = require('../package.json');
const template = JSON.stringify(require(`./template.json`));
const colorSchemes = fs.readdirSync('./color-schemes').map((file) => {
    return {
        filename: file.split('.json')[0].toLowerCase(),
        scheme: require(`./color-schemes/${file}`),
    };
});

createThemes();

// for (themeName of themeNames) {
//   const content = require(`${__dirname}/${themeName}.json`);
//   const theme = mustache.render(template, { ...content, ...globals });
//   fs.writeFileSync(`${__dirname}/../../themes/${themeName}.json`, theme);
// }

function createThemes() {
    const manifestThemes = [];
    colorSchemes.forEach((schemeJSON) => {
        const theme = JSON.parse(mustache.render(template, schemeJSON.scheme));
        theme.colors = require(`./${schemeJSON.scheme.type}.json`);
        fs.writeFileSync(`../themes/${schemeJSON.filename}-color-theme.json`, JSON.stringify(theme, null, 4));
        manifestThemes.push({
            label: schemeJSON.scheme.name,
            uiTheme: schemeJSON.scheme.type == 'dark' ? 'vs-dark' : 'vs',
            path: `./themes/${schemeJSON.filename}-color-theme.json`,
        });
    });
    manifest.contributes.themes = manifestThemes;
    fs.writeFileSync(`../package.json`, JSON.stringify(manifest, null, 4))
}

function updateManifest(params) {}

l = {
    themes: [
        {
            label: 'Affinity',
            uiTheme: 'vs-dark',
            path: './themes/affinity.json',
        },
    ],
};
