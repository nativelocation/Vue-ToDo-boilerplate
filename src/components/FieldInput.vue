<template>
    <div id="field-input">
        <input v-model="fieldName">
        <select v-model="item">
            <option value="">--Choose One--</option>
            <option value="Baseball">Baseball</option>
            <option value="Basketball">Basketball</option>
            <option value="Football">Football</option>
        </select>
        <button
            :disabled="!this.fieldName || !this.item"
            @click="addField">Add Field</button>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                fieldName: '',
                item: ''
            }
        },
        methods: {
            addField() {
                this.$store.dispatch('addField', {
                    newFieldName : this.fieldName,
                    newItem: this.item
                })
                this.fieldName = ''
                this.item = ''
            }
        }
    }
</script>

<style scoped>
	#field-input input {
        font-size: 20px;
        border-radius: 6px;
        border-style: groove;
	}
    #field-input select {
        font-size: 20px;
	}
    #field-input button {
        font-size: 20px;
        border-radius: 6px;
        padding-left: 15px;
        padding-right: 15px;
    }
</style>
