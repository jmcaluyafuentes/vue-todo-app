const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            todoList: []
        }
    },
    methods: {
        addTodo() {
            console.log(this.enteredValue)
            this.todoList.push(this.enteredValue);
        }
    }
});

app.mount('#app')
