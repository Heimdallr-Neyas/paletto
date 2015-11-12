'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var x;
PalettoTestCase.prototype.testStory1 = function () {
    x = new Engine();
    x.new_game();
    assertTrue(x.get_board(0, 0) === "black");
    assertTrue(x.get_board(0, 1) === "green");
    assertTrue(x.get_board(0, 2) === "white");
    assertTrue(x.get_board(0, 3) === "blue");
    assertTrue(x.get_board(0, 4) === "red");
    assertTrue(x.get_board(0, 5) === "white");
    assertTrue(x.juxtaposition() === false);
};