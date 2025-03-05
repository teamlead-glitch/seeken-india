<template>
  
  <div class="login-container" v-if="isShowLogin">
    
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
    
  </div>
  
  </template>

  <style>
 /* Centering the form */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; /* Full viewport height */
 
}

.login-title {
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
  margin-bottom: 20px;
}

/* Form Styling */
.login-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px; /* Set a fixed width for the form */
}

/* Input fields */
.login-input {
  width: 92%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.login-input:focus {
  border-color: #007BFF;
  outline: none;
}

/* Button styling */
.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}

/* Error message */
.error-message {
  text-align: center;
  color: red;
  font-size: 14px;
  margin-top: 10px;
}


</style>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '~/store/auth';
  
  const email = ref('');
  const password = ref('');
  const error = ref('');
  const success = ref('');
  const authStore = useAuthStore();
  const reset_email = ref('');

  const isShowLogin = ref(true);
  
  const handleLogin = async () => {
    success.value='';error.value='';
    try {
      await authStore.login(email.value, password.value);
      //navigateTo('/', { external: true });
      // navigateTo('/'); 
    } catch (err) {
      console.log(err+'err')
      error.value = 'Invalid credentials';
    }
  };

  const handleResetPassword = async () => {
    success.value='';error.value='';
    try {
      await authStore.resetPassword(reset_email.value);
      success.value = 'Reset link sent to your mail id';
    } catch (err) {
      error.value = err.data.error;
      
      
    }
  };
  </script>
  