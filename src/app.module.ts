import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MailModule } from './mail/mail.module';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { CorsMiddleware } from './middleware/cors.middleware';

@Module({
  imports: [
	MoviesModule,
	MailModule,
	MailerModule.forRoot({
		transport: process.env.TRANSPORT,
		defaults: {
			from:'"easy-motion" <noreply@easy-motion.com>',
		},
	}),
  ],
})

export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    	consumer
    		.apply(CorsMiddleware)
    		.forRoutes({path: '*', method: RequestMethod.ALL})
    }
}
