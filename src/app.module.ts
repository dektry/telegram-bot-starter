import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_TOKEN,
      // middlewares: [session({ store })],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
