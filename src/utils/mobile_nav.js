const mobileNav = () => {

    function copyMenu() {
        // copy inside .dpt-cat to deppartments
        var dptcategoryr = document.querySelector('.dpt-cat');
        var dptplace = document.querySelector('.deportments');
        dptplace.innerHTML = dptcategoryr.innerHTML;
        // copy inside nav  to nav
        var mainNav = document.querySelector('.header-nav nav');
        var navplace = document.querySelector('.header-nav nav');
        navplace.innerHTML = mainNav.innerHTML;
        // copy .header-top .wrapper to .thetop-nav
        var topNav = document.querySelector('.header-top');
        var topplace = document.querySelector('.thetop_nav');
        topplace.innerHTML = topNav.innerHTML;

    }
    copyMenu();





};
export default mobileNav;