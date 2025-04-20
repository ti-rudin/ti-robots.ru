<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-700 dark:text-gray-300">
    <h1 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">{{ translations.title[currentLanguage] }}</h1>

    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-4">{{ translations.missionTitle[currentLanguage] }}</h2>
      <p class="text-lg leading-relaxed">
        {{ translations.missionText[currentLanguage] }}
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-4">{{ translations.valuesTitle[currentLanguage] }}</h2>
      <ol class="list-decimal list-inside space-y-3 text-lg leading-relaxed">
        <li><strong>{{ translations.value1Title[currentLanguage] }}</strong> — {{ translations.value1Text[currentLanguage] }}</li>
        <li><strong>{{ translations.value2Title[currentLanguage] }}</strong> — {{ translations.value2Text[currentLanguage] }}</li>
        <li><strong>{{ translations.value3Title[currentLanguage] }}</strong> — {{ translations.value3Text[currentLanguage] }}</li>
        <li><strong>{{ translations.value4Title[currentLanguage] }}</strong> — {{ translations.value4Text[currentLanguage] }}</li>
      </ol>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">{{ translations.philosophyTitle[currentLanguage] }}</h2>
      <p class="italic text-lg leading-relaxed mb-4">{{ translations.philosophyQuote[currentLanguage] }}</p>
      <p class="text-lg leading-relaxed">
        {{ translations.philosophyText[currentLanguage] }}
      </p>
    </section>
  </div>
</template>

<script>
import { currentLanguage } from '../stores/language';

export default {
  name: 'About',
  setup() {
    const translations = {
      title: {
        ru: 'О компании',
        en: 'About Us',
      },
      missionTitle: {
        ru: 'Наша миссия',
        en: 'Our Mission',
      },
      missionText: {
        ru: 'Мы — гики, которые любят музыку и технологии. Поэтому создали систему для концертов (и не только), чтобы организаторы меньше страдали, а зрители — больше радовались. А заодно автоматизировали свои дома и пишем торговых роботов — потому что можем.',
        en: 'We are geeks who love music and technology. That’s why we created a system for concerts (and more) to make organizers suffer less and audiences enjoy more. At the same time, we automated our homes and write trading bots — simply because we can.',
      },
      valuesTitle: {
        ru: 'Наши ценности',
        en: 'Our Values',
      },
      value1Title: {
        ru: 'Код + музыка',
        en: 'Code + Music',
      },
      value1Text: {
        ru: 'Наш софт для мероприятий родился из любви к live-выступлениям. Он для тех, кто хочет провести концерт, фестиваль или лекцию без лишней головной боли.',
        en: 'Our event software was born from a love of live performances. It’s for those who want to hold a concert, festival, or lecture without unnecessary headaches.',
      },
      value2Title: {
        ru: 'Автоматизируем всё',
        en: 'Automate Everything',
      },
      value2Text: {
        ru: 'Если можно не делать вручную — мы напишем скрипт. Умный дом? Алготрейдинг? Да просто ради интереса.',
        en: 'If it can be done automatically — we’ll write a script. Smart home? Algo trading? Just for fun.',
      },
      value3Title: {
        ru: 'Без фанатизма',
        en: 'No Fanaticism',
      },
      value3Text: {
        ru: 'Технологии должны помогать, а не усложнять. Пишем только то, что реально работает.',
        en: 'Technology should help, not complicate. We write only what really works.',
      },
      value4Title: {
        ru: 'Как для себя',
        en: 'Like for Ourselves',
      },
      value4Text: {
        ru: 'Делаем так, чтобы самим было удобно. Если нравится нам — понравится и другим.',
        en: 'We do it so it’s convenient for ourselves. If we like it — others will too.',
      },
      philosophyTitle: {
        ru: 'Философия',
        en: 'Philosophy',
      },
      philosophyQuote: {
        ru: '«Главное — чтобы работало, кайфовалось и не раздражало»',
        en: '"The main thing is that it works, feels good, and doesn’t annoy."',
      },
      philosophyText: {
        ru: '(Короче, мы те самые ребята, которые на концерте кайфуют от музыки, но при этом не могут удержаться, чтобы не оптимизировать раздачу билетов или освещение в зале. Ну и дома у нас всё «умное», конечно. А торгового бота написали просто потому, что было интересно). 🚀',
        en: '(In short, we are those guys who enjoy music at concerts but can’t resist optimizing ticket distribution or lighting in the hall. And of course, our homes are all "smart". We wrote a trading bot simply because it was interesting). 🚀',
      },
    };

    return {
      currentLanguage,
      translations,
    };
  },
};
</script>
