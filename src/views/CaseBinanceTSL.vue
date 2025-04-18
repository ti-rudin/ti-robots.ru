<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Binance Trailing Stop Bot</h1>
    <section class="space-y-6 text-gray-700 dark:text-gray-300">
      <p>
        Автоматизированный ассистент трейдера для Trailing Stop Loss на Binance. Система использует асинхронную, событийно-ориентированную архитектуру с паттерном "Брокер-Воркер", что позволяет горизонтально масштабироваться. Поддерживает одновременную торговлю по нескольким инструментам и обеспечивает мгновенную реакцию на рыночные изменения.
      </p>
      <h2 class="text-2xl font-semibold mb-2">Ключевые особенности</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>Минималистичный интерфейс: простота использования и легкость развертывания</li>
        <li>Горизонтальная масштабируемость: добавление воркеров для увеличения производительности</li>
        <li>Реальное время: мгновенная реакция на рыночные изменения</li>
        <li>Гибкость: адаптация под различные торговые стратегии (скальпинг, свинг-трейдинг)</li>
        <li>Поддержка неограниченного количества торговых пар</li>
      </ul>
      <h2 class="text-2xl font-semibold mb-2">Архитектура</h2>
      <p>
        Все сервисы запускаются через Docker Compose. Включает Node-RED Core, микросервисы для мониторинга ордеров, балансов, обновления цен и управления через Telegram, а также воркеры для выполнения торговых задач. Используется Redis для управления задачами, состоянием и блокировками.
      </p>
      <h2 class="text-2xl font-semibold mb-2">Торговая стратегия</h2>
      <p>
        Система отслеживает покупку и автоматически выставляет стоп-лосс ордер, двигая его ("трейлинг") вслед за ростом цены согласно заданным параметрам. По завершении сделки отправляет отчет в Telegram и переходит в режим ожидания новой покупки для данного инструмента.
      </p>
      <h2 class="text-2xl font-semibold mb-2">Установка и запуск</h2>
      <p>Требования: сервер с 2 ядрами CPU, 4 Гб RAM, Node.js 22+, Docker и Docker Compose, API-ключи Binance, опционально Telegram BOT TOKEN и CHAT ID.</p>
      <p>Инструкция по установке:</p>
      <pre class="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"><code>git clone https://github.com/ti-rudin/binance-tsl-bot.git
cd binance-tsl-bot
cd front/
npm install
cd ..
cd node-red/
npm install
cd ..
docker-compose up -d
</code></pre>
      <h2 class="text-2xl font-semibold mb-2">Контакты и сообщество</h2>
      <p>Присоединяйтесь к нашему сообществу в Telegram: <a href="https://t.me/ti_robots_lab" target="_blank" class="text-blue-600 hover:underline">Ti ROBOTS LAB в Telegram</a></p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CaseBinanceTSL',
}
</script>
