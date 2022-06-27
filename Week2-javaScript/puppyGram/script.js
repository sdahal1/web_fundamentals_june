function uploadPup(element){
    console.log("wazzaaaa", element);
    element.innerText = "Uploaded! Thank you.";
}


function removeElement(element){
    console.log("trying to remove something ....wazaaaa");
    element.remove();
}


function playVideo(element){
    console.log("wazaaa playing video");
    element.play();
}


function pawsVideo(element){
    element.pause();
}

function changeImg(element){
    console.log("wazaaaa", element);
    element.src = "./resources/anothaPuppy.jpeg";
}


function cookieMonster(){
    console.log("cookie monsta!");
    var element = document.querySelector("#cookie-box");
    element.remove();
}
