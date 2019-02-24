import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(@Inject('MovieModelToken') private readonly movieModel: Model<Movie>) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    return await createdMovie.save();
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieModel.find().exec();
  }

  async updateById(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
  	await this.movieModel.findByIdAndUpdate(id, updateMovieDto).exec();
    return await this.movieModel.findById(id).exec();
  }

  async deleteById(id: string): Promise<Movie> {
  	return await this.movieModel.findByIdAndRemove(id).exec();
  }
}