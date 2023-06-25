import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { news, Prisma } from '@prisma/client';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}
  async getAllNews(): Promise<news[]> {
    return this.prisma.news.findMany();
  }

  async getNews(id: number): Promise<news | null>{
    return this.prisma.news.findUnique({ where: { id: Number(id) } });
  }

  async createNews(data: news): Promise<news> {
    return this.prisma.news.create({
      data,
    });
  }

  async updateNews(id: number, data: object): Promise<news> {
    return this.prisma.news.update({ where: { id: Number(id) }, data: data });
  }

  async deleteNews(id: number): Promise<news> {
    return this.prisma.news.delete({ where: { id: Number(id) } });
  }

}
