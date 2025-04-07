<template>
    <div>
        <div v-show="errors.length > 0" id="error-messages">
            <div class="flex p-4 mb-4 text-red-800 border border-red-100 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                    />
                </svg>
                <span class="sr-only">Fehler</span>
                <div>
                    <span class="font-medium">Folgende Daten wurden nicht korrekt ausgefüllt:</span>
                    <ul class="mt-1.5 list-disc list-inside text-sm">
                        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-if="success">
            <div class="flex p-4 mb-4 text-green-800 border shadow-md shadow-green-800/5 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="success">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex-shrink-0 inline w-7 h-7 me-3">
                    <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                    />
                </svg>

                <h3 class="sr-only">Danke für deine Spende! Hier sind die von dir angegebenen Daten:</h3>
                <div>
                    <h3 class="mb-3">Danke für deine Spende! Hier sind die von dir angegebenen Daten:</h3>
                    <ul class="mt-1.5 list-disc list-inside text-sm">
                        <li v-for="(value, key) in submittedData" :key="key">
                            <strong>{{ formLabels[key] || key }}:</strong> {{ value }}
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <button @click="success = false" type="button" class="btn-outlined btn-green">Spende erneut registrieren</button>
            </div>
        </div>

        <form @submit.prevent="submitDonation" v-if="!success" class="card">
            <div class="mb-4">
                <label class="form-label">Wie möchtest Du deine Kleiderspende übergeben?</label>
                <div class="flex flex-col md:flex-row gap-2 md:gap-3">
                    <div>
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio text-primary" v-model="form.deliveryOption" value="Übergabe an Geschäftsstelle" />
                            Übergabe an der Geschäftsstelle
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center md:ml-4">
                            <input type="radio" class="form-radio text-primary" v-model="form.deliveryOption" value="Abholung" />
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
            <div v-if="form.deliveryOption === 'Abholung'" class="mb-4">
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
import { ref, nextTick } from "vue";

const errors = ref([]);
const success = ref(false);
const submittedData = ref({});

// ZIP Office Stuttgart
const officeZipCode = "70176";

const isZipInRange = (pickupZip) => {
    if (!pickupZip) {
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
    deliveryOption: "Übergabe an Geschäftsstelle",
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

const getFilledFormData = () => {
    return Object.fromEntries(Object.entries(form.value).filter(([key, value]) => value !== ""));
};

// Reset form values
const resetForm = () => {
    form.value = {
        deliveryOption: "Übergabe an Geschäftsstelle",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        pickupAddress: "",
        pickupZip: "",
        pickupLocation: "",
        clothingType: "",
        crisisRegion: "",
    };
};

const formLabels = {
    deliveryOption: "Übergabe",
    firstname: "Vorname",
    lastname: "Nachname",
    email: "E-Mail",
    phone: "Telefon",
    pickupAddress: "Abholadresse",
    pickupZip: "Postleitzahl",
    pickupLocation: "Ort",
    clothingType: "Kleidungsart",
    crisisRegion: "Krisengebiet",
};

const submitDonation = () => {
    errors.value = [];
    success.value = false;

    // Validation for pickup
    if (form.value.deliveryOption === "Abholung") {
        if (!form.value.pickupAddress) {
            errors.value.push("Bitte gib eine Straße / Nr. an!");
        }
        if (!form.value.pickupZip || form.value.pickupZip.length !== 5 || isNaN(form.value.pickupZip)) {
            errors.value.push("Bitte gib eine gültige Postleitzahl an!");
        }
        if (!form.value.pickupLocation) {
            errors.value.push("Bitte gib einen Ort an!");
        }
        if (form.value.pickupZip && form.value.pickupZip.length === 5 && !isNaN(form.value.pickupZip) && !isZipInRange(form.value.pickupZip)) {
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

    if (errors.value.length > 0) {
        const errorElement = document.getElementById("error-messages");
        nextTick(() => {
            if (errorElement) {
                const elementPosition = errorElement.getBoundingClientRect().top + window.scrollY;

                const offsetPosition = elementPosition - 60;
                console.log(offsetPosition);
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    } else {
        success.value = true;
        submittedData.value = { ...getFilledFormData() };
        resetForm();
    }
};
</script>
