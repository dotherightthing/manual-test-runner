<template>
    <div class="b-form-textarea" :class="sizeClass">
        <label class="b-form-textarea__label" v-if="label" :for="id">{{ label }}</label>
        <div class="b-form-textarea__wrapper">
            <textarea
                class="b-form-textarea__textarea"
                :id="id"
                :key="id"
                :placeholder="placeholder"
                ref="textarea"
                v-model="textValue"
                @input="handleInput()"></textarea>
        </div>
    </div>
</template>

<script>
    /**
     * Custom Form Textarea Component
     *
     * @see v-model tips in https://www.designhammer.com/blog/reusable-vuejs-components-part-2-basic-drop-down-and-v-model
     */
    export default {
        name: 'FormTextarea',
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
            placeholder: String,
            size: String,
        },
        data () {
            return {
                textValue: null // model
            }
        },
        computed: {
            sizeClass() {
                return this.size ? `b-form-textarea--${this.size}` : '';
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
            this.textValue = this.value;
        },
        watch: {
            value: function (newValue) {
                this.textValue = newValue;
            }
        }
    }
</script>

<style lang="scss">
    .b-form-textarea {
        margin-bottom: .5rem;

        &__label {
            display: block;
            margin-bottom: .25rem;
        }
        &__textarea {
            background-color: var(--color-fill-input);
            font-size: var(--text-medium);
            width: 100%;
            min-height: (4 * 1.175rem); // lines
            border: 1px solid var(--color-border-medium);
            padding: .5rem .7rem .6rem;
            box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, .15);

            &:focus {
                background-color: var(--color-fill-input-focus);
            }
        }
    }
</style>
