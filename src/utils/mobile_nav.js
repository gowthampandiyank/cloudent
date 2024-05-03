const mobileNav = () => {

    function copyMenu() {
        // copy inside .dpt-cat to deppartments
        var dptcategoryr = document.querySelector('.dpt-cat');
        var dptplace = document.querySelector('.deportment');
        dptplace.innerHTML = dptcategoryr.innerHTML;
        // copy inside nav  to nav
        var mainNav = document.querySelector('.header-nav nav');
        var navplace = document.querySelector('.off-canvas nav');
        navplace.innerHTML = mainNav.innerHTML;
        // copy .header-top .wrapper to .thetop-nav
        var topNav = document.querySelector('.header-top .wrapper');
        var topplace = document.querySelector('.off-canvas .thetop-nav');
        topplace.innerHTML = topNav.innerHTML;

    }
    copyMenu();

    // show mobile nav
    const menuButton = document.querySelector('.trigger'),
        closeButton = document.querySelector('.t-close'),
        addclass = document.querySelector('.site')
    menuButton.addEventListener('click', function () {
        addclass.classList.toggle('showmenu')
    })
    closeButton.addEventListener('click', function () {
        addclass.classList.remove('showmenu')
    })
    // show  sub menu on mobile

    const submenu = document.querySelectorAll('.has-child .icon-small')
    submenu.forEach((menu) => menu.addEventListener('click', toggle));


    function toggle(e) {
        e.preventDefault();
        submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
        if (this.closest('.has-child').classList != 'expand');
        this.closest('.has-child').classList.toggle('expand')
    };








};
export default mobileNav;