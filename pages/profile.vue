<template>
  
    <CommonInnerBanner page_title="Profile Settings" />

    <CommonOverlayPopup :show="showEditPopup">
        <ProfileEdit @close="showEditPopup = false"></ProfileEdit>
    </CommonOverlayPopup>

    <CommonOverlayPopup :show="showAddAddressPopup">
        <ProfileAddAddress @close="showAddAddressPopup = false"></ProfileAddAddress>
    </CommonOverlayPopup>

    <section class="inner_container" v-if="authStore.token">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10 col-xl-8">
                    <div class="profile__container">
                        <h1>Profile Settings</h1>
                        <div class="heading">
                            <h4>Profile</h4>
                            <div class="right_box" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                @click="showEditPopup = true">
                                <i class="bi bi-pen"></i> Edit
                            </div>
                        </div>
                        <div class="full__box">
                            <div class="row align-items-center">
                                <div class="col-md-4 mb-3">
                                    <div class="profile__pic" style="aspect-ratio: 0;">
                                        <!-- <img src="/images/profile_icon.webp" alt="seeken"> -->
                                         <CommonAvatar :name="authStore.user?.name ?? 'Guest'"   />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="lists">
                                        
                                        <ul>
                                            <li>
                                                {{ authStore.user?.name ?? 'Guest' }}

                                            </li>
                                            <li><span class="primery">{{ authStore.user?.email ?? '-' }}</span>
                                            <span>{{
                                                    authStore.user?.phone ?? '' }}</span></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="heading">
                            <h4>Addresses</h4>
                            <div class="right_box">
                                <div class="right_box" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                    @click="showAddAddressPopup = true">
                                    <i class="bi bi-plus-lg"></i> Add
                                </div>
                            </div>
                        </div>
                        <div class="full__box">
                            <div class="row align-items-center">
                                <div class="col-md-12 mb-3">
                                    

                                    <ProfileListAddress :addPopup="showAddAddressPopup"/>
                                </div>
                            </div>
                        </div>

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

const showEditPopup = ref(false);
const showAddAddressPopup = ref(false);
const showPassword = ref(false);

definePageMeta({
    middleware: 'auth'
})

useHead({
      title: 'Seeken | Profile',
      meta: [
        { name: 'description', content:  'Seeken Profile' },
       
      ],
      
    });
</script>