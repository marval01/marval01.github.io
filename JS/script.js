let more_html = document.getElementById('more_html');
let hide_html = document.getElementById('hide_html');
let more_css = document.getElementById('more_css');
let hide_css = document.getElementById('hide_css');
let more_js = document.getElementById('more_js');
let hide_js = document.getElementById('hide_js');

more_html.addEventListener('click', toggleTextHtml);
more_css.addEventListener('click', toggleTextCss);
more_js.addEventListener('click', toggleTextJs);


function toggleTextHtml(){
    hide_html.classList.toggle('showText');

    if(hide_html.classList.contains('showText')){
        more_html.innerHTML = '- Info'
    }else{
        more_html.innerHTML = '+ Info'
    }
}

function toggleTextCss(){
    hide_css.classList.toggle('showText');

    if(hide_css.classList.contains('showText')){
        more_css.innerHTML = '- Info'
    }else{
        more_css.innerHTML = '+ Info'
    }
}

function toggleTextJs(){
    hide_js.classList.toggle('showText');

    if(hide_js.classList.contains('showText')){
        more_js.innerHTML = '- Info'
    }else{
        more_js.innerHTML = '+ Info'
    }
}


