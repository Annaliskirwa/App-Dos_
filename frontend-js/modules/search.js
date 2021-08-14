export default class Search {
    //1. select DOM elements and keep track of useful data
    constructor() {
        this.headerSearchIcon = document.querySelector(".header-search-icon")
        this.events()
     
    }
    //2. Events
    events () {
        this.headerSearchIcon.addEventListener("click", (e)=> {
            e.preventDefault()
            this.openOverlay()
        })
    }

    //3. Methods
    openOverlay(){
        alert("Open overlay method just ran")
    }
  }