<template>
    <li class="robot__task-list__item">
        <span class="robot__task-list__item__title">{{task.description}}</span>
        <span class="robot__task-list__item__duration">{{makeSeconds(task.eta)}}</span>
        <span v-if="loading" class="robot__task-list__item__status">Working...</span>
        <span v-if="!loading && !completed" class="robot__task-list__item__status">Not Started</span>
        <button @click.prevent="taskStarter" class="robot__task-start-button">Complete Task</button>
    </li>
</template>

<script>
    export default {
        name: "Task",
        props: ['task', 'taskIndex', 'robotIndex'],
        data() {
            return {
                loading: false,
                completed: false
            }
        },
        methods: {
            makeSeconds: function(milliSeconds) {
                let seconds = milliSeconds / 1000;
                if(milliSeconds === 1000) {
                    return seconds + " second";
                } else {
                    return seconds + " seconds"; 
                } 
            },
            taskStarter: function() {
                this.loading = !this.loading;
                const self = this;
                setTimeout(function() {
                    self.loading = !self.loading;
                    self.completed = true;
                    console.log(self.taskIndex);

                    //deconstruct self in mutation to get robotIndex and taskIndex
                    self.$store.commit('clearTask', self);
                }, this.task.eta);
            }
        }
    }
</script>

<style scoped>

</style>