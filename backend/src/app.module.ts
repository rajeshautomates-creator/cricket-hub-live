import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { MatchesModule } from './matches/matches.module';
import { PaymentsModule } from './payments/payments.module';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, TournamentsModule, MatchesModule, PaymentsModule, GatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
