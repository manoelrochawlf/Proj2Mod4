import { Delete, HttpCode, HttpStatus, Patch } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGenerosDto } from './dto/create-generos.dto';
import { UpdateGenerosDto } from './dto/update-generos.dto';
import { Generos } from './entities/generos.entity';
import { generosService } from './generos.service';


@ApiTags('generos')
@Controller('generos')
export class generosController {
  constructor(private readonly generosService: generosService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todas os gêneros',
  })
  findAll(): Promise<Generos[]> {
    return this.generosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um gênero',
  })
  findOne(@Param('id') id: string): Promise<Generos> {
    return this.generosService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Adicionar um gênero',
  })
  create(@Body() dto: CreateGenerosDto): Promise<Generos> {
    return this.generosService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um gênero pelo ID',
   })
  update(@Param('id') id: string, @Body() dto: UpdateGenerosDto): Promise<Generos> {
    return this.generosService.update(id, dto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover uma gênero pelo ID',
  })
  delete(@Param('id') id: string) {
    this.generosService.delete(id);
  }

}
