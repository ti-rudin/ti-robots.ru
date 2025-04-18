<template>
  <div>
    <nav class="bg-white dark:bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center space-x-4">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
              <g clip-path="url(#clip0)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.96631 8.65552L36.6553 8.65551L36.6553 36.3445L8.96631 36.3445L8.96631 8.65552ZM35.2663 18.3618L35.2663 21.6912H30.9552L30.9552 18.3618L35.2663 18.3618ZM35.2663 34.9937L35.2663 22.571L30.9552 22.571L30.9552 29.7173C30.7305 32.6744 32.6316 34.8393 35.2663 34.9937ZM29.9591 21.7293V18.4119L17.1564 18.4119L17.1564 21.729L21.5194 21.729L21.5194 34.9937H25.8293L25.8293 21.7293L29.9591 21.7293Z"
                  fill="#F0B90B" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="45" height="45" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div class="hidden md:flex space-x-2">
              <router-link to="/" class="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold">
                {{ translations.home[currentLanguage] }}
              </router-link>
              <router-link to="/services" class="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold">
                {{ translations.services[currentLanguage] }}
              </router-link>
              <router-link to="/cases" class="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold">
                {{ translations.cases[currentLanguage] }}
              </router-link>
              <router-link to="/about" class="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold">
                {{ translations.about[currentLanguage] }}
              </router-link>
              <router-link to="/blog" class="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold">
                {{ translations.blog[currentLanguage] }}
              </router-link>
              <router-link to="/contacts" class="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold">
                {{ translations.contacts[currentLanguage] }}
              </router-link>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Theme toggle -->
            <button @click="toggleTheme" aria-label="Toggle Dark Mode" class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 5a7 7 0 000 14 7 7 0 000-14z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>

            <!-- Language switcher -->
            <button @click="toggleLanguage" aria-label="Toggle Language" class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold">
              {{ currentLanguage === 'ru' ? 'RU' : 'EN' }}
            </button>

            <!-- Mobile menu button -->
            <button @click="toggleMobileMenu" aria-label="Toggle Menu" class="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 px-4 pt-2 pb-3 space-y-1">
        <router-link @click="closeMobileMenu" to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
          {{ translations.home[currentLanguage] }}
        </router-link>
        <router-link @click="closeMobileMenu" to="/services" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
          {{ translations.services[currentLanguage] }}
        </router-link>
        <router-link @click="closeMobileMenu" to="/cases" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
          {{ translations.cases[currentLanguage] }}
        </router-link>
        <router-link @click="closeMobileMenu" to="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
          {{ translations.about[currentLanguage] }}
        </router-link>
        <router-link @click="closeMobileMenu" to="/blog" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
          {{ translations.blog[currentLanguage] }}
        </router-link>
        <router-link @click="closeMobileMenu" to="/contacts" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
          {{ translations.contacts[currentLanguage] }}
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { currentLanguage, toggleLanguage } from './stores/language';

export default {
  name: 'App',
  setup() {
    const isDark = ref(false);
    const mobileMenuOpen = ref(false);

    const translations = {
      home: { ru: 'Главная', en: 'Home' },
      services: { ru: 'Услуги', en: 'Services' },
      cases: { ru: 'Кейсы', en: 'Cases' },
      about: { ru: 'О компании', en: 'About' },
      blog: { ru: 'Блог', en: 'Blog' },
      contacts: { ru: 'Контакты', en: 'Contacts' },
    };

    // Load theme from localStorage or system preference
    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        isDark.value = savedTheme === 'dark';
      } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      updateTheme();
    });

    // Watch and update theme class on html element
    watch(isDark, (newVal) => {
      updateTheme();
      localStorage.setItem('theme', newVal ? 'dark' : 'light');
    });

    function updateTheme() {
      if (isDark.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    function toggleTheme() {
      isDark.value = !isDark.value;
    }

    function toggleMobileMenu() {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    }

    function closeMobileMenu() {
      mobileMenuOpen.value = false;
    }

    return {
      isDark,
      currentLanguage,
      mobileMenuOpen,
      toggleTheme,
      toggleLanguage,
      toggleMobileMenu,
      closeMobileMenu,
      translations,
    };
  },
};
</script>

<style>
/* Add any global styles if needed */
</style>
