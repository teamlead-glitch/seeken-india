<template>
  
    <!-- <div>
      <h1>Profile</h1>
      <p>Name :  {{ authStore.user?.name ?? 'Guest' }}</p>
      <p>Email :  {{ authStore.user?.email ?? 'Guest' }}</p>
      <button @click="logout">Logout</button>
    </div> -->

    <div class="inner__banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="breadcrums">
                        <ul>
                            <li><a href="index.html">
                                    Home</a></li>
                            <li>Profile Settings</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="inner_container">
        <div class="container">
         <div class="row justify-content-center">
           <div class="col-md-10 col-xl-8">
            <div class="profile__container">
                <h1>Profile Settings</h1>
                <div class="heading">
                    <h4>Profile</h4>
                    <div class="right_box" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-pen"></i> Edit
                    </div>
                </div>
                <div class="full__box">
                    <div class="row align-items-center">
                        <div class="col-md-4 mb-3">
                            <div class="profile__pic"><img src="/images/profile_icon.webp" alt="seeken"></div>
                        </div>
                        <div class="col-md-8">
                            <div class="lists">
                                <ul>
                                <li>First Name Last Name</li>
                                <li><span class="primery">fakeemail@gmail.com</span><span>+051 12345 67890</span></li>
                                 <li> <input type="password" id="passwordField" value="1234567890" readonly>
                                    <span class="show" id="showButton">Show</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="heading">
                    <h4>Addresses</h4>
                    <div class="right_box">
                        <div class="right_box" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <i class="bi bi-plus-lg"></i> Add
                        </div>
                </div>
            </div>
            <div class="full__box">
                <div class="row align-items-center">
                    <div class="col-md-12 mb-3">
                       <h5>Shipping </h5>
                       <!-- no address added time -->
                        <div class="no__address"><h6>You did not add any address yet</h6></div>
                         <!-- no address added time -->
                          <!-- premenent address -->
                           <div class="row">
<div class="col-md-6 mb-4">
    <div class="shipping__boxes">
        <div class="default">Default</div>
        <div class="address__list">
    <ul>
        <li>
       <p> <strong>Firstname Lastname</strong>  <br>
         123 Fake Street, Fakeville, <br>
            NY, 555555, USA, Near Fake Landmark</p>
        </li>
        <li>
        <p>  +051 12345 67890 <br>
      <a href="mailto:fakeemail@gmail.com">fakeemail@gmail.com</a>   </p>
        </li>
        <li>
            <p>House (All day delivery)</p>
        </li>
    </ul>
  </div>
    </div>
</div>
<div class="col-md-6 mb-4">
    <div class="shipping__boxes">
        <div class="default set">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option1">
                <label class="form-check-label" for="inlineRadio4">Se as default</label>
              </div></div>
        <div class="address__list">
    <ul>
        <li>
       <p> <strong>Firstname Lastname</strong>  <br>
         123 Fake Street, Fakeville, <br>
            NY, 555555, USA, Near Fake Landmark</p>
        </li>
        <li>
        <p>  +051 12345 67890 <br>
      <a href="mailto:fakeemail@gmail.com">fakeemail@gmail.com</a>   </p>
        </li>
        <li>
            <p>Work (Delivery between 9am - 6pm)</p>
        </li>
    </ul>
  </div>
    </div>
</div>
  </div>
   </div>
                </div>
            </div>
            <div class="heading">
                <h4>Preferences</h4>
                <div class="right_box">
            </div>
        </div>
        <div class="full__box">
            <div class="row align-items-center">
                <div class="col-md-12 mb-3">
                   <h5>Notification Preferences</h5>
                   <p>Marketing information may include channels like SMS, Email, Whatsapp and push notifications.
                 <a href="">Click here</a>    to opt out of Marketing Communication.</p>
                </div></div></div>
           </div>
</div>
</div>
</div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  
  const authStore = useAuthStore();
  
  const logout = () => {
    authStore.logout();
    navigateTo('/login');
  };

  definePageMeta({
    middleware: 'auth'
  })
  </script>
  
  
  