import { Module } from '@nestjs/common';
import { NewsService } from './service/news.service';
import { NewsController } from './controller/news.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [NewsService, PrismaService],
  controllers: [NewsController],
})
export class NewsModule {}
