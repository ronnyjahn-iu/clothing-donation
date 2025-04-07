<template>
    <div class="lg:px-24 mt-4">
        <Intro />
        <h2 class="text-3xl font-semibold mt-8 mb-12 text-center">Registriere deine Kleiderspende</h2>
        <RegisterForm />
    </div>
</template>

<script>
import RegisterForm from '~/components/Forms/RegisterForm.vue'

export default {
  components: {
    RegisterForm
  }
}
</script>