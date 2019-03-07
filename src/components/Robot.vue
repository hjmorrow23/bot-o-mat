<template>
    <li class="robot">
        <h1 class="robot__name">{{robot.robotName}}</h1>
        <h2 class="robot__type">{{robot.robotType}}</h2>
        <p class="robot__task-title">Tasks</p>
        <ul class="robot__task-list">
            <Task v-for="(task, index) in robot.robotTasks" :key="index" :task="task" :taskIndex="index" :robotIndex="robotIndex" />
        </ul>
    </li>
</template>

<script>
    import Task from "./Task"

    export default {
        name: "Robot",
        props: ['robot', 'robotIndex'],
        components: {
            Task
        }
    }
</script>

<style lang="scss">
    .robot {
        border: 1px solid rgba(0, 0, 0, .25);
        width: 75%;
        margin: 0 auto 20px;
        padding: 20px;
        text-align: left;


        &__name {
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 20px;
        }

        &__type {
            font-size: 18px;
            margin-bottom: 10px;
            color: #ccc; 
        }

        &__task-title {
            text-decoration: underline;
            margin-bottom: 10px;
            font-size: 16px;
        }

        &__task-list {

            &__item {
                margin-bottom: 10px;
                border: 1px solid rgba(0, 0, 0, .25);
                padding: 15px;

                &__title,
                &__duration,
                &__status {
                    text-align: center;
                }

                &__title,
                &__duration {
                    font-size: 14px;
                    display: block;
                }

                &__title {
                    margin: 0 0 5px 0;
                }

                &__duration {
                    
                }

                &__status {
                    font-size: 14px;
                    display: block;
                    margin-top: 5px;
                }
            }
        }

        &__task-start-button {
            padding: 7px 15px;
            border-radius: 3px;
            margin: 20px auto 20px;
            display: block;
        }
    }
</style>