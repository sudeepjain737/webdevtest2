let js;

function loaddoc(){
    let id = document.getElementById("search").value;
    const xhttp = new XMLHttpRequest();
    xhttp.onload  = function(){
        js = JSON.parse(this.responseText);
        console.log(js);
        display();
    }
    xhttp.open("GET", `https://api.tvmaze.com/search/shows?q=${id}`);
    xhttp.send();
}

display = () =>{
    document.getElementById("search").value = "";

    let sudeep = ``;
    for(let image of js){
        sudeep = `${sudeep}<img src="${image.show.image.medium}" alt="">`
    }
    document.querySelector(".image-div").innerHTML = sudeep;


}

const theme = document.querySelectorAll(`[name="theme"]`);
console.log(theme);

const storeTheme = function(theme)
{
    localStorage.setItem('theme',theme);
}

theme.forEach(themeoption => {
    themeoption.addEventListener('click',()=>{
        storeTheme(themeoption.id);
    })
});

const applyTheme = function()
{
    const activetheme = localStorage.getItem('theme');

    document.getElementById(activetheme).checked = true;
}
document.onload = applyTheme();
