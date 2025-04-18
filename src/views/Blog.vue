<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ translations.title[currentLanguage] }}</h1>
    <p class="text-gray-700 dark:text-gray-300">{{ translations.description[currentLanguage] }}</p>
  </div>
</template>

<script>
import { currentLanguage } from '../stores/language';

export default {
  name: 'Blog',
  setup() {
    const translations = {
      title: {
        ru: 'Блог',
        en: 'Blog',
      },
      description: {
        ru: 'Здесь будут статьи про RPA, автоматизацию и кейсы. Скоро появится новый контент.',
        en: 'Here will be articles about RPA, automation, and case studies. New content coming soon.',
      },
    };

    return {
      currentLanguage,
      translations,
    };
  },
};
</script>
