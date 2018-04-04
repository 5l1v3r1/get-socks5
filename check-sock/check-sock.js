const WebSocket = require('ws');
const SocksProxyAgent = require('socks-proxy-agent');
const {appendFileSync} = require('fs');

const TEST_WS = 'ws://echo.websocket.org'; // WebSocket for testing (demo/examples)

process.on('uncaughtException', err => {}); // Bypass 'socks-proxy-agent' error when connection fails

function checkSock(sock, file){
    const ws = new WebSocket(TEST_WS, {
        agent: new SocksProxyAgent(`socks://${sock}`)
    });
    ws.onopen = function(){
        if(ws.readyState === WebSocket.OPEN){
            appendFileSync(file, `${sock}\n`);
            this.close();
        }
    };
    ws.onerror = function(err){
        this.close();
    };
}

module.exports = checkSock;