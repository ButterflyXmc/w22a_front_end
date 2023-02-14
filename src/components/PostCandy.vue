<template>
    <div>
        <h1>ADD Candy</h1>
            <div>
                <v-text-field v-model="candyName" label = "Candy Name"></v-text-field>
                <v-text-field v-model="candyDescription" label = "Candy Description"></v-text-field>
                <v-btn @click="add_candy">Add Post</v-btn>
                    <div v-if="result">
                        <h2>{{result}}</h2>
                    </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "PostCandy",
        data() {
            return {
                result : ""
            }
        },
        methods: {
            add_candy(){
                axios.request({
                    url: "http://127.0.0.1:5000/api/candy",
                    method: "POST",
                    data : {
                        candyName: this.candyName,
                        candyDescription: this.candyDescription
                    }
                }).then(()=>{
                    // Will print for the user if the candy is added successfully
                    this.result = "Candy post added!"
                }).catch(()=>{
                    this.result = "Something went wrong!"
                })
            }
        },
    }
</script>

<style scoped>

</style>