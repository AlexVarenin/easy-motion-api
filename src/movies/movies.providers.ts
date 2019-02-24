import { Connection } from 'mongoose';
import { MovieSchema } from './schemas/movie.schema';

export const moviesProviders = [
  {
    provide: 'MovieModelToken',
    useFactory: (connection: Connection) => connection.model('Movie', MovieSchema),
    inject: ['DbConnectionToken'],
  },
];