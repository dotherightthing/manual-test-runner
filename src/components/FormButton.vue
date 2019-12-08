<template>
    <div class="b-form-button" :class="sizeClass">
        <button class="b-form-button__button" :type="type">{{ value }}</button>
    </div>
</template>

<script>
    export default {
        name: 'FormSelect',
        props: {
            size: String,
            type: String,
            value: String
        },
        computed: {
            sizeClass() {
                return this.size ? `b-form-button--${this.size}` : '';
            }
        }
    }
</script>

<style lang="scss">
    .b-form-button {
        &__button {
            background-color: var(--color-fill-action-primary);
            color: var(--color-page);
            font-weight: bold;
            font-size: var(--text-small);
            padding: .2rem .4rem .3rem;
            border: 0;
            border-radius: .15rem;
            box-shadow: var(--shadow-thin-light);
            text-shadow: 0 0 2px rgba(0, 0, 0, 1);
            cursor: pointer;
        }
    }
</style>
