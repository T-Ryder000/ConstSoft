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

// window.addEventListener("scroll", function(){
//   let scrollTop = this.window.scrollY;

//   let header = this.document.querySelector('.container_scroll-header');

//   if(scrollTop > 400){
//     header.style.position = "fixed";
//   }else{
//     header.style.position = "sticky";
//   }

// })

  
}

export default scrollHeader;