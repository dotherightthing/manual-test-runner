<template>
    <div class="b-form-select" :class="sizeClass">
        <label class="b-form-select__label" v-if="label" :for="id">{{ label }}</label>
        <div class="b-form-select__wrapper">
            <select
                class="b-form-select__select"
                :class="placeholderClass"
                :id="id"
                ref="select"
                v-model="selectedOption"
                @input="handleInput()">
                <!-- empty value displays the placeholder if nothing else was selected -->
                <option value="">{{ placeholder }}</option>
                <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
            </select>
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</template>

<script src="https://kit.fontawesome.com/8f0ba43cb7.js" crossorigin="anonymous"></script>
<script>
    /**
     * Custom Form Select Component
     *
     * @see v-model tips in https://www.designhammer.com/blog/reusable-vuejs-components-part-2-basic-drop-down-and-v-model
     */
    export default {
        name: 'FormSelect',
        props: {
            id: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            options: {
                type: Array,
                required: true
            },
            placeholder: {
                type: String,
                default: 'Select an option'
            },
            size: String,
            value: null, // as any valid type is supported
        },
        data () {
            return {
                selectedOption: null // model
            }
        },
        computed: {
            placeholderClass() {
                return (this.placeholder && !this.value) ? 'b-form-select--has-placeholder' : '';
            },
            sizeClass() {
                return this.size ? `b-form-select--${this.size}` : '';
            }
        },
        methods: {
            // https://alligator.io/vuejs/add-v-model-support/
            // https://scotch.io/tutorials/add-v-model-support-to-custom-vuejs-component
            handleInput() {
                this.$emit('input', this.$refs.select.value);
            }
        },
        mounted () {
            this.selectedOption = this.value;
        },
        watch: {
            value: function (newValue) {
                this.selectedOption = newValue;
            }
        }
    }
</script>

<style lang="scss">
    .b-form-select {
        margin-bottom: .5rem;

        &__label {
            display: block;
            margin-bottom: .25rem;
        }

        &__select {
            -webkit-appearance: none;
            background-color: var(--color-fill-input);
            font-size: var(--text-medium);
            width: 100%;
            padding: .5rem .7rem .6rem;
            border: 1px solid var(--color-border-medium);
            border-radius: 0;

            &:focus {
                background-color: var(--color-fill-input-focus);
            }
        }

        &__wrapper {
            position: relative;
        }

        &__icon {
            position: absolute;
            height: 100%;
            vertical-align: middle;
        }

        &--has-placeholder {
            color: var(--color-text-light);
        }
    }
</style>
