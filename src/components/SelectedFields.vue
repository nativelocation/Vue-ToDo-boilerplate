<template>
    <div id="selected-fields">
        <h3>
            Fields Configured
            <span v-if="fields.length > 0">
                ({{fields.length}})
            </span>
        </h3>
        <ul v-if="fields.length > 0">
            <li v-for="field in fields">
                {{field.fieldName}}
                ({{field.item}})
            </li>
        </ul>
        <div
            v-if="fields.length == 0"
            class="noFields">
            You haven't set up any fields yet.
        </div>
    </div>
</template>
<script>
export default{
    computed: {
        fields() {
            return this.$store.getters.fields
        }
    }
}
</script>

<style>
	#selected-fields .noFields {
        padding: 20px;
        background: #bb0;
        width: fit-content;
    }
</style>
