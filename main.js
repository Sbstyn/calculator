let _1st_button = document.getElementById("1");
let _1st_button_width = _1st_button.getBoundingClientRect().width;

let total_width = _1st_button_width * 4 + 40;

document.querySelector(".container").style.width = `${total_width + 30}px`;


let display_text = 0;
let display_number = 0;

console.log(document.querySelectorAll("button")[0]);

/*for(let i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].onclick = window[`_${document.querySelectorAll("button")[i].id}`]();
}*/


function _1(){
    display_text = 0;
    display_number = 0;
}

function _2(){
    display_text = 0;
    display_number = 0;
}

function _3(){
    display_number = display_text;
    display_text = display_number / 100;
}

function _4(){
    display_number = display_text;
    display_text = "/";
}

function _5(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "7";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _6(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "8";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _7(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "9";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _8(){
    display_number = display_text;
    display_text = "x";
}

function _9(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "4";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _10(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "5";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _11(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "6";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _12(){
    display_number = display_text;
    display_text = "-";
}

function _13(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "1";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _14(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "2";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _15(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "3";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _16(){
    display_number = display_text;
    display_text = "+";
}

function _17(){
    console.log(display_text);
}

function _18(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "0";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _19(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + ".";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
}

function _20(){
    console.log("a");
}
