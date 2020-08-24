<template>
  
  <div class="container">
    <v-list >
      <v-list-title>
        <h2> Users </h2>
      </v-list-title> 
      <v-list-item v-for="user in pessoas" :key="pessoas">
        <v-list-item-content>
          <v-row justify="space-around">
            <v-avatar size="62" class="bottom">
              <img src="https://library.kissclipart.com/20180916/zvq/kissclipart-icon-clipart-computer-icons-kerona-scientific-limi-a1bc81c60735cb88.jpg">
            </v-avatar>
          </v-row>  
          <v-list-item-title>{{ user.id }} - {{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ user.address.street }},{{ user.address.city }}</v-list-item-subtitle>
          <v-list-item-subtitle class = "line" ><v-divider role="presentation" aria-orientation="horizontal"></v-divider></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
  import users from '~/services/userService.js'
  export default {
      data(){
        return  {                 
          pessoas: []
        }
      },
    async mounted(){
      this.pessoas = await this.getUsers()
    },
    methods: {
      async getUsers(){
        const { data }  = await users.listar()
        return data
      }
    }
  }
</script>
<style>
  .container {
    background-color: black;
    text-align: center;
    margin-top: 20px;
    font-family: sans-serif;  
  }
  .line{
    margin-top: 20px;
  }
  .bottom{
   margin-bottom:20px;
  }
</style>