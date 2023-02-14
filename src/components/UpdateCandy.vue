<template>
    <div>
        <h1>Edit candy</h1>
            <div>
                <v-text-field v-model="candyId" label = "Enter Candy Id"></v-text-field>
                <v-text-field v-model="candyDescription" label = "Candy Description"></v-text-field>
                <v-btn @click="add_candy">Update Post</v-btn>
                    <div v-if="result">
                        <h2>{{result}}</h2>
                    </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "UpdateCandy",
        data() {
            return {
                result : ""
            }
        },
        methods: {
            add_candy(){
                axios.request({
                    url: "http://127.0.0.1:5000/api/candy",
                    method: "PATCH",
                    data : {
                        candyId: this.candyId,
                        candyDescription: this.candyDescription
                    }
                }).then(()=>{
                    // Will print for the user if the candy is added successfully
                    this.result = "Candy post updated!"
                }).catch(()=>{
                    this.result = "Something went wrong!"
                })
            }
        },
    }
</script>

<style scoped>

</style>