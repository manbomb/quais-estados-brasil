const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(
    path.join(__dirname, 'build'),
    {
        repo: 'https://github.com/manbomb/manbomb.github.io.git',
        branch: 'quais-estados-brasil'
    },
    function (err) {
        console.log('error', err);
    }
);