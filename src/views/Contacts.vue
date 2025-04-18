<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Контакты</h1>
    <p class="text-gray-700 dark:text-gray-300 mb-4">
      Хотите узнать, какие процессы можно автоматизировать в вашей компании?
    </p>
    <p class="text-gray-700 dark:text-gray-300 mb-2">
      📞 Звоните: +X (XXX) XXX-XX-XX
    </p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">
      ✉ Или пишите: contact@вашсайт.ru
    </p>
    <form @submit.prevent="submitForm" class="space-y-4 max-w-md">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Имя</label>
        <input type="text" id="name" v-model="formData.name" placeholder="Ваше имя (необязательно)"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
      </div>
      <div>
        <label for="contact" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Телефон или Email <span class="text-red-500">*</span></label>
        <input type="text" id="contact" v-model="formData.contact" required placeholder="8(XXX)XXX-XX-XX или email@example.com"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
      </div>
      <div class="h-6 text-sm text-center">
        <p v-if="formStatus.loading" class="text-blue-600 dark:text-blue-400 animate-pulse">Отправка...</p>
        <p v-if="formStatus.error" class="text-red-600 dark:text-red-400">{{ formStatus.error }}</p>
        <p v-if="formStatus.success" class="text-green-600 dark:text-green-400">{{ formStatus.success }}</p>
      </div>
      <button type="submit" :disabled="formStatus.loading || formStatus.success"
        class="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
        {{ formStatus.loading ? 'Отправляется...' : (formStatus.success ? 'Отправлено!' : 'Отправить заявку') }}
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';

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

    const submitForm = async () => {
      formStatus.loading = true;
      formStatus.error = null;
      formStatus.success = null;

      if (!formData.contact || !formData.contact.trim()) {
        formStatus.error = 'Пожалуйста, укажите Телефон или Email.';
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
          formStatus.success = "Спасибо! Мы свяжемся с Вами в ближайшее время.";
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
          formStatus.error = `Ошибка отправки (${res.status}). Попробуйте снова или свяжитесь с нами другим способом.`;
        }
      } catch (error) {
        console.error("Network error during form submission:", error);
        formStatus.error = 'Сетевая ошибка. Проверьте подключение и попробуйте снова.';
      } finally {
        formStatus.loading = false;
      }
    };

    return {
      formData,
      formStatus,
      submitForm
    };
  }
}
</script>
