<template>
    <div v-if="quietState" class="b-quiet-state-warning l-block-disabled__warning">
        <p>
            Panel is disabled in {{ testModeState }} mode
        </p>
    </div>
</template>

<script>
    /**
     * Quiet State Warning
     * Originally used in main UI, but replaced with routes.
     * Used here to control this component's visibility
     * when it is used as a sub-component.
     */
    export default {
        name: 'QuietStateWarning',
        computed: {
            testModeState() {
                return this.$route.name.replace(/test-/, '');
            },
            quietState() {
                return this.$route.name === 'test-run';
            }
        }
    }
</script>

<style lang="scss">
    .l-block-disabled {
        &__wrapper {
            position: relative;
        }

        &__warning {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: grid;
            justify-items: center;
            align-items: center;
            text-transform: uppercase;
            font-size: var(--text-small-upper);
            background-color: var(--block-disabled-overlay);
            text-align: center;

            p {
                background-color: var(--color-page);
                line-height: 1.2;
                font-weight: bold;
                padding: var(--padding-sub-container);
                padding-bottom: calc(var(--padding-sub-container) / 1.5);
                margin: var(--padding-sub-container);
            }
        }
    }
</style>