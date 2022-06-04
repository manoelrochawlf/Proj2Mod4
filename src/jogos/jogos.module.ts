import { Module } from '@nestjs/common';
import { jogosService } from './jogos.service';
import { jogosController } from './jogos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [jogosController],
  providers: [jogosService]
})
export class jogosModule {}
