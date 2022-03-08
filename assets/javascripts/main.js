async function getVideoTitle(videoId) {
  var url = "https://www.youtube.com/watch?v=" + videoId;
  var title;
  await $.getJSON(
    "https://noembed.com/embed",
    { format: "json", url: url },
    function (data) {
      title = data.title;
    }
  );
  return title;
}
(function () {
  "use strict";
  includeHTML();
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    "#navbar .nav-link",
    function (e) {
      let section = select(this.hash);
      if (section) {
        e.preventDefault();

        let navbar = select("#navbar");
        let header = select("#header");
        let sections = select("section", true);
        let navlinks = select("#navbar .nav-link", true);

        navlinks.forEach((item) => {
          item.classList.remove("active");
        });

        this.classList.add("active");

        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }

        if (this.hash == "#header") {
          header.classList.remove("header-top");
          sections.forEach((item) => {
            item.classList.remove("section-show");
          });
          return;
        }

        if (!header.classList.contains("header-top")) {
          header.classList.add("header-top");
          setTimeout(function () {
            sections.forEach((item) => {
              item.classList.remove("section-show");
            });
            section.classList.add("section-show");
          }, 350);
        } else {
          sections.forEach((item) => {
            item.classList.remove("section-show");
          });
          section.classList.add("section-show");
        }

        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Hero type effect
   */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  const ageSpan = select("#ageSpan");
  const dobSpan = select("#dobSpan");
  if (ageSpan && dobSpan) {
    let dob = dobSpan.textContent;
    var mydate = new Date(dob);
    ageSpan.textContent = _calculateAge(mydate);
  }
})();
function submitContactMe() {
  alert("Submitted!");
  window.location.href = "/home";
}
function _calculateAge(birthday) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
jQuery(function () {
if ($('#tree').length)
createFamilyTree();

});

$(document).on("click", ".video-holder", function () {
  var poemId = $(this).data("id");
  getVideoTitle(poemId).then((data) => $("#popupTitle").text(data));
  // to add custom close button
  // getVideoTitle(poemId).then(data => $("#popupTitle").html(data+'<span class="badge badge-danger" data-bs-dismiss="modal">X</span>'));
  $("#VideoFrame").attr(
    "src",
    "https://www.youtube.com/embed/" + poemId + "?autoplay=1"
  );
});

$("#VideoModal").on("hidden.bs.modal", function (e) {
  $("#VideoFrame").attr("src", "#");
});
async function createFamilyTree() {
  // var ;
  var family = new FamilyTree(document.getElementById("tree"), {
    // scaleInitial: FamilyTree.match.width,
    scaleInitial: FamilyTree.match.boundary,
    editForm: { titleBinding: "Name", photoBinding: "ImgUrl" },
    // scaleInitial:FamilyTree.match.height ,
    template: "hugo",
    nodeBinding: {
      field_0: "name",
    },
    nodes: [
      {
        id: 1,
        pids: [2],
        mid: 16,
        fid: 17,
        name: "Rudran Variyath",
        ImgUrl: "assets/images/avatars/avatar.jpg",
      },
      { id: 2, pids: [1], mid: 14, fid: 15, name: "Shylaja M N" },
      { id: 3, pids: [4], mid: 2, fid: 1, name: "Arun R Variyath" },
      { id: 4, pids: [3], mid: 28, fid: 29, name: "Aparna" },
      { id: 5, mid: 4, fid: 3, name: "Adhisree A V" },
      { id: 6, pids: [7], mid: 2, fid: 1, name: "Anjitha R Variyath" },
      { id: 7, pids: [6], mid: 10, fid: 11, name: "Vijil" },
      { id: 8, mid: 6, fid: 7, name: "Rishikesh" },
      { id: 9, mid: 2, fid: 1, name: "Anoop R Variyath" },
      { id: 11, pids: [12], name: "Das" },
      { id: 12, pids: [11], name: "Vijaya" },
      { id: 13, mid: 10, fid: 11, name: "Vipin" },
      { id: 14, pids: [15], name: "Nandini" },
      { id: 15, pids: [14], name: "Venugopalamenon" },
      { id: 16, pids: [17], name: "Seemanndini" },
      { id: 17, pids: [16], name: "Narayanan" },
      { id: 18, pids: [24], mid: 14, fid: 15, name: "Baburaj" },
      { id: 19, mid: 14, fid: 15, name: "Biju M" },
      { id: 20, pids: [21], mid: 14, fid: 15, name: "Anilkumar M" },
      { id: 21, pids: [20], name: "Keerthy V" },
      { id: 22, mid: 21, fid: 20, name: "Anandhakrishnan" },
      { id: 23, mid: 21, fid: 20, name: "Aryanandha" },
      { id: 24, pids: [18], name: "Anu K" },
      { id: 25, mid: 24, fid: 18, name: "Anjana" },
      { id: 26, mid: 24, fid: 18, name: "Adhidev" },
      { id: 27, mid: 24, fid: 18, name: "Archana" },
      { id: 28, pids: [29], mid: 31, fid: 30, name: "Jayarani" },
      { id: 29, pids: [28], mid: 67, fid: 66, name: "Mohandas" },
      { id: 30, pids: [31], name: "Rani's Dad" },
      { id: 31, pids: [30], name: "Rani's Mom" },
      { id: 51, pids: [34], mid: 31, fid: 30, name: "Raji" },
      { id: 52, pids: [37], mid: 31, fid: 30, name: "Omana" },
      { id: 32, pids: [35], mid: 31, fid: 30, name: "Thankamani" },
      { id: 33, pids: [36], mid: 31, fid: 30, name: "Sathyabhama" },
      { id: 34, pids: [51], mid: 39, fid: 38, name: "Venu" },
      { id: 35, pids: [32], mid: 40, fid: 41, name: "Sethu" },
      { id: 36, pids: [33], mid: 43, fid: 42, name: "Murali" },
      { id: 37, pids: [52], mid: 45, fid: 44, name: "Kavya's Dad" },
      { id: 38, pids: [39], name: "Venu's Dad" },
      { id: 39, pids: [38], name: "Venu's Mom" },
      { id: 40, pids: [41], name: "Sethu's Dad" },
      { id: 41, pids: [40], name: "Sethu's Mom" },
      { id: 42, pids: [43], name: "Murali Vallyachan's Dad" },
      { id: 43, pids: [42], name: "Murali Vallyachan's Mom" },
      { id: 44, pids: [45], name: "Kavya's Dad's Dad" },
      { id: 45, pids: [44], name: "Kavya's Dad's Mom" },
      { id: 46, pids: [47], mid: 51, fid: 34, name: "Vinu" },
      { id: 47, pids: [46], mid: 48, fid: 49, name: "Devu" },
      { id: 48, pids: [49], name: "Devu's Mom" },
      { id: 49, pids: [48], name: "Devu's Dad" },
      { id: 50, mid: 48, fid: 49, name: "Anand" },
      { id: 53, pids: [56], mid: 52, fid: 37, name: "Keerthy" },
      { id: 54, pids: [55], mid: 52, fid: 37, name: "Kavya" },
      { id: 55, pids: [54], name: "Murali(kavya)" },
      { id: 56, pids: [53], name: "Manjunadh" },
      { id: 57, mid: 53, fid: 56, name: "Archa" },
      { id: 58, mid: 54, fid: 55, name: "Vaiga" },
      { id: 59, mid: 54, fid: 55, name: "Keshav" },
      { id: 60, pids: [61], mid: 33, fid: 36, name: "Veena" },
      { id: 61, pids: [60], name: "Praveen" },
      { id: 62, mid: 33, fid: 36, name: "Vishnu" },
      { id: 63, pids: [64], mid: 32, fid: 35, name: "Saju" },
      { id: 64, pids: [63], name: "Ramya" },
      { id: 65, mid: 32, fid: 35, name: "Sharath" },
      { id: 66, pids: [67], name: "Mohandas's Father" },
      { id: 67, pids: [66], name: "Mohandas's Mother" },
      { id: 68, pids: [69], mid: 67, fid: 66, name: "Mema" },
      { id: 69, pids: [68], name: "Mema's Husband" },
      { id: 70, pids: [71], mid: 67, fid: 66, name: "Mummy" },
      { id: 71, pids: [70], name: "Pappa" },
    ],
  });
  // family.load(jsonData);
  family.on("click", function (sender, args) {
    // sender.editUI.show(args.node.id, false);
    sender.editUI.show(args.node.id, true); //  details mode
    return false; //to cansel the click event
  });
}
function includeHTML () {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
          /* Make an HTTP request using the attribute value as the file name: */
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4) {
                  if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                  if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                  /* Remove the attribute, and call this function once more: */
                  elmnt.removeAttribute("w3-include-html");
                  includeHTML();
              }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          /* Exit the function: */
          return;
      }
  }
}
