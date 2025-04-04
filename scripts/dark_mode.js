if(sessionStorage.getItem('dark-mode') === null) {
    sessionStorage.setItem('dark-mode', 'true');
}

window.addEventListener("load", function() {
    allh1 = document.querySelectorAll("h1");
    allh2 = document.querySelectorAll("h2");
    allp = document.querySelectorAll("p");
    alldiv = document.querySelectorAll("div");
    allsmall = document.querySelectorAll("small");
    allb = document.querySelectorAll("b");
    alli = document.querySelectorAll("i");
    alllabel = document.querySelectorAll("label");
    alllegend = document.querySelectorAll("legend");
    const darkModeButton = document.getElementById('darkModeButton');
    if(sessionStorage.getItem('dark-mode') === 'false') {
        document.body.classList.add('lightMode');
        darkModeButton.value = 'Toggle Dark Mode';
        allh1.forEach(function(h1) {
            h1.style.color = "#000000";
        });
        allh2.forEach(function(h2) {
            h2.style.color = "#000000";
        });
        allp.forEach(function(p) {
            p.style.color = "#000000";
        });
        alldiv.forEach(function(div) {
            div.style.color = "#000000";
        });
        allsmall.forEach(function(small) {
            small.style.color = "#000000";
        });
        allb.forEach(function(b) {
            b.style.color = "#000000";
        });
        alli.forEach(function(i) {
            i.style.color = "#000000";
        });
        alllabel.forEach(function(label) {
            label.style.color = "#000000";
        });
        alllegend.forEach(function(legend) {
            legend.style.color = "#000000";
        });
    }
    else {
        document.body.classList.remove('lightMode');
        darkModeButton.value = 'Toggle Light Mode';
        allh1.forEach(function(h1) {
            h1.style.color = "#FFFFFF";
        });
        allh2.forEach(function(h2) {
            h2.style.color = "#FFFFFF";
        });
        allp.forEach(function(p) {
            p.style.color = "#FFFFFF";
        });
        alldiv.forEach(function(div) {
            div.style.color = "#FFFFFF";
        });
        allsmall.forEach(function(small) {
            small.style.color = "#FFFFFF";
        });
        allb.forEach(function(b) {
            b.style.color = "#FFFFFF";
        });
        alli.forEach(function(i) {
            i.style.color = "#FFFFFF";
        });
        alllabel.forEach(function(label) {
            label.style.color = "#FFFFFF";
        });
        alllegend.forEach(function(legend) {
            legend.style.color = "#FFFFFF";
        });
    }
});
toggleDarkMode = function() {
    const darkModeButton = document.getElementById('darkModeButton');
    if(sessionStorage.getItem('dark-mode') === 'true') {
        sessionStorage.setItem('dark-mode', 'false');
        document.body.classList.add('lightMode');
        darkModeButton.value = 'Toggle Dark Mode';
        allh1.forEach(function(h1) {
            h1.style.color = "#000000";
        });
        allh2.forEach(function(h2) {
            h2.style.color = "#000000";
        });
        allp.forEach(function(p) {
            p.style.color = "#000000";
        });
        alldiv.forEach(function(div) {
            div.style.color = "#000000";
        });
        allsmall.forEach(function(small) {
            small.style.color = "#000000";
        });
        allb.forEach(function(b) {
            b.style.color = "#000000";
        });
        alli.forEach(function(i) {
            i.style.color = "#000000";
            

        });
        alllabel.forEach(function(label) {
            label.style.color = "#000000";
        });
        alllegend.forEach(function(legend) {
            
            legend.style.color = "#000000";
        });
    }
    else {
        sessionStorage.setItem('dark-mode', 'true');
        document.body.classList.remove('lightMode');
        darkModeButton.value = 'Toggle Light Mode';
        allh1.forEach(function(h1) {
            h1.style.color = "#FFFFFF";
        });
        allh2.forEach(function(h2) {
            h2.style.color = "#FFFFFF";
        });
        allp.forEach(function(p) {
            p.style.color = "#FFFFFF";
        });
        alldiv.forEach(function(div) {
            div.style.color = "#FFFFFF";
        });
        allsmall.forEach(function(small) {
            small.style.color = "#FFFFFF";
        });
        allb.forEach(function(b) {
            b.style.color = "#FFFFFF";
        });
        alli.forEach(function(i) {
            i.style.color = "#FFFFFF";
        });
        alllabel.forEach(function(label) {
            label.style.color = "#FFFFFF";
        });
        alllegend.forEach(function(legend) {
            legend.style.color = "#FFFFFF";
        });
    }
}