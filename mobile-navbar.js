class MobileNavbar{
    constructor(mobileMenu,navList,navLinks){
        this.mobileNavbar=document.querySelector(mobileNavbar)
        this.mobileNavbar=document.querySelector(navList)
        this.mobileNavbar=document.querySelectorAll(navLinks)
        this.activeClass="active"
        
        this.handleClick= this.handleClick.bind();
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass)
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this
    }
}
const mobileNavbar= new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
MobileNavbar.init();