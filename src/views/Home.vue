<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{{ translations.title[currentLanguage] }}</h1>
    <p class="text-gray-700 dark:text-gray-300 mb-6">
      {{ translations.subtitle[currentLanguage] }}
    </p>
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold mb-2">{{ translations.advantagesTitle[currentLanguage] }}</h2>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>{{ translations.advantage1[currentLanguage] }}</li>
        <li>{{ translations.advantage2[currentLanguage] }}</li>
        <li>{{ translations.advantage3[currentLanguage] }}</li>
        <li>{{ translations.advantage4[currentLanguage] }}</li>
      </ul>
      <button class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {{ translations.cta[currentLanguage] }}
      </button>
    </section>
  </div>
</template>


<script>
import { currentLanguage } from '../stores/language';

export default {
  name: 'Home',
  setup() {
    const translations = {
      title: {
        ru: 'Автоматизируйте бизнес с помощью программных роботов',
        en: 'Automate your business with software robots',
      },
      subtitle: {
        ru: 'Разрабатываем и внедряем RPA-решения, которые экономят время, снижают затраты и исключают ошибки.',
        en: 'We develop and implement RPA solutions that save time, reduce costs, and eliminate errors.',
      },
      advantagesTitle: {
        ru: 'Преимущества',
        en: 'Advantages',
      },
      advantage1: {
        ru: 'В 5 раз быстрее ручных операций',
        en: '5 times faster than manual operations',
      },
      advantage2: {
        ru: 'До 70% экономии на рутинных процессах',
        en: 'Up to 70% savings on routine processes',
      },
      advantage3: {
        ru: 'Интеграция с 1С, SAP, Excel и другими системами',
        en: 'Integration with 1C, SAP, Excel, and other systems',
      },
      advantage4: {
        ru: 'Поддержка 24/7',
        en: '24/7 support',
      },
      cta: {
        ru: 'Оставьте заявку — расскажем, как роботы упростят ваш бизнес!',
        en: 'Leave a request — we will tell you how robots simplify your business!',
      },
    };

    return {
      currentLanguage,
      translations,
    };
  },
};
</script>
