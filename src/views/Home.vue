<template>
  <!-- Add a single wrapper div -->
  <div>
    <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <!-- Header -->
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold dark:text-white">Trailing Stop Loss Bot (Binance version)</h1>
        </div>

        <!-- Main Content -->
        <div class="space-y-8">
          <!-- ... (keep all your sections: Описание, Ключевые особенности, etc.) ... -->
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Описание</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>TSL Bot</strong> — это автоматизированная система, обеспечивающая Trailing Stop Loss.
              Поддерживает одновременную торговлю по нескольким инструментам. Система использует асинхронную,
              событийно-ориентированную архитектуру с паттерном "Брокер-Воркер", что позволяет горизонтально
              масштабироваться. В качестве БД используется Redis для управления задачами, состоянием и блокировками.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ключевые особенности</h2>
            <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>Минималистичный интерфейс: простота использования и легкость развертывания</li>
              <li>Горизонтальная масштабируемость: добавление воркеров для увеличения производительности</li>
              <li>Реальное время: мгновенная реакция на рыночные изменения</li>
              <li>Гибкость: адаптация под различные торговые стратегии</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Архитектура</h2>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Компоненты системы</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Все сервисы запускаются через Docker Compose:</p>
            <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Node-RED Core</strong>: Управляет логикой, распределяет задачи, контролирует блокировки
              </li>
              <li>
                <strong>Микросервисы</strong>:
                <ul class="list-['-_'] list-inside ml-4 mt-1 space-y-1">
                  <li>Order Service - мониторинг и запись ордеров</li>
                  <li>Balance Service - отслеживание балансов</li>
                  <li>Price Service - обновление рыночных цен</li>
                  <li>Telegram Bot Service - управление через Telegram</li>
                </ul>
              </li>
              <li>
                <strong>Воркеры</strong>: Выполняют торговые задачи, легко масштабируются
              </li>
              <li>
                <strong>Фронтенд (Vue.js)</strong>: Веб-интерфейс управления с обновлением данных каждые 2 секунды
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Торговая стратегия</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Система отслеживает покупку и автоматически выставляет стоп-лосс ордер, двигая его вслед за ценой. По
              завершении сделки отправляет отчет в Telegram и переходит в режим ожидания.
            </p>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-3">Адаптация стратегии</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Возможность увеличения позиции в реальном времени</li>
              <li>Изменение настроек без остановки работы</li>
              <li>Автоматический пересчет ордеров при изменении параметров</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Технологии</h2>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-full">JavaScript (Node.js)</span>
              <span class="px-3 py-1 text-sm font-semibold text-purple-800 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 rounded-full">Vue.js</span>
              <span class="px-3 py-1 text-sm font-semibold text-green-800 dark:text-green-200 bg-green-100 dark:bg-green-900 rounded-full">Docker</span>
              <span class="px-3 py-1 text-sm font-semibold text-red-800 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-full">Redis</span>
              <span class="px-3 py-1 text-sm font-semibold text-yellow-800 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 rounded-full">Node-RED</span>
              <span class="px-3 py-1 text-sm font-semibold text-indigo-800 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 rounded-full">Binance API</span>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Информация для разработчиков</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Приглашаем к сотрудничеству! Если вы хотите улучшить нашу систему или добавить новые функции,
              пожалуйста, не стесняйтесь создавать пулл-реквест.
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Репозиторий: <a class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200" href="https://github.com/ti-rudin/binance-tsl-bot" target="_blank">https://github.com/ti-rudin/binance-tsl-bot </a>
            </p>
          </section>

          <!-- New Cards Section -->
          <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-6">
              <h3 class="text-xl font-bold dark:text-white">Скачать код с GitHub</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">Скачайте код нашего бота бесплатно с GitHub.</p>
              <a href="https://github.com/ti-rudin/binance-tsl-bot" target="_blank" class="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Скачать</a>
            </div>
            <div class="bg-green-100 dark:bg-green-900 rounded-lg p-6">
              <h3 class="text-xl font-bold dark:text-white">Услуга разворачивания кода</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">Мы предлагаем услугу по разворачиванию кода на вашем сервере за 5000 рублей.</p>
              <!-- Use the openModal method -->
              <button class="inline-block bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700" @click="openModal">Заказать</button>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Modal Container (still inside the single root) -->
    <!-- Add a transition for the modal itself -->
    <transition name="modal-fade">
      <div v-if="formModal" @click.self="closeModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
        <div class="modal-content bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl w-full max-w-md" >
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Оставьте e-mail или телефон
            </h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <form class="flex flex-col space-y-4" @submit.prevent="submitForm">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Имя</label>
              <input
                  type="text"
                  v-model="formData.name"
                  name="name"
                  id="name"
                  placeholder="(необязательно)"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label for="tel" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Телефон или Email <span class="text-red-500">*</span>
              </label>
              <input
                  type="text"
                  v-model="formData.contact"
                  name="tel"
                  id="tel"
                  placeholder="8(XXX)XXX-XX-XX или email@example.com"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <p v-if="formStatus.loading" class="text-sm text-blue-600 dark:text-blue-400">Отправка...</p>
            <p v-if="formStatus.error" class="text-sm text-red-600 dark:text-red-400">{{ formStatus.error }}</p>
            <p v-if="formStatus.success" class="text-sm text-green-600 dark:text-green-400">{{ formStatus.success }}</p>
            <button
                type="submit"
                :disabled="formStatus.loading"
                class="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </transition>
  <!-- Close the single wrapper div -->
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'BotInfoPage',
  setup() {
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
      console.log('Modal should open');
      formData.name = '';
      formData.contact = '';
      formStatus.loading = false;
      formStatus.error = null;
      formStatus.success = null;
      formModal.value = true;
    };

    const closeModal = () => {
      console.log('Modal should close');
      formModal.value = false;
    };

    const submitForm = async () => {
      console.log('Submitting:', formData.name, formData.contact);
      formStatus.loading = true;
      formStatus.error = null;
      formStatus.success = null;

       if (!formData.contact) {
           formStatus.error = 'Пожалуйста, укажите Телефон или Email.';
           formStatus.loading = false;
           return;
       }

      const params = new URLSearchParams({
        name: formData.name,
        tel: formData.contact
      });

      try {
        const res = await fetch(
          `https://brams-demo.netlify.app/zayavka/?${params.toString()}`,
          {
            method: "GET",
            headers: { Accept: "application/json" },
          }
        );

        if (res.ok) {
           formStatus.success = "Спасибо за интерес! Мы свяжемся с Вами в ближайшее время.";
           console.log("Form submitted successfully");
           setTimeout(() => { closeModal(); }, 3000);
        } else {
           const errorText = await res.text();
           console.error("Form submission error:", res.status, errorText);
           formStatus.error = `Ошибка отправки (${res.status}). Попробуйте снова.`;
        }
      } catch (error) {
          console.error("Network error during form submission:", error);
          formStatus.error = 'Сетевая ошибка. Проверьте подключение и попробуйте снова.';
      } finally {
          formStatus.loading = false;
      }
    };

    return {
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
.modal-content {
  max-height: 90vh;
  overflow-y: auto;
}

/* Optional: Add fade transition for the modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
