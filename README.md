# 🕐 WorldTimeUseState

**WorldTimeUseState** — это React-приложение для отображения текущего времени в разных часовых поясах с использованием хука `useState` для управления состоянием.

## 📖 Описание

Проект демонстрирует работу с состоянием в React через `useState`, а также показывает, как организовать компонентную архитектуру с папками `Clock` и `Menu`. Пользователь может выбирать часовой пояс из меню и видеть актуальное время.

## 🛠 Технологический стек

- **Язык**: TypeScript
- **Фреймворк**: React 18
- **Сборка**: Vite
- **Линтер**: ESLint (с конфигурацией для TypeScript и React)
- **Стили**: CSS (файлы `App.css`, `index.css`)
- **Дополнительно**: Vite-env.d.ts для типизации окружения

## 🚀 Установка и запуск

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/your-username/WorldTimeUseState.git
   cd WorldTimeUseState
   ```

2. **Установите зависимости**:
   ```bash
   npm install
   ```

3. **Запустите в режиме разработки**:
   ```bash
   npm run dev
   ```

4. **Откройте в браузере**:
   Перейдите по адресу `http://localhost:5173` (или другому, указанному в терминале).

## 📝 Примеры использования

### Базовый запуск
```bash
npm run dev
```

### Сборка для продакшена
```bash
npm run build
```

### Проверка кода линтером
```bash
npm run lint
```

## 📂 Структура проекта

```
WorldTimeUseState/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Clock/          # Компонент часов
│   │   └── Menu/           # Компонент меню выбора часового пояса
│   ├── App.css
│   ├── App.tsx             # Главный компонент приложения
│   ├── index.css
│   ├── main.tsx            # Точка входа
│   └── vite-env.d.ts       # Типы для Vite
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## 📄 Лицензия

Проект распространяется под лицензией **MIT**. Подробнее см. в файле `LICENSE`.