<template>
    <div class="2xl:px-24 mt-4">
        <Intro />
        <hr class="w-full md:w-[200px] mx-auto my-12 border-primary">
        <h2 class="text-3xl font-semibold mt-8 mb-12 text-center">Registriere deine Kleiderspende</h2>
        <RegisterForm />
    </div>
</template>

<script>
import RegisterForm from '~/components/RegisterForm.vue'

export default {
  components: {
    RegisterForm
  }
}
</script>