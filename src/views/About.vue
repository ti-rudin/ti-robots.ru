<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ translations.title[currentLanguage] }}</h1>
    <section class="space-y-6 text-gray-700 dark:text-gray-300">
      <p>{{ translations.intro[currentLanguage] }}</p>
      <h2 class="text-2xl font-semibold mt-6 mb-2">{{ translations.missionTitle[currentLanguage] }}</h2>
      <p>{{ translations.missionDescription[currentLanguage] }}</p>
      <h2 class="text-2xl font-semibold mt-6 mb-2">{{ translations.teamTitle[currentLanguage] }}</h2>
      <p>{{ translations.teamDescription[currentLanguage] }}</p>
      <h2 class="text-2xl font-semibold mt-6 mb-2">{{ translations.partnersTitle[currentLanguage] }}</h2>
      <p>{{ translations.partnersDescription[currentLanguage] }}</p>
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
      intro: {
        ru: 'Мы — команда экспертов по RPA с 5+ годами опыта. Наша цель — освободить людей от рутины с помощью умных технологий.',
        en: 'We are a team of RPA experts with 5+ years of experience. Our goal is to free people from routine tasks using smart technologies.',
      },
      missionTitle: {
        ru: 'Миссия и ценности',
        en: 'Mission and Values',
      },
      missionDescription: {
        ru: 'Автоматизация бизнес-процессов для повышения эффективности и снижения затрат.',
        en: 'Automating business processes to increase efficiency and reduce costs.',
      },
      teamTitle: {
        ru: 'Команда',
        en: 'Team',
      },
      teamDescription: {
        ru: 'Профессионалы с опытом в разработке и внедрении RPA-решений.',
        en: 'Professionals with experience in developing and implementing RPA solutions.',
      },
      partnersTitle: {
        ru: 'Партнеры и сертификаты',
        en: 'Partners and Certifications',
      },
      partnersDescription: {
        ru: 'Сотрудничаем с ведущими компаниями и имеем соответствующие сертификаты качества.',
        en: 'We collaborate with leading companies and hold relevant quality certifications.',
      },
    };

    return {
      currentLanguage,
      translations,
    };
  },
};
</script>
