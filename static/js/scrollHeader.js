const scrollHeader=()=>{


window.addEventListener("scroll", function(){
  let scrollTop = this.window.scrollY;

  let header = this.document.querySelector('[data-header="container"]');

  if(scrollTop > 0){
    header.classList.add('container_scroll-header');
    header.classList.remove('container_header');
  }else{
    header.classList.remove('container_scroll-header');
    header.classList.add('container_header');
  }

})

  
}

export default scrollHeader;