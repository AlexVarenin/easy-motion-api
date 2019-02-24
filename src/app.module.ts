import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MailModule } from './mail/mail.module';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';

@Module({
  imports: [
	MoviesModule,
	MailModule,
	MailerModule.forRoot({
		transport: 'smtps://alexvarenin@gmail.com:zdravstvyialexandr2257@smtp.gmail.com',
		defaults: {
			from:'"nest-modules" <modules@nestjs.com>',
		},
	}),
  ],
})
export class AppModule {}
