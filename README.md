
## Установка зависимостей 

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Конфигурация базы данных

необходимо заменить данные в файле ./src/data-source.ts на данные текущей базы данных postgre (host , port, username, password, database)
а также загрузить в базу данных бекап ./DB_Backup для корректной работы перечислений (типы клавиатур и список каналов)
(если не загружать бэкап, таблицы создаются автоматически, но не содержат никаких данных)

## Запуск сервера

Запуск сервера происходит на `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Комментарии

Апи работает, но нет путей для получения/добавления кнопок клавиатуры, так как они добавляются вместе с сообщениями каналов 
Апи для нужна для корректной работы https://github.com/Bumerbun/EvaTestTask