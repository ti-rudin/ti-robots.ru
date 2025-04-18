<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ translations.title[currentLanguage] }}</h1>
    <p class="text-gray-700 dark:text-gray-300 mb-4">{{ translations.intro[currentLanguage] }}</p>
    <p class="text-gray-700 dark:text-gray-300 mb-2">{{ translations.phoneLabel[currentLanguage] }}: +X (XXX) XXX-XX-XX</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">{{ translations.emailLabel[currentLanguage] }}: contact@вашсайт.ru</p>
    <form @submit.prevent="submitForm" class="space-y-4 max-w-md">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ translations.nameLabel[currentLanguage] }}</label>
        <input type="text" id="name" v-model="formData.name" :placeholder="translations.namePlaceholder[currentLanguage]"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
      </div>
      <div>
        <label for="contact" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ translations.contactLabel[currentLanguage] }} <span class="text-red-500">*</span></label>
        <input type="text" id="contact" v-model="formData.contact" required :placeholder="translations.contactPlaceholder[currentLanguage]"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
      </div>
      <div class="h-6 text-sm text-center">
        <p v-if="formStatus.loading" class="text-blue-600 dark:text-blue-400 animate-pulse">{{ translations.sending[currentLanguage] }}</p>
        <p v-if="formStatus.error" class="text-red-600 dark:text-red-400">{{ formStatus.error }}</p>
        <p v-if="formStatus.success" class="text-green-600 dark:text-green-400">{{ formStatus.success }}</p>
      </div>
      <button type="submit" :disabled="formStatus.loading || formStatus.success"
        class="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
        {{ formStatus.loading ? translations.sending[currentLanguage] : (formStatus.success ? translations.sent[currentLanguage] : translations.submit[currentLanguage]) }}
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { currentLanguage } from '../stores/language';

export default {
  name: 'Contacts',
  setup() {
    const formData = reactive({
      name: '',
      contact: ''
    });
    const formStatus = reactive({
      loading: false,
      error: null,
      success: null,
    });

    const translations = {
      title: {
        ru: 'Контакты',
        en: 'Contacts',
      },
      intro: {
        ru: 'Хотите узнать, какие процессы можно автоматизировать в вашей компании?',
        en: 'Want to know which processes can be automated in your company?',
      },
      phoneLabel: {
        ru: '📞 Звоните',
        en: '📞 Call',
      },
      emailLabel: {
        ru: '✉ Или пишите',
        en: '✉ Or write to',
      },
      nameLabel: {
        ru: 'Имя',
        en: 'Name',
      },
      namePlaceholder: {
        ru: 'Ваше имя (необязательно)',
        en: 'Your name (optional)',
      },
      contactLabel: {
        ru: 'Телефон или Email',
        en: 'Phone or Email',
      },
      contactPlaceholder: {
        ru: '8(XXX)XXX-XX-XX или email@example.com',
        en: '8(XXX)XXX-XX-XX or email@example.com',
      },
      sending: {
        ru: 'Отправка...',
        en: 'Sending...',
      },
      sent: {
        ru: 'Отправлено!',
        en: 'Sent!',
      },
      submit: {
        ru: 'Отправить заявку',
        en: 'Submit Request',
      },
      errorRequired: {
        ru: 'Пожалуйста, укажите Телефон или Email.',
        en: 'Please provide Phone or Email.',
      },
      errorSend: {
        ru: 'Ошибка отправки. Попробуйте снова или свяжитесь с нами другим способом.',
        en: 'Sending error. Please try again or contact us by other means.',
      },
      errorNetwork: {
        ru: 'Сетевая ошибка. Проверьте подключение и попробуйте снова.',
        en: 'Network error. Check your connection and try again.',
      },
      successMessage: {
        ru: 'Спасибо! Мы свяжемся с Вами в ближайшее время.',
        en: 'Thank you! We will contact you shortly.',
      },
    };

    const submitForm = async () => {
      formStatus.loading = true;
      formStatus.error = null;
      formStatus.success = null;

      if (!formData.contact || !formData.contact.trim()) {
        formStatus.error = translations.errorRequired[currentLanguage.value];
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
          formStatus.success = translations.successMessage[currentLanguage.value];
          formData.name = '';
          formData.contact = '';
          setTimeout(() => {
            if (formStatus.success) {
              formStatus.success = null;
            }
          }, 3000);
        } else {
          const errorText = await res.text();
          console.error("Form submission error:", res.status, errorText);
          formStatus.error = `${translations.errorSend[currentLanguage.value]} (${res.status})`;
        }
      } catch (error) {
        console.error("Network error during form submission:", error);
        formStatus.error = translations.errorNetwork[currentLanguage.value];
      } finally {
        formStatus.loading = false;
      }
    };

    return {
      formData,
      formStatus,
      submitForm,
      currentLanguage,
      translations,
    };
  }
}
</script>
