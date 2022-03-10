 <template>
    <div>
     <navigation></navigation>
        <div class="holder overflow-hidden space-y- mt-5 box-border border border-b-4 border-red-600 rounded-md mx-2 shadow-xl">
  <div class="top bg-blue-400 text-gray-700 font-semibold text-md p-2 px-4 space-y-2 grid">
      <div class="inline-flex items-center">
    <label>Name:</label>
    <!-- <input disabled v-bind="store.name" class="mx-2 bg-white border-gray-900 rounded-md px-2 py-1" type="text" /> -->
    <div class="mx-2.5 bg-white border-gray-900 rounded-md px-2 py-1">{{store.name}} {{store.surname}}</div>
  </div>
  <div class="inline-flex items-center">
      <label>Email:</label>
      <!-- <input disabled v-bind="store.email" class="mx-2.5 bg-white border-gray-900 rounded-md px-2 py-1" type="text" /> -->
      <div class="mx-2.5 bg-white border-gray-900 rounded-md px-2 py-1">{{store.email}}</div>
    </div>
  </div>
  <div>
                    <div class="w-full flex flex-col my-4">
                        <label class="font-semibold leading-none text-white mb-4 px-6">Message:</label>
                        <textarea v-model="message" type="text" class="h-40 text-base leading-none text-gray-900 mx-6 p-3 focus:oultine-none focus:border-blue-700  bg-gray-100 border rounded border-gray-200" 
                        :class="{ 'is-invalid': submitted && $v.message.$error }"
                        />
      <div
          v-if="submitted && !$v.message.required"
          class="invalid-feedback"
        >
If you want to send a question then the message space must not be empty.
        </div>
                    </div>
                </div>
                <div class="bottom">
    <div class="hold flex space-x-2 border-t p-3 mt-3 justify-end">
      <button @click="sendQuestion()" type="button" class=" rounded text-white bg-blue-400 text-base cursor-pointer border border-b-4 p-1 px-3 font-bold ">
        <svg class="h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        Send
      </button>
    </div>    
  </div>
</div>
    </div>
</template>

<script>
import navigation from '@/components/navigation.vue';
import store from '@/store.js';
import { Question } from '@/services';
import { required } from 'vuelidate/lib/validators'

export default {
    data() {
    return{
      store,
      message: '',
      user: '',
      submitted: false,
       };
  },
  validations: {     
                message: { required },
  },
  methods:{
     async sendQuestion(){
         this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log('jes')
                    return;
                    console.log('jes')
                }
        try { let send_question = {
             name: this.store.name,
             surname: this.store.surname,
             email: this.store.email,
             message: this.message
     };
     let question = await Question.send_question(send_question)
                console.log('push question', question.data);

            this.message = "";
            } catch (e) {
        console.error("greška", e);
      }
     }
  },
  
    
    components: {
        navigation
    }
  
}
</script>