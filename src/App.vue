<template>
  <v-app>
    <side-navigation-drawer :tables="tables"></side-navigation-drawer>
    <v-main>
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12">
            <v-card tile class="ma-4">
              <div class="title pa-4 text-center">
                Hasura Permissions Viewer
              </div>
              <v-row no-gutters>
                <v-col
                  cols="12"
                  v-for="table in tables"
                  :key="table.table.name"
                >
                  <v-card tile :id="table.table.name">
                    <div class="title pa-4 text-center primary white--text">
                      {{ table.table.name }}
                    </div>
                    <v-row dense>
                      <v-col cols="3">
                        <div class="pa-4 font-weight-bold text-center">
                          insert_permissions
                        </div>
                        <VueJsonPretty
                          :data="table.insert_permissions"
                        ></VueJsonPretty>
                      </v-col>
                      <v-col cols="3">
                        <div class="pa-4 font-weight-bold text-center">
                          select_permissions
                        </div>
                        <VueJsonPretty
                          :data="table.select_permissions"
                        ></VueJsonPretty>
                      </v-col>
                      <v-col cols="3">
                        <div class="pa-4 font-weight-bold text-center">
                          update_permissions
                        </div>
                        <VueJsonPretty
                          :data="table.update_permissions"
                        ></VueJsonPretty>
                      </v-col>
                      <v-col cols="3">
                        <div class="pa-4 font-weight-bold text-center">
                          delete_permissions
                        </div>
                        <VueJsonPretty
                          :data="table.delete_permissions"
                        ></VueJsonPretty>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNavigationDrawer from "@/components/SideNavigationDrawer";

import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

import tables from "@/assets/tables.json";
export default {
  name: "App",
  components: {
    VueJsonPretty,
    SideNavigationDrawer,
  },
  data() {
    return {
      tables: tables,
    };
  },
  mounted() {},
};
</script>

<style>
</style>