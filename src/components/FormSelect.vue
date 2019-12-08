<template>
    <div class="b-form-select" :class="sizeClass" :v-model="model">
        <label class="b-form-select__label" v-if="label" :for="id">{{ label }}</label>
        <div class="b-form-select__select">
            <select :id="id">
                <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormSelect',
        props: {
            id: String,
            label: String,
            model: String,
            options: Array,
            size: String
        },
        computed: {
            sizeClass() {
                return this.size ? `b-form-select--${this.size}` : '';
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
