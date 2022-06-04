import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfilesJogosService } from './profiles_jogos.service';
import { CreateProfilesJogoDto } from './dto/create-profiles_jogo.dto';
import { UpdateProfilesJogoDto } from './dto/update-profiles_jogo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profiles-jogos')
@Controller('profiles-jogos')
export class ProfilesJogosController {
  constructor(private readonly profilesJogosService: ProfilesJogosService) {}

  @Post()
  create(@Body() createProfilesJogoDto: CreateProfilesJogoDto) {
    return this.profilesJogosService.create(createProfilesJogoDto);
  }

  @Get()
  findAll() {
    return this.profilesJogosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesJogosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfilesJogoDto: UpdateProfilesJogoDto) {
    return this.profilesJogosService.update(id, updateProfilesJogoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.profilesJogosService.delete(id);
  }
}
