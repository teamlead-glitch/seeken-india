<template>


<div class="inner__banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="breadcrums">
                        <ul>
                            <li><NuxtLink to="/">
                                    Home</NuxtLink></li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


  <section class="inner_container">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-xl-5">




          <div class="login__box">
            <form v-if="isShowLogin" @submit.prevent="handleLogin">
              <h1>Login</h1>
              <p>Login with email to become a member</p>
              <div class="col-12 mb-3 mt-5">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="email"
                    placeholder="Email Address" required>
                  <label for="firstName" class="form-label">Email Address</label>
                </div>
              </div>
              <div class="col-12 mb-3">
                <div class="form-floating mb-3">
                 
                          <div class="password"><i class="bi " :class="showPassword ? 'bi-eye' : 'bi-eye-slash'" @click="showPassword = !showPassword"></i></div>

                  <input :type="showPassword ? 'text' : 'password'" class="form-control border-0 border-bottom rounded-0" v-model="password"
                    placeholder="Password" required >
                   
                  <label for="password" class="form-label">Password</label>
                </div>
                <p class="success-message" v-if="success">{{ success }}</p>
                <p class="error-message" v-if="error">{{ error }}</p>
              </div>
              <div class="col-12 mt-5 mb-3 d-flex justify-content-center flex-column align-items-center">
                
                <button class="btn_1" type="submit">Sign in</button>
                <a href="#" @click="isShowLogin = false" class="mt-2">
                  <p style="color: #00687f;">Forgot your Password?</p>
                 
                </a>
                <!-- <center>- OR -</center> -->
                <NuxtLink to="/register">Don't have an account? Sign up</NuxtLink>
              </div>

            </form>



            <form v-if="!isShowLogin"  @submit.prevent="handleResetPassword">
              <h1>Reset Your Password </h1>
              <p>Please enter your email address. You will receive a link to create a new password via email </p>

              <div class="col-12 mb-3 mt-5">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control border-0 border-bottom rounded-0" v-model="reset_email" placeholder="E-mail" required>
                          <label for="firstName" class="form-label">E-mail</label>
                        </div>
                      </div>
                     <div class="col-12 mt-5 mb-3 d-flex justify-content-center  align-items-center gap-2">
                        <button class="btn_1" type="submit">Reset Password</button>   
                        <a class="btn_1" href="#" @click="isShowLogin = true">Back</a>
                      </div>



              <p class="error-message" v-if="error">{{ error }}</p>
              <p class="success-message" v-if="success">{{ success }}</p>
            </form>
          </div>




        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 col-xl-7">
          <div class="login__box">
            <p>By logging-in, I consent and accept the Enrollment 
              <NuxtLink to="/terms-of-services">Terms and Conditions</NuxtLink>   &  
              <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <div class="login-container" v-if="isShowLogin">
    
    <form class="login-form" @submit.prevent="handleLogin">
      <h1 class="login-title">Login</h1>
      <input class="login-input" v-model="email" type="email" placeholder="Email" required />
      <input class="login-input" v-model="password" type="password" placeholder="Password" required />
      <button class="login-button" type="submit">Login</button>
      <a href="#" @click="isShowLogin = false">Forgot password</a><br></br>
      <NuxtLink to="/register">Register</NuxtLink>
      <p class="error-message" v-if="error">{{ error }}</p>
    </form>
    
  </div>

  <div class="login-container" v-if="!isShowLogin">
    
    <form class="login-form" @submit.prevent="handleResetPassword">
      <h1 class="login-title">Forgot Password</h1>
      <input class="login-input" v-model="reset_email" type="email" placeholder="Email" required />
      
      <button class="login-button" type="submit">Send Reset Link</button>
      <a href="#" @click="isShowLogin = true">Login</a>
      <p class="error-message" v-if="error">{{ error }}</p>
      <p class="success-message" v-if="success">{{ success }}</p>
    </form>
    
  </div> -->

</template>



<script setup lang="ts">
import { ref, onMounted  } from 'vue';
import { useAuthStore } from '~/store/auth';
import { useLoader } from '@/composables/useLoader';
const { showLoader, hideLoader } = useLoader(); // Use global loader

const route = useRoute();
const router = useRouter();

const email = ref('');
const password = ref('');
const error = ref('');
const success = ref('');
const authStore = useAuthStore();
const reset_email = ref('');

const isShowLogin = ref(true);
const showPassword = ref(false);

onMounted(() => {
  
  //console.log(route.query.reg,'route++')
    if (route.query.reg == 'success') {
      success.value = 'Registration successful. Please log in.';

      // Clear query params after showing success message
      setTimeout(() => {
            router.replace({ path: '/login' }); // Removes the query param
            success.value = '';
        }, 2000); // 2-second delay before clearing
    }
});

const handleLogin = async () => {
  success.value = ''; error.value = '';
  showLoader();
  try {
    await authStore.login(email.value, password.value);
    //navigateTo('/', { external: true });
    navigateTo('/');
  } catch (err) {
    console.log(err + 'err')
    error.value = 'Invalid credentials';
  }
  finally {
    hideLoader(); // Hide loader after request completes
  }
};

const handleResetPassword = async () => {
  success.value = ''; error.value = '';
  showLoader();
  try {
    await authStore.resetPassword(reset_email.value);
    success.value = 'Reset link sent to your mail id';
  } catch (err) {
    error.value = err.data.error;


  }
  finally {
    hideLoader(); // Hide loader after request completes
  }
};
</script>