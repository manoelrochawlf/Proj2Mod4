import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenerosDto } from './dto/create-generos.dto';
import { UpdateGenerosDto } from './dto/update-generos.dto';
import { Generos } from './entities/generos.entity';

@Injectable()
export class generosService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Generos[]> {
    return this.prisma.generos.findMany();
  }

  findOne(id: string): Promise<Generos> {
    return this.prisma.generos.findUnique({ where: { id }});
  }

  create(dto: CreateGenerosDto): Promise<Generos> {
    const data: Generos = { ...dto };

    return this.prisma.generos.create({ data });
  }
  update(id: string, dto: UpdateGenerosDto): Promise<Generos> {
    const data: Partial<Generos> = { ...dto };

    return this.prisma.generos.update({
      where: { id },
      data,
    });
  }
  async delete(id: string) {
    await this.prisma.generos.delete({ where: { id } });
  }
}


