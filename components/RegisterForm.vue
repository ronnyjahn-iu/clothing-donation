<template>
    <div id="register">
        <div v-if="success">
            <div class="flex p-4 mb-4 text-green-800 border shadow-md shadow-green-800/5 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="success">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex-shrink-0 inline w-7 h-7 me-3">
                    <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                    />
                </svg>

                <div>
                    <h3 class="mb-3">Danke für deine Spende! Hier sind die von dir angegebenen Daten:</h3>
                    <ul class="mt-1.5 list-disc list-inside text-sm">
                        <li v-for="(value, key) in submittedData" :key="key">
                            <strong>{{ formLabels[key] || key }}:</strong> {{ value }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mx-auto text-center">
                <button @click="success = false" type="button" class="btn-outlined btn-green">Spende erneut registrieren</button>
            </div>
        </div>

        <form @submit.prevent="submitDonation" id="registerForm" v-if="!success" class="card">
            <div class="mb-4">
                <label class="form-label">Wie möchtest Du deine Kleiderspende übergeben?</label>
                <div class="flex flex-col md:flex-row gap-2 md:gap-3">
                    <div>
                        <label class="inline-flex items-center" for="deliveryOption1">
                            <input
                                type="radio"
                                id="deliveryOption1"
                                name="deliveryOption"
                                class="form-radio text-primary"
                                v-model="form.deliveryOption"
                                value="Übergabe an Geschäftsstelle"
                            />
                            Übergabe an der Geschäftsstelle
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center md:ml-4" for="deliveryOption2">
                            <input
                                type="radio"
                                id="deliveryOption2"
                                name="deliveryOption"
                                class="form-radio text-primary"
                                v-model="form.deliveryOption"
                                value="Abholung"
                            />
                            Abholung
                        </label>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
                <div class="md:w-1/2">
                    <label class="form-label" for="firstname">Vorname:<span class="text-red-600 text-sm">*</span></label>
                    <input type="text" id="firstname" v-model="form.firstname" class="form-input" aria-describedby="error-firstname" />
                    <span id="error-firstname" class="text-red-600 text-sm" v-if="errors.includes('Bitte gib deinen Vornamen an!')">Bitte gib deinen Vornamen an!</span>
                </div>
                <div class="md:w-1/2">
                    <label class="form-label" for="lastname">Nachname:<span class="text-red-600 text-sm">*</span></label>
                    <input type="text" id="lastname" v-model="form.lastname" class="form-input" aria-describedby="error-lastname" />
                    <span id="error-lastname" class="text-red-600 text-sm" v-if="errors.includes('Bitte gib deinen Nachnamen an!')">Bitte gib deinen Nachnamen an!</span>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
                <div class="md:w-1/2">
                    <label class="form-label" for="email">E-Mail:<span class="text-red-600 text-sm">*</span></label>
                    <input type="email" id="email" v-model="form.email" class="form-input" aria-describedby="error-email" />
                    <span id="error-email" class="text-red-600 text-sm" v-if="errors.includes('Bitte gib eine gültige E-Mail-Adresse an!')"
                        >Bitte gib eine gültige E-Mail-Adresse an!</span
                    >
                </div>
                <div class="md:w-1/2">
                    <label class="form-label" for="phone">Telefon:</label>
                    <input type="text" id="phone" v-model="form.phone" class="form-input" aria-describedby="error-phone" />
                    <span id="error-phone" class="text-red-600 text-sm" v-if="errors.includes('Bitte gib eine gültige Telefonnummer an!')"
                        >Bitte gib eine gültige Telefonnummer an!</span
                    >
                </div>
            </div>
            <div v-if="form.deliveryOption === 'Abholung'" class="mb-4">
                <div class="mb-4">
                    <label class="form-label" for="pickupAddress">Straße / Nr.:<span class="text-red-600 text-sm">*</span></label>
                    <input type="text" id="pickupAddress" v-model="form.pickupAddress" class="form-input" aria-describedby="error-pickupAddress" />
                    <span id="error-pickupAddress" class="text-red-600 text-sm" v-if="errors.includes('Bitte gib eine Straße / Nr. an!')"
                        >Bitte gib eine Straße / Nr. an!</span
                    >
                </div>
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="md:w-1/3">
                        <label class="form-label" for="pickupZip">Postleitzahl:<span class="text-red-600 text-sm">*</span></label>
                        <input type="text" id="pickupZip" v-model="form.pickupZip" class="form-input" aria-describedby="error-pickupZip" />
                        <span id="error-pickupZip" class="text-red-600 text-sm" v-if="errors.includes('Bitte gib eine gültige Postleitzahl an!')"
                            >Bitte gib eine gültige Postleitzahl an!</span
                        >
                    </div>
                    <div class="md:w-2/3">
                        <label class="form-label" for="pickupLocation">Ort:<span class="text-red-600 text-sm">*</span></label>
                        <input type="text" id="pickupLocation" v-model="form.pickupLocation" class="form-input" aria-describedby="error-pickupLocation" />
                        <span id="error-pickupLocation" class="text-red-600 text-sm" v-if="errors.includes('Bitte gib einen Ort an!')">Bitte gib einen Ort an!</span>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <label class="form-label" for="clothingType">Art der Kleidung:<span class="text-red-600 text-sm">*</span></label>
                <select id="clothingType" v-model="form.clothingType" class="form-input" aria-describedby="error-clothingType">
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
                <span id="error-clothingType" class="text-red-600 text-sm" v-if="errors.includes('Bitte gib eine Art der Kleidung an!')"
                    >Bitte gib eine Art der Kleidung an!</span
                >
            </div>
            <div class="mb-4">
                <label class="form-label" for="crisisRegion">Krisengebiet:<span class="text-red-600 text-sm">*</span></label>
                <select id="crisisRegion" v-model="form.crisisRegion" class="form-input" aria-describedby="error-crisisRegion">
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
                <span id="error-crisisRegion" class="text-red-600 text-sm" v-if="errors.includes('Bitte gib ein Krisengebiet an!')">Bitte gib ein Krisengebiet an!</span>
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
        const registerForm = document.getElementById("registerForm");
        nextTick(() => {
            if (registerForm) {
                const elementPosition = registerForm.getBoundingClientRect().top + window.scrollY;

                const offsetPosition = elementPosition - 100;
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
