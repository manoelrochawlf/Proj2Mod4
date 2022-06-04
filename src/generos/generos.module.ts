import { Module } from '@nestjs/common';
import { generosService } from './generos.service';
import { generosController } from './generos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [generosController],
  providers: [generosService],
})
export class generosModule {}
