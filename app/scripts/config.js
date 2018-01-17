const conf = require('./conf.json');
let theme = document.getElementById('theme');
theme.setAttribute('href', `styles/${conf.theme}.css`);
