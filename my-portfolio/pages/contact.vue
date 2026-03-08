<!-- 
    Ethan Bell
    u25004702
    Contact Page
-->
<script setup>
    const form = ref({ name: '', email: '', message: '' })
    const submitted = ref(false)

    async function handleSubmit() {
    const formData = new URLSearchParams()
    formData.append('form-name', 'contact')
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('message', form.value.message)

    await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
    })

    submitted.value = true
    }
</script>

<template>
  <div>
    <NavBar />

    <main>
      <h1>Contact Me</h1>
      <p>Fill in the form below and I'll get back to you.</p>

      <p v-if="submitted"><strong>Message sent! I'll be in touch soon.</strong></p>

      <form
        v-else
        name="contact"
        method="POST"
        data-netlify="true"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>Name<br />
            <input type="text" name="name" v-model="form.name" required />
          </label>
        </p>

        <p>
          <label>Email<br />
            <input type="email" name="email" v-model="form.email" required />
          </label>
        </p>

        <p>
          <label>Message<br />
            <textarea name="message" v-model="form.message" rows="5" required></textarea>
          </label>
        </p>

        <p>
          <button type="submit">Send Message</button>
        </p>
      </form>
    </main>
  </div>
</template>