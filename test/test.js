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
    x.play("yellow", "A6");
    assertTrue(x.get_board(5, 0) === undefined);
    assertTrue(x.get_number_marble() === 35);
    assertTrue(x.get_stroke(0) === "A6 yellow 1");
};

PalettoTestCase.prototype.testStory4 = function () {
    assertTrue(x.possible_play("black") === true);
    assertTrue(x.possible_play("white") === true);
    assertTrue(x.possible_play("blue") === true);
    assertTrue(x.possible_play("yellow") === false);
    x.play("black", "A1");
    x.play("black", "F6");
    assertTrue(x.get_board(0, 0) === undefined);
    assertTrue(x.get_board(5, 5) === undefined);
};

PalettoTestCase.prototype.testStory5 = function () {
    x.init_board2();
    x.possible_stroke();
    var y = x.get_playable_stroke();
     assertTrue(y[0] === "D1 blue 1");
    assertTrue(y[1] === "F1 white 1");
   // assertTrue(y[2] === "C3 blue 1");
    assertTrue(y[2] === "E3 black 1");
    assertTrue(y[3] === "A4 red 1");
    assertTrue(y[4] === "B5 green 1");
    assertTrue(y[5] === "C6 black 1");
};


PalettoTestCase.prototype.testStory6 = function () {
    x.new_game();
    x.init_board();
    assertTrue(x.get_player() === 1);

    x.play("black", "A1");
    x.play("black", "F6");
    assertTrue(x.get_stroke(0) === "A1 black 1");
    assertTrue(x.get_stroke(1) === "F6 black 1");

    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("green", "B1");
    x.play("green", "F5");
    x.play("green", "E6");
    assertTrue(x.get_stroke(2) === "B1 green 2");
    assertTrue(x.get_stroke(3) === "F5 green 2");
    assertTrue(x.get_stroke(4) === "E6 green 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("yellow", "A2");
    x.play("yellow", "A6");
    assertTrue(x.get_stroke(5) === "A2 yellow 1");
    assertTrue(x.get_stroke(6) === "A6 yellow 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("blue", "A3");
    assertTrue(x.get_stroke(7) === "A3 blue 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("white", "A5");
    x.play("white", "F4");
    x.play("white", "F1");
    x.play("white", "C1");
    assertTrue(x.get_stroke(8) === "A5 white 1");
    assertTrue(x.get_stroke(9) === "F4 white 1");
    assertTrue(x.get_stroke(10) === "F1 white 1");
    assertTrue(x.get_stroke(11) === "C1 white 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("red", "E1");
    x.play("red", "F3");
    x.play("red", "D6");
    x.play("red", "A4");
    assertTrue(x.get_stroke(12) === "E1 red 2");
    assertTrue(x.get_stroke(13) === "F3 red 2");
    assertTrue(x.get_stroke(14) === "D6 red 2");
    assertTrue(x.get_stroke(15) === "A4 red 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("blue", "D1");
    x.play("blue", "F2");
    x.play("blue", "B6");
    assertTrue(x.get_stroke(16) === "D1 blue 1");
    assertTrue(x.get_stroke(17) === "F2 blue 1");
    assertTrue(x.get_stroke(18) === "B6 blue 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("white", 'B2'); // Juste pour corriger une erreur de sujet, sinon B3 n'est pas accessible

    x.play("yellow", "B3");
    x.play("yellow", "E2");
    x.play("yellow", "E5");
    assertTrue(x.get_stroke(20) === "B3 yellow 2");
    assertTrue(x.get_stroke(21) === "E2 yellow 2");
    assertTrue(x.get_stroke(22) === "E5 yellow 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("black", "B4");
    x.play("black", "C6");
    x.play("black", "D5");
    x.play("black", "E3");
    assertTrue(x.get_stroke(23) === "B4 black 1");
    assertTrue(x.get_stroke(24) === "C6 black 1");
    assertTrue(x.get_stroke(25) === "D5 black 1");
    assertTrue(x.get_stroke(26) === "E3 black 1");

    assertTrue(x.win() === 1);

};


PalettoTestCase.prototype.testStory7 = function () {
    x.new_game();
    x.init_board();
    assertTrue(x.get_player() === 1);

    x.play("black", "A1");
    x.play("black", "F6");
    assertTrue(x.get_stroke(0) === "A1 black 1");
    assertTrue(x.get_stroke(1) === "F6 black 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("yellow", "A2");
    x.play("yellow", "A6");
    assertTrue(x.get_stroke(2) === "A2 yellow 2");
    assertTrue(x.get_stroke(3) === "A6 yellow 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("white", "A5");
    x.play("white", "F1");
    assertTrue(x.get_stroke(4) === "A5 white 1");
    assertTrue(x.get_stroke(5) === "F1 white 1");
    x.change_player();
    assertTrue(x.get_player() === 2);


    x.play("green", "B1");
    x.play("green", "F5");
    x.play("green", "E6");
    assertTrue(x.get_stroke(6) === "B1 green 2");
    assertTrue(x.get_stroke(7) === "F5 green 2");
    assertTrue(x.get_stroke(8) === "E6 green 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("blue", "A3");
    x.play("blue", "F2");
    assertTrue(x.get_stroke(9) === "A3 blue 1");
    assertTrue(x.get_stroke(10) === "F2 blue 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("white", "F4");
    x.play("white", "C1");
    assertTrue(x.get_stroke(11) === "F4 white 2");
    assertTrue(x.get_stroke(12) === "C1 white 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("red", "E1");
    x.play("red", "F3");
    x.play("red", "D6");
    x.play("red", "A4");
    assertTrue(x.get_stroke(13) === "E1 red 1");
    assertTrue(x.get_stroke(14) === "F3 red 1");
    assertTrue(x.get_stroke(15) === "D6 red 1");
    assertTrue(x.get_stroke(16) === "A4 red 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("blue", "D1");
    x.play("blue", "B6");
    assertTrue(x.get_stroke(17) === "D1 blue 2");
    assertTrue(x.get_stroke(18) === "B6 blue 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("yellow", "E2");
    x.play("yellow", "E5");
    assertTrue(x.get_stroke(19) === "E2 yellow 1");
    assertTrue(x.get_stroke(20) === "E5 yellow 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("black", "C6");
    x.play("black", "D5");
    x.play("black", "E3");
    assertTrue(x.get_stroke(21) === "C6 black 2");
    assertTrue(x.get_stroke(22) === "D5 black 2");
    assertTrue(x.get_stroke(23) === "E3 black 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("green", "B5");
    assertTrue(x.get_stroke(24) === "B5 green 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("red", "D2");
    assertTrue(x.get_stroke(25) === "D2 red 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("white", "B2");
    x.play("white", "D3");
    assertTrue(x.get_stroke(26) === "B2 white 1");
    assertTrue(x.get_stroke(27) === "D3 white 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("blue", "E4");
    assertTrue(x.get_stroke(28) === "E4 blue 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("yellow", "C5");
    x.play("yellow", "B3");
    assertTrue(x.get_stroke(29) === "C5 yellow 1");
    assertTrue(x.get_stroke(30) === "B3 yellow 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("green", "D4");
    x.play("green", "C2");
    assertTrue(x.get_stroke(31) === "D4 green 2");
    assertTrue(x.get_stroke(32) === "C2 green 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("blue", "C3");
    assertTrue(x.get_stroke(33) === "C3 blue 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    x.play("black", "B4");
    assertTrue(x.get_stroke(34) === "B4 black 2");
    x.change_player();
    assertTrue(x.get_player() === 1);

    x.play("red", "C4");
    assertTrue(x.get_stroke(35) === "C4 red 1");
    x.change_player();
    assertTrue(x.get_player() === 2);

    assertTrue(x.win() === 1);



};

