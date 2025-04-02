<template>
  <!-- Single root div -->
  <div>
    <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold dark:text-white mb-2">Binance Trailing Stop Bot</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">Автоматизированный ассистент трейдера для Trailing Stop Loss на Binance</p>
        </div>

        <!-- Call to Action Cards (Top) -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 text-center md:text-left">
            <h3 class="text-xl font-bold dark:text-white mb-2">Скачать код с GitHub</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Исходный код доступен бесплатно на GitHub под лицензией MIT.</p>
            <a href="https://github.com/ti-rudin/binance-tsl-bot" target="_blank"
              class="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200">Скачать</a>
          </div>
          <div class="bg-green-100 dark:bg-green-900 rounded-lg p-6 text-center md:text-left">
            <h3 class="text-xl font-bold dark:text-white mb-2">Услуга разворачивания</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Предлагаем установку и настройку бота на вашем сервере (5000 руб).</p>
            <button class="inline-block bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors duration-200"
              @click="openModal">Заказать установку</button>
          </div>
        </section>

        <!-- Main Content -->
        <div class="space-y-8">


          <section>
          
            <div class="flex justify-center">
              <img src="/stoploss.gif" alt="Анимация Trailing Stop Loss" width="auto"  />
            </div>
          </section>
        
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Описание</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Ti TSL Bot</strong> — это автоматизированная система, обеспечивающая Trailing Stop Loss. Поддерживает одновременную торговлю по нескольким инструментам. Система использует асинхронную, событийно-ориентированную архитектуру с паттерном "Брокер-Воркер", что позволяет горизонтально масштабироваться. В качестве БД используется Redis для управления задачами, состоянием и блокировками.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ключевые особенности</h2>
            <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>Минималистичный интерфейс: простота использования и легкость развертывания</li>
              <li>Горизонтальная масштабируемость: добавление воркеров для увеличения производительности</li>
              <li>Реальное время: мгновенная реакция на рыночные изменения</li>
              <li>Гибкость: адаптация под различные торговые стратегии (скальпинг, свинг-трейдинг)</li>
              <li>Поддержка неограниченного количества торговых пар</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Архитектура</h2>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Компоненты системы</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Все сервисы запускаются через Docker Compose:</p>
            <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Node-RED Core</strong>: Управляет логикой, распределяет задачи, контролирует блокировки
              </li>
              <li>
                <strong>Микросервисы</strong>:
                <ul class="list-['-_'] list-inside ml-6 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Order Service - мониторинг и запись ордеров</li>
                  <li>Balance Service - отслеживание балансов</li>
                  <li>Price Service - обновление рыночных цен</li>
                  <li>Telegram Bot Service - управление через Telegram</li>
                </ul>
              </li>
              <li>
                <strong>Воркеры</strong>: Выполняют торговые задачи, легко масштабируются (можно добавлять неограниченное количество)
              </li>
              <li>
                <strong>Фронтенд (Vue.js)</strong>: Веб-интерфейс управления с обновлением данных каждые 2 секунды
              </li>
              <li>
                <strong>Redis</strong>: База данных для управления задачами, состоянием и блокировками.
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Торговая стратегия</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Система отслеживает покупку и автоматически выставляет стоп-лосс ордер, двигая его ("трейлинг") вслед за ростом цены согласно заданным параметрам. По завершении сделки отправляет отчет в Telegram и переходит в режим ожидания новой покупки для данного инструмента.
            </p>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-3">Адаптация стратегии</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Возможность увеличения ("докупки") позиции в реальном времени</li>
              <li>Изменение настроек трейлинг-стопа (процент отступа, активация) без остановки работы бота</li>
              <li>Автоматический пересчет и обновление стоп-лосс ордеров при изменении параметров или доборе позиции</li>
            </ul>
          </section>

          <section>
             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Установка и запуск</h2>
             <div class="space-y-4 text-gray-700 dark:text-gray-300">
               <div>
                 <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Требования</h3>
                 <ul class="list-disc list-inside space-y-1">
                   <li>Сервер (рекомендуется: 2 ядра CPU, 4 Gb RAM)</li>
                   <li>Установленные Node.js (версия 22 или выше) и Docker / Docker Compose</li>
                   <li>API-ключи от биржи Binance</li>
                   <li>BOT TOKEN и CHAT ID от Telegram (опционально, для уведомлений и управления)</li>
                 </ul>
               </div>
               <div>
                 <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Инструкция по установке</h3>
      
                  <pre class="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"><code class="language-bash"># 1. Клонировать репозиторий
git clone https://github.com/ti-rudin/binance-tsl-bot.git
cd binance-tsl-bot

# 2. Установить зависимости для фронтенда
cd front/
npm install
cd ..

# 3. Установить зависимости для Node-RED
cd node-red/
npm install
cd ..

# 4. Запустить все сервисы через Docker Compose
docker-compose up -d</code></pre>
               </div>
                <div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Настройка</h3>
                    <p>После установки необходимо ввести API-ключи Binance и, по желанию, токен и ID чата Telegram.</p>
                   
                    <p>Доступ к интерфейсу настроек Node-RED осуществляется по адресу: <br><code class="text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-red-600 dark:text-red-400">http://&lt;IP вашего сервера&gt;:1880/dashboard/settings</code>.</p>
                    <p>Обратите внимание, красным шрифтом в интерфейсе настроек обозначен IP адрес, который необходимо добавить в разрешенные в личном кабинете Binance.</p>
                  </div>
             </div>
          </section>

           <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Фронтенд (Интерфейс управления)</h2>
      
             <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
         
              Доступ к основному веб-интерфейсу для управления роботами осуществляется по адресу:<br><code class="text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-red-600 dark:text-red-400">http://&lt;IP вашего сервера&gt;:3000</code>.
             </p>
             <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Функционал интерфейса</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Создание, настройка и удаление экземпляров роботов для разных торговых пар.</li>
                <li>Просмотр финансовых результатов: общий PNL, PNL по каждому инструменту.</li>
                <li>Остановка и запуск отдельных роботов.</li>
                <li>Изменение настроек (процент отступа, активация трейлинга) "на лету".</li>
                <li>Минималистичный дизайн, ориентированный на удобство использования.</li>
                <li>Данные обновляются автоматически каждые 2 секунды, обеспечивая актуальность информации.</li>
            </ul>
         </section>

         <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Надежность</h2>
             <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Система обладает высокой надежностью благодаря следующим аспектам:
             </p>
            <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Снапшоты Redis</strong>: Автоматическое сохранение состояния Redis на диск (в зависимости от настроек Redis), что позволяет минимизировать потери данных при сбоях.
             </li>
             <li>
                <strong>Восстановление после перезапуска</strong>: Система спроектирована так, чтобы корректно возобновлять работу после перезапуска (<code class="text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-red-600 dark:text-red-400">docker-compose restart</code> или перезагрузки сервера), подхватывая задачи из Redis.
             </li>
             <li>
                <strong>Блокировки (Locks)</strong>: Использование блокировок в Redis предотвращает конфликты при одновременном доступе к данным несколькими воркерами, обеспечивая целостность операций.
             </li>
            </ul>
         </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Отличия от аналогов</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
             Наш робот выделяется своей простотой: для развертывания требуется всего одна основная команда (<code class="text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-red-600 dark:text-red-400">docker-compose up -d</code>) после клонирования и установки зависимостей. Интерфейс управления интуитивно понятен и ориентирован на пользователей разного уровня подготовки.
             <br>Гибкость и масштабируемость являются ключевыми преимуществами: вы можете легко настроить его под различные стратегии (скальпинг, свинг-трейдинг) и масштабировать производительность, добавляя больше воркеров. Поддержка неограниченного количества торговых пар позволяет гибко адаптироваться к меняющимся условиям рынка без дополнительных затрат.
            </p>
          </section>

            <section>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Лицензия</h2>
                <p class="text-gray-700 dark:text-gray-300">
               
                 Исходный код доступен для свободного использования, модификации и распространения под <a href="https://github.com/ti-rudin/binance-tsl-bot/blob/master/LICENSE" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline hover:underline transition-colors duration-200">лицензией MIT</a>.
                </p>
            </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Технологии</h2>
          
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
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Информация для разработчиков</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-2">
              Приглашаем к сотрудничеству! Если вы хотите улучшить нашу систему, исправить ошибки или добавить новые функции, пожалуйста, не стесняйтесь создавать Issues и Pull Requests в нашем репозитории на GitHub.
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              Репозиторий: 
               <a
                class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 break-all hover:underline"
                href="https://github.com/ti-rudin/binance-tsl-bot"
                target="_blank">https://github.com/ti-rudin/binance-tsl-bot</a>
            </p>
          </section>

           <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Контакты и Сообщество</h2>
            <p class="text-gray-700 dark:text-gray-300">
             Присоединяйтесь к нашему сообществу в Telegram, чтобы обсуждать бота, делиться идеями и получать последние новости и обновления:
            </p>
            <div class="mt-4 flex justify-center">
                
                <a href="https://t.me/ti_robots_lab" target="_blank"
                   class="inline-flex bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.61c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.227-2.15 4.582 3.381c.839.497 1.45.227 1.662-.78l3.27-15.561c.299-1.308-.425-1.855-1.188-1.51z"></path></svg>
                   Ti ROBOTS LAB в Telegram
                </a>
            </div>
          </section>

          <!-- Call to Action Cards (Bottom) -->
          <section class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 text-center md:text-left">
              <h3 class="text-xl font-bold dark:text-white mb-2">Скачать код с GitHub</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">Исходный код доступен бесплатно на GitHub под лицензией MIT.</p>
              <a href="https://github.com/ti-rudin/binance-tsl-bot" target="_blank"
                class="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200">Скачать</a>
            </div>
            <div class="bg-green-100 dark:bg-green-900 rounded-lg p-6 text-center md:text-left">
              <h3 class="text-xl font-bold dark:text-white mb-2">Услуга разворачивания</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">Предлагаем установку и настройку бота на вашем сервере (5000 руб).</p>
              <button class="inline-block bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors duration-200"
                @click="openModal">Заказать установку</button>
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
                Заявка на услугу разворачивания
                </h3>
                <button @click="closeModal" aria-label="Закрыть модальное окно" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                </button>
            </div>
             <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Оставьте свои контактные данные, и мы свяжемся с вами для обсуждения деталей установки бота на вашем сервере.</p>
            <form class="flex flex-col space-y-4" @submit.prevent="submitForm">
                <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Имя</label>
                <input type="text" v-model="formData.name" name="name" id="name" placeholder="Ваше имя (необязательно)"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-600 dark:placeholder-gray-400" />
                </div>
                <div>
                <label for="tel" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Телефон или Email <span class="text-red-500">*</span>
                </label>
                <input type="text" v-model="formData.contact" name="tel" id="tel"
                    placeholder="8(XXX)XXX-XX-XX или email@example.com" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-600 dark:placeholder-gray-400" />
                </div>
                <!-- Status Messages -->
                <div class="h-6 text-sm text-center">
                     <p v-if="formStatus.loading" class="text-blue-600 dark:text-blue-400 animate-pulse">Отправка...</p>
                     <p v-if="formStatus.error" class="text-red-600 dark:text-red-400">{{ formStatus.error }}</p>
                     <p v-if="formStatus.success" class="text-green-600 dark:text-green-400">{{ formStatus.success }}</p>
                 </div>
                <button type="submit" :disabled="formStatus.loading || formStatus.success"
                class="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                {{ formStatus.loading ? 'Отправляется...' : (formStatus.success ? 'Отправлено!' : 'Отправить заявку') }}
                </button>
            </form>
            </div>
        </transition>
      </div>
    </transition>
  </div>
</template>


<script>
import { ref, reactive, onMounted } from 'vue';

export default {
  name: 'BotInfoPage',
  setup() {
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

    const prices = [30, 35, 32, 38, 45, 42, 50, 55, 52, 60, 65, 62, 70, 75, 72, 80, 85, 82, 90, 95];
    const trailingStopLoss = [30];
    let currentFrame = 0;

    const updateAnimation = () => {
      const priceLine = document.getElementById('priceLine');
      const trailingStopLine = document.getElementById('trailingStopLine');

      if (currentFrame < prices.length) {
        const currentPrice = prices[currentFrame];
        let trailingStop = trailingStopLoss[trailingStopLoss.length - 1];

        if (currentPrice > trailingStop) {
          trailingStop = currentPrice * 0.95;
        }

        trailingStopLoss.push(trailingStop);

        const pricePoints = prices.slice(0, currentFrame + 1).map((price, index) => `${index * 20},${100 - price * 1.2}`).join(' ');
        const stopPoints = trailingStopLoss.map((stop, index) => `${index * 20},${100 - stop * 1.2}`).join(' ');

        priceLine.setAttribute('points', pricePoints);
        trailingStopLine.setAttribute('points', stopPoints);

        currentFrame++;
      }

      requestAnimationFrame(updateAnimation);
    };

    onMounted(() => {
      updateAnimation();
    });

    const openModal = () => {
      // Reset previous states
      formData.name = '';
      formData.contact = '';
      formStatus.loading = false;
      formStatus.error = null;
      formStatus.success = null;
      // Open modal
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
        formStatus.error = 'Пожалуйста, укажите Телефон или Email.';
        formStatus.loading = false;
        return;
      }

      const params = new URLSearchParams({
        name: formData.name.trim(),
        tel: formData.contact.trim() // Use 'tel' as the parameter name expected by the backend
      });

      try {
        const res = await fetch(
          `https://ti-robots.netlify.app/zayavka/?${params.toString()}`,
          {
            method: "GET", // Using GET as per the original code
            headers: { Accept: "application/json" },
          }
        );

        if (res.ok) {
          formStatus.success = "Спасибо! Мы свяжемся с Вами в ближайшее время.";
           formData.name = ''; // Clear fields on success
           formData.contact = '';
          // Optionally close modal after a delay
          setTimeout(() => {
             if (formStatus.success) { // Check relevance before closing
                closeModal();
             }
          }, 3000); // Close after 3 seconds
        } else {
          const errorText = await res.text();
          console.error("Form submission error:", res.status, errorText);
          formStatus.error = `Ошибка отправки (${res.status}). Попробуйте снова или свяжитесь с нами другим способом.`;
        }
      } catch (error) {
        console.error("Network error during form submission:", error);
        formStatus.error = 'Сетевая ошибка. Проверьте подключение и попробуйте снова.';
      } finally {
        formStatus.loading = false;
      }
    };

    return {
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
/* Scoped styles ensure these styles only apply to this component */
.modal-content {
  max-height: 90vh; /* Limit modal height */
  overflow-y: auto; /* Add scroll if content overflows */
}

/* Background fade transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Modal content slide/fade transition */
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

/* NOTE: Removed @apply rules. Styles are now directly applied in the template. */
/* If you need component-specific base styles not covered by Tailwind utilities, */
/* you can add standard CSS rules here. */

</style>
