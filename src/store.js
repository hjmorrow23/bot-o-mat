import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'bot-o-mat',
  storage: localStorage
});

export const store = new Vuex.Store({
    state: {
        robots: [],
        tasks: [{
            description: 'do the dishes',
            eta: 1000,
          },{
            description: 'sweep the house',
            eta: 3000,
          },{
            description: 'do the laundry',
            eta: 10000,
          },{
            description: 'take out the recycling',
            eta: 4000,
          },{
            description: 'make a sammich',
            eta: 7000,
          },{
            description: 'mow the lawn',
            eta: 20000,
          },{
            description: 'rake the leaves',
            eta: 18000,
          },{
            description: 'give the dog a bath',
            eta: 14500,
          },{
            description: 'bake some cookies',
            eta: 8000,
          },{
            description: 'wash the car',
            eta: 20000,
          }],
        robotName: "",
        robotType: "",
        robotError: ""
    },
    mutations: {
        changeRobotName(state, robotName) {
            state.robotName = robotName;
        },
        changeRobotType(state, robotType) {
            state.robotType = robotType;
        },
        changeRobotError(state, robotError) {
            state.robotError = robotError;
        },
        addRobot(state, newRobot) {
            state.robots = [...state.robots, newRobot];
        },
        clearTask(state, {robotIndex, taskIndex}) {
          state.robots[robotIndex].tasksCompleted++;
          //deconstruct self in commit to get robotIndex and taskIndex
          state.robots[robotIndex].robotTasks.splice(taskIndex, 1);
        }
    },
    getters: {
        robotName: state => state.robotName,
        robotType: state => state.robotType,
        robotError: state => state.robotError,
        robots: state => state.robots,
        tasks: state => state.tasks,
    },
    plugins: [vuexPersist.plugin]
});