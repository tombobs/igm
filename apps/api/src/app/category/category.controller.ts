import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ICategory } from '@rly.gd/api-interfaces';
import { Category } from './category';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

  constructor(private categoryService: CategoryService) {
  }
  
  @Get('/')
  async find(): Promise<ICategory[]> {
    const categories = await this.categoryService.findWithHashtagCount();
    console.log(categories);
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

  @Post()
  @HttpCode(201)
  create(@Body() category: ICategory): Promise<Category> {
    return this.categoryService.addCategory(category);
  }
}
