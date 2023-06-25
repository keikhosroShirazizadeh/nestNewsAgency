import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { NewsService } from '../service/news.service';
import { news } from '@prisma/client';
import { promises } from 'dns';
@Controller('/api/v1/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
  @Get()
  async getAllNews():Promise<news[]>{
    return this.newsService.getAllNews();
  }

  @Post()
  async createNews(@Body() postData:news): Promise<news>{
    return this.newsService.createNews(postData);
  }

  @Get(':id')
  async getNews(@Param('id') id: number): Promise<news |null>{
    return this.newsService.getNews(id);
  }

  @Put(':id')
  async updateNews(@Param('id') id: number, @Body() putData: news):Promise<news> {
    return this.newsService.updateNews(id, putData);
  }

  @Delete(':id')
  async deleteNews(@Param('id') id: number):Promise<news>{
    return this.newsService.deleteNews(id);
  }
}
