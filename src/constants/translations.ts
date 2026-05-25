export const translations = {
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      stack: "Стек",
      projects: "Проекты",
      contact: "Контакты",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    theme: {
      toggleToLight: "Включить светлую тему",
      toggleToDark: "Включить тёмную тему",
    },
    language: {
      label: "Язык",
      switchTo: "Сменить язык",
      ru: "Русский",
      en: "Английский",
      short: { ru: "РУ", en: "EN" },
    },
    brand: {
      name: "Denis Nasekin",
      role: "Frontend Developer",
    },
    hero: {
      status: "Открыт к новым проектам",
      lineOne: "Делаю",
      lineHighlight: "живые",
      lineTwo: "интерфейсы",
      lineThree: "на React и Next.js.",
      meta: "Production-ready · Pixel-perfect · Performance-first",
      ctaProjects: "Смотреть проекты",
      ctaGithub: "GitHub",
    },
    about: {
      eyebrow: "Обо мне",
      titleBefore: "Превращаю задачу",
      titleHighlight: "в готовый",
      titleAfter: "продукт",
      description:
        "Чистый код, аккуратная анимация, забота о скорости и деталях. Без воды.",
      bio: [
        [
          { kind: "text", value: "Работаю удалённо, в продакшене — " },
          { kind: "accent", value: "три года" },
          {
            kind: "text",
            value: ". Прошёл путь от лендингов до CRM-систем и крупных приложений.",
          },
        ],
        [
          { kind: "text", value: "В активе — " },
          { kind: "accent", value: "10+ сайтов и магазинов" },
          { kind: "text", value: ", " },
          { kind: "accent", value: "3 серьёзных продукта" },
          {
            kind: "text",
            value:
              ". Беру задачу — отдаю готовое: чистый код, аккуратная анимация, забота о скорости и деталях.",
          },
        ],
      ],
      stats: {
        experience: { target: 3, suffix: "+", label: "Года в проде" },
        websites: { target: 10, suffix: "+", label: "Сайтов и магазинов" },
        products: { target: 3, suffix: "", label: "Крупных продукта" },
      },
      projectTypes: {
        label: "Что строю",
        tags: ["Лендинги", "E-commerce", "CRM", "Веб-приложения"],
      },
    },
    footer: {
      rights: "Все права защищены",
      builtWith: "Сделано на Next.js и Framer Motion",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      stack: "Stack",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    theme: {
      toggleToLight: "Switch to light theme",
      toggleToDark: "Switch to dark theme",
    },
    language: {
      label: "Language",
      switchTo: "Switch language",
      ru: "Russian",
      en: "English",
      short: { ru: "RU", en: "EN" },
    },
    brand: {
      name: "Denis Nasekin",
      role: "Frontend Developer",
    },
    hero: {
      status: "Open to new projects",
      lineOne: "I craft",
      lineHighlight: "delightful",
      lineTwo: "interfaces",
      lineThree: "with React and Next.js.",
      meta: "Production-ready · Pixel-perfect · Performance-first",
      ctaProjects: "See projects",
      ctaGithub: "GitHub",
    },
    about: {
      eyebrow: "About me",
      titleBefore: "Turning briefs",
      titleHighlight: "into shipped",
      titleAfter: "products",
      description:
        "Clean code, polished motion, attention to speed and detail. No fluff.",
      bio: [
        [
          { kind: "text", value: "Remote-first, " },
          { kind: "accent", value: "three years" },
          {
            kind: "text",
            value:
              " shipping in production — from landings to CRM systems and large apps.",
          },
        ],
        [
          { kind: "text", value: "Under my belt — " },
          { kind: "accent", value: "10+ sites and stores" },
          { kind: "text", value: ", " },
          { kind: "accent", value: "3 major products" },
          {
            kind: "text",
            value:
              ". Take the task — ship it: clean code, polished motion, attention to speed and detail.",
          },
        ],
      ],
      stats: {
        experience: { target: 3, suffix: "+", label: "Years shipping" },
        websites: { target: 10, suffix: "+", label: "Sites & stores" },
        products: { target: 3, suffix: "", label: "Major products" },
      },
      projectTypes: {
        label: "What I build",
        tags: ["Landings", "E-commerce", "CRM", "Web apps"],
      },
    },
    footer: {
      rights: "All rights reserved",
      builtWith: "Built with Next.js and Framer Motion",
    },
  },
} as const;
