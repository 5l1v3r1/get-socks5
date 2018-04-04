const getSocks5 = require('../index');
const {join} = require('path');

// The unique required argument is the path to the file to write the checked socks
getSocks5(join(__dirname, 'socks5', 'socks.txt'));