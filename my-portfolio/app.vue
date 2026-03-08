<!-- 
  Ethan Bell
  u25004702
  App Layout
-->
<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    background-color: #111118;
    color: #e8e8f0;
    margin: 0;
    padding: 0;
  }

  nav {
    background-color: #1a1a24;
    padding: 16px 32px;
    border-bottom: 1px solid #2a2a38;
  }

  nav a {
    color: #a0a0b8;
    text-decoration: none;
    font-weight: 600;
    margin-right: 20px;
  }

  nav a:hover {
    color: #ffffff;
  }

  nav a.router-link-exact-active {
    color: #7c6ff7;
  }

  main {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 24px;
    line-height: 1.7;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 12px;
    color: #ffffff;
  }

  h2 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #ffffff;
  }

  h3 {
    font-size: 1.1rem;
    color: #ffffff;
    margin-bottom: 8px;
  }

  p {
    color: #a0a0b8;
    margin-bottom: 12px;
  }

  a {
    color: #7c6ff7;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    border: none;
    border-top: 1px solid #2a2a38;
    margin: 28px 0;
  }

  input, textarea {
    width: 100%;
    padding: 10px 12px;
    margin-top: 6px;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    background-color: #1a1a24;
    color: #e8e8f0;
    border: 1px solid #2a2a38;
    border-radius: 8px;
    outline: none;
  }

  input:focus, textarea:focus {
    border-color: #7c6ff7;
  }

  label {
    color: #c0c0d8;
    font-weight: 600;
    font-size: 0.9rem;
  }

  button {
    padding: 10px 22px;
    font-size: 0.95rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    background-color: #7c6ff7;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  button:hover {
    background-color: #6a5ee0;
  }

  img {
    border-radius: 10px;
  }
</style>