import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';
import { Movie } from './interfaces/movie.interface';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMoviesDto: CreateMovieDto) {
    return this.moviesService.create(createMoviesDto);
  }

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() updateMoviesDto: UpdateMovieDto) {
    return this.moviesService.updateById(id, updateMoviesDto)
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return this.moviesService.deleteById(id);
  }
}