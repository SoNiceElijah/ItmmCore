const { createClient } = require('webdav');
const config = require('../utils/config');

const manager = createClient("https://webdav.yandex.com", { username : config.YADISK_NAME, password : config.YADISK_PASS  });

module.exports = {
    directroty : (path) => { return manager.getDirectoryContents(path) },
    save : async (tmp) => {
        
    }
}