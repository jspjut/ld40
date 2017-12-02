// 'main' state with the game
var mainState = {
    preload: function() {
        // initialization stuff before starting the game
        // asset loading here
        // game.load.image('name', 'path/to/image.png');
    },

    create: function() {
        // called at the start
        game.stage.backgroundColor = '#3598db';

        // start physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // physics the things
        game.world.enableBody = true;

        // create player, etc.
        text = game.add.text(0, 0, "Ludum Dare 40!", {font: "62pt Arial Black", fill: "#c51b7d" });
        text.position.x = (game.world.width - text.width)/2;
        text.stroke = "#de77ae";
    },

    update: function() {
        // called once per frame at 60 Hz
    }
}

// Initialize
canvas_width = window.innerWidth * window.devicePixelRatio;
canvas_height = window.innerHeight * window.devicePixelRatio;
var game = new Phaser.Game(canvas_width, canvas_height);

// add state and call it 'main'
game.state.add('main', mainState);

// start state
game.state.start('main');

