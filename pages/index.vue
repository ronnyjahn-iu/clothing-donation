<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4">Registriere deine Kleiderspende</h2>
        <form @submit.prevent="submitDonation" class="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="mb-4">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wie möchtest Du deine Kleiderspende übergeben?</label>
                <div>
                    <label class="inline-flex items-center">
                        <input
                            type="radio"
                            class="mr-1.5 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:focus:bg-indigo-600 dark:bg-gray-700 dark:border-gray-600"
                            v-model="form.deliveryOption"
                            value="office"
                        />
                        Übergabe an der Geschäftsstelle
                    </label>
                    <label class="inline-flex items-center ml-4">
                        <input
                            type="radio"
                            class="mr-1.5 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:focus:bg-indigo-600 dark:bg-gray-700 dark:border-gray-600"
                            v-model="form.deliveryOption"
                            value="pickup"
                        />
                        Abholung
                    </label>
                </div>
            </div>
            <div v-if="form.deliveryOption === 'pickup'" class="mb-4">
                <div class="mb-4">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Straße / Nr.:<span class="text-red-600 text-sm">*</span></label>
                    <input
                        type="text"
                        v-model="form.pickupAddress"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    />
                </div>
                <div class="flex gap-4">
                    <div class="lg:w-1/3">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postleitzahl:<span class="text-red-600 text-sm">*</span></label>
                        <input
                            type="text"
                            v-model="form.pickupZip"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        />
                    </div>
                    <div class="lg:w-2/3">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ort:<span class="text-red-600 text-sm">*</span></label>
                        <input
                            type="text"
                            v-model="form.pickupLocation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        />
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Art der Kleidung:<span class="text-red-600 text-sm">*</span></label>
                <select
                    v-model="form.clothingType"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                >
                    <option value="">Wähle eine Option</option>
                    <option value="Winterkleidung">Winterkleidung</option>
                    <option value="Sommerkleidung">Sommerkleidung</option>
                    <option value="Schuhe">Schuhe</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Krisengebiet:<span class="text-red-600 text-sm">*</span></label>
                <select
                    v-model="form.crisisRegion"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                >
                    <option value="">Wähle eine Region</option>
                    <option value="Region A">Region A</option>
                    <option value="Region B">Region B</option>
                    <option value="Region C">Region C</option>
                </select>
            </div>
            <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Spende registrieren</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";
const form = ref({
    deliveryOption: "office",
    pickupAddress: "",
    pickupZip: "",
    pickupLocation: "",
    clothingType: "",
    crisisRegion: "",
});
const submitDonation = () => {
    if (form.value.deliveryOption == "pickup" && form.value.pickupAddress == "") {
        alert("Bitte gib eine Adresse an!");
    } else if (form.value.deliveryOption == "pickup" && form.value.pickupZip == "") {
        alert("Bitte gib eine Postleitzahl an!");
    } else if (form.value.deliveryOption == "pickup" && form.value.pickupLocation == "") {
        alert("Bitte gib einen Ort an!");
    } else if (form.value.clothingType == "") {
        alert("Bitte gib eine Art der Kleidung an!");
    } else if (form.value.crisisRegion == "") {
        alert("Bitte gib ein Krisengebiet an!");
    } else {
        alert(JSON.stringify(form.value, null, 2));
    }
};
</script>
