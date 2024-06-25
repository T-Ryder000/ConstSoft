const clickAbout = () =>{
  document.querySelector('#btn_info1').addEventListener('click', function() {
    const fadeBox = document.querySelector('.info-sobre2');
    const fadeBox1 = document.querySelector('.info-sobre-mobile');
  
    let collapse1 = document.getElementById('collapseWidthExample');
    let collapse2 = document.getElementById('collapseWidthExample2');
  
    let btn1 = document.getElementById('btn_info1');
    let btn2 = document.getElementById('btn_info2');
  
    if (collapse1.classList.contains('show')) {
      collapse1.classList.remove('show');
      collapse2.classList.add('show');
    } else {
      collapse1.classList.add('show');
      collapse2.classList.remove('show');
  
      btn1.style.display = 'none';
      btn2.style.display = 'block';
  
      setTimeout(() => {
        fadeBox.classList.remove('fade-out');
        fadeBox.classList.add('fade-in');
      }, 10);
  
      setTimeout(() => {
        fadeBox1.classList.remove('fade-in');
        fadeBox1.classList.add('fade-out');
      }, 10);
    }
  });
  
  document.querySelector('#btn_info2').addEventListener('click', function() {
    const fadeBox = document.querySelector('.info-sobre-mobile');
    const fadeBox1 = document.querySelector('.info-sobre2');
  
    let collapse1 = document.getElementById('collapseWidthExample');
    let collapse2 = document.getElementById('collapseWidthExample2');
  
    let btn1 = document.getElementById('btn_info1');
    let btn2 = document.getElementById('btn_info2');
  
    if (collapse2.classList.contains('show')) {
      collapse2.classList.remove('show');
      collapse1.classList.add('show');
    } else {
      collapse2.classList.add('show');
      collapse1.classList.remove('show');
  
      btn2.style.display = 'none';
      btn1.style.display = 'block';
  
      setTimeout(() => {
        fadeBox.classList.remove('fade-out');
        fadeBox.classList.add('fade-in');
      }, 10);
  
      setTimeout(() => {
        fadeBox1.classList.remove('fade-in');
        fadeBox1.classList.add('fade-out');
      }, 10);
    }
  });
  
}

export default clickAbout;