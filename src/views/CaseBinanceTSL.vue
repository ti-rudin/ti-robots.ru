<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ translations.title[currentLanguage] }}</h1>
    <section class="space-y-6 text-gray-700 dark:text-gray-300">
      <p>{{ translations.description[currentLanguage] }}</p>
      <h2 class="text-2xl font-semibold mb-2">{{ translations.keyFeaturesTitle[currentLanguage] }}</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>{{ translations.feature1[currentLanguage] }}</li>
        <li>{{ translations.feature2[currentLanguage] }}</li>
        <li>{{ translations.feature3[currentLanguage] }}</li>
        <li>{{ translations.feature4[currentLanguage] }}</li>
        <li>{{ translations.feature5[currentLanguage] }}</li>
      </ul>
      <h2 class="text-2xl font-semibold mb-2">{{ translations.architectureTitle[currentLanguage] }}</h2>
      <p>{{ translations.architectureDescription[currentLanguage] }}</p>
      <h2 class="text-2xl font-semibold mb-2">{{ translations.tradingStrategyTitle[currentLanguage] }}</h2>
      <p>{{ translations.tradingStrategyDescription[currentLanguage] }}</p>
      <h2 class="text-2xl font-semibold mb-2">{{ translations.installationTitle[currentLanguage] }}</h2>
      <p>{{ translations.installationRequirements[currentLanguage] }}</p>
      <p>{{ translations.installationInstructionsTitle[currentLanguage] }}</p>
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
      <h2 class="text-2xl font-semibold mb-2">{{ translations.contactsTitle[currentLanguage] }}</h2>
      <p v-html="translations.contactsDescription[currentLanguage]"></p>
    </section>
  </div>
</template>

<script>
import { currentLanguage } from '../stores/language';

export default {
  name: 'CaseBinanceTSL',
  setup() {
    const translations = {
      title: {
        ru: 'Binance Trailing Stop Bot',
        en: 'Binance Trailing Stop Bot',
      },
      description: {
        ru: 'Робот для трейдинга с трейлинг-стопом на Binance.',
        en: 'Trading bot with trailing stop on Binance.',
      },
      featuresTitle: {
        ru: 'Особенности',
        en: 'Features',
      },
      feature1: {
        ru: 'Автоматическое выставление трейлинг-стопа',
        en: 'Automatic trailing stop placement',
      },
      feature2: {
        ru: 'Поддержка нескольких торговых пар',
        en: 'Support for multiple trading pairs',
      },
      feature3: {
        ru: 'Настраиваемые параметры риска',
        en: 'Customizable risk parameters',
      },
      cta: {
        ru: 'Начните торговать с роботом уже сегодня!',
        en: 'Start trading with the bot today!',
      },
    };

    return {
      currentLanguage,
      translations,
    };
  },
};

</script>
