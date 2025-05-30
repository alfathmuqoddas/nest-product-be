import { Module } from '@nestjs/common';
import { TheatersService } from './theaters.service';
import { TheatersController } from './theaters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theater } from './entities/theater.entity';
import { Showtime } from 'src/modules/showtimes/entities/showtime.entity';
import { SlugifyModule } from '../slugify/slugify.module';

@Module({
  imports: [TypeOrmModule.forFeature([Theater, Showtime]), SlugifyModule],
  controllers: [TheatersController],
  providers: [TheatersService],
  exports: [TheatersService],
})
export class TheatersModule {}
