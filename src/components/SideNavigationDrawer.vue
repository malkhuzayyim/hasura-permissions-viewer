<template>
  <v-navigation-drawer app width="400px" permanent>
    <div class="pa-4 title">Critical Tables</div>
    <v-divider></v-divider>
    <div class="pa-4 caption" v-if="criticalTables.length === 0">
      No tables added yet
    </div>
    <v-list>
      <v-list-item
        v-for="(table, index) in criticalTables"
        :key="`link` + table.table.name"
        @click="$vuetify.goTo(`#${table.table.name}`)"
      >
        <v-list-item-content>
          {{ index + 1 }}.
          {{ table.table.name }}
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="deleteTable(index)">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <div class="pa-4 title">All Tables</div>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="(table, index) in tables"
        :key="`link` + table.table.name"
        @click="$vuetify.goTo(`#${table.table.name}`)"
      >
        <v-list-item-content>
          {{ index + 1 }}.
          {{ table.table.name }}
        </v-list-item-content>
        <v-list-item-action v-if="!alreadyExists(table)">
          <v-btn icon @click.stop="addTable(table)">
            <v-icon> mdi-plus-circle-outline </v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action v-else>
          <v-btn icon>
            <v-icon color="primary"> mdi-check-circle-outline </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    tables: Array,
  },
  data() {
    return {
      criticalTables: [],
    };
  },
  methods: {
    alreadyExists(table) {
      const targetTable = this.criticalTables.find(
        (x) => x.table.name === table.table.name
      );
      return typeof targetTable !== "undefined";
    },
    addTable(table) {
      this.criticalTables.push(table);
    },
    deleteTable(index) {
      this.criticalTables.splice(index, 1);
    },
  },
};
</script>

<style>
</style>