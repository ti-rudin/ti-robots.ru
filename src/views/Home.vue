<template>
  <!-- Single root div -->
  <div>
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
        <button 
          class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          @click="openModal">
          {{ translations.cta[currentLanguage] }}
        </button>
      </section>

      <!-- New Section: How we work (steps) -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          {{ translations.howWeWorkTitle[currentLanguage] }}
        </h2>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li v-for="(step, index) in translations.steps[currentLanguage]" :key="index" class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-500">
              <svg aria-hidden="true" class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {{ step }}
            </h3>
          </li>
        </ol>
        <button 
          class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          @click="openModal">
          {{ translations.discussProjectBtn[currentLanguage] }}
        </button>
      </section>

      <!-- New Section: Solutions -->
      <section class="mt-12 space-y-6">
        <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          {{ translations.solutionsTitle[currentLanguage] }}
        </h2>
        <ul class="space-y-3 text-gray-700 dark:text-gray-300">
          <li v-for="(solution, idx) in translations.solutions[currentLanguage]" :key="idx">
            <a :href="solution.link" class="hover:underline font-medium text-blue-600 dark:text-blue-400">
              {{ solution.name }}
            </a>
            <span>: {{ solution.desc }}</span>
          </li>
        </ul>
        <button 
          class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          @click="$router.push('/cases')">
          {{ translations.allCasesBtn[currentLanguage] }}
        </button>
      </section>
    </div>

    <!-- Modal Container -->
    <transition name="modal-fade">
      <div v-if="formModal" @click.self="closeModal"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4 backdrop-blur-sm">
        <!-- Add transition for the modal content -->
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
import { ref, reactive } from 'vue';
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

      // New section: How we work (steps)
      howWeWorkTitle: {
        ru: 'Простой путь к автоматизации',
        en: 'Simple path to automation',
      },
      steps: {
        ru: [
          'Анализ процессов',
          'Разработка робота',
          'Тестирование',
          'Внедрение и обучение',
          'Поддержка и масштабирование',
        ],
        en: [
          'Process analysis',
          'Robot development',
          'Testing',
          'Implementation and training',
          'Support and scaling',
        ],
      },
      discussProjectBtn: {
        ru: 'Обсудить проект',
        en: 'Discuss project',
      },

      // New section: Solutions (brief + links)
      solutionsTitle: {
        ru: 'Какие процессы можно автоматизировать?',
        en: 'Which processes can be automated?',
      },
      solutions: {
        ru: [
          { name: 'Бухгалтерия и финансы', desc: 'автоформирование отчетов', link: '/cases#accounting' },
          { name: 'HR', desc: 'автоматический подбор кандидатов', link: '/cases#hr' },
          { name: 'Логистика', desc: 'сбор и анализ данных поставок', link: '/cases#logistics' },
          { name: 'Клиентский сервис', desc: 'чат-боты и обработка запросов', link: '/cases#customer-service' },
        ],
        en: [
          { name: 'Accounting and Finance', desc: 'auto report generation', link: '/cases#accounting' },
          { name: 'HR', desc: 'automatic candidate selection', link: '/cases#hr' },
          { name: 'Logistics', desc: 'collection and analysis of supply data', link: '/cases#logistics' },
          { name: 'Customer Service', desc: 'chatbots and request processing', link: '/cases#customer-service' },
        ],
      },
      allCasesBtn: {
        ru: 'Все кейсы автоматизации',
        en: 'All automation cases',
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
