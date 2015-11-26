'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var x;
PalettoTestCase.prototype.testStory1 = function () {
    x = new Engine();
    x.new_game();
    assertTrue(x.juxtaposition() === false);
};

PalettoTestCase.prototype.testStory2 = function () {
    assertTrue(x.get_player() === 1);
    assertTrue(x.check_corner("yellow") === true);
};

PalettoTestCase.prototype.testStory3 = function () {
    x.play("yellow");
    assertTrue(x.get_board(5, 0) === undefined);
    assertTrue(x.get_number_marble() === 35);
    assertTrue(x.get_stroke(0) === "A6 yellow 1");
};

PalettoTestCase.prototype.testStory4 = function () {
    assertTrue(x.possible_play("black") === true);
    assertTrue(x.possible_play("white") === true);
    assertTrue(x.possible_play("blue") === true);
    assertTrue(x.possible_play("yellow") === false);
    x.play("black");
    assertTrue(x.get_board(0, 0) === undefined);
    assertTrue(x.get_board(5, 5) === undefined);
};

PalettoTestCase.prototype.testStory5 = function () {
    x.init_board2();
    x.possible_stroke();
    var y = x.get_playable_stroke();
    assertTrue(y[0] === "D1 blue 1");
    assertTrue(y[1] === "F1 white 1");
    assertTrue(y[2] === "C3 blue 1");
    assertTrue(y[3] === "E3 black 1");
    assertTrue(y[4] === "A4 red 1");
    assertTrue(y[5] === "B5 green 1");
    assertTrue(y[6] === "C6 black 1");
};


PalettoTestCase.prototype.testStory6 = function () {
    x.init_board();
    assertTrue(x.get_player() == 1);
    x.play("black");
    assertTrue(x.get_player() == 2);
    x.play("green");
    assertTrue(x.get_player() == 1);
    x.play("yellow");
    assertTrue(x.get_player() == 2);
    x.play("blue");
    assertTrue(x.get_player() == 1);
    x.play("white");
    assertTrue(x.get_player() == 2);
    x.play("red");
    assertTrue(x.get_player() == 1);
    x.play("blue");
    assertTrue(x.get_player() == 2);
    x.play("yellow");
    assertTrue(x.get_player() == 1);
    x.play("black");
};