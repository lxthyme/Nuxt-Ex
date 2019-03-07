<template>
  <div>
    <h2>Todos</h2>
    <ul>
      <li v-for="(todo, idx) in todos" :key="idx">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li>
        <input type="text" :placeholder="$t('todo.placeholder')" @keyup.enter="addTodo">
      </li>
    </ul>
    <NuxtLink :to="$i18n.path('')" exact>{{ $t('links.home') }}</NuxtLink>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      todos: 'todos/todos'
    })
  },
  methods: {
    ...mapMutations({
      toggle: 'todos/toggle'
    }),
    addTodo(e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.commit('todos/add', { text })
      }
      e.target.value = ''
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
