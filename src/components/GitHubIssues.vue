<template>
    <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {{ currentLanguage === 'ru' ? 'GitHub Issues' : 'GitHub Issues' }}
      </h2>
  
      <div v-if="loading" class="text-center py-8">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          {{ currentLanguage === 'ru' ? 'Загрузка вопросов...' : 'Loading issues...' }}
        </p>
      </div>
  
      <div v-else>
        <div v-if="error" class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6">
          {{ error }}
        </div>
  
        <div v-else>
          <div v-if="issues.length === 0" class="text-center py-8 text-gray-600 dark:text-gray-400">
            {{ currentLanguage === 'ru' ? 'Нет открытых вопросов' : 'No open issues' }}
          </div>
  
          <div v-else class="space-y-6">
            <div v-for="issue in issues" :key="issue.id" 
                 class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div class="flex justify-between items-start">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  <a :href="issue.html_url" target="_blank" rel="noopener" 
                     class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {{ issue.title }}
                  </a>
                </h3>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  #{{ issue.number }}
                </span>
              </div>
              
              <p class="text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                {{ issue.body || (currentLanguage === 'ru' ? 'Нет описания' : 'No description') }}
              </p>
              
              <div class="flex flex-wrap items-center justify-between">
                <div class="flex items-center space-x-3">
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ formatDate(issue.created_at) }}
                  </span>
                  <span v-if="issue.user" class="flex items-center">
                    <img :src="issue.user.avatar_url" :alt="issue.user.login" 
                         class="w-5 h-5 rounded-full mr-1">
                    <span class="text-sm">{{ issue.user.login }}</span>
                  </span>
                </div>
                
                <div v-if="issue.labels.length" class="flex flex-wrap gap-2 mt-2 md:mt-0">
                  <span v-for="label in issue.labels" :key="label.id" 
                        class="px-2 py-1 text-xs rounded-full" 
                        :style="{ backgroundColor: `#${label.color}20`, color: `#${label.color}` }">
                    {{ label.name }}
                  </span>
                </div>
              </div>
            </div>
  
            <div class="flex items-center justify-between mt-6">
              <button 
                @click="prevPage" 
                :disabled="currentPage === 1"
                class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ currentLanguage === 'ru' ? 'Назад' : 'Previous' }}
              </button>
              
              <span class="text-sm text-gray-600 dark:text-gray-400">
                {{ currentLanguage === 'ru' 
                  ? `Страница ${currentPage}` 
                  : `Page ${currentPage}` }}
              </span>
              
              <button 
                @click="nextPage" 
                :disabled="issues.length < perPage"
                class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ currentLanguage === 'ru' ? 'Вперед' : 'Next' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted, inject } from 'vue'
  
  export default {
    name: 'GitHubIssues',
    setup() {
      const currentLanguage = inject('currentLanguage')
      const owner = 'ti-rudin'
      const repo = 'ti-robots.ru'
      const perPage = 3
      
      const issues = ref([])
      const currentPage = ref(1)
      const loading = ref(true)
      const error = ref(null)
  
      const fetchIssues = async () => {
        try {
          loading.value = true
          error.value = null
          
          const response = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/issues?page=${currentPage.value}&per_page=${perPage}&state=open`
          )
          
          if (!response.ok) {
            throw new Error(
              currentLanguage.value === 'ru' 
                ? `Ошибка загрузки: ${response.status}` 
                : `Loading error: ${response.status}`
            )
          }
          
          issues.value = await response.json()
        } catch (err) {
          error.value = currentLanguage.value === 'ru' 
            ? `Не удалось загрузить вопросы: ${err.message}` 
            : `Failed to load issues: ${err.message}`
          console.error(err)
        } finally {
          loading.value = false
        }
      }
  
      const nextPage = () => {
        currentPage.value++
        fetchIssues()
      }
  
      const prevPage = () => {
        if (currentPage.value > 1) {
          currentPage.value--
          fetchIssues()
        }
      }
  
      const formatDate = (dateString) => {
        const options = { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }
        return new Date(dateString).toLocaleDateString(
          currentLanguage.value === 'ru' ? 'ru-RU' : 'en-US', 
          options
        )
      }
  
      onMounted(() => {
        fetchIssues()
      })
  
      return {
        currentLanguage,
        issues,
        currentPage,
        loading,
        error,
        perPage,
        nextPage,
        prevPage,
        formatDate
      }
    }
  }
  </script>
  
  <style scoped>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>