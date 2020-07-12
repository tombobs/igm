import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { ICategory } from '@rly.gd/api-interfaces';
import { DeleteResult } from 'typeorm';
import { Hashtag } from '../hashtag/hashtag';
import { Category } from './category';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

  constructor(private categoryService: CategoryService) {
  }

  @Get('/')
  async find(@Query('ids') ids?: string): Promise<ICategory[]> {
    console.log(ids);
    const idArray = ids && ids.split(',').map(id => Number(id));
    const categories = await this.categoryService.findWithHashtagCount(idArray);
    return categories;
  }

  @Get('/count')
  async getCount(): Promise<number> {
    const results = await this.find();
    return results.length;
  }

  @Get('/:id')
  findById(@Param('id') id: string): Promise<ICategory> {
    return this.categoryService.findById(id);
  }

  @Put()
  update(@Body() category: ICategory): Promise<Category> {
    return this.categoryService.updateCategory(category);
  }

  @Post()
  @HttpCode(201)
  create(@Body() category: ICategory): Promise<Category> {
    return this.categoryService.addCategory(category);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.categoryService.deleteCategory(Number(id));
  }
}
