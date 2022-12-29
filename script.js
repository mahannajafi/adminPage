const calender = [...document.getElementsByClassName('filter__input')]

calender[0].addEventListener('click', () => {
  document.getElementById('filter__input').type = 'datetime-local'
  document.getElementById('hideSvg').style.display = 'none'

})

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close");
const fullMenu = document.querySelector('.fullMenu__container')
let isFullMenu = true

btn.onclick = function () {
  let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  if (width > 1024) {
    if (isFullMenu == false) {
      fullMenu.style.display = "none";
      document.querySelector('.container').style.paddingRight = '20px'
      document.querySelector('.mobile__menu').style.paddingRight = '18px'
      isFullMenu = true
    } else {
      document.querySelector('.container').style.paddingRight = '310px'
      fullMenu.style.display = 'inline'
      document.querySelector('.mobile__menu').style.paddingRight = '308px'
      isFullMenu = false
    }
  } else {
    modal.style.display = "flex";
  }
}
span[0].onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
   
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "کیف", y: 10 },
          { label: "کفش", y: 15 },
          { label: "ساعت", y: 25 },
          { label: "موبایل", y: 30 },
          { label: "تبلت", y: 28 }
        ]
      }
    ]
  });
  chart.render();
}