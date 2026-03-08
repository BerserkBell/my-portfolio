<!-- 
  Ethan Bell
  u25004702
  Jokes
-->
<template>
    <div>
        <NavBar />

        <main>
        <h1>Random Joke</h1>
        <p>Need a break? Here's a joke for you.</p>

        <hr />

        <p v-if="loading">Loading joke...</p>
        <p v-else-if="error">Could not load a joke right now.</p>
        <div v-else>
            <p><strong>{{ joke.setup }}</strong></p>
            <p v-if="showPunchline">{{ joke.punchline }}</p>
            <button v-else @click="showPunchline = true">Show punchline</button>
        </div>

        <br />
        <button @click="fetchJoke">Get another joke</button>
        </main>
    </div>
</template>

<script setup>
    const joke = ref(null)
    const loading = ref(true)
    const error = ref(false)
    const showPunchline = ref(false)

    async function fetchJoke() {
    loading.value = true
    error.value = false
    showPunchline.value = false

    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .catch(() => null)

    if (response) {
        joke.value = response
    } else {
        error.value = true
    }

    loading.value = false
    }

    
    await fetchJoke()
</script>