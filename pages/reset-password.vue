<template>
  
  <div class="login-container">
    
    <div class="login-form">
    <h1>Reset Password</h1>
    <input v-model="email" placeholder="Email" type="email" class="login-input">
    <input v-model="password" placeholder="New Password" type="password" class="login-input">
    <input v-model="password_confirmation" placeholder="Confirm Password" type="password" class="login-input">
    <button @click="submit">Reset Password</button>
    <p v-if="successMessage">{{ successMessage }}</p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
  </div>

  
  
  </template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const token = ref(route.query.token || '')

const successMessage = ref('')
const errorMessage = ref('')

const submit = async () => {
    successMessage.value = ''
    errorMessage.value = ''
    try {
        const response = await $fetch(`${useRuntimeConfig().public.apiBase}reset-password`, {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value,
                password_confirmation: password_confirmation.value,
                token: token.value,
            }
        })
        successMessage.value = response.message
    } catch (error) {
        errorMessage.value = error.data.message || 'Something went wrong'
    }
}
</script>

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
  
  