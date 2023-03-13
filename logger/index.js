const buildDevLogger = require("./dev-logger");
const buildDProdLogger = require('./prod-logger')

let logger=null;
if(process.env.NODE_ENV === 'development'){
    logger=buildDevLogger();
}else{
    logger=buildDProdLogger();
}

module.exports=logger