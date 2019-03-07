<template>
    <section class="app__container">
        <h1 class="app__title">Build-a-Bot</h1>
        <router-link class="nav-link" to="/leaderboard">View LeaderBoard</router-link>
        <form class="robot__form" @submit.prevent="createRobot">
            <div class="robot__form__field">
                <label class="robot__form__field__label" for="Robot Name">Bot Name:</label>
                <input class="robot__form__field__input" name="Robot Name" type="text" v-model="botName" placeholder="Enter Robot Name" />
            </div>
            <div class="robot__form__field">
                <label class="robot__form__field__label" for="Robot Type">Bot Type:</label>
                <select class="robot__form__field__select" name="Robot Type" v-model="botType" aria-placeholder="Select Robot Type">
                    <option value="none" selected="selected">Select Robot Type</option>
                    <option value="Unipedal" >Unipedal</option>
                    <option value="Bipedal">Bipedal</option>
                    <option value="Quadrupedal">Quadrupedal</option>
                    <option value="Arachnid">Arachnid</option>
                    <option value="Radial">Radial</option>
                    <option value="Aeronautical">Aeronautical</option>
                </select>
            </div>
            <input class="robot__form__submit" type="submit" />
        </form>
        <div class="robot__error">{{botError}}</div>
        <section class="robots">
            <ul class="robots__list">
                <Robot v-for="(robot, index) in this.$store.getters.robots" :key="index" :robot="robot" :robotIndex="index"/>
            </ul>
        </section>
    </section>
</template>

<script>
    import Robot from './Robot';
    export default {
        name: "RobotForm",
        components: {
            Robot
        },
        data() {
            return {
                botName: "",
                botType: "",
                robot: {
                    botName: "",
                    botType: "",
                },
                botError: ""
            }
        },
        methods: {
            createRobot: function() {
                const robotName = this.botName;
                const robotType = this.botType;
                if(robotName.length === 0 && robotType === 'none' || robotType === '') {
                    this.botError = "Your bot needs some identity! Give it a name and type.";
                    return
                } else if (robotName.length === 0) {
                    this.botError = "A girl may have no name, but the faceless God says your bot needs one.";
                    return
                } else if (robotType === 'none' || robotType === '') {
                    this.botError = "Your bot has no type. Must make it hard to date.";
                    return
                } else {
                    this.botError = "";
                }
                let robotTasks = [];
                for (let x = 0; x < 5; x++) {
                    const randomNum = Math.floor(Math.random() * this.$store.getters.tasks.length);
                    robotTasks.push(this.$store.getters.tasks[randomNum]);
                }
                const newRobot = {robotName, robotType, robotTasks, tasksCompleted: 0};
                this.$store.commit('addRobot', newRobot);
            }
        }
    }
</script>

<style lang="scss">
    .app__container {
        border-radius: 5px;
        width: 50%;
        padding: 20px 20px 30px;
        margin: 60px auto 30px;
        background-color: #fff;
        -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.41);
        -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.41);
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.41);
    }

    .app__title {
        font-size: 28px;
        margin-bottom: 30px;
        font-weight: 500;
    }

    .nav-link {
        text-decoration: none;
        border: 1px solid rgba(0,0,0,0.25);
        background-color: #fff;
        color: #000;
        padding: 10px 15px;
        margin-bottom: 20px;
        border-radius: 5px;
        transition: color .35s, background-color .35s;
        display: inline-block;

        &:hover {
            color: #fff;
            background-color: #000; 
        }
    }

    .robot__form {
        margin-bottom: 30px;

        &__field {
            display: block;

            &__label,
            &__input,
            &__select {
                display: block;
                margin-bottom: 20px;
            }

            &__input,
            &__select {
                margin: 0 auto 20px;
            }
        }

        &__submit {
            padding: 7px 15px;
            border-radius: 3px;
        }
    }

    .robot__error {
        color: red;
        margin-bottom: 30px;
        // display: none;
    }

    .robots {

        &__list {
            display: grid;
            grid-template-columns: 1fr 1fr;

            @media (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }
    }
</style>