export default {
    name: 'v-radio-deselectable',
    props: ['label', 'value'],
    methods: {
        reset() {
            const value_current = this.$refs.inner_radio.radio.value
            const value_new = this.$refs.inner_radio.value
            if (value_current === value_new) {
                this.$nextTick(() => {
                    this.$refs.inner_radio.$emit('change', null)
                })
            }
        },
    },
}
