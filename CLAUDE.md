# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Назначение

Проект-портфолио на Next.js (App Router). Сейчас репозиторий находится на стадии скаффолдинга из `create-next-app`, реальный контент и компоненты будут добавляться позже.

## Стек

- **Next.js 16.2.6**, App Router (`src/app/`). Это мажорная версия с ломающими изменениями относительно предыдущих релизов — API, файловые конвенции и дефолты могут отличаться от того, что есть в твоих обучающих данных. Перед написанием кода под Next.js сверяйся с `node_modules/next/dist/docs/01-app/`, особенно по роутингу, фетчингу данных, кешированию и правилам Server/Client Components.
- **React 19.2.4**. В App Router компоненты по умолчанию серверные — директиву `"use client"` ставь только когда она реально нужна (стейт, эффекты, обработчики событий, браузерные API).
- **TypeScript 5**, strict mode, `moduleResolution: "bundler"`.
- Алиас путей: `@/*` → `./src/*`.
- Стили — **SCSS**. Пакет `sass` пока не установлен; перед первым импортом `.scss` его нужно поставить (`npm i -D sass`).

## Команды

```
npm run dev      # dev-сервер (http://localhost:3000)
npm run build    # production build
npm run start    # запуск production-сборки
npm run lint     # ESLint (flat config в eslint.config.mjs)
```

Тестового раннера в проекте нет.

## Планируемая структура `src/`

```
src/
├── app/          # роуты App Router (layout.tsx, page.tsx, route segments)
├── components/   # переиспользуемые UI-компоненты
├── sections/     # секции страниц портфолио (hero, about, projects и т.д.)
├── hooks/        # кастомные React-хуки (только клиентский код)
├── styles/       # глобальные SCSS-файлы (см. ниже)
├── utils/        # чистые утилиты / хелперы
├── assets/       # статические ассеты, импортируемые из JS/TSX (для public-only ассетов используй public/)
├── constants/    # константы и enum-подобные значения
└── types/        # общие TypeScript-типы
```

### Стили

- `src/styles/variables.scss` — переменные дизайн-системы (цвета, размеры, брейкпоинты, шрифты).
- `src/styles/mixins.scss` — миксины (медиа-запросы, типографика и т.п.).
- `src/styles/reset.scss` — CSS reset / нормализация.

Эти файлы пока не созданы — наполнение будет позже. Глобальные стили подключаются в `src/app/layout.tsx`; локальные стили компонентов — через CSS/SCSS Modules (`*.module.scss`). `variables.scss` и `mixins.scss` импортируй в модули через `@use` (с `@forward` через индексный файл, если нужно), а не через `@import` — он deprecated в Dart Sass.

## Текущее состояние `src/app/`

`layout.tsx` — корневой layout: подключает Geist + Geist Mono через `next/font/google` и пробрасывает их как CSS-переменные `--font-geist-sans` / `--font-geist-mono`. `globals.css` — глобальные стили (будут заменены/дополнены SCSS-структурой выше). `page.module.css` — модульные стили стартовой страницы.

## Конфиги

`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`. ESLint работает на flat config и расширяет `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.
