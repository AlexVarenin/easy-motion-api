import {Injectable, NestMiddleware, MiddlewareFunction} from "@nestjs/common";
 
@Injectable()
export class CorsMiddleware implements NestMiddleware {
    resolve(): MiddlewareFunction {
        return (req, res, next) => {
        	if (req.method === 'OPTIONS') {
	        	const headers = {};
				headers["Access-Control-Allow-Origin"] = "*";
				headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
				headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
				res.writeHead(200, headers);
				res.end();
        	} else {
        		res.header('Access-Control-Allow-Origin', '*');
	            res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
	            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	            next();
        	}
        };
    }
}