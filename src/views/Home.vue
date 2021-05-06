<template>
<v-card style="height: 750px;">
<v-row>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      style="height: 750px;"
    >
      <v-list-item class="px-2">
          <v-img src="logo.png"></v-img>

      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content style="font-size: 50%;">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <v-col
        cols="12"
        md="10"
      >
        <v-card
        style="height: 100px;"
          class="pa-2"
          outlined
          tile
        >
          Welcome
        </v-card>
        <v-card
        style="height: 300px; background-color: #1286C7;"
          class="pa-2"
          outlined
          tile
        >
          Questions
        </v-card>
        <v-card
        style="height: 300px; background-color: #1286C7;"
          class="pa-2"
          outlined
          tile
        >
          Teams
        </v-card>
      </v-col>
      
</v-row>
</v-card>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'Sports halls/terrain', icon: '' },
          { title: 'Account', icon: 'mdi-account' },
        ],
        mini: true,
      }
    },
  }
</script>
