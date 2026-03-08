<!-- 
  Ethan Bell
  u25004702
  Homepage
-->
<template>
  <div>
    <NavBar />

    <main>
        <img src="/assets/images/profile.jpg" alt="Photo of me" width="150" />
        <h1>Ethan Bell</h1>
        <p>
            I am an Information and Knowledge Systems student at the University of Pretoria. I would like to work in cybersecurity when 
            i am done my studies at Uni.
        </p>
        <p>
            I enjoy building websites and learning new technologies.I have an extreme passion for video games and would like to 
            maybe go into that direction one day.
        </p>

        <NuxtLink to="/projects">View my projects</NuxtLink>
        |
        <NuxtLink to="/contact">Contact me</NuxtLink>

        <hr />

        <h2>Today's XKCD Comic</h2>

        <p v-if="loading">Loading comic...</p>
        <p v-else-if="error">Could not load comic.</p>
        <div v-else>
            <h3>{{ comic.title }}</h3>
            <img :src="comic.img" :alt="comic.alt" width="400" />
            <p><em>{{ comic.alt }}</em></p>
        </div>
        </main>
    </div>
</template>

<script setup>
    const comic = ref(null)
    const loading = ref(true)
    const error = ref(false)

    const response = await fetch('https://corsproxy.io/?https://xkcd.com/info.0.json')
    .then(res => res.json())
    .catch(() => null)

    if (response) {
    comic.value = response
    } else {
    error.value = true
    }

    loading.value = false
</script>