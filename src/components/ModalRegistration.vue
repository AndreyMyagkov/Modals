<template>
    <modal
        title="Регистрация"
        
        @close="close">


        <div slot="body" @submit.prevent="onSubmit">
            <form >

                <!-- email  -->
                <div class="form-item" :class="{errorInput: $v.email.$error}">
                    <label for="">Почта:</label>

                    <p class="errorText" v-if="!$v.email.required">Field is required</p>

                    <p class="errorText" v-if="!$v.email.email">Email is not correct!</p>

                    <input   
                    v-model="email"
                    :class="{error: $v.email.$error}"
                    @change="$v.email.$touch()"
                    >
                </div>

                <!-- pwd  -->
                <div class="form-item" :class="{errorInput: $v.pwd.$error}">
                    <label for="">Пароль:</label>

                    <p class="errorText" v-if="!$v.pwd.required">Field is required</p>

                    <p class="errorText" v-if="!$v.pwd.minLength">Name must have at least {{ $v.pwd.$params.minLength.min }}!</p>

                    <input   
                    v-model="pwd"
                    :class="{error: $v.pwd.$error}"
                    @change="$v.pwd.$touch()"
                    >
                </div>

                <!-- pwd2  -->
                <div class="form-item" :class="{errorInput: $v.pwd2.$error}">
                    <label for="">Повторите пароль:</label>

  

                    <p class="errorText" v-if="!$v.pwd.sameAsPassword">Passwords must be identical.!</p>

                    <input   
                    v-model="pwd2"
                    :class="{error: $v.pwd2.$error}"
                    @change="$v.pwd2.$touch()"
                    >
                </div>


            <button class="btn btnPrimary" type="submit">Зарегистрироваться!</button>
            </form>
        </div>
    </modal>   
</template>

<script>
import {required, minLength, email, sameAs} from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal.vue'
export default {
    components:{
        modal
    },
    data(){
      return {
          email: '',
          pwd: '',
          pwd2: ''

      }  
    },
    validations: {
        email: {
            required,
            email
        },
        pwd: {
            required,
            minLength: minLength(4)
        },
        pwd2: {
            sameAsPassword: sameAs('pwd')
        }
    },
    methods:{
        onSubmit(){
            this.$v.$touch();
           
            if (!this.$v.$invalid){
                const user = {
                    email:this.email,
                    pwd:this.pwd,
                    pwd2:this.pwd2
                }
                console.log(user);

                //DONE!
                this.email = '';
                this.pwd = '';
                this.pwd2 = '';
                this.$v.$reset();
                this.$emit('close');
            }
        },
        close(){
            
            this.email='';
            this.pwd='';
            this.pwd2='';
            this.$v.$reset();
            this.$emit('close');
        }
    }
    
}
</script>

<style lang="scss">

.form-item   .errorText {
        display: none;
        margin-bottom:8px;
        font-size: 13.4px;
        color:#de4040;
    }

.form-item {
    &.errorInput .errorText {
        display: block;
    }
}
input.error {
    border: solid 1px #de4040;
}
</style>
