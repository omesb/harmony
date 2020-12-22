const fs = require('fs');
const mustache = require('mustache');

const manifest = require(`${__dirname}/../package.json`);
const template = JSON.stringify(require(`${__dirname}/template.json`));
const colorSchemes = fs.readdirSync(`${__dirname}/color-schemes`).map((file) => {
    return {
        filename: file.split('.json')[0].toLowerCase(),
        scheme: require(`${__dirname}/color-schemes/${file}`),
    };
});

createThemes();

function createThemes() {
    const manifestThemes = [];
    colorSchemes.forEach((schemeJSON) => {
        const theme = JSON.parse(mustache.render(template, schemeJSON.scheme));
        theme.colors = require(`${__dirname}/${schemeJSON.scheme.type}.json`);
        fs.writeFileSync(`${__dirname}/../themes/${schemeJSON.filename}-color-theme.json`, JSON.stringify(theme, null, 4));
        manifestThemes.push({
            label: schemeJSON.scheme.name,
            uiTheme: schemeJSON.scheme.type == 'dark' ? 'vs-dark' : 'vs',
            path: `./themes/${schemeJSON.filename}-color-theme.json`,
        });
    });
    manifest.contributes.themes = manifestThemes;
    fs.writeFileSync(`${__dirname}/../package.json`, JSON.stringify(manifest, null, 4))
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
