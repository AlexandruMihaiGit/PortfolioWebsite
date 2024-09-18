import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WorksService } from './works.service'; 
import { Work } from './work.schema'; 

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Get() 
  async findAll(): Promise<Work[]> {
    return this.worksService.findAll();
  }

  @Post()
  async create(@Body() work: Work): Promise<Work> {
    return this.worksService.create(work);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() work: Work): Promise<Work> {
    return this.worksService.update(id, work);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.worksService.delete(id);
  }
}
