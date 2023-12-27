# Bot boilerplate

## Description

This is a boilerplate for a bot. It is based on [Nest](https://docs.nestjs.com/) and [Telegraf](https://telegraf.js.org/).

## Architecture
The business logic of the project is divided into distinct Scenes. Each Scene represents connected logical parts of the business logic. From a code point of view, these logic segments will be divided into separate modules.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Useful links

Telegram Bot API references: https://core.telegram.org/bots/api

**Project implemented using following boilerplate:** [https://github.com/dektry/hr-telegram-bot/tree/dev](https://github.com/dektry/hr-telegram-bot/tree/dev)

Documentation and example of usage of Telegraf.js: [https://github.com/feathers-studio/telegraf-docs](https://github.com/feathers-studio/telegraf-docs)

Documentation for Nest.js TelegrafModule: [https://nestjs-telegraf.vercel.app/](https://nestjs-telegraf.vercel.app/)

Example of implementing bot logic using Scenes: https://habr.com/ru/companies/tinkoff/articles/596287/