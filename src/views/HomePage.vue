<template>
    <div>
        <h1>Home</h1>
        <div v-for="candy in candies" :key="candy.name">
            <p>Id : {{candy.Id}}</p>
            <p>Name : {{candy.Name}}</p>
            <p>Description: {{candy.Description}}</p>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "HomePage",
        data() {
            return {
                candies: [],
                Id: null,
                name: null,
                description: null,
            }
        },
        methods: {
            get_candy(){
                axios.request({
                    url: "http://127.0.0.1:5000/api/candy",
                    method: "GET"
                }).then((response)=>{
                    console.log(response.data)
                    this.candies = response.data
                }).catch((error)=>{
                    console.log(error)
                })
            }
        },
        mounted(){
            this.get_candy();
        }
    }
</script>

<style scoped>

</style>