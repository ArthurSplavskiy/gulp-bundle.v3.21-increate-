export default class App {
    constructor () {
        this.scrollIsViewElements = document.querySelectorAll('[data-is-view]') ?? null
        
        this.init()
    }
    
    init () {
        this.onResize()
        this.domCalculate()
        this.addEventListeners()
        this.scrollAnimation()
    }



    /*
        * Prepare
    */
    domCalculate () {
    }
    splitTextContent () {
    }



    /*
        * Animation
    */
    scrollAnimation () {

    }



    /*
        * Handlers
    */
    onResize () {
        this.domCalculate()
    }
    onClick (e) {
        const targetElement = e.target
 
        /*
            * Language toggle
        */
        if (!targetElement.classList.contains('lang-toggle__spoller') && !targetElement.closest('.lang-toggle__spoller')) {
            const langSpollerButton = document.querySelector('.spollers__title')
            const spollerBody = document.querySelector('.spollers__body')

            if(langSpollerButton && langSpollerButton.classList.contains('_spoller-active')) {
                langSpollerButton.classList.remove('_spoller-active')
                _slideToggle(spollerBody)
            }
        }
        /*
            * Anchor
        */
        if (targetElement.closest('[data-anchor]')) {
            gotoBlock(targetElement.getAttribute("href"))
			e.preventDefault();
		}
        /*
            * Menu open
        */
        if (targetElement.closest('.icon-menu')) {
            if (bodyLockStatus) {
                bodyLockToggle();
                document.documentElement.classList.toggle('menu-open');
                this.headerMenu.classList.toggle('menu-open');

                if(this.headerMenu.classList.contains('menu-open')) {
                    this.menuTimeline.play()
                } else {
                    this.isDisabledMenu()
                    this.menuTimeline.reverse()
                }
            }
        }
    }
   


    /*
        * Events
    */
    addEventListeners () {
        document.addEventListener('click', this.onClick.bind(this))
        window.addEventListener('resize', this.onResize.bind(this))
    }
    removeEventListeners () {
    }
}

