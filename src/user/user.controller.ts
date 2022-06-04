import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';


@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({
    summary:'Visualizar todos os usúarios!'
  })
  findAll(){
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary:'Visualizar um usuário!'
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary:'Criar um usuário!'
  })
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary:'Atualizar um usuário!'
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto){
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary:'Deletar um usuário!'
  })
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
