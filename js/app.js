// const removeItems = ()=> {
//   const ele= document.querySelector('.gallery');
//   ele.firstElementChild.remove();
//   console.log("dclick")
// }

const playCD = () => {
  const cd = document.querySelector(".desk-cd-player");
  if (!cd.paused) {
     cd.pause();
  } else {
    cd.play();
  }
}



const showAlbum = ()=> {
  const album = document.querySelector(".album-modal");
  album.style.display='block';
}

const closeAlbum = ()=> {
  const album = document.querySelector(".album-modal");
  album.style.display='none';
}


const changeBackground = ()=> {
  const bg = document.querySelector(".light-modal");
  if (bg.style.display==='none') {
    bg.style.display='block';
  } else {
    bg.style.display='none';
  }
}

const initListeners = ()=> {
  // document.addEventListener('dblclick',removeItems);

const ele= document.querySelector('.desk-cd');
ele.addEventListener('click', playCD);

const album = document.querySelector(".desk-album");
album.addEventListener('click',showAlbum);

const album_modal = document.querySelector(".album-modal-content");
album_modal.addEventListener('click',closeAlbum);

const lamp = document.querySelector(".desk-lamp");
lamp.addEventListener('click',changeBackground);

const light_modal = document.querySelector(".light-modal");
light_modal.addEventListener('click',changeBackground);


}


initListeners();``