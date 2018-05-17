<template>
    <div id="app">
        <FieldInput></FieldInput>
        <SelectedFields></SelectedFields>
    </div>
</template>

<script>
    import FieldInput from './components/FieldInput.vue'
    import SelectedFields from './components/SelectedFields.vue'

    export default {
        components: {
            FieldInput,
            SelectedFields
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
