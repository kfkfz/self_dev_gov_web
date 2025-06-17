<template>
  <div class="relative inline-block w-full">
    <!-- 下拉触发按钮 -->
    <div @click="toggleMenu" class="cursor-pointer  flex items-center text-[16px]  text-white shadow-sm hover:text-[#FFDF57] focus:opacity-80">
      {{ $t("yy") }}
      <svg class="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </div>

    <!-- 下拉菜单 -->
    <div v-if="menuOpen" class="w-[120px] absolute right-0 mt-[20px] rounded-[30px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10 px-[20px]">
      <ul class="py-1">
        <li v-for="(language, index) in languages" :key="index" @click.stop="selectLanguage(language, index)" class="cursor-pointer text-[20px] text-black hover:text-[#0071bc] mb-[12px]">
          {{ language.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
   
      languages: [
        { code: "en", name: "English" },
        { code: "zh", name: "繁體中文" },
        { code: "kr", name: "한국인" },
        { code: "jp", name: "日語" },
      ],
      cur: 0,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    selectLanguage(language, index) {
      const currentLang = this.$route.path.split("/")[1];
      if (currentLang !== language.code) {
        this.$i18n.setLocale(language.code);
      
      }
      this.menuOpen = false;
    },
  },
};
</script>
