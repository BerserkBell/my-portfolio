<!-- 
  Ethan Bell
  u25004702
  Projects Page
-->
  <script setup>
    const projects = [
      {
        title: 'Student Registration MVC',
        module: 'INF 272',
        description: 'A web application built in Visual Studio 2022 using the MVC . It allows students to register, view, and manage their information through a structured interface.'
      },
      {
        title: 'Issue Ticket Summary MVC',
        module: 'INF 272',
        description: 'An MVC web application where users can log complaints or issues and track their status. Built in Visual Studio 2022 with a focus on clean data management and user-friendly forms.'
      },
      {
        title: 'Personal Portfolio Website',
        module: 'IMY 210',
        description: 'A personal portfolio site built with Nuxt.js and deployed on Netlify. Features two external API integrations (XKCD comics and a joke generator) and a contact form using Netlify Forms.'
      }
    ]
    </script>
<template>
  <div>
    <NavBar />

    <main>
      <h1>My Projects</h1>

      <div v-for="project in projects" :key="project.title">
        <h2>{{ project.title }}</h2>
        <p><strong>Module:</strong> {{ project.module }}</p>
        <p>{{ project.description }}</p>
        <hr />
      </div>
    </main>
  </div>
</template>

