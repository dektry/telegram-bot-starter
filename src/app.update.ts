import { Update, Ctx, Start, On, Hears } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/typings/scenes/context';

@Update()
export class AppUpdate {
  @Start()
  async start(@Ctx() ctx: SceneContext) {
    await ctx.reply('Welcome to new bot!');
  }

  @Hears('scene')
  async scene(@Ctx() ctx: SceneContext) {
    await ctx.reply("I'll redirect you to the scene");
    await ctx.scene.enter('start');
  }

  @On('sticker')
  async onSticker(@Ctx() ctx: SceneContext) {
    const stickers = [
      'CAACAgQAAxkBAAICOWU3xeQVdaMGxGTfs8cTqj2Vnq82AAIaAQACa65eCbuUTlT8vkRjMAQ',
      'CAACAgQAAxkBAAICQWU3xlopwcvxJAlwyiuPQ4wXlQABTAACIQEAAmuuXgmhAm0JFBNUtzAE',
      'CAACAgIAAxkBAAICQ2U3xmqUy-pYq-CqdmO2UScV2oXIAAIlAAOTlD0NYC7WpLBLkg4wBA',
      'CAACAgQAAxkBAAICRWU3xnf2PWWg6Muh-OcgiYmnBi0qAAIyAQACa65eCZuVhv2xOyQZMAQ',
      'CAACAgQAAxkBAAICR2U3xoqYM9RDh0w0gxmwB7tPlyanAAIZAQACa65eCUBo-BgW5-ydMAQ',
      'CAACAgIAAxkBAAICSWU3xptr3aoRASKFGcU3siwpdBP8AALrFwACOFvQS2ytXSeKU4UdMAQ',
      'CAACAgQAAxkBAAICS2U3xqvhIuGKe7eqaJH-mLJZ74czAAIlDQAC5-j7Ava4cMR920zWMAQ',
    ];
    const sticker = stickers[Math.floor(Math.random() * stickers.length)];
    await ctx.replyWithSticker(sticker);
  }
}
