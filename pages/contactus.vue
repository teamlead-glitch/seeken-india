<template>

    <CommonInnerBanner page_title="Contact Us"/>
    <section class="inner_container">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center mb-5"><h1>Contact Info</h1>
                </div>
               </div>
               <div class="row">
                <div class="col-md-7 col-xl-8  mb-4 border_right">
                    <div class="row">
                        <div class="col-md-12 col-xl-6 col-lg-12 mb-4">
                            <div class="contact__box">
                                <h4>Address:</h4>
                               
                                <div class="content">
                                    <!-- <p class="fw-bolder">Island Valley Electronics LLC</p> -->
                                    <p>{{ settings.address }}</p>
                                    <p>{{ settings.phone }}</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col-md-12 col-xl-6 col-lg-12 mb-4">
                            <div class="contact__box">
                                <h4>Chat with Us</h4>
                                <div class="content">
                                   <p>Available 24 Hours / 7 days</p>
                                </div>
                                <a class="btn_2" href="">Chat with us</a>
                            </div>
                        </div> -->
                        <div class="col-md-12 col-xl-6 col-lg-12 mb-4">
                            <div class="contact__box">
                                <h4>WhatsApp Us</h4>
                                <div class="content">
                                    <p>Available 24/7 @  <br>
                                       +91 97464 20575</p>
                                </div>
                                <a class="btn_2" href="https://wa.me/9746420575" target="_blank"
  rel="noopener noreferrer">WhatsApp us</a>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-lg-12 mb-4">
                            <div class="contact__box">
                                <h4>Drop us an Email</h4>
                                <div class="content">
                                    <p>We'll respond within 24 hours <br> of your request.</p>
                               </div>
                               <a class="btn_2" :href="`mailto:${settings.email}`">Send us an email</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-xl-4">
                    <form @submit.prevent="submitForm" >
                    <div class="contact__forms">
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <div class="form-floating ">
                                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="contactus.first_name" placeholder="First name" required>
                                    <label for="" class="form-label">First name</label>
                                  </div>
                            </div>
                            <div class="col-md-12 ">
                                <div class="form-floating ">
                                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="contactus.last_name" placeholder="Last name" required>
                                    <label for="" class="form-label">Last name</label>
                                  </div>
                            </div> <div class="col-md-12 ">
                                <div class="form-floating ">
                                    <input type="email" class="form-control border-0 border-bottom rounded-0" v-model="contactus.email" placeholder="Email address" required>
                                    <label for="" class="form-label">Email address</label>
                                  </div>
                            </div>
                            <div class="col-md-12 ">
                                <div class="form-floating ">
                                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-numeric-only v-model="contactus.phone" placeholder="Mobile number" maxlength="10" required>
                                    <label for="" class="form-label">Mobile number</label>
                                  </div>
                            </div>
                            <div class="col-md-12 ">
                                <div class="form-floating ">
                                    <textarea class="form-control border-0 border-bottom rounded-0" v-model="contactus.comments" placeholder="Comment" id="floatingTextarea"></textarea>
                  <label for="floatingTextarea" class="form-label">Comment</label>
                                  </div>
                            </div>
                            <div class="col-md-12 mt-4">
                                <button class="btn_2" href="">Send us a message</button>
                            </div>
                            <center><p class="error-message" v-if="error">{{ error }}</p></center>
                            <center><p class="success-message" v-if="success">{{ success }}</p></center>
                        </div>

                    </div>
                </form>
                </div>
               </div>
                </div>
    </section>
</template>
<script setup>

import { useLoader } from '@/composables/useLoader';
const { showLoader, hideLoader } = useLoader(); // Use global loader

const defaultForm = {
 
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  comments: '',
};

const contactus = ref({ ...defaultForm });
const error = ref('');
const success = ref('');

async function submitForm() {
    error.value = success.value = '';
    showLoader();
  console.log(contactus,'contactus');
  

  try {
    const config = useRuntimeConfig();
    const response = await $fetch(`${config.public.apiBase}contact`, {
      method: 'POST',
      body: contactus.value,
  
    });

    success.value = 'Enquiry submitted successfully!';
    // Reset form after submission
    contactus.value = { ...defaultForm };
    console.log('Response:', response);
    closePopup();
  } catch (error) {
    console.error('Error submitting form:', error);
    error.value = 'Failed to submit enquiry.';
  } finally {
    hideLoader();
  }
}


const { page_content, title } = await usePageContent('contact-us', 'Contact us');

const settings = await useSiteSettings();

</script>
