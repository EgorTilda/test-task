# README

## Установка

```bash
npm i

npm start

npm run build

./public - сборка
```

## В проекте использован Gulp и SASS (SCSS):

- Обработка изображений (сжатие, генерация webp)
- Обработка шрифтов (TTF -> WOFF / WOFF2)
- Обработка SCSS, минификация стилей, autoprefixer

## Форма

Создана с применением CSS Grid, возможно добавлять новые поля без риска поломки верстки

## Шапка (header)

Фиксирована при скролле и меняет цвет

## Оптимизация по метрикам Google PageSpeed Insights / Lighthouse

Аудит по метрикам: 95+ на мобильных / десктопах, но индексация отключена, так как тестовое задание

### Мобильные:

![PageSpeed Insights: Мобильные](/src/img/content/mobile-gps.jpg)

### Десктопы

![PageSpeed Insights: Десктопы](/src/img/content/desktop-gps.jpg)