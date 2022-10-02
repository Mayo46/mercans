<template>
  <v-app id="inspire">
     <v-navigation-drawer
       v-model="drawer"
       app
     >
     <v-list>
       <v-list-subheader class="side-bar-banner">{{ appTitle }}</v-list-subheader>
       <v-app-bar-nav-icon icon="mdi-chevron-left" class="burger-drawer" @click="drawer = !drawer"></v-app-bar-nav-icon>
       <v-list-item 
         v-for="(item, i) in menuLinks" 
         :key="i"
         :value="item"
         active-color="primary"
         :to="item.path"
         :disabled="item.enabled"

       >
         <template v-slot:prepend>
           <v-avatar size="20px">
             <v-img :src="item.icon"></v-img>
           </v-avatar>
         </template>
 
         <v-list-item-title v-text="item.title"></v-list-item-title>
       </v-list-item>
     </v-list>
     <v-spacer></v-spacer>
     <v-list>
       <v-list-item class="mt-15 pt-10">
          <v-list-item-title class="text-center">{{ appFooter }}</v-list-item-title>
       </v-list-item>
      </v-list>
     </v-navigation-drawer> 
     <v-main>
       <!-- Provides the application the proper gutter -->
     <v-container fluid>
 
       <!-- If using vue-router -->
       <router-view></router-view>
     </v-container>
     </v-main>
  </v-app>
</template>

<script setup>
 import { ref} from 'vue'
 import sideBarMenuLinks from '@/constant/menuLinks';
 const appTitle = 'Employee Self Service'
 const appFooter = 'Mercans @ 2022'
 const drawer= ref(null)
 const menuLinks = ref(sideBarMenuLinks)  
</script>
<style scoped>
  .side-bar-banner {
    background: #001738 0% 0% no-repeat padding-box;
    opacity: 1;
    min-height: 65px;
    color: #FFFFFF;
  }
  .v-list {
   padding-top: 0px;
  }
  .v-list-item--active{
    border-left: 5px solid #FC6541;
    color:#FC6541;
  }
  .text-primary {
    color: #FC6541 !important;
  } 
  .v-list-item .v-list-item--link > .v-list-item__overlay{
    background-color: #F4F6F8 !important;
    opacity: 0.3;
  }
  .v-list-item-title{
    text-align: left;
    font: normal normal normal 14px/40px Source Sans Pro;
    letter-spacing: 0px !important;
    color: #001738 !important;
    opacity: 1;
    font-size: 14px !important;
  }
  .v-list-subheader{
    text-align: left;
    font: normal normal bold 14px/14px Source Sans Pro;
    letter-spacing: 0px !important;;
    color: #FFFFFF;
    opacity: 1;
    font-weight: bold;
    font-size:14px !important;
  }
  .burger-drawer{
    left: 235px;
    top: -18px;
    z-index: 1;
  }
  .v-btn--icon.v-btn--density-default {
    width: calc(var(--v-btn-height) + 6px);
    height: calc(var(--v-btn-height) + 6px);
}
.v-btn--size-default {
    --v-btn-height: 26px;
}
  </style>