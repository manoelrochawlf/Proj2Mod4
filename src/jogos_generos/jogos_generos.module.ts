import { Module } from '@nestjs/common';
import { JogosGenerosService } from './jogos_generos.service';
import { JogosGenerosController } from './jogos_generos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [JogosGenerosController],
  providers: [JogosGenerosService]
})
export class JogosGenerosModule {}
