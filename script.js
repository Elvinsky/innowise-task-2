const changeTheme = () => {
    let body = document.querySelector('body');
    let li = document.querySelectorAll('li.burger-component');
    let options = document.querySelectorAll('.options');
    let sideitem = document.querySelectorAll('.side-item');
    console.log(body, li, options, sideitem);
    body.classList.toggle('black');
    li.forEach((item) => item.classList.toggle('black'));
    options.forEach((item) => item.classList.toggle('black'));
    sideitem.forEach((item) => item.classList.toggle('black'));
};
let themeBtn = document.querySelector('#themeChanger');
themeBtn.addEventListener('click', changeTheme, true);
