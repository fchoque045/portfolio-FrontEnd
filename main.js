const skills_items = [
    {
        desc: 'HTML',
        color: '#FF5722',
        class:'fa-brands fa-html5',
        porcetaje: 90
    },
    {
        desc: 'CSS',
        color: '#2196F4',
        class:'fa-brands fa-css3-alt',
        porcetaje: 40
    },
    {
        desc: 'Bootstrap',
        color: '#7952B3',
        class:'fa-brands fa-bootstrap',
        porcetaje: 40
    },
    {
        desc: 'Javascript',
        color: '#F0DB4F',
        class:'fa-brands fa-js',
        porcetaje: 70
    },
    {
        desc: 'Git',
        color: '#F34F29',
        class:'fa-brands fa-git-alt',
        porcetaje: 70
    },
    {
        desc: 'Python',
        color: '#F0DB4F',
        class:'fa-brands fa-python',
        porcetaje: 70
    },
    {
        desc: 'React',
        color: '#61DBFB',
        class:'fa-brands fa-react',
        porcetaje: 70
    },
    {
        desc: 'Angular',
        color: 'red',
        class: 'fa-brands fa-angular',
        porcetaje: 40
    },

];


const skills = document.getElementById("hard");
skills_items.forEach(function(item) {
    var column = document.createElement("div");
    column.setAttribute('class', 'col');
    var circle_main = document.createElement("div");
    circle_main.setAttribute('class', 'circle-main');
    
    var circle_right = drawCirleMidle('circle-right', item.color);

    if (item.porcetaje < 50){
        var mask_right = rotacion(item.porcetaje*360/100,'mask-right');
        circle_right.appendChild(mask_right);
    }
    
    circle_main.appendChild(circle_right);
    
    if (item.porcetaje > 50){
        var circle_left = drawCirleMidle('circle-left', item.color);
        var mask_left = rotacion((item.porcetaje-50)*360/100, 'mask-left');
        circle_left.appendChild(mask_left);
        circle_main.appendChild(circle_left);
    }

    //Icon junto con el nombre
    var icon_div = document.createElement("div");
    icon_div.setAttribute('class','skill-item');
    
    //Icono
    var icon = document.createElement("i");
    icon.setAttribute('class',item.class);
    icon.setAttribute("style", `color:${item.color};`);
    
    //Nombre
    var text = document.createElement("p");
    text.setAttribute('class','description');
    text.innerText = item.desc;

    icon_div.appendChild(icon);
    icon_div.appendChild(text);
    circle_main.appendChild(icon_div);
    column.appendChild(circle_main);
    skills.appendChild(column);

});


    
function drawCirleMidle(clase, color){
    var circle_midle = document.createElement("div");
    circle_midle.setAttribute('class', clase);
    circle_midle.setAttribute('style', `background: ${color};`)
    return circle_midle;
}

function rotacion(grado, clase){
    var mask = document.createElement("div");
    mask.setAttribute('class', clase);
    mask.setAttribute("style", `transform:rotate(${grado}deg);`);
    return mask;
}