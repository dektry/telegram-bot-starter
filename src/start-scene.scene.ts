import { Ctx, Hears, Scene, SceneEnter } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

@Scene('start')
export class StartScene {
  @SceneEnter()
  async enter(@Ctx() ctx: SceneContext) {
    await ctx.reply('You entered start scene', {
      reply_markup: {
        keyboard: [[{ text: 'Test' }], [{ text: 'Back' }]],
        resize_keyboard: true,
      },
    });
  }

  @Hears('Test')
  async test(@Ctx() ctx: SceneContext) {
    await ctx.reply('You pressed Test');
  }

  @Hears('Back')
  async back(@Ctx() ctx: SceneContext) {
    await ctx.reply('You pressed Back');
  }
}
