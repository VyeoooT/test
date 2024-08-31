$(document).ready(function(){
    // $("#header").load("../nav/header.html");
    // $("#slider").load("../slider/index.html");

    $("#about").load("../sessions/about.html");
    $("#interior").load("../sessions/interiorDecoration.html");
    $("#smartHome").load("../sessions/smartHome.html");
    $("#criteria").load("../sessions/criteria.html");
    $("#featuredProjects").load("../sessions/featuredProjects.html");
    $("#news").load("../sessions/news.html");
    // $("#partner").load("../sessions/partner.html");
    $("#media").load("../sessions/media.html");
    $("#agency").load("../sessions/agency.html");
    $("#footer").load("../nav/footer.html");
    $("#goToTop").load("../nav/goToTop.html");
});

$(window).scroll(function() {
	if($(this).scrollTop() > 700) {
		$('#gotop').show();
	} else {
		$('#gotop').hide();
	}
});

$('#gotop').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 'slow');
	return false;
});

$(document).ready(function() {
    $('#dropdownButton').click(function() {
        $('#dropdownMenu').toggleClass('hidden');
    });
});

$(document).click(function(event) {
    if (!$(event.target).closest('#dropdownButton, #dropdownMenu').length) {
        $('#dropdownMenu').addClass('hidden');
    }
});

// 
$(document).ready(function() {
    $('#menuIcon').click(function() {
        $('#mobileMenu').toggleClass('show hidden');
    });

    $('#closeIcon').click(function() {
        $('#mobileMenu').toggleClass('show hidden');
    });

    // Ẩn menu khi click ra ngoài
    $(document).click(function(event) {
        if (!$(event.target).closest('#menuIcon, #mobileMenu').length) {
            $('#mobileMenu').removeClass('show').addClass('hidden');
        }
    });
});

// contact fixed
const toggleBtn = document.getElementById('toggle-btn');
const contactIcons = document.getElementById('contact-icons');
const toggleIcon = document.getElementById('toggle-icon');
let isOpen = false;

toggleBtn.addEventListener('click', () => {
    if (isOpen) {
        contactIcons.classList.add('hidden');
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
    } else {
        contactIcons.classList.remove('hidden');
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-xmark');
    }
    isOpen = !isOpen;
});

// Đảm bảo rằng các icon bị ẩn khi mở trang
window.addEventListener('load', () => {
    if (window.innerWidth < 768) {
        contactIcons.classList.add('hidden');
        toggleIcon.classList.add('fa-bars');
        toggleIcon.classList.remove('fa-xmark');
        isOpen = false;
    }
});

// Ensure the contact icons are visible on larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        contactIcons.classList.remove('hidden');
    } else if (!isOpen) {
        contactIcons.classList.add('hidden');
    }
});
