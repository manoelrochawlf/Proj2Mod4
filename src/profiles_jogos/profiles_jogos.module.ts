import { Module } from '@nestjs/common';
import { ProfilesJogosService } from './profiles_jogos.service';
import { ProfilesJogosController } from './profiles_jogos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfilesJogosController],
  providers: [ProfilesJogosService]
})
export class ProfilesJogosModule {}
