<template>
  <v-app>
    <v-container>model: {{model}}
    </v-container>

    <v-content>
      <v-container>
        <v-radio-group v-model="model">
          <v-radio-deselectable
            v-for="n in 3"
            v-bind:label="`Label ${n}`"
            v-bind:key="n"
            v-bind:value="n"/>
        </v-radio-group>
      </v-container>
    </v-content>
  </v-app>
</template>

<script src="./app.js"></script>
<style lang="less" src="./app.less"></style>
