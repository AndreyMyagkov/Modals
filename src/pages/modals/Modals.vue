<template>
<div class="wrapper">
  <div class="wrapper-content">

    <section>
      <div class="container">


        <!-- first modal  -->
        <button class="btn btnPrimary" @click="modalFirst=!modalFirst">Show first modal</button>

        <modals 
          title="First modal"
          v-show="modalFirst"
          @close="modalFirst=false">


            <div slot="body">
              <p>Text</p>
              <button class="btn btnPrimary" @click="modalFirst=!modalFirst">Well done!</button>
            </div>
        </modals>


        <!-- second modal  -->
        <button class="btn btnPrimary" @click="modalSecond.show=!modalSecond.show">Show modal with form</button>

        <modals 
          title="Modal with form"
          v-show="modalSecond.show"
          @close="closeModalSecond">


            <div slot="body" @submit.prevent="submitSecondForm">
              <form >
                <label for="">Name:</label>
                <input type="text" v-model="modalSecond.name" required>

                <label for="">Email:</label>
                <input type="email" v-model="modalSecond.email" required>
                <button class="btn btnPrimary" type="submit">Submit!</button>
              </form>
            </div>
        </modals>

        <!-- modal with validate  -->
        <button class="btn btnPrimary" @click="modalValidate=!modalValidate">Show modal with form + validate</button>

        <modalValidate v-show="modalValidate" @close="modalValidate=false"/>




      </div>
    </section>
      
    </div>

  </div>
</template>

<script>

import modals from "@/components/UI/Modal.vue"
import modalValidate from "@/components/ModalValidate.vue"

export default {
  components: {
    modals,modalValidate
  },
  data(){
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },

      modalValidate: false

    }
  },
  methods:{
    submitSecondForm(){
      console.log({
        name:this.modalSecond.name,
        email:this.modalSecond.email,
      });
      this.closeModalSecond();
    },
    closeModalSecond(){
      this.modalSecond.name='';
      this.modalSecond.email='';
      this.modalSecond.show=false;
    },
    closeModalValidate(){
      this.modalValidate.name='';
      this.modalValidate.email='';

      this.modalValidate.show=false;
    }
  }
}
</script>

<style>

</style>
