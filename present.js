
var to = 'Bích Phương!';
var gift_url = 'https://www.facebook.com/profile.php?id=100004221226056';
var gift_image_url = 'https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/288477067_417295173520281_5567146466808402230_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qWTT2eofpp0AX935SwW&_nc_ht=scontent.fhan5-10.fna&oh=03_AVIaRbVS_GGkxVULCjmqEREnT4_xSijqn1Iq7GQx901nMA&oe=630C2B64'
var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();
