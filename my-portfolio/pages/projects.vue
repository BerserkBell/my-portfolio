<!-- 
  Ethan Bell
  u25004702
  Projects Page
-->
  <script setup>
    const projects = [
        {
            title: 'Online Store',
            module: 'WEB 201',
            description: 'A simple e-commerce site with a shopping cart built using Vue and Node.js.',
            github: 'https://github.com/yourusername/project-one'
        },
        {
            title: 'Grade Predictor',
            module: 'COS 301',
            description: 'A Python script that predicts final grades based on assignment scores.',
            github: 'https://github.com/yourusername/project-two'
        },
        {
            title: 'Task Manager CLI',
            module: 'COS 110',
            description: 'A command-line task manager written in C++ that saves tasks to a file.',
            github: 'https://github.com/yourusername/project-three'
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
        <a :href="project.github" target="_blank">View on GitHub</a>
        <hr />
      </div>
    </main>
  </div>
</template>

