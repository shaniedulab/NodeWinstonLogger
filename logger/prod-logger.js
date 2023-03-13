const {format, transports ,createLogger} =require('winston');
const {timestamp,printf,combine,errors,json}=format

function buildDProdLogger(){    
    return createLogger({
        level: 'debug',
        format:combine(
            // format.colorize(),
            timestamp(),
            errors({stack:true}),
            json(),
        ) ,
        defaultMeta:{service: 'user-service'},
        transports:[new transports.Console()]
    })
}

module.exports=buildDProdLogger