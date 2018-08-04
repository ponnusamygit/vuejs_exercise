<template>
  <div class="col-xs-12 col-sm-6" v-if='!server.id'>
    <p>Server Details are currently not updated.</p>
    <p>
      <= Select a server from this list.
    </p>
  </div>
  <div class="col-xs-12 col-sm-6" v-else>
    <p>Server id # {{ server.id }}</p>
    <p :class='server.status'>Server status # {{ server.status }}</p>
  </div>
</template>

<script>
  import {eventBus} from '../../main';
  export default {
    data: function(){
      return {
        server: {}
      }
    },
    created(){
      eventBus.$on('ServerWasChanged', (server)=>{
        this.server = server;
      })
    }
  }
</script>
<style>
  .Normal{
    background: green;
  }
  .Cretical{
    background: red;
  }
  .Unknown{
    background: yellow;
  }
</style>