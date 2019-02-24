import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://motion-admin:motion-admin12@ds227654.mlab.com:27654/easy-motion-db'),
      /*await mongoose.connect(process.env.MONGOLAB_URI),*/
  },
];