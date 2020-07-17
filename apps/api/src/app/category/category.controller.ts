import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ICategory, IUser } from '@rly.gd/api-interfaces';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { User } from '../users/user.decorator';
import { Category } from './category';
import { CategoryService } from './category.service';

@Controller('category')
@UseGuards(JwtAuthGuard)
export class CategoryController {

  constructor(private categoryService: CategoryService) {
  }

  @Get('/')
  async find(@Query() {ids}: {ids?: number[]} = {},
             @User() user: IUser): Promise<ICategory[]> {

    return this.categoryService.find(user.id, ids);
  }

  @Put()
  update(@Body() category: ICategory,
         @User() user: IUser): Promise<Category> {

    category.user = user;
    return this.categoryService.updateCategory(category);
  }

  @Post()
  @HttpCode(201)
  create(@Body() category: ICategory,
         @User() user: IUser): Promise<Category> {

    category.user = user;
    return this.categoryService.addCategory(category);
  }

  @Delete('/:id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.categoryService.deleteCategory(id);
  }
}
