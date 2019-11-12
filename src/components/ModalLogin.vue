<template>
    <modal
        title="Авторизация"
        
        @close="close"
        @needAccount="needAccount"
    >

        <div slot="body" >
            <form @submit.prevent="onSubmit">

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

               


            <button class="btn btnPrimary" type="submit">Войти!</button>
            </form>
        </div>

        <div slot="footer" class="modal-footer">
            <a href="#" @click="needAccount">Мне нужен аккаунт</a>
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
        }

    },
    methods:{
        needAccount(){
            
            this.close();
            this.$emit('needAccount');
        },
        onSubmit(){
            this.$v.$touch();
           
            if (!this.$v.$invalid){
                const user = {
                    email:this.email,
                    pwd:this.pwd
                }
                console.log(user);

                //DONE!
                this.email = '';
                this.pwd = '';
                this.$v.$reset();
                this.$emit('close');
            }
        },
        close(){
            
            this.email='';
            this.pwd='';
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

.modal-footer{
    text-align: center;
    background-color: #f0f0f0;
    padding: 15px;
    color:#666;
    margin: 20px -20px -20px -20px;

    & a {
        color:#666;
        font-size: 14px;
        text-decoration: underline;
    }
}



</style>
