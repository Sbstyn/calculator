let _1st_button = document.getElementById("1");
let _1st_button_width = _1st_button.getBoundingClientRect().width;

let total_width = _1st_button_width * 4 + 35;

document.querySelector(".container").style.width = `${total_width + 35 + 20}px`;

