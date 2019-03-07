<template>
    <section class="app__container">
        <h1 class="app__title">LeaderBoard</h1>
        <router-link class="nav-link" to="/create">Build a Bot</router-link>
        <table v-if="$store.getters.robots.length !== 0" class="leaderboard__table">
            <thead >
                <th>Robot</th>
                <th>Tasks Completed</th>
            </thead>
            <tbody>
                <tr v-for="(robot, index) in $store.getters.robots.sort((a,b) => b.tasksCompleted - a.tasksCompleted)" :key="index">
                    <td>{{index + 1}}. {{robot.robotName}}</td>
                    <td>{{robot.tasksCompleted}}</td>
                </tr> 
            </tbody>
        </table>
        <p v-else>Make some Robots first then check here for their stats</p>
    </section>
</template>

<script>
    export default {
        name: "LeaderBoard",
    }
</script>

<style lang="scss" scoped>
    table {
        width: 50%;
        margin: 0 auto;

        thead {
            border-bottom: 1px solid rgba(0, 0, 0, .25);
        }

        tr {
            border-bottom: 1px solid rgba(0, 0, 0, .05);
        }

        th,
        td {
            text-align: left;
                padding: 10px;
        }
    }
</style>