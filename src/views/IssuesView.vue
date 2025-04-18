<template>
    <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <GitHubIssues />
      </div>
    </div>
  </template>
  
  <script>
  import GitHubIssues from '@/components/GitHubIssues.vue'
  
  export default {
    name: 'IssuesView',
    components: {
      GitHubIssues
    }
  }
  </script>