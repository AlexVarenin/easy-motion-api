import {ExpressMiddleware, Middleware, NestMiddleware} from "@nestjs/common";
 
@Middleware()
export class CorsMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (req, res, next) => {
            let allowedOrigins = ['http://localhost:3000', 'https://easymotion-studio.firebaseapp.com'];
            if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
                res.header('Access-Control-Allow-Origin', req.header('Origin'));
                res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            }
 
            next();
        };
    }
}