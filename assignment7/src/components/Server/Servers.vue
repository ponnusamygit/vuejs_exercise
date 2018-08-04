<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers"
                    @click='showAlert(server)'
                    >

                Server #{{ server.id }} - {{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from '../../main';

    export default {
      data: function() {
        return {
          servers: [
            { id: 1, status: 'Normal'},
            { id: 2, status: 'Cretical'},
            { id: 3, status: 'Unknown'},
            { id: 4, status: 'Normal'}
          ]
        }
      },
      methods: {
        showAlert(server){
          eventBus.changeServer(server)
        }
      }
    }
</script>

<style>

</style>
