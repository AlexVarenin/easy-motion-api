import { Controller, Post, Body } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { MailService } from './mail.service';
import { Mail } from './interfaces/mail.interface';

@Controller('send-email')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async create(@Body() createMailDto: CreateMailDto) {
    return this.mailService.create(createMailDto);
  }
}