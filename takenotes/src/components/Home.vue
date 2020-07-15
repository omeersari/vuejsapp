<template>
  <div class="home">
    <div class="welcome">
      <h1>Welcome to My Vue Take Note App</h1>
    </div>
    <div class="panel">
        <button class="add" @click="add()">Add New Note</button>
    </div>
    <div class="addNote" v-if="wannaAdd">
      <form @submit.prevent="addNote">
        <label for="header">Title:</label>
        <ValidationProvider rules="minmax:3,16" v-slot="{ errors }">
        <input name="header" type="text" required v-model.lazy="formModel.header">
        <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <label for="body">Your Note:</label>
        <textarea name="body" id="" cols="30" rows="10" v-model.lazy="formModel.body" required></textarea>
        <button  type="submit" :class="wannaUpdate ? 'updateB' : 'addB' "> {{ wannaUpdate ? "Update" : "Add"}}</button>
      </form>
    </div>
    <div class="main">
      <div class="card" v-for="(n,id) in notes" :key="id">
        <div class="buttonheaders">
          {{date}}
          <button class="delete" @click="deletee(n)">Delete</button>
          <button class="edit" @click="editt(n)">Edit</button>
        </div>
      <div class="header">
          {{n.header}}
          
      </div>
      <div class="body">
       {{n.body}}
      </div>
      </div>
       
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
extend('minmax', {
  validate(value, args) {
    const length = value.length;
    return length >= args.min && length <= args.max;
  },
  message: "Please enter a title between 3 and 16 characters",
  params: ['min', 'max']
});

export default {
  
  name: 'HelloWorld',
  components: {
    ValidationProvider
  },
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  
  data() {
    return {
      formModel:{
        id:0,
        header:null,
        body:null
    },
      wannaAdd : false,
      wannaUpdate : false,
      date: new Date().toISOString().substr(0, 10)
    }    
  },
  methods: {
    add() {
      this.wannaAdd = !this.wannaAdd
    },
    addNote() {
      if (this.wannaUpdate != true) {
        this.formModel.id++
        this.$emit('add', {...this.formModel})
        this.wannaAdd = !this.wannaAdd
        this.clearForm(this.formModel.id)
        
      }else {
        this.$emit('update', {...this.formModel})
        this.wannaUpdate = false
        this.clearForm(this.formModel.id)
        this.wannaAdd = false
      }
        
    },
    deletee(n) {
      const index = this.notes.indexOf(n)
      if (index > -1) {
        this.notes.splice(index, 1)
      }
    },
    editt(item) {
      this.formModel = item
      this.wannaUpdate = true
      this.wannaAdd = !this.wannaAdd

    },
    clearForm(id) {
        this.formModel = {
          id: id,
          header : null,
          body : null,
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  width: 720px;
  margin: 20px auto 0 auto;
}

.welcome h1 {
  padding:10px;
  text-align: center;
  background-color:#92a8d1;
  color:#50394c;
  border-radius: 10px;
}

label {
  margin:0;
  display: inline-block;
  margin-right: 5px;
  margin-top:5px;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  margin:0;
    
}
textarea {
  margin:0;
}

.panel {
  width: 300px;
}

.buttonheaders {
  margin-top: 0px !important;
}
button {
  width: 100px;
  padding:5px;
}

.add {
  background-color:#b1cbbb;
  width: 100%;
}


.delete {
  background-color: #c94c4c;
  margin-top: 1px;
  margin-left:400px;
  margin-right: 5px;
}

.edit{
  background-color: #80ced6;
  margin-top: 1px;
  
}

.card {
  border: black 1px solid;
  border-radius: 10px;
  padding:10px;
}

.header {
  border-bottom:1px solid #b2b2b2;
  font-family: Arial, Helvetica, sans-serif;
  
}

.addB {
  background: #b1cbbb;
}
.updateB {
  background-color: yellow;
}



</style>
