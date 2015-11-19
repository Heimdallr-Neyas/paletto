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
    assertTrue(x.get_stroke(0) === "A6 yellow");
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