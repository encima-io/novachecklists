<template>
    <default-field
        :field="field"
        :errors="errors"
        :show-errors="false"
        :full-width-content="true"
    >
        <template slot="field">
            <div class="w-full">
                <items :items="value" :field="field" :edit="true"></items>
                <p v-if="hasError" class="my-2 text-danger">
                  {{ firstError }}
                </p>
            </div>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';
import Items from './Items.vue';

export default {
    mixins: [FormField, HandlesValidationErrors],
    components: {Items},
    props: ['resourceName', 'resourceId', 'field'],

    methods: {
        /**
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
          this.value = JSON.parse(this.field.value) || []
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
          formData.append(this.field.attribute, JSON.stringify(this.value) || [])
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
          this.value = value
        }
    },

}
</script>
