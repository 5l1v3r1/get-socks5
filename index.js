const {readFileSync, writeFileSync} = require('fs');
const getListURL = require('./get-socks/get-list-url');
const getSocks = require('./get-socks/get-socks');
const checkSock = require('./check-sock/check-sock');

function getSocks5(file){
    if(readFileSync(file, 'utf8')) writeFileSync(file, ''); // Clear file if it has data in it
    getListURL()
    .then(listURL => {
        getSocks(listURL)
        .then(socks => {
            const socksArray = socks.split('\n');
            for(const sock of socksArray) checkSock(sock, file);
        });
    });
}

module.exports = getSocks5;