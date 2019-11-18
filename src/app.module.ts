import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaController } from './media/media.controller';
import { MediaService } from './media/media.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, MediaController],
  providers: [AppService, MediaService],
})
export class AppModule {}
