import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { mailProviders } from './mail.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MailController],
  providers: [MailService, ...mailProviders]
})
export class MailModule {}
