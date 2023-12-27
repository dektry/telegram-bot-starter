import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { session } from 'telegraf';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUpdate } from './app.update';
import { StartScene } from './start-scene.scene';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_TOKEN,
      middlewares: [session()], // in order to use scenes, we need to use session middleware
    }),
  ],
  controllers: [AppController],
  providers: [AppService, StartScene, AppUpdate],
})
export class AppModule {}
