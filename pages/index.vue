<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4">Registriere deine Kleiderspende</h2>
        <form
            @submit.prevent="submitDonation"
            class="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
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

            <div class="flex gap-4 mb-4">
                <div class="lg:w-1/2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vorname:<span class="text-red-600 text-sm">*</span></label>
                    <input
                        type="text"
                        v-model="form.firstname"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    />
                </div>
                <div class="lg:w-1/2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nachname:<span class="text-red-600 text-sm">*</span></label>
                    <input
                        type="text"
                        v-model="form.lastname"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    />
                </div>
            </div>

            <div class="flex gap-4 mb-4">
                <div class="lg:w-1/2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-Mail:<span class="text-red-600 text-sm">*</span></label>
                    <input
                        type="email"
                        v-model="form.email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    />
                </div>
                <div class="lg:w-1/2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon:</label>
                    <input
                        type="text"
                        v-model="form.phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    />
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
                    <option value="Kinderkleidung">Kinderkleidung</option>
                    <option value="Babykleidung">Babykleidung</option>
                    <option value="Sportbekleidung">Sportbekleidung</option>
                    <option value="Unterwäsche">Unterwäsche</option>
                    <option value="Bettwäsche">Bettwäsche</option>
                    <option value="Jacken">Jacken</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Krisengebiet:<span class="text-red-600 text-sm">*</span></label>
                <select
                    v-model="form.crisisRegion"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                >
                    <option value="">Wähle eine Region</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Deutschland (Obdachlosenhilfe)">Deutschland (Obdachlosenhilfe)</option>
                    <option value="Jemen">Jemen</option>
                    <option value="Mittelmeerregion (Flüchtlingshilfe)">Mittelmeerregion (Flüchtlingshilfe)</option>
                    <option value="Pakistan (Flutopfer)">Pakistan (Flutopfer)</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Syrien">Syrien</option>
                    <option value="Türkei und Syrien (Erdbebenhilfe)">Türkei und Syrien (Erdbebenhilfe)</option>
                    <option value="Ukraine">Ukraine</option>
                </select>
            </div>
            <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Spende registrieren</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";

// ZIP Office Stuttgart
const officeZipCode = "70176";

const isZipInRange = (pickupZip) => {
    if (!pickupZip || pickupZip.length !== 5 || isNaN(pickupZip)) {
        return false;
    }
    // Compares the first two digits of the postal code.
    return pickupZip.substring(0, 2) === officeZipCode.substring(0, 2);
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const form = ref({
    deliveryOption: "office",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    pickupAddress: "",
    pickupZip: "",
    pickupLocation: "",
    clothingType: "",
    crisisRegion: "",
});

const submitDonation = () => {
    const errors = [];

    // Validation for pickup
    if (form.value.deliveryOption === "pickup") {
        if (!form.value.pickupAddress) {
            errors.push("Bitte gib eine Straße / Nr. an!");
        }
        if (!form.value.pickupZip) {
            errors.push("Bitte gib eine gültige Postleitzahl an!");
        }
        if (!form.value.pickupLocation) {
            errors.push("Bitte gib einen Ort an!");
        }
        if (form.value.pickupZip && !isZipInRange(form.value.pickupZip)) {
            errors.push("Die Abholadresse liegt nicht in der Nähe der Geschäftsstelle.");
        }
    }

    // General validations
    if (!form.value.firstname) {
        errors.push("Bitte gib deinen Vornamen an!");
    }
    if (!form.value.lastname) {
        errors.push("Bitte gib deinen Nachnamen an!");
    }
    if (!form.value.email || !isValidEmail(form.value.email)) {
        errors.push("Bitte gib deine E-Mail-Adresse an!");
    }
    if (!form.value.clothingType) {
        errors.push("Bitte gib eine Art der Kleidung an!");
    }
    if (!form.value.crisisRegion) {
        errors.push("Bitte gib ein Krisengebiet an!");
    }

    // Show errors or success message
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        // Successfully submitted form
        alert("Spende erfolgreich registriert:\n" + JSON.stringify(form.value, null, 2));
    }
};
</script>
