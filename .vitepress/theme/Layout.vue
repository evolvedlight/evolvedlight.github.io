<template>
  <div class="antialiased">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="Steve Brown's blog">
          <img
            class="inline-block mr-2"
            style="width: 36px; height: 31px"
            alt="logo"
            src="/logo.webp"
          />
          <span v-if="!isIndex" class="hidden md:inline">Steve Brown's blog</span>
        </a>
        <div class="text-sm text-gray-500 leading-5">
          <a
            class="hover:text-gray-700"
            href="https://github.com/evolvedlight/blog"
            target="_blank"
            rel="noopener"
            ><span class="hidden sm:inline">GitHub </span>Source</a
          >
          <span class="mr-2 ml-2">·</span>
          <a class="hover:text-gray-700" href="/feed.rss">RSS<span class="hidden sm:inline"> Feed</span></a>
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700"
            href="https://github.com/evolvedlight/curriculum-vitae/releases/latest/download/StephenBrownCV.pdf"
            target="_blank"
            rel="noopener"
            >CV</a
          >
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="isIndex" />
      <Article v-else />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>
