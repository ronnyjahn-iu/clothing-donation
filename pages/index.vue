<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4">Registriere deine Kleiderspende</h2>

        <div v-if="errors.length > 0">
            <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                    />
                </svg>
                <span class="sr-only">Fehler</span>
                <div>
                    <span class="font-medium">Folgende Daten wurden nicht korrekt ausgefüllt:</span>
                    <ul class="mt-1.5 list-disc list-inside">
                        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <form @submit.prevent="submitDonation" class="card">
            <div class="mb-4">
                <label class="form-label">Wie möchtest Du deine Kleiderspende übergeben?</label>
                <div class="flex flex-col md:flex-row gap-2 md:gap-3">
                    <div>
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" v-model="form.deliveryOption" value="office" />
                            Übergabe an der Geschäftsstelle
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center md:ml-4">
                            <input type="radio" class="form-radio" v-model="form.deliveryOption" value="pickup" />
                            Abholung
                        </label>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
                <div class="md:w-1/2">
                    <label class="form-label">Vorname:<span class="text-red-600 text-sm">*</span></label>
                    <input type="text" v-model="form.firstname" class="form-input" />
                </div>
                <div class="md:w-1/2">
                    <label class="form-label">Nachname:<span class="text-red-600 text-sm">*</span></label>
                    <input type="text" v-model="form.lastname" class="form-input" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
                <div class="md:w-1/2">
                    <label class="form-label">E-Mail:<span class="text-red-600 text-sm">*</span></label>
                    <input type="email" v-model="form.email" class="form-input" />
                </div>
                <div class="md:w-1/2">
                    <label class="form-label">Telefon:</label>
                    <input type="text" v-model="form.phone" class="form-input" />
                </div>
            </div>
            <div v-if="form.deliveryOption === 'pickup'" class="mb-4">
                <div class="mb-4">
                    <label class="form-label">Straße / Nr.:<span class="text-red-600 text-sm">*</span></label>
                    <input type="text" v-model="form.pickupAddress" class="form-input" />
                </div>
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="md:w-1/3">
                        <label class="form-label">Postleitzahl:<span class="text-red-600 text-sm">*</span></label>
                        <input type="text" v-model="form.pickupZip" class="form-input" />
                    </div>
                    <div class="md:w-2/3">
                        <label class="form-label">Ort:<span class="text-red-600 text-sm">*</span></label>
                        <input type="text" v-model="form.pickupLocation" class="form-input" />
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <label class="form-label">Art der Kleidung:<span class="text-red-600 text-sm">*</span></label>
                <select v-model="form.clothingType" class="form-input">
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
                <label class="form-label">Krisengebiet:<span class="text-red-600 text-sm">*</span></label>
                <select v-model="form.crisisRegion" class="form-input">
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
            <button type="submit" class="btn">Spende registrieren</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

const errors = ref([]);

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
    errors.value = [];

    // Validation for pickup
    if (form.value.deliveryOption === "pickup") {
        if (!form.value.pickupAddress) {
            errors.value.push("Bitte gib eine Straße / Nr. an!");
        }
        if (!form.value.pickupZip) {
            errors.value.push("Bitte gib eine gültige Postleitzahl an!");
        }
        if (!form.value.pickupLocation) {
            errors.value.push("Bitte gib einen Ort an!");
        }
        if (form.value.pickupZip && !isZipInRange(form.value.pickupZip)) {
            errors.value.push("Die Abholadresse liegt nicht in der Nähe der Geschäftsstelle.");
        }
    }

    // General validations
    if (!form.value.firstname) {
        errors.value.push("Bitte gib deinen Vornamen an!");
    }
    if (!form.value.lastname) {
        errors.value.push("Bitte gib deinen Nachnamen an!");
    }
    if (!form.value.email || !isValidEmail(form.value.email)) {
        errors.value.push("Bitte gib eine gültige E-Mail-Adresse an!");
    }
    if (!form.value.clothingType) {
        errors.value.push("Bitte gib eine Art der Kleidung an!");
    }
    if (!form.value.crisisRegion) {
        errors.value.push("Bitte gib ein Krisengebiet an!");
    }

    // Show errors or success message
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        // Successfully submitted form
        // alert("Spende erfolgreich registriert:\n" + JSON.stringify(form.value, null, 2));
    }
};
</script>
