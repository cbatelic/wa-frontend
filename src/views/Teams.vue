<template>
  <sidebar-menu  :menu="menu" />
</template>
 
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
    export default {
      components: {
    SidebarMenu
  },
        data() {
            return {
                menu: [
                    {
                        header: true,
                        src:"require('@/assets/logo.png')", 
                    },
                    {
                        href: '/',
                        title: 'Home',
                        icon: 'fa fa-home fa-fw'
                    },
                    {
                        href: '/terrain',
                        title: 'Sports halls/terrain',
                        icon: 'fa fa-area-chart',
                    },
                    {
                        href: '/account',
                        title: 'Account',
                        icon: 'fa fa-user fa'
                    }
                ]
            }
        }
    }
</script> 

<style>


</style>