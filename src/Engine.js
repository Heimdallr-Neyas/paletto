/**
 * Created by benoit brimeux on 01/11/15.
 */


var Engine = function () {

// private attributes and methods
    var board, player, nb_marble, stroke_list, playable_stroke, win = 0, player_win;

// public methods

    this.new_game = function () {
        var line;
        board = new Array(6);
        for (line = 0; line < 6; line++) {
            board[line] = new Array(6);
        }
        this.init_board();
        nb_marble = 36;
        player = 1;
        this.init_array();
    };

    this.win = function () {
        return win;
    };

    this.init_array = function () {
        stroke_list = new Array(36);
        playable_stroke = new Array(36);
        playable_stroke[0] = this.create_string(0, 5);
        playable_stroke[1] = this.create_string(0, 0);
        playable_stroke[2] = this.create_string(5, 5);
        playable_stroke[3] = this.create_string(5, 0);
        this.init_player_win();
    };

    this.init_player_win = function () {
        var line, column;
        player_win = new Array(2);
        for (line = 0; line < 6; line++) {
            player_win[line] = new Array(6);
            for (column = 0; column < 6; column++) {
                player_win[line][column] = 0;
            }
        }
    };

    this.init_board = function () {
        board[0][0] = "black";
        board[0][1] = "green";
        board[0][2] = "white";
        board[0][3] = "blue";
        board[0][4] = "red";
        board[0][5] = "white";

        board[1][0] = "yellow";
        board[1][1] = "white";
        board[1][2] = "green";
        board[1][3] = "red";
        board[1][4] = "yellow";
        board[1][5] = "blue";

        board[2][0] = "blue";
        board[2][1] = "yellow";
        board[2][2] = "blue";
        board[2][3] = "white";
        board[2][4] = "black";
        board[2][5] = "red";

        board[3][0] = "red";
        board[3][1] = "black";
        board[3][2] = "red";
        board[3][3] = "green";
        board[3][4] = "blue";
        board[3][5] = "white";

        board[4][0] = "white";
        board[4][1] = "green";
        board[4][2] = "yellow";
        board[4][3] = "black";
        board[4][4] = "yellow";
        board[4][5] = "green";

        board[5][0] = "yellow";
        board[5][1] = "blue";
        board[5][2] = "black";
        board[5][3] = "red";
        board[5][4] = "green";
        board[5][5] = "black";
    };

    this.init_board2 = function () {
        board[0][0] = undefined;
        board[0][1] = undefined;
        board[0][2] = undefined;
        board[0][3] = "blue";
        board[0][4] = "red";
        board[0][5] = "white";

        board[1][0] = undefined;
        board[1][1] = undefined;
        board[1][2] = undefined;
        board[1][3] = "red";
        board[1][4] = "yellow";
        board[1][5] = undefined;

        board[2][0] = undefined;
        board[2][1] = undefined;
        board[2][2] = "blue";
        board[2][3] = "white";
        board[2][4] = "black";
        board[2][5] = undefined;

        board[3][0] = "red";
        board[3][1] = "black";
        board[3][2] = "red";
        board[3][3] = undefined;
        board[3][4] = undefined;
        board[3][5] = undefined;

        board[4][0] = undefined;
        board[4][1] = "green";
        board[4][2] = "yellow";
        board[4][3] = undefined;
        board[4][4] = undefined;
        board[4][5] = undefined;

        board[5][0] = undefined;
        board[5][1] = undefined;
        board[5][2] = "black";
        board[5][3] = undefined;
        board[5][4] = undefined;
        board[5][5] = undefined;
    };

    this.get_board = function (line, column) {
        return board[line][column];
    };

    this.get_number_marble = function () {
        return nb_marble;
    };

    this.get_stroke = function (place) {
        return stroke_list[place];
    };

    this.get_player = function () {
        return player;
    };

    this.get_playable_stroke = function () {
        return playable_stroke;
    };

    this.check_neighbour = function (line, column, bool, increment_line, increment_column) {
        if (!bool || board[line + increment_line][column + increment_column] === undefined) {
            return -1;
        }
        return 0;
    };

    this.get_neighbour_number_parametred = function (line, column, boolvert1, boolvert2,
                                                     boolhori1, boolhori2) {
        var number = 4;
        number = number + this.check_neighbour(line, column, boolvert1, -1, 0);
        number = number + this.check_neighbour(line, column, boolvert2, +1, 0);
        number = number + this.check_neighbour(line, column, boolhori1, 0, -1);
        number = number + this.check_neighbour(line, column, boolhori2, 0, +1);
        return number;
    };

    this.get_neighbour_number = function (line, column) {
        return this.get_neighbour_number_parametred(line, column,
            (line !== 0), (line !== 5),
            (column !== 0), (column !== 5));
    };

    this.check_near = function (line, column) {
        return (board[line][column] === board[line][column + 1]) ||
            (board[line][column] === board[line][column - 1]) ||
            (board[line][column] === board[line - 1][column]) ||
            (board[line][column] === board[line + 1][column]);
    };

    this.juxtaposition = function () {
        var line, column, ret = false;
        for (line = 1; line < 5; line++) {
            for (column = 1; column < 5; column++) {
                ret = ret || this.check_near(line, column);
            }
        }
        return ret;
    };



    this.check_corner = function (color) {
        return (board[0][0] === color) || (board[0][5] === color) ||
            (board[5][0] === color) || (board[5][5] === color);
    };

    this.create_string = function (line, column) {
        var stroke = String.fromCharCode(column + 65) +
            String.fromCharCode(line + 49), color = board[line][column];
        return stroke + " " + color + " " + player;
    };

    this.play = function (color, stroke) {
        //this.possible_stroke();
        var stroke_possible, i = 0;
        while (playable_stroke[i] !== undefined) {
            stroke_possible = playable_stroke[i].split(" ");
            if (stroke_possible[1] === color && stroke_possible[0] === stroke) {
                this.play_at_Place(stroke_possible[0]);
                this.player_win_add(stroke_possible[1]);
            }
            i++;
        }
        this.check_win();
        this.clean_possible_stroke();
        this.possible_stroke();
    };

    this.player_win_add = function (color) {
        var color_list = ["yellow", "blue", "red", "white", "black", "green"];
        player_win[player][color_list.indexOf(color)]++;
    };

    this.check_win = function () {
        var line, column;

        for (line = 0; line < 2; line++) {
            for (column = 0; column < 6; column++) {
                if (player_win[line][column] >= 6) {
                    win = player;
                    break;
                }
            }
        }
    };

    this.clean_possible_stroke = function () {
        playable_stroke = new Array(36);
    };

    this.play_at_Place = function (stroke) {
        var column = stroke.charCodeAt(0) - 65, line = stroke.charCodeAt(1) - 49;
        stroke_list[36 - nb_marble] = this.create_string(line, column);
        board[line][column] = undefined;
        nb_marble--;
    };

    this.possible_stroke = function () {
        var line, column, i = 0;
        for (line = 0; line < 6; line++) {
            for (column = 0; column < 6; column++) {
                if (this.get_neighbour_number(line, column) <= 2 &&
                        board[line][column] !== undefined) {
                    playable_stroke[i] = this.create_string(line, column);
                    i++;
                }
            }
        }
    };

    this.possible_play = function (color) {
        var i = 0, stroke;
        while (playable_stroke[i] !== undefined) {
            stroke = playable_stroke[i].split(" ");
            if (stroke[1] === color) {
                return true;
            }
            i++;
        }
        return false;
    };

    this.change_player = function () {
        if (player === 1) {
            player = 2;
        } else {
            player = 1;
        }
    };
};

