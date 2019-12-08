<template>
    <div class="b-form-select" :class="sizeClass">
        <label class="b-form-select__label" v-if="label" :for="id">{{ label }}</label>
        <div class="b-form-select__select">
            <select
                :id="id"
                ref="select"
                v-model="selectedOption"
                @input="handleInput()">
                <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
            </select>
        </div>
    </div>
</template>

<script>
    /**
     * Custom Form Select Component
     *
     * @see v-model tips in https://www.designhammer.com/blog/reusable-vuejs-components-part-2-basic-drop-down-and-v-model
     */
    export default {
        name: 'FormSelect',
        props: {
            value: null, // as any valid type is supported
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
            size: String,
        },
        data () {
            return {
                selectedOption: null // model
            }
        },
        computed: {
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
        &__label {
            margin-bottom: .25rem;
        }
        &__select {
            select {
                -webkit-appearance: none;
                font-size: var(--text-small);
                padding: .2rem .4rem .3rem;
            }
        }
    }
</style>
