<template>
  <!-- Single root div -->
  <div>
    <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold dark:text-white mb-2">
            {{ currentLanguage === 'ru' ? 'Binance Trailing Stop Bot' : 'Binance Trailing Stop Bot' }}
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            {{ currentLanguage === 'ru' 
              ? 'Автоматизированный ассистент трейдера для Trailing Stop Loss на Binance' 
              : 'Automated trading assistant for Trailing Stop Loss on Binance' }}
          </p>
        </div>

        <!-- Call to Action Cards (Top) -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 text-center md:text-left">
            <h3 class="text-xl font-bold dark:text-white mb-2">
              {{ currentLanguage === 'ru' ? 'Скачать код с GitHub' : 'Download from GitHub' }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ currentLanguage === 'ru' 
                ? 'Исходный код доступен бесплатно на GitHub под лицензией MIT.' 
                : 'Source code is available for free on GitHub under MIT license.' }}
            </p>
            <a href="https://github.com/ti-rudin/binance-tsl-bot" onclick="ym(65948110,'reachGoal','togithub')" target="_blank"
              class="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200">
              {{ currentLanguage === 'ru' ? 'Скачать' : 'Download' }}
              
            </a>
          </div>
          <div class="bg-green-100 dark:bg-green-900 rounded-lg p-6 text-center md:text-left">
            <h3 class="text-xl font-bold dark:text-white mb-2">
              {{ currentLanguage === 'ru' ? 'Услуга разворачивания' : 'Deployment Service' }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ currentLanguage === 'ru' 
                ? 'Предлагаем установку и настройку бота на вашем сервере (5000 руб).' 
                : 'We offer bot installation and setup on your server (5000 RUB).' }}
            </p>
            <button class="inline-block bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors duration-200"
              @click="openModal">
              {{ currentLanguage === 'ru' ? 'Заказать установку' : 'Order Setup' }}
            </button>
          </div>
        </section>

        <!-- Main Content -->
        <div class="space-y-8">
          <section>
            <div class="flex justify-center">
              <img src="/stoploss.gif" alt="Анимация Trailing Stop Loss" width="auto" />
            </div>
          </section>
        
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Описание' : 'Description' }}
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>{{ currentLanguage === 'ru' ? 'Ti TSL Bot' : 'Ti TSL Bot' }}</strong> 
              {{ currentLanguage === 'ru' 
                ? '— это автоматизированная система, обеспечивающая Trailing Stop Loss. Поддерживает одновременную торговлю по нескольким инструментам. Система использует асинхронную, событийно-ориентированную архитектуру с паттерном "Брокер-Воркер", что позволяет горизонтально масштабироваться. В качестве БД используется Redis для управления задачами, состоянием и блокировками.' 
                : 'is an automated system providing Trailing Stop Loss functionality. It supports simultaneous trading across multiple instruments. The system uses an asynchronous, event-driven architecture with a "Broker-Worker" pattern, enabling horizontal scalability. Redis is used as the database for task management, state handling, and locking mechanisms.' }}
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Ключевые особенности' : 'Key Features' }}
            </h2>
            <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>{{ currentLanguage === 'ru' 
                ? 'Минималистичный интерфейс: простота использования и легкость развертывания' 
                : 'Minimalist interface: Easy to use and deploy' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Горизонтальная масштабируемость: добавление воркеров для увеличения производительности' 
                : 'Horizontal scalability: Add workers to increase performance' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Реальное время: мгновенная реакция на рыночные изменения' 
                : 'Real-time: Instant reaction to market changes' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Гибкость: адаптация под различные торговые стратегии (скальпинг, свинг-трейдинг)' 
                : 'Flexibility: Adaptable to various trading strategies (scalping, swing trading)' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Поддержка неограниченного количества торговых пар' 
                : 'Support for unlimited trading pairs' }}</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Архитектура' : 'Architecture' }}
            </h2>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {{ currentLanguage === 'ru' ? 'Компоненты системы' : 'System Components' }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ currentLanguage === 'ru' 
                ? 'Все сервисы запускаются через Docker Compose:' 
                : 'All services are launched via Docker Compose:' }}
            </p>
            <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>{{ currentLanguage === 'ru' ? 'Node-RED Core' : 'Node-RED Core' }}</strong>: 
                {{ currentLanguage === 'ru' 
                  ? 'Управляет логикой, распределяет задачи, контролирует блокировки' 
                  : 'Manages logic, distributes tasks, controls locks' }}
              </li>
              <li>
                <strong>{{ currentLanguage === 'ru' ? 'Микросервисы' : 'Microservices' }}</strong>:
                <ul class="list-['-_'] list-inside ml-6 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>{{ currentLanguage === 'ru' ? 'Order Service - мониторинг и запись ордеров' : 'Order Service - order monitoring and recording' }}</li>
                  <li>{{ currentLanguage === 'ru' ? 'Balance Service - отслеживание балансов' : 'Balance Service - balance tracking' }}</li>
                  <li>{{ currentLanguage === 'ru' ? 'Price Service - обновление рыночных цен' : 'Price Service - market price updates' }}</li>
                  <li>{{ currentLanguage === 'ru' ? 'Telegram Bot Service - управление через Telegram' : 'Telegram Bot Service - Telegram control' }}</li>
                </ul>
              </li>
              <li>
                <strong>{{ currentLanguage === 'ru' ? 'Воркеры' : 'Workers' }}</strong>: 
                {{ currentLanguage === 'ru' 
                  ? 'Выполняют торговые задачи, легко масштабируются (можно добавлять неограниченное количество)' 
                  : 'Execute trading tasks, easily scalable (can add unlimited number)' }}
              </li>
              <li>
                <strong>{{ currentLanguage === 'ru' ? 'Фронтенд (Vue.js)' : 'Frontend (Vue.js)' }}</strong>: 
                {{ currentLanguage === 'ru' 
                  ? 'Веб-интерфейс управления с обновлением данных каждые 2 секунды' 
                  : 'Web management interface with data updates every 2 seconds' }}
              </li>
              <li>
                <strong>Redis</strong>: 
                {{ currentLanguage === 'ru' 
                  ? 'База данных для управления задачами, состоянием и блокировками.' 
                  : 'Database for task management, state handling, and locks.' }}
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Торговая стратегия' : 'Trading Strategy' }}
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ currentLanguage === 'ru' 
                ? 'Система отслеживает покупку и автоматически выставляет стоп-лосс ордер, двигая его ("трейлинг") вслед за ростом цены согласно заданным параметрам. По завершении сделки отправляет отчет в Telegram и переходит в режим ожидания новой покупки для данного инструмента.' 
                : 'The system tracks purchases and automatically places stop-loss orders, trailing them following price increases according to set parameters. Upon trade completion, it sends a report to Telegram and enters standby mode for new purchases of that instrument.' }}
            </p>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-3">
              {{ currentLanguage === 'ru' ? 'Адаптация стратегии' : 'Strategy Adaptation' }}
            </h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>{{ currentLanguage === 'ru' 
                ? 'Возможность увеличения ("докупки") позиции в реальном времени' 
                : 'Ability to increase ("add to") position in real-time' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Изменение настроек трейлинг-стопа (процент отступа, активация) без остановки работы бота' 
                : 'Change trailing stop settings (percentage, activation) without stopping the bot' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Автоматический пересчет и обновление стоп-лосс ордеров при изменении параметров или доборе позиции' 
                : 'Automatic recalculation and update of stop-loss orders when parameters change or position is added to' }}</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Установка и запуск' : 'Installation and Setup' }}
            </h2>
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {{ currentLanguage === 'ru' ? 'Требования' : 'Requirements' }}
                </h3>
                <ul class="list-disc list-inside space-y-1">
                  <li>{{ currentLanguage === 'ru' ? 'Сервер (рекомендуется: 2 ядра CPU, 4 Gb RAM)' : 'Server (recommended: 2 CPU cores, 4GB RAM)' }}</li>
                  <li>{{ currentLanguage === 'ru' ? 'Установленные Node.js (версия 22 или выше) и Docker / Docker Compose' : 'Installed Node.js (version 22 or higher) and Docker/Docker Compose' }}</li>
                  <li>{{ currentLanguage === 'ru' ? 'API-ключи от биржи Binance' : 'API keys from Binance exchange' }}</li>
                  <li>{{ currentLanguage === 'ru' ? 'BOT TOKEN и CHAT ID от Telegram (опционально, для уведомлений и управления)' : 'BOT TOKEN and CHAT ID from Telegram (optional, for notifications and control)' }}</li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {{ currentLanguage === 'ru' ? 'Инструкция по установке' : 'Installation Instructions' }}
                </h3>
                <pre class="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"><code class="language-bash"># 1. {{ currentLanguage === 'ru' ? 'Клонировать репозиторий' : 'Clone repository' }}
git clone https://github.com/ti-rudin/binance-tsl-bot.git
cd binance-tsl-bot

# 2. {{ currentLanguage === 'ru' ? 'Установить зависимости для фронтенда' : 'Install frontend dependencies' }}
cd front/
npm install
cd ..

# 3. {{ currentLanguage === 'ru' ? 'Установить зависимости для Node-RED' : 'Install Node-RED dependencies' }}
cd node-red/
npm install
cd ..

# 4. {{ currentLanguage === 'ru' ? 'Запустить все сервисы через Docker Compose' : 'Launch all services via Docker Compose' }}
docker-compose up -d</code></pre>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {{ currentLanguage === 'ru' ? 'Настройка' : 'Configuration' }}
                </h3>
                <p>
                  {{ currentLanguage === 'ru' 
                    ? 'После установки необходимо ввести API-ключи Binance и, по желанию, токен и ID чата Telegram.' 
                    : 'After installation, you need to enter Binance API keys and optionally Telegram token and chat ID.' }}
                </p>
                <p>
                  {{ currentLanguage === 'ru' 
                    ? 'Доступ к интерфейсу настроек Node-RED осуществляется по адресу:' 
                    : 'Access to Node-RED settings interface at:' }}<br>
                  <code class="text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-red-600 dark:text-red-400">http://&lt;{{ currentLanguage === 'ru' ? 'IP вашего сервера' : 'your server IP' }}&gt;:1880/dashboard/settings</code>
                </p>
                <p>
                  {{ currentLanguage === 'ru' 
                    ? 'Обратите внимание, красным шрифтом в интерфейсе настроек обозначен IP адрес, который необходимо добавить в разрешенные в личном кабинете Binance.' 
                    : 'Note: The IP address shown in red in the settings interface must be added to the allowed IPs in your Binance account.' }}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Фронтенд (Интерфейс управления)' : 'Frontend (Control Interface)' }}
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {{ currentLanguage === 'ru' 
                ? 'Доступ к основному веб-интерфейсу для управления роботами осуществляется по адресу:' 
                : 'Access to the main web interface for bot management at:' }}<br>
              <code class="text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-red-600 dark:text-red-400">http://&lt;{{ currentLanguage === 'ru' ? 'IP вашего сервера' : 'your server IP' }}&gt;:3000</code>
            </p>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {{ currentLanguage === 'ru' ? 'Функционал интерфейса' : 'Interface Features' }}
            </h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>{{ currentLanguage === 'ru' 
                ? 'Создание, настройка и удаление экземпляров роботов для разных торговых пар.' 
                : 'Create, configure and remove bot instances for different trading pairs.' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Просмотр финансовых результатов: общий PNL, PNL по каждому инструменту.' 
                : 'View financial results: overall PNL, PNL per instrument.' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Остановка и запуск отдельных роботов.' 
                : 'Stop and start individual bots.' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Изменение настроек (процент отступа, активация трейлинга) "на лету".' 
                : 'Change settings (percentage, trailing activation) on the fly.' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Минималистичный дизайн, ориентированный на удобство использования.' 
                : 'Minimalist design focused on usability.' }}</li>
              <li>{{ currentLanguage === 'ru' 
                ? 'Данные обновляются автоматически каждые 2 секунды, обеспечивая актуальность информации.' 
                : 'Data updates automatically every 2 seconds, ensuring current information.' }}</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Надежность' : 'Reliability' }}
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {{ currentLanguage === 'ru' 
                ? 'Система обладает высокой надежностью благодаря следующим аспектам:' 
                : 'The system is highly reliable due to the following aspects:' }}
            </p>
            <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>{{ currentLanguage === 'ru' ? 'Снапшоты Redis' : 'Redis snapshots' }}</strong>: 
                {{ currentLanguage === 'ru' 
                  ? 'Автоматическое сохранение состояния Redis на диск (в зависимости от настроек Redis), что позволяет минимизировать потери данных при сбоях.' 
                  : 'Automatic Redis state saving to disk (depending on Redis settings), minimizing data loss during failures.' }}
              </li>
              <li>
                <strong>{{ currentLanguage === 'ru' ? 'Восстановление после перезапуска' : 'Restart recovery' }}</strong>: 
                {{ currentLanguage === 'ru' 
                  ? 'Система спроектирована так, чтобы корректно возобновлять работу после перезапуска (docker-compose restart или перезагрузки сервера), подхватывая задачи из Redis.' 
                  : 'The system is designed to properly resume operation after restart (docker-compose restart or server reboot), picking up tasks from Redis.' }}
              </li>
              <li>
                <strong>{{ currentLanguage === 'ru' ? 'Блокировки (Locks)' : 'Locks' }}</strong>: 
                {{ currentLanguage === 'ru' 
                  ? 'Использование блокировок в Redis предотвращает конфликты при одновременном доступе к данным несколькими воркерами, обеспечивая целостность операций.' 
                  : 'Redis locks prevent conflicts during concurrent data access by multiple workers, ensuring operation integrity.' }}
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Отличия от аналогов' : 'Differences from Alternatives' }}
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ currentLanguage === 'ru' 
                ? 'Наш робот выделяется своей простотой: для развертывания требуется всего одна основная команда (docker-compose up -d) после клонирования и установки зависимостей. Интерфейс управления интуитивно понятен и ориентирован на пользователей разного уровня подготовки.' 
                : 'Our bot stands out for its simplicity: deployment requires just one main command (docker-compose up -d) after cloning and installing dependencies. The control interface is intuitive and designed for users of all skill levels.' }}
              <br>
              {{ currentLanguage === 'ru' 
                ? 'Гибкость и масштабируемость являются ключевыми преимуществами: вы можете легко настроить его под различные стратегии (скальпинг, свинг-трейдинг) и масштабировать производительность, добавляя больше воркеров. Поддержка неограниченного количества торговых пар позволяет гибко адаптироваться к меняющимся условиям рынка без дополнительных затрат.' 
                : 'Flexibility and scalability are key advantages: you can easily configure it for various strategies (scalping, swing trading) and scale performance by adding more workers. Support for unlimited trading pairs allows flexible adaptation to changing market conditions without additional costs.' }}
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Лицензия' : 'License' }}
            </h2>
            <p class="text-gray-700 dark:text-gray-300">
              {{ currentLanguage === 'ru' 
                ? 'Исходный код доступен для свободного использования, модификации и распространения под' 
                : 'Source code is available for free use, modification and distribution under the' }}
              <a href="https://github.com/ti-rudin/binance-tsl-bot/blob/master/LICENSE" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline hover:underline transition-colors duration-200">
                {{ currentLanguage === 'ru' ? 'лицензией MIT' : 'MIT License' }}
              </a>.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Технологии' : 'Technologies' }}
            </h2>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-full">JavaScript (Node.js)</span>
              <span class="px-3 py-1 text-sm font-semibold text-purple-800 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 rounded-full">Vue.js</span>
              <span class="px-3 py-1 text-sm font-semibold text-green-800 dark:text-green-200 bg-green-100 dark:bg-green-900 rounded-full">Docker</span>
              <span class="px-3 py-1 text-sm font-semibold text-red-800 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-full">Redis</span>
              <span class="px-3 py-1 text-sm font-semibold text-yellow-800 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 rounded-full">Node-RED</span>
              <span class="px-3 py-1 text-sm font-semibold text-indigo-800 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 rounded-full">Binance API</span>
              <span class="px-3 py-1 text-sm font-semibold text-teal-800 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 rounded-full">Tailwind CSS</span>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Информация для разработчиков' : 'Developer Information' }}
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-2">
              {{ currentLanguage === 'ru' 
                ? 'Приглашаем к сотрудничеству! Если вы хотите улучшить нашу систему, исправить ошибки или добавить новые функции, пожалуйста, не стесняйтесь создавать Issues и Pull Requests в нашем репозитории на GitHub.' 
                : 'We welcome collaboration! If you want to improve our system, fix bugs or add new features, please feel free to create Issues and Pull Requests in our GitHub repository.' }}
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              {{ currentLanguage === 'ru' ? 'Репозиторий:' : 'Repository:' }} 
              <a
                class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 break-all hover:underline"
                href="https://github.com/ti-rudin/binance-tsl-bot"
                target="_blank">https://github.com/ti-rudin/binance-tsl-bot</a>
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ currentLanguage === 'ru' ? 'Контакты и Сообщество' : 'Contacts and Community' }}
            </h2>
            <p class="text-gray-700 dark:text-gray-300">
              {{ currentLanguage === 'ru' 
                ? 'Присоединяйтесь к нашему сообществу в Telegram, чтобы обсуждать бота, делиться идеями и получать последние новости и обновления:' 
                : 'Join our Telegram community to discuss the bot, share ideas and get the latest news and updates:' }}
            </p>
            <div class="mt-4 flex justify-center">
              <a href="https://t.me/ti_robots_lab" target="_blank"
                class="inline-flex bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.61c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.227-2.15 4.582 3.381c.839.497 1.45.227 1.662-.78l3.27-15.561c.299-1.308-.425-1.855-1.188-1.51z"></path></svg>
                {{ currentLanguage === 'ru' ? 'Ti ROBOTS LAB в Telegram' : 'Ti ROBOTS LAB on Telegram' }}
              </a>
            </div>
          </section>

          <!-- Call to Action Cards (Bottom) -->
          <section class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 text-center md:text-left">
              <h3 class="text-xl font-bold dark:text-white mb-2">
                {{ currentLanguage === 'ru' ? 'Скачать код с GitHub' : 'Download from GitHub' }}
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                {{ currentLanguage === 'ru' 
                  ? 'Исходный код доступен бесплатно на GitHub под лицензией MIT.' 
                  : 'Source code is available for free on GitHub under MIT license.' }}
              </p>
              <a href="https://github.com/ti-rudin/binance-tsl-bot" target="_blank"
                class="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200">
                {{ currentLanguage === 'ru' ? 'Скачать' : 'Download' }}
              </a>
            </div>
            <div class="bg-green-100 dark:bg-green-900 rounded-lg p-6 text-center md:text-left">
              <h3 class="text-xl font-bold dark:text-white mb-2">
                {{ currentLanguage === 'ru' ? 'Услуга разворачивания' : 'Deployment Service' }}
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                {{ currentLanguage === 'ru' 
                  ? 'Предлагаем установку и настройку бота на вашем сервере (5000 руб).' 
                  : 'We offer bot installation and setup on your server (5000 RUB).' }}
              </p>
              <button class="inline-block bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors duration-200"
                @click="openModal">
                {{ currentLanguage === 'ru' ? 'Заказать установку' : 'Order Setup' }}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Modal Container (still inside the single root) -->
    <transition name="modal-fade">
      <div v-if="formModal" @click.self="closeModal"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4 backdrop-blur-sm">
        <!-- Add transition for the modal content -->
        <transition name="modal-content-fade">
          <div v-if="formModal" class="modal-content bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl w-full max-w-md transform transition-all duration-300 ease-out">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                {{ currentLanguage === 'ru' 
                  ? 'Заявка на услугу разворачивания' 
                  : 'Deployment Service Request' }}
              </h3>
              <button @click="closeModal" aria-label="Закрыть модальное окно" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {{ currentLanguage === 'ru' 
                ? 'Оставьте свои контактные данные, и мы свяжемся с вами для обсуждения деталей установки бота на вашем сервере.' 
                : 'Leave your contact details and we will contact you to discuss the details of bot installation on your server.' }}
            </p>
            <form class="flex flex-col space-y-4" @submit.prevent="submitForm">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ currentLanguage === 'ru' ? 'Имя' : 'Name' }}
                </label>
                <input type="text" v-model="formData.name" name="name" id="name" 
                  :placeholder="currentLanguage === 'ru' ? 'Ваше имя (необязательно)' : 'Your name (optional)'"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-600 dark:placeholder-gray-400" />
              </div>
              <div>
                <label for="tel" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ currentLanguage === 'ru' ? 'Телефон или Email' : 'Phone or Email' }} <span class="text-red-500">*</span>
                </label>
                <input type="text" v-model="formData.contact" name="tel" id="tel"
                  :placeholder="currentLanguage === 'ru' ? '8(XXX)XXX-XX-XX или email@example.com' : '8(XXX)XXX-XX-XX or email@example.com'" required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-600 dark:placeholder-gray-400" />
              </div>
              <!-- Status Messages -->
              <div class="h-6 text-sm text-center">
                <p v-if="formStatus.loading" class="text-blue-600 dark:text-blue-400 animate-pulse">
                  {{ currentLanguage === 'ru' ? 'Отправка...' : 'Sending...' }}
                </p>
                <p v-if="formStatus.error" class="text-red-600 dark:text-red-400">{{ formStatus.error }}</p>
                <p v-if="formStatus.success" class="text-green-600 dark:text-green-400">{{ formStatus.success }}</p>
              </div>
              <button type="submit" :disabled="formStatus.loading || formStatus.success"
                class="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                {{ formStatus.loading 
                  ? (currentLanguage === 'ru' ? 'Отправляется...' : 'Sending...') 
                  : (formStatus.success 
                    ? (currentLanguage === 'ru' ? 'Отправлено!' : 'Sent!') 
                    : (currentLanguage === 'ru' ? 'Отправить заявку' : 'Submit Request')) }}
              </button>
            </form>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { inject, ref, reactive, onMounted } from 'vue';

export default {
  name: 'BotInfoPage',
  setup() {
    const currentLanguage = inject('currentLanguage')
    
    const formModal = ref(false);
    const formData = reactive({
      name: '',
      contact: ''
    });
    const formStatus = reactive({
      loading: false,
      error: null,
      success: null,
    });

    const openModal = () => {
      ym(65948110,'reachGoal','openmodal');
      formData.name = '';
      formData.contact = '';
      formStatus.loading = false;
      formStatus.error = null;
      formStatus.success = null;
      formModal.value = true;
    };

    const closeModal = () => {
      formModal.value = false;
    };

    const submitForm = async () => {
      formStatus.loading = true;
      formStatus.error = null;
      formStatus.success = null;

      if (!formData.contact || !formData.contact.trim()) {
        formStatus.error = currentLanguage.value === 'ru' 
          ? 'Пожалуйста, укажите Телефон или Email.' 
          : 'Please provide Phone or Email.';
        formStatus.loading = false;
        return;
      }

      const params = new URLSearchParams({
        name: formData.name.trim(),
        tel: formData.contact.trim()
      });

      try {
        const res = await fetch(
          `https://ti-robots.netlify.app/zayavka/?${params.toString()}`,
          {
            method: "GET",
            headers: { Accept: "application/json" },
          }
        );

        if (res.ok) {
          formStatus.success = currentLanguage.value === 'ru' 
            ? "Спасибо! Мы свяжемся с Вами в ближайшее время." 
            : "Thank you! We will contact you shortly.";
          formData.name = '';
          formData.contact = '';
          setTimeout(() => {
            if (formStatus.success) {
              closeModal();
            }
          }, 3000);
        } else {
          const errorText = await res.text();
          console.error("Form submission error:", res.status, errorText);
          formStatus.error = currentLanguage.value === 'ru' 
            ? `Ошибка отправки (${res.status}). Попробуйте снова или свяжитесь с нами другим способом.` 
            : `Submission error (${res.status}). Please try again or contact us another way.`;
        }
      } catch (error) {
        console.error("Network error during form submission:", error);
        formStatus.error = currentLanguage.value === 'ru' 
          ? 'Сетевая ошибка. Проверьте подключение и попробуйте снова.' 
          : 'Network error. Check your connection and try again.';
      } finally {
        formStatus.loading = false;
      }
    };

    return {
      currentLanguage,
      formModal,
      formData,
      formStatus,
      openModal,
      closeModal,
      submitForm
    };
  }
}
</script>

<style scoped>
/* Стили остаются без изменений */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-content-fade-enter-active {
  transition: all 0.3s ease-out;
}
.modal-content-fade-leave-active {
  transition: all 0.2s ease-in;
}
.modal-content-fade-enter-from,
.modal-content-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>