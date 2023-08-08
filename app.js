const app = Vue.createApp ({
    data () {
        return {
            courseGoalA: 'Finish this course!',
            courseGoalB: '<h2>Finish and build good apps</h2>',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            }   else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount("#user-goal");