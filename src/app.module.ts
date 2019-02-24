import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MailModule } from './mail/mail.module';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';

@Module({
  imports: [
	MoviesModule,
	MailModule,
	MailerModule.forRoot({
		transport: 'smtps://easymotion3d@gmail.com:priveteasy@smtp.gmail.com',
		defaults: {
			from:'"easy-motion" <noreply@easy-motion.com>',
		},
	}),
  ],
})
export class AppModule {}
