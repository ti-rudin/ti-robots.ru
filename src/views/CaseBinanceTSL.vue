<template>
  <div>
    <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold dark:text-white mb-2">
          {{ translations.title[currentLanguage] }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ currentLanguage === 'ru'
            ? 'Автоматизированный ассистент трейдера для Trailing Stop Loss на Binance'
            : 'Automated trading assistant for Trailing Stop Loss on Binance' }}
        </p>
      </div>

      <!-- Call to Action Cards -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 text-center md:text-left">
          <h3 class="text-xl font-bold dark:text-white mb-2">
            {{ translations.githubTitle[currentLanguage] }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            {{ translations.githubDescription[currentLanguage] }}
          </p>
          <a href="https://github.com/ti-rudin/binance-tsl-bot" target="_blank"
            class="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200">
            {{ translations.download[currentLanguage] }}
          </a>
        </div>
        <div class="bg-green-100 dark:bg-green-900 rounded-lg p-6 text-center md:text-left">
          <h3 class="text-xl font-bold dark:text-white mb-2">
            {{ translations.deploymentTitle[currentLanguage] }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            {{ translations.deploymentDescription[currentLanguage] }}
          </p>
          <button class="inline-block bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors duration-200"
            @click="openModal">
            {{ translations.orderSetup[currentLanguage] }}
          </button>
        </div>
      </section>

      <!-- Main Content -->
      <section class="space-y-8 text-gray-700 dark:text-gray-300">
        <!-- Animation Section -->
        <section>
          <div class="flex justify-center">
            <img src="/stoploss.gif" alt="Trailing Stop Loss Animation" width="auto" />
          </div>
        </section>

        <!-- Description -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.descriptionTitle[currentLanguage] }}
          </h2>
          <p class="leading-relaxed">
            <strong>{{ translations.botName[currentLanguage] }}</strong>
            {{ translations.description[currentLanguage] }}
          </p>
        </section>

        <!-- Key Features -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.keyFeaturesTitle[currentLanguage] }}
          </h2>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ translations.feature1[currentLanguage] }}</li>
            <li>{{ translations.feature2[currentLanguage] }}</li>
            <li>{{ translations.feature3[currentLanguage] }}</li>
            <li>{{ translations.feature4[currentLanguage] }}</li>
            <li>{{ translations.feature5[currentLanguage] }}</li>
          </ul>
        </section>

        <!-- Architecture -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.architectureTitle[currentLanguage] }}
          </h2>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ translations.componentsTitle[currentLanguage] }}
          </h3>
          <p class="mb-4">
            {{ translations.dockerDescription[currentLanguage] }}
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>
              <strong>{{ translations.nodeRedTitle[currentLanguage] }}</strong>:
              {{ translations.nodeRedDescription[currentLanguage] }}
            </li>
            <li>
              <strong>{{ translations.microservicesTitle[currentLanguage] }}</strong>:
              <ul class="list-['-_'] list-inside ml-6 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                <li>{{ translations.orderService[currentLanguage] }}</li>
                <li>{{ translations.balanceService[currentLanguage] }}</li>
                <li>{{ translations.priceService[currentLanguage] }}</li>
                <li>{{ translations.telegramService[currentLanguage] }}</li>
              </ul>
            </li>
            <li>
              <strong>{{ translations.workersTitle[currentLanguage] }}</strong>:
              {{ translations.workersDescription[currentLanguage] }}
            </li>
            <li>
              <strong>{{ translations.frontendTitle[currentLanguage] }}</strong>:
              {{ translations.frontendDescription[currentLanguage] }}
            </li>
            <li>
              <strong>Redis</strong>:
              {{ translations.redisDescription[currentLanguage] }}
            </li>
          </ul>
        </section>

        <!-- Trading Strategy -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.tradingStrategyTitle[currentLanguage] }}
          </h2>
          <p class="leading-relaxed">
            {{ translations.strategyDescription[currentLanguage] }}
          </p>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-3">
            {{ translations.strategyAdaptationTitle[currentLanguage] }}
          </h3>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ translations.adaptation1[currentLanguage] }}</li>
            <li>{{ translations.adaptation2[currentLanguage] }}</li>
            <li>{{ translations.adaptation3[currentLanguage] }}</li>
          </ul>
        </section>

        <!-- Installation -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.installationTitle[currentLanguage] }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {{ translations.requirementsTitle[currentLanguage] }}
              </h3>
              <ul class="list-disc list-inside space-y-1">
                <li>{{ translations.serverRequirements[currentLanguage] }}</li>
                <li>{{ translations.softwareRequirements[currentLanguage] }}</li>
                <li>{{ translations.apiRequirements[currentLanguage] }}</li>
                <li>{{ translations.telegramRequirements[currentLanguage] }}</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {{ translations.instructionsTitle[currentLanguage] }}
              </h3>
              <pre class="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"><code># 1. {{ translations.cloneCommand[currentLanguage] }}
git clone https://github.com/ti-rudin/binance-tsl-bot.git
cd binance-tsl-bot

# 2. {{ translations.frontendCommand[currentLanguage] }}
cd front/
npm install
cd ..

# 3. {{ translations.nodeRedCommand[currentLanguage] }}
cd node-red/
npm install
cd ..

# 4. {{ translations.dockerCommand[currentLanguage] }}
docker-compose up -d</code></pre>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {{ translations.configurationTitle[currentLanguage] }}
              </h3>
              <p>
                {{ translations.configurationDescription[currentLanguage] }}
              </p>
              <p>
                {{ translations.nodeRedAccess[currentLanguage] }}<br>
                <code class="text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-red-600 dark:text-red-400">http://<{{ translations.yourServerIP[currentLanguage] }}>:1880/dashboard/settings</code>
              </p>
              <p>
                {{ translations.ipNote[currentLanguage] }}
              </p>
            </div>
          </div>
        </section>

        <!-- Frontend -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.frontendSectionTitle[currentLanguage] }}
          </h2>
          <p class="leading-relaxed mb-4">
            {{ translations.frontendAccess[currentLanguage] }}<br>
            <code class="text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-red-600 dark:text-red-400">http://<{{ translations.yourServerIP[currentLanguage] }}>:3000</code>
          </p>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ translations.frontendFeaturesTitle[currentLanguage] }}
          </h3>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ translations.frontendFeature1[currentLanguage] }}</li>
            <li>{{ translations.frontendFeature2[currentLanguage] }}</li>
            <li>{{ translations.frontendFeature3[currentLanguage] }}</li>
            <li>{{ translations.frontendFeature4[currentLanguage] }}</li>
            <li>{{ translations.frontendFeature5[currentLanguage] }}</li>
            <li>{{ translations.frontendFeature6[currentLanguage] }}</li>
          </ul>
        </section>

        <!-- Reliability -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.reliabilityTitle[currentLanguage] }}
          </h2>
          <p class="leading-relaxed mb-4">
            {{ translations.reliabilityDescription[currentLanguage] }}
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>
              <strong>{{ translations.redisSnapshots[currentLanguage] }}</strong>:
              {{ translations.redisSnapshotsDescription[currentLanguage] }}
            </li>
            <li>
              <strong>{{ translations.restartRecovery[currentLanguage] }}</strong>:
              {{ translations.restartRecoveryDescription[currentLanguage] }}
            </li>
            <li>
              <strong>{{ translations.locksTitle[currentLanguage] }}</strong>:
              {{ translations.locksDescription[currentLanguage] }}
            </li>
          </ul>
        </section>

        <!-- Differences -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.differencesTitle[currentLanguage] }}
          </h2>
          <p class="leading-relaxed">
            {{ translations.differencesDescription1[currentLanguage] }}
            <br>
            {{ translations.differencesDescription2[currentLanguage] }}
          </p>
        </section>

        <!-- License -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.licenseTitle[currentLanguage] }}
          </h2>
          <p>
            {{ translations.licenseDescription[currentLanguage] }}
            <a href="https://github.com/ti-rudin/binance-tsl-bot/blob/master/LICENSE" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline hover:underline transition-colors duration-200">
              {{ translations.mitLicense[currentLanguage] }}
            </a>.
          </p>
        </section>

        <!-- Technologies -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.technologiesTitle[currentLanguage] }}
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

        <!-- Developer Info -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.developerInfoTitle[currentLanguage] }}
          </h2>
          <p class="mb-2">
            {{ translations.collaborationInvitation[currentLanguage] }}
          </p>
          <p>
            {{ translations.repository[currentLanguage] }}
            <a
              class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 break-all hover:underline"
              href="https://github.com/ti-rudin/binance-tsl-bot"
              target="_blank">https://github.com/ti-rudin/binance-tsl-bot</a>
          </p>
        </section>

        <!-- Contacts -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ translations.contactsTitle[currentLanguage] }}
          </h2>
          <p>
            {{ translations.telegramCommunity[currentLanguage] }}
          </p>
          <div class="mt-4 flex justify-center">
            <a href="https://t.me/ti_robots_lab" target="_blank"
              class="inline-flex bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.61c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.227-2.15 4.582 3.381c.839.497 1.45.227 1.662-.78l3.27-15.561c.299-1.308-.425-1.855-1.188-1.51z"></path></svg>
              {{ translations.telegramLink[currentLanguage] }}
            </a>
          </div>
        </section>

        <!-- Bottom CTA Cards -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 text-center md:text-left">
            <h3 class="text-xl font-bold dark:text-white mb-2">
              {{ translations.githubTitle[currentLanguage] }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ translations.githubDescription[currentLanguage] }}
            </p>
            <a href="https://github.com/ti-rudin/binance-tsl-bot" target="_blank"
              class="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200">
              {{ translations.download[currentLanguage] }}
            </a>
          </div>
          <div class="bg-green-100 dark:bg-green-900 rounded-lg p-6 text-center md:text-left">
            <h3 class="text-xl font-bold dark:text-white mb-2">
              {{ translations.deploymentTitle[currentLanguage] }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ translations.deploymentDescription[currentLanguage] }}
            </p>
            <button class="inline-block bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors duration-200"
              @click="openModal">
              {{ translations.orderSetup[currentLanguage] }}
            </button>
          </div>
        </section>
      </section>
    </div>

    <!-- Modal Container -->
    <transition name="modal-fade">
      <div v-if="formModal" @click.self="closeModal"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4 backdrop-blur-sm">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out"
          :class="formModal ? 'animate-fade-in-up' : ''">
          <div class="p-8">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                {{ translations.modalTitle[currentLanguage] }}
              </h3>
              <button @click="closeModal" aria-label="Close" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{ currentLanguage === 'ru'
                ? 'Оставьте свои контактные данные, и мы свяжемся с вами для обсуждения деталей установки бота на вашем сервере.'
                : 'Leave your contact details and we will contact you to discuss the details of bot installation on your server.' }}
            </p>

            <form class="space-y-6" @submit.prevent="submitForm">
              <div>
                <label for="modal-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {{ translations.nameLabel[currentLanguage] }}
                </label>
                <input type="text" id="modal-name" v-model="formData.name"
                  :placeholder="translations.namePlaceholder[currentLanguage]"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors">
              </div>

              <div>
                <label for="modal-contact" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {{ translations.contactLabel[currentLanguage] }} <span class="text-red-500">*</span>
                </label>
                <input type="text" id="modal-contact" v-model="formData.contact" required
                  :placeholder="translations.contactPlaceholder[currentLanguage]"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors">
              </div>

              <div class="h-6 text-sm text-center">
                <p v-if="formStatus.loading" class="text-indigo-600 dark:text-indigo-400 animate-pulse">
                  {{ translations.sending[currentLanguage] }}
                </p>
                <p v-if="formStatus.error" class="text-red-600 dark:text-red-400">{{ formStatus.error }}</p>
                <p v-if="formStatus.success" class="text-green-600 dark:text-green-400">{{ formStatus.success }}</p>
              </div>

              <button type="submit" :disabled="formStatus.loading || formStatus.success"
                class="w-full bg-indigo-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                {{ formStatus.loading
                  ? translations.sending[currentLanguage]
                  : (formStatus.success
                    ? translations.sent[currentLanguage]
                    : translations.submit[currentLanguage]) }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { currentLanguage } from '../stores/language';

export default {
  name: 'CaseBinanceTSL',
  setup() {
    const translations = {
      title: {
        ru: 'Binance Trailing Stop Bot',
        en: 'Binance Trailing Stop Bot',
      },
      descriptionTitle: {
        ru: 'Описание',
        en: 'Description'
      },
      botName: {
        ru: 'Ti TSL Bot',
        en: 'Ti TSL Bot'
      },
      description: {
        ru: '— это автоматизированная система, обеспечивающая Trailing Stop Loss. Поддерживает одновременную торговлю по нескольким инструментам. Система использует асинхронную, событийно-ориентированную архитектуру с паттерном "Брокер-Воркер", что позволяет горизонтально масштабироваться. В качестве БД используется Redis для управления задачами, состоянием и блокировками.',
        en: 'is an automated system providing Trailing Stop Loss functionality. It supports simultaneous trading across multiple instruments. The system uses an asynchronous, event-driven architecture with a "Broker-Worker" pattern, enabling horizontal scalability. Redis is used as the database for task management, state handling, and locking mechanisms.'
      },
      keyFeaturesTitle: {
        ru: 'Ключевые особенности',
        en: 'Key Features'
      },
      feature1: {
        ru: 'Минималистичный интерфейс: простота использования и легкость развертывания',
        en: 'Minimalist interface: Easy to use and deploy'
      },
      feature2: {
        ru: 'Горизонтальная масштабируемость: добавление воркеров для увеличения производительности',
        en: 'Horizontal scalability: Add workers to increase performance'
      },
      feature3: {
        ru: 'Реальное время: мгновенная реакция на рыночные изменения',
        en: 'Real-time: Instant reaction to market changes'
      },
      feature4: {
        ru: 'Гибкость: адаптация под различные торговые стратегии (скальпинг, свинг-трейдинг)',
        en: 'Flexibility: Adaptable to various trading strategies (scalping, swing trading)'
      },
      feature5: {
        ru: 'Поддержка неограниченного количества торговых пар',
        en: 'Support for unlimited trading pairs'
      },
      architectureTitle: {
        ru: 'Архитектура',
        en: 'Architecture'
      },
      componentsTitle: {
        ru: 'Компоненты системы',
        en: 'System Components'
      },
      dockerDescription: {
        ru: 'Все сервисы запускаются через Docker Compose:',
        en: 'All services are launched via Docker Compose:'
      },
      nodeRedTitle: {
        ru: 'Node-RED Core',
        en: 'Node-RED Core'
      },
      nodeRedDescription: {
        ru: 'Управляет логикой, распределяет задачи, контролирует блокировки',
        en: 'Manages logic, distributes tasks, controls locks'
      },
      microservicesTitle: {
        ru: 'Микросервисы',
        en: 'Microservices'
      },
      orderService: {
        ru: 'Order Service - мониторинг и запись ордеров',
        en: 'Order Service - order monitoring and recording'
      },
      balanceService: {
        ru: 'Balance Service - отслеживание балансов',
        en: 'Balance Service - balance tracking'
      },
      priceService: {
        ru: 'Price Service - обновление рыночных цен',
        en: 'Price Service - market price updates'
      },
      telegramService: {
        ru: 'Telegram Bot Service - управление через Telegram',
        en: 'Telegram Bot Service - Telegram control'
      },
      workersTitle: {
        ru: 'Воркеры',
        en: 'Workers'
      },
      workersDescription: {
        ru: 'Выполняют торговые задачи, легко масштабируются (можно добавлять неограниченное количество)',
        en: 'Execute trading tasks, easily scalable (can add unlimited number)'
      },
      frontendTitle: {
        ru: 'Фронтенд (Vue.js)',
        en: 'Frontend (Vue.js)'
      },
      frontendDescription: {
        ru: 'Веб-интерфейс управления с обновлением данных каждые 2 секунды',
        en: 'Web management interface with data updates every 2 seconds'
      },
      redisDescription: {
        ru: 'База данных для управления задачами, состоянием и блокировками.',
        en: 'Database for task management, state handling, and locks.'
      },
      tradingStrategyTitle: {
        ru: 'Торговая стратегия',
        en: 'Trading Strategy'
      },
      strategyDescription: {
        ru: 'Система отслеживает покупку и автоматически выставляет стоп-лосс ордер, двигая его ("трейлинг") вслед за ростом цены согласно заданным параметрам. По завершении сделки отправляет отчет в Telegram и переходит в режим ожидания новой покупки для данного инструмента.',
        en: 'The system tracks purchases and automatically places stop-loss orders, trailing them following price increases according to set parameters. Upon trade completion, it sends a report to Telegram and enters standby mode for new purchases of that instrument.'
      },
      strategyAdaptationTitle: {
        ru: 'Адаптация стратегии',
        en: 'Strategy Adaptation'
      },
      adaptation1: {
        ru: 'Возможность увеличения ("докупки") позиции в реальном времени',
        en: 'Ability to increase ("add to") position in real-time'
      },
      adaptation2: {
        ru: 'Изменение настроек трейлинг-стопа (процент отступа, активация) без остановки работы бота',
        en: 'Change trailing stop settings (percentage, activation) without stopping the bot'
      },
      adaptation3: {
        ru: 'Автоматический пересчет и обновление стоп-лосс ордеров при изменении параметров или доборе позиции',
        en: 'Automatic recalculation and update of stop-loss orders when parameters change or position is added to'
      },
      installationTitle: {
        ru: 'Установка и запуск',
        en: 'Installation and Setup'
      },
      requirementsTitle: {
        ru: 'Требования',
        en: 'Requirements'
      },
      serverRequirements: {
        ru: 'Сервер (рекомендуется: 2 ядра CPU, 4 Gb RAM)',
        en: 'Server (recommended: 2 CPU cores, 4GB RAM)'
      },
      softwareRequirements: {
        ru: 'Установленные Node.js (версия 22 или выше) и Docker / Docker Compose',
        en: 'Installed Node.js (version 22 or higher) and Docker/Docker Compose'
      },
      apiRequirements: {
        ru: 'API-ключи от биржи Binance',
        en: 'API keys from Binance exchange'
      },
      telegramRequirements: {
        ru: 'BOT TOKEN и CHAT ID от Telegram (опционально, для уведомлений и управления)',
        en: 'BOT TOKEN and CHAT ID from Telegram (optional, for notifications and control)'
      },
      instructionsTitle: {
        ru: 'Инструкция по установке',
        en: 'Installation Instructions'
      },
      cloneCommand: {
        ru: 'Клонировать репозиторий',
        en: 'Clone repository'
      },
      frontendCommand: {
        ru: 'Установить зависимости для фронтенда',
        en: 'Install frontend dependencies'
      },
      nodeRedCommand: {
        ru: 'Установить зависимости для Node-RED',
        en: 'Install Node-RED dependencies'
      },
      dockerCommand: {
        ru: 'Запустить все сервисы через Docker Compose',
        en: 'Launch all services via Docker Compose'
      },
      configurationTitle: {
        ru: 'Настройка',
        en: 'Configuration'
      },
      configurationDescription: {
        ru: 'После установки необходимо ввести API-ключи Binance и, по желанию, токен и ID чата Telegram.',
        en: 'After installation, you need to enter Binance API keys and optionally Telegram token and chat ID.'
      },
      nodeRedAccess: {
        ru: 'Доступ к интерфейсу настроек Node-RED осуществляется по адресу:',
        en: 'Access to Node-RED settings interface at:'
      },
      yourServerIP: {
        ru: 'IP вашего сервера',
        en: 'your server IP'
      },
      ipNote: {
        ru: 'Обратите внимание, красным шрифтом в интерфейсе настроек обозначен IP адрес, который необходимо добавить в разрешенные в личном кабинете Binance.',
        en: 'Note: The IP address shown in red in the settings interface must be added to the allowed IPs in your Binance account.'
      },
      frontendSectionTitle: {
        ru: 'Фронтенд (Интерфейс управления)',
        en: 'Frontend (Control Interface)'
      },
      frontendAccess: {
        ru: 'Доступ к основному веб-интерфейсу для управления роботами осуществляется по адресу:',
        en: 'Access to the main web interface for bot management at:'
      },
      frontendFeaturesTitle: {
        ru: 'Функционал интерфейса',
        en: 'Interface Features'
      },
      frontendFeature1: {
        ru: 'Создание, настройка и удаление экземпляров роботов для разных торговых пар.',
        en: 'Create, configure and remove bot instances for different trading pairs.'
      },
      frontendFeature2: {
        ru: 'Просмотр финансовых результатов: общий PNL, PNL по каждому инструменту.',
        en: 'View financial results: overall PNL, PNL per instrument.'
      },
      frontendFeature3: {
        ru: 'Остановка и запуск отдельных роботов.',
        en: 'Stop and start individual bots.'
      },
      frontendFeature4: {
        ru: 'Изменение настроек (процент отступа, активация трейлинга) "на лету".',
        en: 'Change settings (percentage, trailing activation) on the fly.'
      },
      frontendFeature5: {
        ru: 'Минималистичный дизайн, ориентированный на удобство использования.',
        en: 'Minimalist design focused on usability.'
      },
      frontendFeature6: {
        ru: 'Данные обновляются автоматически каждые 2 секунды, обеспечивая актуальность информации.',
        en: 'Data updates automatically every 2 seconds, ensuring current information.'
      },
      reliabilityTitle: {
        ru: 'Надежность',
        en: 'Reliability'
      },
      reliabilityDescription: {
        ru: 'Система обладает высокой надежностью благодаря следующим аспектам:',
        en: 'The system is highly reliable due to the following aspects:'
      },
      redisSnapshots: {
        ru: 'Снапшоты Redis',
        en: 'Redis snapshots'
      },
      redisSnapshotsDescription: {
        ru: 'Автоматическое сохранение состояния Redis на диск (в зависимости от настроек Redis), что позволяет минимизировать потери данных при сбоях.',
        en: 'Automatic Redis state saving to disk (depending on Redis settings), minimizing data loss during failures.'
      },
      restartRecovery: {
        ru: 'Восстановление после перезапуска',
        en: 'Restart recovery'
      },
      restartRecoveryDescription: {
        ru: 'Система спроектирована так, чтобы корректно возобновлять работу после перезапуска (docker-compose restart или перезагрузки сервера), подхватывая задачи из Redis.',
        en: 'The system is designed to properly resume operation after restart (docker-compose restart or server reboot), picking up tasks from Redis.'
      },
      locksTitle: {
        ru: 'Блокировки (Locks)',
        en: 'Locks'
      },
      locksDescription: {
        ru: 'Использование блокировок в Redis предотвращает конфликты при одновременном доступе к данным несколькими воркерами, обеспечивая целостность операций.',
        en: 'Redis locks prevent conflicts during concurrent data access by multiple workers, ensuring operation integrity.'
      },
      differencesTitle: {
        ru: 'Отличия от аналогов',
        en: 'Differences from Alternatives'
      },
      differencesDescription1: {
        ru: 'Наш робот выделяется своей простотой: для развертывания требуется всего одна основная команда (docker-compose up -d) после клонирования и установки зависимостей. Интерфейс управления интуитивно понятен и ориентирован на пользователей разного уровня подготовки.',
        en: 'Our bot stands out for its simplicity: deployment requires just one main command (docker-compose up -d) after cloning and installing dependencies. The control interface is intuitive and designed for users of all skill levels.'
      },
      differencesDescription2: {
        ru: 'Гибкость и масштабируемость являются ключевыми преимуществами: вы можете легко настроить его под различные стратегии (скальпинг, свинг-трейдинг) и масштабировать производительность, добавляя больше воркеров. Поддержка неограниченного количества торговых пар позволяет гибко адаптироваться к меняющимся условиям рынка без дополнительных затрат.',
        en: 'Flexibility and scalability are key advantages: you can easily configure it for various strategies (scalping, swing trading) and scale performance by adding more workers. Support for unlimited trading pairs allows flexible adaptation to changing market conditions without additional costs.'
      },
      licenseTitle: {
        ru: 'Лицензия',
        en: 'License'
      },
      licenseDescription: {
        ru: 'Исходный код доступен для свободного использования, модификации и распространения под',
        en: 'Source code is available for free use, modification and distribution under the'
      },
      mitLicense: {
        ru: 'лицензией MIT',
        en: 'MIT License'
      },
      technologiesTitle: {
        ru: 'Технологии',
        en: 'Technologies'
      },
      developerInfoTitle: {
        ru: 'Информация для разработчиков',
        en: 'Developer Information'
      },
      collaborationInvitation: {
        ru: 'Приглашаем к сотрудничеству! Если вы хотите улучшить нашу систему, исправить ошибки или добавить новые функции, пожалуйста, не стесняйтесь создавать Issues и Pull Requests в нашем репозитории на GitHub.',
        en: 'We welcome collaboration! If you want to improve our system, fix bugs or add new features, please feel free to create Issues and Pull Requests in our GitHub repository.'
      },
      repository: {
        ru: 'Репозиторий:',
        en: 'Repository:'
      },
      contactsTitle: {
        ru: 'Контакты и Сообщество',
        en: 'Contacts and Community'
      },
      telegramCommunity: {
        ru: 'Присоединяйтесь к нашему сообществу в Telegram, чтобы обсуждать бота, делиться идеями и получать последние новости и обновления:',
        en: 'Join our Telegram community to discuss the bot, share ideas and get the latest news and updates:'
      },
      telegramLink: {
        ru: 'Ti ROBOTS LAB в Telegram',
        en: 'Ti ROBOTS LAB on Telegram'
      },
      githubTitle: {
        ru: 'Скачать код с GitHub',
        en: 'Download from GitHub'
      },
      githubDescription: {
        ru: 'Исходный код доступен бесплатно на GitHub под лицензией MIT.',
        en: 'Source code is available for free on GitHub under MIT license.'
      },
      download: {
        ru: 'Скачать',
        en: 'Download'
      },
      deploymentTitle: {
        ru: 'Услуга разворачивания',
        en: 'Deployment Service'
      },
      deploymentDescription: {
        ru: 'Предлагаем установку и настройку бота на вашем сервере (5000 руб).',
        en: 'We offer bot installation and setup on your server (5000 RUB).'
      },
      orderSetup: {
        ru: 'Заказать установку',
        en: 'Order Setup'
      },
      modalTitle: {
        ru: 'Заявка на услугу разворачивания',
        en: 'Deployment Service Request'
      },
      modalDescription: {
        ru: 'Оставьте свои контактные данные, и мы свяжемся с вами для обсуждения деталей установки бота на вашем сервере.',
        en: 'Leave your contact details and we will contact you to discuss the details of bot installation on your server.'
      },
      nameLabel: {
        ru: 'Имя',
        en: 'Name'
      },
      namePlaceholder: {
        ru: 'Ваше имя (необязательно)',
        en: 'Your name (optional)'
      },
      contactLabel: {
        ru: 'Телефон или Email',
        en: 'Phone or Email'
      },
      contactPlaceholder: {
        ru: '8(XXX)XXX-XX-XX или email@example.com',
        en: '8(XXX)XXX-XX-XX or email@example.com'
      },
      sending: {
        ru: 'Отправка...',
        en: 'Sending...'
      },
      sent: {
        ru: 'Отправлено!',
        en: 'Sent!'
      },
      submit: {
        ru: 'Отправить заявку',
        en: 'Submit Request'
      }
    };

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
        formStatus.error = currentLanguage === 'ru'
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
          formStatus.success = currentLanguage === 'ru'
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
          formStatus.error = currentLanguage === 'ru'
            ? `Ошибка отправки (${res.status}). Попробуйте снова или свяжитесь с нами другим способом.`
            : `Submission error (${res.status}). Please try again or contact us another way.`;
        }
      } catch (error) {
        console.error("Network error during form submission:", error);
        formStatus.error = currentLanguage === 'ru'
          ? 'Сетевая ошибка. Проверьте подключение и попробуйте снова.'
          : 'Network error. Check your connection and try again.';
      } finally {
        formStatus.loading = false;
      }
    };

    return {
      currentLanguage,
      translations,
      formModal,
      formData,
      formStatus,
      openModal,
      closeModal,
      submitForm
    };
  }
};
</script>

<style scoped>
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

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
