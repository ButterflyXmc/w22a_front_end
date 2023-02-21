<template>
    <div>
        <h1>Delete candy</h1>
            <div>
                <v-text-field v-model="candyId" label = "Enter Candy Id"></v-text-field>                
                <v-btn @click="delete_candy">delete Post</v-btn>
                    <div v-if="result">
                        <h2>{{result}}</h2>
                    </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "DeleteCandy",
        data() {
            return {
                result : ""
            }
        },
        methods: {
            delete_candy(){
                axios.request({
                    url: "http://127.0.0.1:5000/api/candy",
                    method: "DELETE",
                    data : {
                        candyId: this.candyId,
                    }
                }).then(()=>{
                    // Will print for the user if the candy is deleted successfully!
                    this.result = "Candy post deleted!"
                }).catch(()=>{
                    this.result = "Something went wrong!"
                })
            }
        },
    }
</script>

<style scoped>

</style>