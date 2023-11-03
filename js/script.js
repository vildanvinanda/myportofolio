// ====================Toggel icon navbar========================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

// ====================scroll section active link========================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ====================sticky navbar===============================
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // ====================remove toggle icon and navbar when click navbar link (scroll)===============================

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

};

ScrollReveal({ 
     // ====================Scroll Reveal===============================
    reset: true,
    distance: '80px',
    duraction: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// ====================typed Reveal===============================
const typed = new Typed(".multiple-text", {
  strings: ["Android Developer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
const typed2 = new Typed(".multiple-text2", {
  strings: ["Android Developer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true
});


document
  .getElementById("sendMessageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var phoneNumber = document.getElementById("mobileNumber").value;
    var message =
      "Halo, ini pesan dari " +
      document.getElementById("fullName").value +
      ": " +
      document.getElementById("message").value;

    var whatsappURL =
      "https://wa.me/" +
      "+6282127602881" +
      "?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL);

    // Atau Anda bisa mengarahkan pengguna langsung ke tautan WhatsApp tanpa membukanya di tab baru:
    // window.location.href = whatsappURL;
  });

  function pindahKeHalamanLain() {
    // Menggunakan window.location.href untuk mengarahkan ke halaman lain
    window.location.href = "detail_about.html";
  }

  function pindahKeHalamanDetailPortofolio1() {
    // Menggunakan window.location.href untuk mengarahkan ke halaman lain
    window.location.href = "detail_portofolio1.html";
  }
// document.getElementById("fb").addEventListener("click", function() {
//     window.location.href = "https://www.facebook.com/SnivhJr/";
//   });

// document.getElementById("ig").addEventListener("click", function() {
//     window.location.href = "https://www.instagram.com/vildanvinanda/";
//   });

//   document.getElementById("git").addEventListener("click", function() {
//     window.location.href = "https://github.com/vildanvinanda";
//   });
  
// //   document.getElementById("linkedin").addEventListener("click", function() {
// //     window.location.href =
// //       "https://www.linkedin.com/in/vildan-vinanda-96a690190/edit/forms/contact-info/new/?profileFormEntryPoint=PROFILE_TOP_CARD_EDIT_FORM";
// //   });

//   document.getElementById("yt").addEventListener("click", function() {
//     window.location.href =
//       "https://www.youtube.com/channel/UCb1xvGdoC-bJWQnNNdOastA";
//   });

// document.getElementById("wa").addEventListener("click", function() {
//     var nomorTelepon = "082127602881"; // Ganti dengan nomor telepon yang sesuai
//     var tautanWhatsApp = "https://api.whatsapp.com/send?phone=" + nomorTelepon;
//     window.location.href = tautanWhatsApp;
// });

