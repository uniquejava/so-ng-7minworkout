function Exercise(args) {
    this.name = args.name;
    this.title = args.title;
    this.desciption = args.desciption;
    this.image = args.image;
    this.related = {};
    this.related.videos = args.videos;
    this.nameSound = args.nameSound;
    this.procedure = args.procedure;
}

function WorkoutPlan(args) {
    this.exercises = []; // [{exercise: new Exercise({}), duration: 30}, ...]
    this.name = args.name;
    this.title = args.title;
    this.restBetweenExercise = args.restBetweenExercise;
}

workout.controller("workoutCtrl", function ($scope, $routeParams) {

});