import { Delete, HttpCode, HttpStatus, Patch } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateJogosDto } from './dto/create-jogos.dto';
import { UpdateJogosDto } from './dto/update-jogos.dto';
import { Jogos } from './entities/jogos.entity';
import { jogosService } from './jogos.service';


@ApiTags('jogos')
@Controller('jogos')
export class jogosController {
  constructor(private readonly jogosService: jogosService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todas os jogos',
  })
  findAll(){
    return this.jogosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um jogo',
  })
  findOne(@Param('id') id: string){
    return this.jogosService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Adicionar um jogo',
  })
  create(@Body() dto: CreateJogosDto) {
    return this.jogosService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo pelo ID',
   })
  update(@Param('id') id: string, @Body() dto: UpdateJogosDto){
    return this.jogosService.update(id, dto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover uma jogo pelo ID',
  })
  delete(@Param('id') id: string) {
    this.jogosService.delete(id);
  }

}
