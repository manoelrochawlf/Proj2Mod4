import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { jogosModule } from './jogos/jogos.module';
import { generosModule } from './generos/generos.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProfilesModule } from './profiles/profiles.module';
import { JogosGenerosModule } from './jogos_generos/jogos_generos.module';
import { ProfilesJogosModule } from './profiles_jogos/profiles_jogos.module';

@Module({
  imports: [jogosModule, generosModule, UserModule, ProfilesModule,JogosGenerosModule, ProfilesJogosModule, PrismaModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
