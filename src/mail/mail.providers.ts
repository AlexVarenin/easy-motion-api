import { Connection } from 'mongoose';
import { MailSchema } from './schemas/mail.schema';

export const mailProviders = [
  {
    provide: 'MailModelToken',
    useFactory: (connection: Connection) => connection.model('Mail', MailSchema),
    inject: ['DbConnectionToken'],
  },
];