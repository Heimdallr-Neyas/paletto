'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var x;
PalettoTestCase.prototype.testStory1 = function () {
    x = new Engine();
    x.new_game();
    assertTrue(x.juxtaposition() === false);
};

PalettoTestCase.prototype.testStory2 = function () {
    assertTrue(x.check_player() === 1);
    assertTrue(x.check_corner("yellow") === true);
};

PalettoTestCase.prototype.testStory3 = function () {
    x.play("A6");
    assertTrue(x.get_board(5, 0) === undefined);
    assertTrue(x.number_marble() === 35);
};