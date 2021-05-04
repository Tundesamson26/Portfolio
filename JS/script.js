/*----about tab ------ */
(() =>{
      const aboutSection = document.querySelector(".about-section"),
              tabContainer = document.querySelector(".about-tabs");

      tabContainer.addEventListener("click", (event) =>{
          /*if event.target contains 'tab-item' class and not contains 'active' class */
          if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
              const target = event.target.getAttribute("data-target");
             // deactivate existing active 'tab-item'
             tabContainer.querySelector(".active").classList.remove("active", "outer-shadow");
             // activate new 'tab-item'
             event.target.classList.add("active", "outer-shadow");
             // deactivate existing active 'tab-content'
             aboutSection.querySelector(".tab-content.active").classList.remove("active");
             // activate new 'tab-content'
             aboutSection.querySelector(target).classList.add("active")
          }
      })
})();