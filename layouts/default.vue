<template>
    <div>
      <header class="bg-blue-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">Kleiderspende Portal</h1>
          <nav>
            <ul class="flex space-x-4">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/about">Über uns</NuxtLink></li>
              <li><NuxtLink to="/contact">Kontakt</NuxtLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <main class="container mx-auto py-8">
        <NuxtPage />
      </main>
      <footer class="bg-gray-800 text-white py-4 mt-8 text-center">
        © 2025 Kleiderspende Verein. Alle Rechte vorbehalten.
      </footer>
    </div>
  </template>
  