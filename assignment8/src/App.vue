<template>
    <div class="container">
        <form v-if='!isSubmitted'>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Sign up Form</h4>
                        </div>
                        <div class="panel-body">
                            <form>
                              <app-fullname value='fullName' @updatedFullName='updatedFullName'></app-fullname>
                              <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="userData.email">
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="userData.password">
                              </div>
                              <div class="checkbox">
                                <label>
                                  <input type="checkbox" v-model='userData.store'> Store In Database
                                </label>
                              </div>
                              <button type="submit" class="btn btn-default" @click.prevent="submitted">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <div class="row" v-if='isSubmitted'>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>First Name: {{ userData.firstName }}</p>
                        <p>Last Name: {{ userData.lastName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.store ? 'Yes' : 'No' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Fullname from './Fullname.vue';

    export default {
        data () {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    fullName: '',
                    email: '',
                    password: '',
                    store: 'No'
                },
                isSubmitted: false
            }
        },
        methods: {
          submitted() {
            this.isSubmitted = true;
          },
          updatedFullName(value) {
            var names =  value.split(' ');
            this.userData.firstName = names[0];
            this.userData.lastName = names[1];
          }
        },
        components: {
            appFullname: Fullname
        }
    };
</script>

<style>
    
</style>