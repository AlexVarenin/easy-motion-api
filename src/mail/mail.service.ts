import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Mail } from './interfaces/mail.interface';
import { CreateMailDto } from './dto/create-mail.dto';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class MailService {
  constructor(
    @Inject('MailModelToken') private readonly mailModel: Model<Mail>,
    private readonly mailerService: MailerService) {}

  async create(createMailDto: CreateMailDto): Promise<Mail> {
    const createdMail = new this.mailModel(createMailDto);
    await this
      .mailerService
      .sendMail({
        to: process.env["EMAIL"],
        from: 'noreply@easy-motion.com',
        subject: `Curstomer request [${createMailDto.name}]`,
        html: `
          <p><b>customer: ${createMailDto.name}</b></p>
          <p>contacts: ${createMailDto.contacts}</p>
          <p>${createMailDto.text}</p>
        `,
      })
    return await createdMail.save();
  }
}