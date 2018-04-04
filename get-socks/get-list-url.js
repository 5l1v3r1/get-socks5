const fetch = require('node-fetch').default;

const SOCKS_PAGE_URL = 'http://www.live-socks.net/search?max-results=1';

async function getListURL(){
    const res = await fetch(SOCKS_PAGE_URL);
    const html = await res.text();
    const listURL = html.match(/itemprop='name'>\n*<a\s*href='(.*?)'>/i)[1];
    return listURL;
}

module.exports = getListURL;