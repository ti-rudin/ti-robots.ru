<template>
  <div v-if="isLoading" class="flex items-center justify-center min-h-screen">
    <div class="text-lg">{{ currentLanguage === 'ru' ? 'Загрузка...' : 'Loading...' }}</div>
  </div>
  <div v-else class="min-h-screen flex flex-col">
    <!-- Header -->
    <nav class="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
      <div class="flex flex-wrap justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
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
          </router-link>
        </div>

        <!-- Navigation Menu -->
        <div class="flex items-center lg:order-2">
          <!-- Language Switcher -->
          <div class="relative mr-2">
            <button 
              @click.stop="toggleLanguageDropdown"
              class="flex items-center space-x-1 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <span>{{ currentLanguage === 'ru' ? 'РУС' : 'ENG' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-if="showLanguageDropdown"
              class="absolute right-0 mt-1 w-24 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50 border border-gray-200 dark:border-gray-600"
            >
              <button 
                @click.stop="switchLanguage('ru')"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                :class="{'bg-blue-100 dark:bg-blue-900': currentLanguage === 'ru'}"
              >
                Русский
              </button>
              <button 
                @click.stop="switchLanguage('en')"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                :class="{'bg-blue-100 dark:bg-blue-900': currentLanguage === 'en'}"
              >
                English
              </button>
            </div>
          </div>
          
          <!-- Theme Switch -->
          <button @click="toggleTheme"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-2">
            <span v-if="isDarkMode">☀️</span>
            <span v-else>🌙</span>
          </button>

    
          <!-- Mobile menu button -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <!-- Main Navigation -->
        <div :class="{ 'hidden': !isMobileMenuOpen }"
          class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <router-link to="/" class="ml-18 block py-2 pr-4 pl-3 text-gray-300 hover:text-white lg:p-0"
                :class="{ 'text-white': route.path === '/' }" @click="handleMobileLinkClick">
                TSL Bot
              </router-link>
            </li>
            <li>
              <a class="pl-3 py-2 lg:p-0 block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                href="https://github.com/ti-rudin/binance-tsl-bot" target="_blank">
                {{ currentLanguage === 'ru' ? 'Репозиторий GitHub' : 'GitHub Repo' }}
              </a>
            </li>
            <li>
              <a href="https://t.me/ti_robots_lab" target="_blank"
                class="pl-3 py-2 lg:p-0 block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
                {{ currentLanguage === 'ru' ? 'Поддержка в Telegram' : 'Telegram Support' }}
              </a>
            </li>
            <li>
              <router-link 
                to="/issues" 
                class="pl-3 py-2 lg:p-0 block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                :class="{ 
                  'font-semibold text-blue-800 dark:text-blue-300': route.path === '/issues'
                }"
                @click="handleMobileLinkClick">
                {{ currentLanguage === 'ru' ? 'Борт журнал' : 'Board magazine' }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 shadow">
      <div class="w-full mx-auto max-w-screen-xl p-4 text-center">
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Ti-ROBOTS TSL © {{ new Date().getFullYear() }} <a href="https://t.me/ti_robots_lab" target="_blank"
            class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
            {{ currentLanguage === 'ru' ? 'Поддержка в Telegram' : 'Telegram Support' }}
          </a>
        </span>
      </div>
    </footer>
  </div>

  <!-- Click Outside Handler -->
  <div v-if="isUserMenuOpen || isMobileMenuOpen || showLanguageDropdown" class="fixed inset-0 z-10" @click="handleOutsideClick"></div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, provide } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from './stores/auth'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const authStore = useAuthStore()

    const isLoading = ref(true)
    const isDarkMode = ref(false)
    const isUserMenuOpen = ref(false)
    const isMobileMenuOpen = ref(false)
    const currentLanguage = ref(localStorage.getItem('preferredLanguage') || 'ru')
    const showLanguageDropdown = ref(false)

    const isAuthenticated = computed(() => authStore.isAuthenticated)
    const userEmail = computed(() => authStore.userEmail)

    onMounted(async () => {
      await authStore.init()
      isLoading.value = false

      // Initialize dark mode from localStorage
      isDarkMode.value = localStorage.getItem('darkMode') === 'true'
      applyTheme(isDarkMode.value)

      // Add escape key listener
      document.addEventListener('keydown', handleEscKey)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscKey)
    })

    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        closeMenus()
      }
    }

    const toggleLanguageDropdown = () => {
      showLanguageDropdown.value = !showLanguageDropdown.value
    }

    const switchLanguage = (lang) => {
      currentLanguage.value = lang
      localStorage.setItem('preferredLanguage', lang)
      showLanguageDropdown.value = false
    }

    const closeMenus = () => {
      isUserMenuOpen.value = false
      isMobileMenuOpen.value = false
      showLanguageDropdown.value = false
    }

    const handleLogout = async () => {
      try {
        await authStore.logout()
        closeMenus()
        router.push('/login')
      } catch (error) {
        console.error('Logout error:', error)
      }
    }

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value
      localStorage.setItem('darkMode', isDarkMode.value)
      applyTheme(isDarkMode.value)
    }

    const applyTheme = (isDark) => {
      document.documentElement.classList.toggle('dark', isDark)
    }

    const handleOutsideClick = (e) => {
      // Don't close menu if click was inside mobile menu
      const mobileMenu = document.getElementById('mobile-menu')
      if (mobileMenu && mobileMenu.contains(e.target)) {
        return
      }

      // Don't close menu if click was on user menu button
      const userMenuButton = document.querySelector('.relative button')
      if (userMenuButton && userMenuButton.contains(e.target)) {
        return
      }

      // Don't close menu if click was on language switcher
      const languageSwitcher = document.querySelector('.relative.mr-2')
      if (languageSwitcher && languageSwitcher.contains(e.target)) {
        return
      }

      closeMenus()
    }

    const handleMobileLinkClick = () => {
      // Close menu after small delay to allow navigation to complete
      setTimeout(() => {
        isMobileMenuOpen.value = false
      }, 100)
    }

    // Provide currentLanguage to all child components
    provide('currentLanguage', currentLanguage)

    return {
      isLoading,
      isDarkMode,
      isUserMenuOpen,
      isMobileMenuOpen,
      currentLanguage,
      showLanguageDropdown,
      isAuthenticated,
      userEmail,
      route,
      toggleLanguageDropdown,
      switchLanguage,
      closeMenus,
      handleLogout,
      toggleTheme,
      handleOutsideClick,
      handleMobileLinkClick
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Dark mode styles */
:root {
  --primary-color: #f0b90b;
  --text-color: rgba(0, 0, 0, 0.85);
  --bg-color: #fff;
}

:root.dark {
  --primary-color: #f0b90b;
  --text-color: rgba(255, 255, 255, 0.85);
  --bg-color: #141414;
}

body {
  color: var(--text-color);
  background-color: var(--bg-color);
}

/* Ensure mobile menu stays above overlay */
#mobile-menu {
  position: relative;
  z-index: 20;
}
</style>