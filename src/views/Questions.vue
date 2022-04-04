 <template>
    <div>
     <navigation></navigation>
     <div class="pt-40 lg:pt-56">
        <div class="holder overflow-hidden space-y-  box-border border border-b-4 border-red-600 rounded-md mx-2 shadow-xl">
  <div class="top bg-blue-400 text-gray-700 font-semibold text-md p-2 px-4 space-y-2 grid">
      <div class="inline-flex items-center">
    <label>Name:</label>
    <div class="mx-2.5 bg-white border-gray-900 rounded-md px-2 py-1">{{store.name}} {{store.surname}}</div>
  </div>
  <div class="inline-flex items-center">
      <label>Email:</label>
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
          class="invalid-feedback px-6"
        >
If you want to send a question then the message space must not be empty.
        </div>
                    </div>
                </div>
                <div class="bottom">
    <div class="hold flex space-x-2 border-t p-3 mt-3 justify-end">
      <button @click="sendQuestion()" type="button" class=" rounded text-white bg-blue-400 text-base cursor-pointer border border-b-4 p-1 px-3 font-bold ">
        <svg class="h-5 w-5 inline"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
        Send
      </button>
    </div>    
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
         this.submitted = true;
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