# Ali Servis — Аренда погрузчиков в Алматы

Продакшн-реди лендинг для компании **Ali Servis** — аренда вилочных погрузчиков Mitsubishi Grendia и Komatsu в Алматы.

**Живой сайт:** [azian-ali-servis.vercel.app](https://azian-ali-servis.vercel.app)

---

## Стек

- **Next.js 14** (App Router) — фреймворк
- **TypeScript** (strict mode) — типизация
- **Tailwind CSS** + `tailwindcss-animate` — стили
- **Framer Motion** — анимации при скролле
- **lucide-react** — иконки

---

## Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/alishkakmnv/azian-ali-servis.git
cd azian-ali-servis

# Установить зависимости
npm install

# Создать .env.local из шаблона
cp .env.example .env.local

# Запустить локально (порт 3000)
npm run dev
```

Открыть в браузере: `http://localhost:3000`

---

## Переменные окружения (`.env.local`)

| Переменная | По умолчанию | Описание |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://azian-ali-servis.vercel.app` | URL сайта для SEO/OG |
| `NEXT_PUBLIC_PHONE_PRIMARY` | `+77071444348` | Основной телефон (E.164) |
| `NEXT_PUBLIC_PHONE_DISPLAY_PRIMARY` | `+7 707 144 43 48` | Основной телефон (отображение) |
| `NEXT_PUBLIC_PHONE_SECONDARY` | `+77021444348` | Доп. телефон |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `77071444348` | WhatsApp (без +) |

> Все переменные с `NEXT_PUBLIC_` безопасны на фронтенде — не содержат секретов.

---

## Деплой на Vercel

1. Подключить репозиторий в [vercel.com/new](https://vercel.com/new)
2. Framework Preset: **Next.js** (определяется автоматически)
3. Переменные окружения: добавить из `.env.example` при необходимости
4. Deploy — готово!

---

## Изображения

### Фото клиента (в `/public/images/fleet/`)

Разместить фото из материалов клиента под следующими именами:

| Файл | Описание |
|---|---|
| `mitsubishi-warehouse.jpg` | Зелёный погрузчик Mitsubishi с грузом Midea — **для Hero** |
| `mitsubishi-container.jpg` | Зелёный погрузчик заезжает в контейнер — **для карточки 2.5т** |
| `mitsubishi-garage.jpg` | Зелёный погрузчик в гараже — **для карточки 1.5т** |
| `komatsu-pair.jpg` | Два жёлтых Komatsu — **для карточки 3т** |

После добавления файлов — обновить `HERO_IMAGE` в `Hero.tsx` и массив `fleet[].image` в `Fleet.tsx`:

```typescript
// Пример замены в Fleet.tsx:
image: '/images/fleet/mitsubishi-garage.jpg',
// Убрать Unsplash URL, добавить локальный путь
```

### Текущие изображения (Unsplash-заглушки)

| Компонент | URL |
|---|---|
| Hero | `unsplash.com/photo-1581092335397` — склад с погрузчиком |
| Карточка 1.5т и 2.5т | `unsplash.com/photo-1558618666` — промышленный |
| Карточка 3т | `unsplash.com/photo-1504307651254` — строительный |

---

## Дизайн-система

### Переключение акцентного цвета

В `src/app/globals.css` два варианта:

- **Вариант B (активный)** — `#10B981` зелёный (под Mitsubishi)
- **Вариант A (закомментирован)** — `#F5A623` янтарный (под Komatsu)

Переключение: раскомментировать нужный блок `:root` в `globals.css`.

---

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx        # Root layout, шрифты, SEO, JSON-LD LocalBusiness
│   ├── page.tsx          # Главная страница
│   └── globals.css       # CSS переменные акцента
├── components/
│   ├── Navbar.tsx        # Sticky nav с backdrop-blur
│   ├── Hero.tsx          # Hero с фото и CTA
│   ├── Fleet.tsx         # Карточки техники
│   ├── Pricing.tsx       # Как считается стоимость
│   ├── UseCases.tsx      # Для каких работ
│   ├── WhyUs.tsx         # Почему Ali Servis
│   ├── Reviews.tsx       # Отзывы с 2GIS
│   ├── Contacts.tsx      # Контакты + Google Maps
│   ├── CtaBanner.tsx     # Финальный CTA
│   ├── Footer.tsx        # Футер
│   └── ui/
│       └── AnimatedSection.tsx  # Framer Motion обёртки
└── lib/
    └── utils.ts          # Утилиты, телефоны, WhatsApp links
```

---

Разработка: [Azian Company](https://azian.kz)
