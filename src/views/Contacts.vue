<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ translations.title[currentLanguage] }}</h1>
    <p class="text-gray-700 dark:text-gray-300 mb-4">{{ translations.intro[currentLanguage] }}</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">
      {{ translations.spamNotice[currentLanguage] }}
      <a href="https://t.me/yourtelegramgroup" target="_blank" class="text-blue-600 hover:underline">Telegram</a>
      {{ translations.orFillForm[currentLanguage] }}
    </p>
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
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ translations.descriptionLabel[currentLanguage] }} <span class="text-red-500">*</span></label>
        <textarea id="description" v-model="formData.description" required :placeholder="translations.descriptionPlaceholder[currentLanguage]"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 resize-y" rows="4"></textarea>
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
      contact: '',
      description: ''
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
      spamNotice: {
        ru: 'Мы не оставляем номера телефонов из-за спама, поэтому предлагаем присоединиться к нашей группе в',
        en: 'We do not leave phone numbers due to spam, so we suggest joining our group in',
      },
      orFillForm: {
        ru: 'и задать вопрос там или заполнить небольшую форму, и мы перезвоним вам.',
        en: 'and ask your question there or fill out a small form, and we will call you back.',
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
        ru: 'Телефон',
        en: 'Phone',
      },
      contactPlaceholder: {
        ru: '8(XXX)XXX-XX-XX',
        en: '8(XXX)XXX-XX-XX',
      },
      descriptionLabel: {
        ru: 'Описание задачи',
        en: 'Task Description',
      },
      descriptionPlaceholder: {
        ru: 'Опишите вашу задачу (обязательно)',
        en: 'Describe your task (required)',
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
        ru: 'Пожалуйста, укажите Телефон и описание задачи.',
        en: 'Please provide Phone and task description.',
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

      if (!formData.contact || !formData.contact.trim() || !formData.description || !formData.description.trim()) {
        formStatus.error = translations.errorRequired[currentLanguage.value];
        formStatus.loading = false;
        return;
      }

      const params = new URLSearchParams({
        name: formData.name.trim(),
        tel: formData.contact.trim(),
        description: formData.description.trim()
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
          formData.description = '';
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
