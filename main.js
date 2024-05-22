function openNav() {
    const sidepanel = document.getElementById('sidepanel1');
    if (sidepanel) {
        sidepanel.style.left = '0';
    } else {
        console.error('error');
    }
}
function closeNav() {
    const sidepanel = document.getElementById('sidepanel1');
    if (sidepanel) {
        sidepanel.style.left = '-280px';
    } else {
        console.error('error');
    }
}
function openSearch() {
    const searchPanel = document.getElementById('search');
    if (searchPanel) {
        searchPanel.style.height = "100vh";
    } else {
        console.error('error');
    }
}

function closeSearch() {
    const searchPanel = document.getElementById('search');
    if (searchPanel) {
        searchPanel.style.height = "0";
    } else {
        console.error('error');
    }
}
// //////SideBar///////
function rightSidebar() {
    const rightSidebar = document.getElementById('right-sidebar');
    if (rightSidebar) {
        rightSidebar.style.right = '0'; 
        // No need to set transition here
        setTimeout(() => {
            rightSidebar.classList.add('sidebar-transition');
        }, 50); // Delay to ensure the style change applies before transition
    } else {
        console.error('Sidebar element not found');
    }
}


// ////// More style content /////////


function closeSidebar() {
    const rightSidebar = document.getElementById('right-sidebar');
    if (rightSidebar) {
        rightSidebar.style.right = '-380px'; 
        // No need to set transition here
        setTimeout(() => {
            rightSidebar.classList.add('sidebar-transition');
        }, 50); // Delay to ensure the style change applies before transition
    } else {
        console.error('Sidebar element not found');
    }
}

// Dropdown Menu/////////////
document.addEventListener('DOMContentLoaded', function() {
    const pagesLink = document.querySelector('.dropdown-toggle > .nav-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    dropdownMenu.style.display = 'none';
    pagesLink.classList.remove('active');
    pagesLink.addEventListener('click', function(event) {
      event.preventDefault();
      
      pagesLink.classList.toggle('active');
      
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  

document.addEventListener('DOMContentLoaded', function() {
    const plusIcon = document.querySelector('.fa-solid.fa-plus');
    const collapseDiv = document.querySelector('.collapse');

    if (plusIcon && collapseDiv) {
        plusIcon.addEventListener('click', function() {
            if (collapseDiv.style.display === 'block') {
                collapseDiv.style.display = 'none';
            } else {
                collapseDiv.style.display = 'block';
            }
        });
    } else {
        console.error('Required elements not found');
    }
});


// ////////More Fuction ////////

document.addEventListener('DOMContentLoaded', function() {
    const plusIcon = document.querySelector('.fa-solid.fa-plus');
    const collapseDiv = document.querySelector('.collapse');

    if (plusIcon && collapseDiv) {
        plusIcon.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior of anchor tag
            collapseDiv.classList.toggle('open');
        });
    } else {
        console.error('Required elements not found');
    }
});


// Responsive slider
$(document).ready(function () {
    $('.logoipsum-slider').slick({
        slidesToShow: 5, 
        slidesToScroll: 1,
        autoplay: true, // Autoplay the slider
        autoplaySpeed: 800, // Autoplay speed in milliseconds
        dots: false, // Show navigation dots
        arrows: false, // Hide navigation arrows
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});


// Function to filter images based on category
function filterImages(category) {
    console.log("Clicked category:", category);
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    var selectedTab = document.getElementById(category);
    selectedTab.style.display = "flex";
    
    var clickedButton = document.querySelector("[onclick='filterImages(\"" + category + "\")']");
    clickedButton.classList.add("active");
    var imagesPerRow = 3; 
    var imageContainers = selectedTab.querySelectorAll(".bg, .bg1");
    var containerWidth = (100 / imagesPerRow) - 3 * imagesPerRow; 
    imageContainers.forEach(function(container) {
        container.style.width = containerWidth + "%";
    });

    var activeCategoryButton = document.querySelector(".tablinks.active");
    activeCategoryButton.style.backgroundColor = "#8630B5"; // Purple color
    activeCategoryButton.style.color = "white"; // Text color
}


// Copyright

document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const copyrightText = document.getElementById("copyright-text");
    const companyName = "Digitly By Codingwebstudio";
    copyrightText.textContent =
        "Copyright © " + currentYear + " " + companyName + ". All Rights Reserved.";
});

// ////Faq Section /////////
document.addEventListener('DOMContentLoaded', function () {
    let faqButtons = document.querySelectorAll('.quest-button');
    faqButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            let collapse = this.parentElement.nextElementSibling;
            let icon = this.querySelector('img');
            
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
                icon.src = "Images/icon/plus.png"; 
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + "px";
                icon.src = "Images/icon/menus.png"; 
            }
            // Close all other sections
            faqButtons.forEach(function (otherButton, otherIndex) {
                if (otherButton !== button) {
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    let otherIcon = otherButton.querySelector('img');
                    otherCollapse.style.maxHeight = null;
                    otherIcon.src = "Images/icon/plus.png"; 
                }
            });

            // Center the image
            icon.classList.toggle("centered");
        });
    });
});

// Email Form

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const successPopup = document.getElementById('successPopup');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = emailInput.value;
        console.log('Email submitted:', email);
        successPopup.style.display = 'block';
        form.reset();
        setTimeout(function () {
            successPopup.style.display = 'none';
        }, 3000);
    });
});



