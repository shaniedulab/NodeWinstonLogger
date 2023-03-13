const {format, transports ,createLogger} =require('winston');
const {timestamp,printf,combine,json}=format

function buildDevLogger(){
    const logFormat= printf(({level,message,timestamp,stack})=>{
        return `${timestamp} ${level}: ${stack || message}`
    })
    
    return createLogger({
        level: 'debug',
        format:combine(
            format.colorize(),
            timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
            format.errors({stack:true}),logFormat,
        ) ,
        defaultMeta:{service: 'user-service'},
        transports:[new transports.Console()]
    })
}

module.exports=buildDevLogger