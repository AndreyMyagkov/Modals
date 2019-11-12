<template>
<div class="wrapper">
  <div class="wrapper-content">

    <section>
      <div class="container">

        <!-- modal Login  -->
        <button class="btn btnPrimary" @click="modalLogin=!modalLogin">Войти</button>
        
        <modalLogin v-show="modalLogin" @close="modalLogin=false" @needAccount="modalLogin=false;ModalRegistration=true"/>
  


        <!-- modal Registeration  -->
        <button class="btn btnPrimary" @click="ModalRegistration=!ModalRegistration">Регистрация</button>

        <ModalRegistration v-show="ModalRegistration" @close="ModalRegistration=false"/>




      </div>
    </section>
      
    </div>

  </div>
</template>

<script>

import modals from "@/components/UI/Modal.vue"
import ModalLogin from "@/components/ModalLogin.vue"
import ModalRegistration from "@/components/ModalRegistration.vue"


export default {
  components: {
    modals,ModalLogin, ModalRegistration 
  },
  data(){
    return {
     
      modalLogin: false,
      ModalRegistration: false

    }
  },

}
</script>

<style>

</style>
