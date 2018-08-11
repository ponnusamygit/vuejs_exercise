<template>
  <div class="form-group">
    <label for="exampleInputname">Full name</label>
    <input type="text" 
      class="form-control" 
      id="exampleInputname" 
      placeholder="Full Name" 
      :value="value"
      @input="setFullName">
  </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            setFullName(event) {
              this.$emit('updatedFullName', event.target.value);
            }
        }
    };
</script>
<style>
  
</style>