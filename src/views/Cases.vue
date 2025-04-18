<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Кейсы</h1>
    <section class="space-y-6 text-gray-700 dark:text-gray-300">
      <article>
        <p>«Для транспортной компании мы автоматизировали обработку накладных. Робот сократил время с 4 часов до 20 минут в день.»</p>
      </article>
      <article>
        <p>«Внедрили RPA в банке для проверки клиентов. Точность — 99%, экономия — 200 часов в месяц.»</p>
      </article>
      <article>
        <h2 class="text-2xl font-semibold mb-2">
          <router-link to="/case-binance-tsl" class="text-blue-600 hover:underline">
            Кейс: Binance Trailing Stop Bot
          </router-link>
        </h2>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Cases',
}
</script>
