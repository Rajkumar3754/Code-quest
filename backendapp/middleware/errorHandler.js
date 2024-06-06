const {constant} = require('../constant')




const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500; // Use res.statusCode or default to 500


switch (statusCode) {
    case constant.VALIDATION_ERROR :
        res.status(statusCode).json({ title:'validation failed', message: err.message, stack: err.stack });
        break;


        case constant.NOTFOUND:
            res.status(statusCode).json({ title:'Not found', message: err.message, stack: err.stack });
            break;

            case constant.FORBIDDEN:
            res.status(statusCode).json({ title:'forbidden', message: err.message, stack: err.stack });
            break;



            case constant.UNAUTHORIZED:
            res.status(statusCode).json({ title:'unauthorized', message: err.message, stack: err.stack });
            break;

            case constant.SERVER_ERROR:
            res.status(statusCode).json({ title:'server error', message: err.message, stack: err.stack });
            break;


    default:

    console.log('no error all are good')
        break;
}

    
}   
module.exports = errorHandler;
