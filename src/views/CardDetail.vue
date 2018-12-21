<template>
    <div class="card">
        <Detail></Detail>
    </div>
</template>
<script>
    import Detail from '@/components/Detail'
    export default {
        name: 'Card',
        components: {
            Detail
        },
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
    .card {
        margin: 15px 0;
    }
</style>
