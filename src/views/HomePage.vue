<template>
    <div>
        <h1>Yum Yum yum Candies</h1>
        <nav>
            <v-btn><router-link to="/post">Add new Cnadies</router-link></v-btn>
            <v-btn><router-link to="/update">Edit posts</router-link> </v-btn> 
            <v-btn><router-link to="/delete">Delete Candy post</router-link> </v-btn>
        </nav>
        
        <div v-for="candy in candies" :key="candy.name">
            <!-- Make sure teh first letter is capitlized as You have in the backend  -->
            <h2>Name : {{candy.Name}}</h2>
            <h4> Candy Id : {{candy.Id}}</h4>
            <h3>Description : {{candy.Description}}</h3>
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