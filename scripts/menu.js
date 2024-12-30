

window.addEventListener("load", function() {
    const menuItems = document.querySelectorAll('ul.menu > li');
    let menuArray = [];
    for(let i=0; i < menuItems.length; i++) {
        menuArray.push("false");
    }

    if(sessionStorage.getItem('liActive') === null) {
        sessionStorage.setItem('liActive', JSON.stringify(menuArray));
    }
    menuItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            menuArray = JSON.parse(sessionStorage.getItem('liActive'));
            menuArray.fill("false");
            menuArray[index] = "true";
            console.log(menuArray);

            sessionStorage.setItem('liActive', JSON.stringify(menuArray));
        });
    });

    currentActive = JSON.parse(sessionStorage.getItem('liActive'));
    menuItems.forEach((item, index) => {
        if(currentActive[index] === "true" && getComputedStyle(menuItems[index]).backgroundColor !== "rgb(87, 12, 12)") {    
            item.style.backgroundColor = "rgb(87, 12, 12)";
        }
        else{
            item.style.backgroundColor = "#111111";
        }
    });
});