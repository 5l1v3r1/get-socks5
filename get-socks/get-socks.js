const fetch = require('node-fetch').default;

async function getSocks(url){
    const res = await fetch(url);
    const html = await res.text();
    const socks = html.match(/wrap="hard">([\s\S]*?)<\/textarea>/i)[1].trim().split('\n').map(sock => sock.trim()).join('\n');
    return socks;
}

module.exports = getSocks;