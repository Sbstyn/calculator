let _1st_button = document.getElementById("1");
let _1st_button_width = _1st_button.getBoundingClientRect().width;
let calc_display = document.querySelector("#display");

let total_width = _1st_button_width * 4 + 40;

document.querySelector(".container").style.width = `${total_width + 30}px`;


let display_text = 0;
let display_number = 0;

let save_num1 = 0;

let divide = false;
let multiply = false;
let subtract = false;
let add = false;

//console.log(document.querySelectorAll("button")[0]);

/*for(let i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].onclick = window[`_${document.querySelectorAll("button")[i].id}`]();
}*/

function update_display(result){
    if(result == null){
        console.log(save_num1);
        save_num1 = display_number;
        calc_display.innerHTML = display_text;
    }
    else{
        save_num1 = 0;
        calc_display = result;
    }
}

function _1(){
    display_text = 0;
    display_number = 0;
    save_num1 = 0;
    update_display();
}

function _2(){
    display_text = 0;
    display_number = 0;
    save_num1 = 0;
    update_display();
}

function _3(){
    display_number = display_text;
    display_text = display_number / 100;
    update_display();
    display_text = 0;
}

function _4(){
    display_number = display_text;
    display_text = "/";
    update_display();
    divide = true;
}

function _5(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "7";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _6(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "8";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _7(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "9";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _8(){
    display_number = display_text;
    display_text = "x";
    update_display();
    display_text = 0;
}

function _9(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "4";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _10(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "5";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _11(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "6";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _12(){
    display_number = display_text;
    display_text = "-";
    update_display();
    display_text = 0;
}

function _13(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "1";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _14(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "2";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _15(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "3";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _16(){
    display_number = display_text;
    display_text = "+";
    update_display();
    display_text = 0;
}

function _17(){
    console.log(display_text);
    update_display();
}

function _18(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + "0";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _19(){
    let d_t_string = display_text.toString();
    d_t_string = d_t_string + ".";
    display_text = parseFloat(d_t_string);
    console.log(display_text);
    update_display();
}

function _20(){
    console.log("a");
    if(save_num1 != 0){
        if(divide == true){
            let d_t_string = display_text.toString();
            let result = save_num1 / d_t_string;
            console.log(result);
            update_display(result);
        }
    }
}
