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


function incrementLike(id){
    console.log("liking!", id);
    var element = document.querySelector(id); //this line grabs the element from the html whose id is equal to the variable id
    // console.log("element looks like this", element);
    let likeCount = Number(element.innerText); //element.innerText is the like count inside the span element. We will convert that to a number and store it in a variable
    // console.log(likeCount);
    likeCount++; //increment the like count
    element.innerText = likeCount; //update teh element so that its innerText is the new like count
}
