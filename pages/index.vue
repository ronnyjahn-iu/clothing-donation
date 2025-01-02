<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4">
            Registriere Deine Kleiderspende
        </h2>
        <form
            @submit.prevent="handleSubmit"
            class="bg-white p-6 rounded shadow-md"
        >
            <div class="mb-4">
                <label>Wie möchtest Du die Spende übergeben?</label>
                <div>
                    <label class="inline-flex items-center">
                        <input
                            type="radio"
                            v-model="form.deliveryOption"
                            value="office"
                            required
                        />
                        Geschäftsstelle
                    </label>
                    <label class="inline-flex items-center ml-4">
                        <input
                            type="radio"
                            v-model="form.deliveryOption"
                            value="pickup"
                        />
                        Abholung
                    </label>
                </div>
            </div>
            <div v-if="form.deliveryOption === 'pickup'" class="mb-4">
                <label>Abholadresse:</label>
                <input
                    type="text"
                    v-model="form.pickupAddress"
                    class="w-full p-2 border rounded"
                />
                <label>Postleitzahl:</label>
                <input
                    type="text"
                    v-model="form.pickupZip"
                    class="w-full p-2 border rounded"
                />
            </div>
            <label>Art der Kleidung:</label>
            <select
                v-model="form.clothingType"
                class="w-full p-2 border rounded mb-4"
            >
                <option value="">Wähle eine Option</option>
                <option value="Winterkleidung">Winterkleidung</option>
                <option value="Sommerkleidung">Sommerkleidung</option>
                <option value="Schuhe">Schuhe</option>
            </select>
            <label>Krisengebiet:</label>
            <select
                v-model="form.crisisRegion"
                class="w-full p-2 border rounded mb-4"
            >
                <option value="">Wähle eine Region</option>
                <option value="Region A">Region A</option>
                <option value="Region B">Region B</option>
                <option value="Region C">Region C</option>
            </select>
            <button
                type="submit"
                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Spende registrieren
            </button>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";
const form = ref({
    deliveryOption: "",
    pickupAddress: "",
    pickupZip: "",
    clothingType: "",
    crisisRegion: "",
});
const handleSubmit = () => {
    alert(JSON.stringify(form.value, null, 2));
};
</script>
