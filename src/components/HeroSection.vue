<template>
<section class="relative w-full" data-aos="zoom-in-up">
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
        <div class="h-32 w-2/3 bg-gradient-to-t from-[#ffffff00] via-[#570cac] to-[#0cc0df] blur-3xl opacity-20"></div>
        <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-3xl"></div>
    </div>
    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
            <div class="lg:py-6">
                <div class="text-center lg:text-left">
                    <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                        {{ currentTexts.hi }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">
                            {{ displayName }}
                        </span>
                    </h1>
                </div>
                <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl min-h-[160px] md:min-h-[150px]" style="white-space:pre-line;">
                    {{ currentTexts.description }}
                </p>
                <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                    <button class=" border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                        <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                            <div class="svg-container">
                                <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#0cc0df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                                    20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                                    20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke="#0cc0df" stroke-width="2" stroke-linecap="round" />
                                </svg>
                                <div class="download-loader text-white hidden"></div>
                            </div>
                            <a href="/iu_portfolio/İbrahim Üstün - Software Developer Resume.pdf" download="İbrahim Üstün - Software Developer Resume.pdf" class="pl-2 text-primary">
                                {{ currentTexts.download }}
                            </a>
                        </div>
                    </button>
                </div>
            </div>
            <div class="lg:h-full md:flex">
                <div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                    <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"></div>
                    <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary animate-float">
                        <img src="@/assets/ustun.png" alt="Hero pic" width="500" height="auto" loading="lazy" class="w-full h-full rounded-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<style scoped>
@keyframes float {
    0% { transform: translateY(-50%) translateY(0px); }
    50% { transform: translateY(-50%) translateY(-20px); }
    100% { transform: translateY(-50%) translateY(0px); }
}
.animate-float {
    animation: float 6s ease-in-out infinite;
}
</style>
<script setup>
import { useLang } from '@/composables/useLang'
import { computed } from 'vue'

const { lang } = useLang()

const texts = {
  en: {
    hi: "Hi, I'm",
    description: `I love bringing ideas to life by creating digital experiences. My process involves a blend of creativity and problem-solving to design and build engaging, user-friendly projects, from websites to games. I am always excited to learn new skills, take on challenges, and collaborate with others.`,
    download: "Download resume"
  },
  tr: {
    hi: "Selam, ben",
    description: `Dijital deneyimler aracılığıyla fikirleri hayata geçirmeye tutkulu, yaratıcı biriyim. Yaratıcılığımı problem çözme becerimle birleştirerek, hem işlevsel hem de görsel açıdan etkileyici projeler tasarlamayı ve geliştirmeyi seviyorum. Oyun geliştirmekten kullanıcı dostu arayüzler oluşturmaya kadar her türlü projede, sürekli öğrenmeye ve verimli iş birliklerine açık bir şekilde çalışıyorum.`,
    download: "CV'yi indir"
  },
  ru: {
    hi: "Привет, я",
    description: `Я увлеченный создатель цифровых продуктов, для которого важно не просто воплощать идеи в жизнь, но и наполнять их смыслом. Мой подход строится на гармонии креативности и решения задач: будь то игра или веб-сайт, я стремлюсь к тому, чтобы результат был эстетичным, удобным и технически безупречным. Я верю в непрерывное развитие и всегда открыт к новым вызовам, возможностям учиться и плодотворному сотрудничеству.`,
    download: "Скачать резюме"
  }
}

const names = {
  en: "Ibrahim",
  tr: "İbrahim",
  ru: "Ибрагим"
}

const currentTexts = computed(() => texts[lang.value] || texts.en)
const displayName = computed(() => names[lang.value] || names.en)
</script>