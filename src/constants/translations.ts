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
    stack: {
      eyebrow: "Стек",
      titleBefore: "Стек,",
      titleHighlight: "на котором",
      titleAfter: "строю в продакшене",
      description:
        "Подбираю инструменты под задачу. Не накручиваю стек ради хайпа — беру то, что даёт результат и не подводит под нагрузкой.",
      categories: {
        core: {
          name: "Ядро",
          tagline: "Реактивные интерфейсы, типобезопасность, SSR.",
        },
        styling: {
          name: "Стили и анимация",
          tagline: "От жёсткой сетки до плавных микро-взаимодействий.",
        },
        stateData: {
          name: "Состояние и данные",
          tagline: "Серверные данные, локальное состояние, кэш.",
        },
        tooling: {
          name: "Окружение и инструменты",
          tagline: "Сборка, дизайн, контроль версий, совместная работа.",
        },
      },
    },
    projects: {
      eyebrow: "Проекты",
      titleBefore: "Работы,",
      titleHighlight: "которыми",
      titleAfter: "горжусь",
      description:
        "От корпоративных SaaS до маркетплейсов и лендингов — коротко о том, что разрабатывал и поддерживал в продакшене.",
      moreLabel: "Ещё работы",
      empty: "В этой категории пока пусто.",
      filters: {
        all: "Все",
        ecommerce: "E-commerce",
        webapp: "Веб-приложения",
        landing: "Лендинги",
      },
      categoryLabels: {
        ecommerce: "E-commerce",
        webapp: "Веб-приложение",
        landing: "Лендинг",
      },
      cta: {
        live: "Открыть",
      },
      outcomeLabel: "Что сделал",
      items: {
        unisender: {
          name: "Unisender",
          problem:
            "Сервис рассылок федерального масштаба, миллионы писем в сутки. Любое обновление UI рискует сломать привычные сценарии маркетологов.",
          outcome:
            "Разрабатывал и поддерживал интерфейсы редактора писем, автоматизаций и кабинета — выкатывал улучшения, не ломая существующие сценарии.",
        },
        uncoEco: {
          name: "UNCO Eco-Point",
          problem:
            "Маркетплейс «фермер ↔ кафе» с пунктами выдачи. Нужен был быстрый и понятный интерфейс для партнёров с разным уровнем диджитал-грамотности.",
          outcome:
            "Разработал фронтенд маркетплейса на Next.js и React — витрину, кабинеты партнёров, мультиязык и поток оформления заказов.",
        },
        issDigital: {
          name: "ISS.digital",
          problem:
            "Корпоративная группа с портфелем B2B-продуктов (HappyDesk, Паркоматика и др.). Сайту нужна была единая презентация продуктов с разной механикой.",
          outcome:
            "Разрабатывал и поддерживал маркетинговый сайт и продуктовые страницы, привёл подачу к единому визуальному языку.",
        },
        foodFutures: {
          name: "UNCO Food Futures",
          problem:
            "Pre-order сервис свежих продуктов от фермеров. Покупателю нужно быстро понять формат «карты» и оформить её без лишних кликов.",
          outcome:
            "Разработал клиентскую часть на Next.js — витрину, корзину, оформление карт, локации эко-пунктов и мультиязык.",
        },
        pinkit: {
          name: "Pinkit",
          problem:
            "Платформа интеграций для Bitrix24 и amoCRM. Главная задача интерфейса — провести клиента от «у меня хаос» до готового сценария за несколько шагов.",
          outcome:
            "Разрабатывал интерфейсы конфигуратора интеграций, страницы шаблонов и калькулятор стоимости — снизил порог входа для новых пользователей.",
        },
        overseer: {
          name: "Overseer",
          problem:
            "SaaS-мониторинг сайтов. Админу нужен интерфейс, в котором за 10 секунд видно — что упало, где и насколько критично.",
          outcome:
            "Разработал кабинет мониторинга: дашборд статусов, настройку проверок, историю инцидентов и интерфейс алертов.",
        },
        taigaClub: {
          name: "Taiga Club",
          problem:
            "Активный туризм по России и Азии — десятки направлений и сезонов. Сайту нужна эмоция «хочу туда», а каталогу — понятная навигация.",
          outcome:
            "Разработал и развивал лендинги и страницы туров, добавил фильтры по направлениям и интерактивные элементы под бренд.",
        },
        premiaTogether: {
          name: "Премия #МЫВМЕСТЕ",
          problem:
            "Премия с 14+ номинациями и многоступенчатым отбором. Сайт должен одновременно вдохновлять и проводить участников через сложный процесс подачи.",
          outcome:
            "Разработал страницы номинаций, лендинги-объяснялки этапов и формы подачи заявок.",
        },
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
    stack: {
      eyebrow: "Stack",
      titleBefore: "The stack",
      titleHighlight: "I ship",
      titleAfter: "with in production",
      description:
        "I pick tools to fit the problem — no hype, no overengineering. Just what gets the job done and holds up under load.",
      categories: {
        core: {
          name: "Core",
          tagline: "Reactive UI, type safety, SSR.",
        },
        styling: {
          name: "Styling & motion",
          tagline: "From strict grids to smooth micro-interactions.",
        },
        stateData: {
          name: "State & data",
          tagline: "Server data, local state, caching.",
        },
        tooling: {
          name: "Environment & tools",
          tagline: "Build, design, version control, collaboration.",
        },
      },
    },
    projects: {
      eyebrow: "Projects",
      titleBefore: "Work",
      titleHighlight: "I've shipped",
      titleAfter: "in production",
      description:
        "From corporate SaaS to marketplaces and landings — a quick look at what I've built and maintained in production.",
      moreLabel: "More work",
      empty: "Nothing in this category yet.",
      filters: {
        all: "All",
        ecommerce: "E-commerce",
        webapp: "Web apps",
        landing: "Landings",
      },
      categoryLabels: {
        ecommerce: "E-commerce",
        webapp: "Web app",
        landing: "Landing",
      },
      cta: {
        live: "Visit",
      },
      outcomeLabel: "What I did",
      items: {
        unisender: {
          name: "Unisender",
          problem:
            "Email-marketing service at federal scale — millions of sends a day. Any UI shift risks breaking flows marketers depend on.",
          outcome:
            "Built and maintained editor, automation and dashboard screens — shipped improvements without regressing flows existing customers rely on.",
        },
        uncoEco: {
          name: "UNCO Eco-Point",
          problem:
            "A farmer-to-café marketplace with pickup points. The interface had to feel obvious for partners across the digital-literacy spectrum.",
          outcome:
            "Built the marketplace frontend on Next.js and React — storefront, partner dashboards, multi-language support and order flow.",
        },
        issDigital: {
          name: "ISS.digital",
          problem:
            "A corporate group with a portfolio of B2B products (HappyDesk, Parkomatika and more). The site had to tell one coherent story across very different mechanics.",
          outcome:
            "Built and maintained the marketing site and product pages, unified the visual language across the portfolio.",
        },
        foodFutures: {
          name: "UNCO Food Futures",
          problem:
            "Pre-order service for fresh farm produce. Shoppers needed to grasp the \"card\" format and check out in as few clicks as possible.",
          outcome:
            "Built the customer-facing app on Next.js — storefront, checkout, eco-point locator and multi-language support.",
        },
        pinkit: {
          name: "Pinkit",
          problem:
            "An integration platform for Bitrix24 and amoCRM. The UI had to walk a customer from \"I have chaos\" to a working scenario in a handful of clicks.",
          outcome:
            "Built configurator screens, template pages and a pricing calculator — lowered the entry bar for new users.",
        },
        overseer: {
          name: "Overseer",
          problem:
            "An uptime monitoring SaaS. The dashboard had to surface what broke, where and how badly — at a glance.",
          outcome:
            "Built the monitoring console: status dashboard, check configuration, incident history and alert routing.",
        },
        taigaClub: {
          name: "Taiga Club",
          problem:
            "Adventure tours across Russia and Asia — dozens of destinations and seasons. The site had to evoke wanderlust and stay easy to navigate.",
          outcome:
            "Built and evolved landings and tour pages, added destination filters and brand-driven interactive elements.",
        },
        premiaTogether: {
          name: "#WeAreTogether Prize",
          problem:
            "An award with 14+ nominations and a multi-stage selection process. The site had to inspire and walk applicants through complex flows.",
          outcome:
            "Built nomination pages, explainer landings for each stage and the application forms.",
        },
      },
    },
    footer: {
      rights: "All rights reserved",
      builtWith: "Built with Next.js and Framer Motion",
    },
  },
} as const;
