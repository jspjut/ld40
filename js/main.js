// 'main' state with the game
var mainState = {
    preload: function() {
        // initialization stuff before starting the game
        // asset loading here
        game.load.image('star3', 'assets/star3.png');
    },

    create: function() {
        // called at the start
        game.stage.backgroundColor = '#3598db';

        // start physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // physics the things
        game.world.enableBody = true;

        // create player, etc.
        text = game.add.text(0, 0, "Ludum Dare 40!", {font: "62pt Arial Black", fill: "#555b5d" });
        text.position.x = (game.world.width - text.width)/2;
        text.stroke = "#de77ae";

        // add star
        stars = game.add.group();
        for (var i = 1; i < 7; i++) {
            for (var j = 1; j < 5; j++) {
                stars.add(game.add.sprite(200*i, 200*j, 'star3'));
            }         
        }
    },

    update: function() {
        // called once per frame at 60 Hz
        for(var i = 0; i < stars.children.length; i++) {
            stars.children[i].angle += 5;
        }
        // stars.angle += 5;
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

