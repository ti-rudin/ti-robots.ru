<template>
  <div>
    <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl">
              {{ translations.title[currentLanguage] }}
            </h1>
            <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              {{ translations.subtitle[currentLanguage] }}
            </p>
          </div>
          <div class="max-w-3xl mx-auto mt-8 text-left md:mt-16 space-y-8">
            <router-link to="/case-binance-tsl" class="block p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div class="mb-4 h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500">
                <span>Image Placeholder</span>
              </div>
              <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{{ translations.product1Title[currentLanguage] }}</h3>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">{{ translations.product1Desc[currentLanguage] }}</p>
              <ul class="mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li v-for="(feature, idx) in translations.product1Features[currentLanguage]" :key="'p1f'+idx" class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  {{ feature }}
                </li>
              </ul>
              <p class="italic text-gray-600 dark:text-gray-400">{{ translations.product1IdealFor[currentLanguage] }}</p>
            </router-link>
            <router-link to="/product2" class="block p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div class="mb-4 h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500">
                <span>Image Placeholder</span>
              </div>
              <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{{ translations.product2Title[currentLanguage] }}</h3>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">{{ translations.product2Desc[currentLanguage] }}</p>
              <ul class="mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li v-for="(feature, idx) in translations.product2Features[currentLanguage]" :key="'p2f'+idx" class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  {{ feature }}
                </li>
              </ul>
              <p class="italic text-gray-600 dark:text-gray-400">{{ translations.product2Call[currentLanguage] }}</p>
            </router-link>
            <router-link to="/product3" class="block p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div class="mb-4 h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500">
                <span>Image Placeholder</span>
              </div>
              <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{{ translations.product3Title[currentLanguage] }}</h3>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">{{ translations.product3Desc[currentLanguage] }}</p>
              <ul class="mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li v-for="(feature, idx) in translations.product3Features[currentLanguage]" :key="'p3f'+idx" class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  {{ feature }}
                </li>
              </ul>
              <p class="italic text-gray-600 dark:text-gray-400">{{ translations.product3Call[currentLanguage] }}</p>
            </router-link>
          </div>

          <div class="max-w-3xl mx-auto mt-16 text-center">
            <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
              {{ translations.whyChooseUsTitle[currentLanguage] }}
            </h2>
            <ul class="max-w-xl mx-auto space-y-4 text-left text-gray-500 dark:text-gray-400 md:text-lg">
              <li v-for="(point, idx) in translations.whyChooseUsPoints[currentLanguage]" :key="'why'+idx" class="flex items-start">
                <svg class="flex-shrink-0 w-6 h-6 mr-2 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                {{ point }}
              </li>
            </ul>
          </div>

          <div class="max-w-3xl mx-auto mt-16 text-center">
            <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{{ translations.contactCall[currentLanguage] }}</p>
            <p class="mb-6 text-gray-500 dark:text-gray-400">{{ translations.contactPrompt[currentLanguage] }}</p>
            <button 
              class="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              @click="openModal">
              {{ translations.cta[currentLanguage] }}
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- Modal Container -->
    <transition name="modal-fade">
      <div v-if="formModal" @click.self="closeModal"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4 backdrop-blur-sm">
        <transition name="modal-content-fade">
          <div v-if="formModal" class="modal-content bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl w-full max-w-md transform transition-all duration-300 ease-out">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                {{ currentLanguage === 'ru' 
                  ? 'Заявка на консультацию' 
                  : 'Consultation Request' }}
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
                ? 'Оставьте свои контактные данные, и мы свяжемся с вами для консультации по автоматизации вашего бизнеса.' 
                : 'Leave your contact details and we will contact you to discuss business automation solutions.' }}
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
import { ref, reactive } from 'vue';
import { currentLanguage } from '../stores/language';

export default {
  name: 'Home',
  setup() {
    const translations = {
      title: {
        ru: 'Инновационные IT-решения для бизнеса и жизни',
        en: 'Innovative IT Solutions for Business and Life',
      },
      subtitle: {
        ru: 'Создаём передовое программное обеспечение для автоматизации торговли, умного дома и организации мероприятий. Мы создаем технологии, которые делают жизнь проще, а бизнес – эффективнее.',
        en: 'Develop advanced software for trade automation, smart homes, and event management. We create technologies that make life easier and business more efficient.',
      },

      productsTitle: {
        ru: 'Наши продукты',
        en: 'Our Products',
      },

      product1Title: {
        ru: '1. TSL Bot – Автоматизированная торговля с Trailing Stop Loss',
        en: '1. TSL Bot – Automated Trading with Trailing Stop Loss',
      },
      product1Desc: {
        ru: 'TSL Bot – это мощная система для автоматического управления стоп-лоссом с поддержкой множества инструментов.',
        en: 'TSL Bot is a powerful system for automatic stop-loss management supporting multiple instruments.',
      },
      product1Features: {
        ru: [
          'Trailing Stop Loss – динамичное сопровождение сделок для максимизации прибыли.',
          'Асинхронная архитектура – высокая производительность и надежность.',
          'Горизонтальное масштабирование – легко адаптируется под любые объемы торгов.',
          'Мультиинструментность – одновременная работа с разными активами.',
        ],
        en: [
          'Trailing Stop Loss – dynamic trade tracking to maximize profits.',
          'Asynchronous architecture – high performance and reliability.',
          'Horizontal scaling – easily adapts to any trading volume.',
          'Multi-instrument support – simultaneous operation with different assets.',
        ],
      },
      product1IdealFor: {
        ru: 'Идеально для трейдеров и инвестиционных фондов, ценящих скорость и точность.',
        en: 'Ideal for traders and investment funds valuing speed and precision.',
      },

      product2Title: {
        ru: '2. Умный дом на базе WirenBoard',
        en: '2. Smart Home based on WirenBoard',
      },
      product2Desc: {
        ru: 'Современное решение для автоматизации жилых и коммерческих помещений.',
        en: 'A modern solution for automating residential and commercial premises.',
      },
      product2Features: {
        ru: [
          'Полный контроль – управление светом, отоплением, безопасностью и мультимедиа.',
          'Удобство – интеграция с мобильными приложениями и голосовыми помощниками.',
          'Энергоэффективность – умные сценарии для экономии ресурсов.',
        ],
        en: [
          'Full control – manage lighting, heating, security, and multimedia.',
          'Convenience – integration with mobile apps and voice assistants.',
          'Energy efficiency – smart scenarios for resource saving.',
        ],
      },
      product2Call: {
        ru: 'Превратите свой дом в технологичный и безопасный комфорт-пространство!',
        en: 'Turn your home into a technological and safe comfort space!',
      },

      product3Title: {
        ru: '3. Концертный софт – организация мероприятий нового уровня',
        en: '3. Concert Software – Next-level Event Management',
      },
      product3Desc: {
        ru: 'Комплексная система для проведения концертов, фестивалей и корпоративных событий.',
        en: 'A comprehensive system for concerts, festivals, and corporate events.',
      },
      product3Features: {
        ru: [
          'Три кабинета – для зрителей, артистов и организаторов.',
          'Интеграция с VK – авторизация и автоматическая галерея фото с тегами.',
          'Трансляция текущего трека – название песни, текст, лайки в реальном времени.',
          'Рейтинг артистов – автоматический подсчет лайков и формирование таблицы результатов.',
        ],
        en: [
          'Three dashboards – for viewers, artists, and organizers.',
          'VK integration – authorization and automatic photo gallery with tags.',
          'Current track broadcast – song title, lyrics, likes in real time.',
          'Artist rating – automatic like counting and leaderboard generation.',
        ],
      },
      product3Call: {
        ru: 'Создавайте незабываемые события с нашим цифровым помощником!',
        en: 'Create unforgettable events with our digital assistant!',
      },

      whyChooseUsTitle: {
        ru: 'Почему выбирают нас?',
        en: 'Why Choose Us?',
      },
      whyChooseUsPoints: {
        ru: [
          'Опыт и экспертиза – работаем с передовыми технологиями.',
          'Гибкость решений – адаптируем продукты под ваши задачи.',
          'Надежность – стабильная работа даже при высоких нагрузках.',
        ],
        en: [
          'Experience and expertise – working with cutting-edge technologies.',
          'Solution flexibility – adapting products to your needs.',
          'Reliability – stable operation even under high loads.',
        ],
      },

      contactCall: {
        ru: 'Технологии будущего уже сегодня!',
        en: 'The technology of the future today!',
      },
      contactPrompt: {
        ru: 'Свяжитесь с нами – обсудим ваш проект и предложим лучшее решение!',
        en: 'Contact us – let’s discuss your project and offer the best solution!',
      },

      cta: {
        ru: 'Свяжитесь с нами – обсудим ваш проект и предложим лучшее решение!',
        en: 'Contact us – let’s discuss your project and offer the best solution!',
      },
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
}
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
</style>
