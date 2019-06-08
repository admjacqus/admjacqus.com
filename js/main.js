$.cloudinary.responsive();

$(".hi").click(function() {
  // alert("Handler for .click() called.");
  $(".window").toggleClass("active");
  $("a#close").toggleClass("active");
});

// init
$(function() {
  $("body").addClass("ready");
  sizeProjects();
  // console.log( "ready!" );
});
// on resize
$(window).on("resize", sizeProjects());
// on scroll
$(window).scroll(function() {
  scrollMe();
});

var fixxer = $(".fixxer"),
  fixxerT = fixxer.offset().top,
  projectsW = 0;

function sizeProjects() {
  if ($(window).width() >= 769) {
    console.log("desktop");
    // var projectsW = 0;
    $(".project-scroller")
      .children()
      .each(function(i) {
        projectsW += $(this).width();
        $(this).addClass("project-" + i);
      });

    console.log("ProjectsW determined to be:" + projectsW);

    $(".project-scroller").css({
      width: projectsW + "px"
    });
    var fakeH =
      $(".project-scroller").outerWidth() +
      $(".project-scroller").outerHeight();
    $(".fakeholder").css({
      "padding-bottom": fakeH + "px"
    });
  } else {
    console.log("mobile");

    $(".fakeholder").css({
      "padding-bottom": "0px"
    });
    $("project-scroller").css({ width: "100%" });
  }
}
var winT = $(window).scrollTop();

function scrollMe() {
  // console.log("scrolling...");
  console.log("wintT:" + winT + ", < fixxerT:" + fixxerT);
  if ($(window).width() >= 768) {
    winT = $(window).scrollTop();

    if (winT >= fixxerT) {
      var delta = winT - fixxerT;

      fixxer.addClass("fixed");

      $(".project-scroller").css({
        "-webkit-transform": "translate3d(-" + delta + "px,0,0)",
        "-moz-transform": "translate3d(-" + delta + "px,0,0)",
        "-ms-transform": "translate3d(-" + delta + "px,0,0)",
        "-o-transform": "translate3d(-" + delta + "px,0,0)",
        transform: "translate3d(-" + delta + "px,0,0)"
      });

      console.log(
        "wintT:" +
          winT +
          ", > fixxerT:" +
          fixxerT +
          ", !> ProjectsW:" +
          projectsW +
          ". The delta is:" +
          delta
      );

      if (delta > 1600) {
        console.log("scrolled all projects @" + delta);
        fixxer.removeClass("fixed");
        fixxer.addClass("set");
        // fixxer.css({
        //   top: winT - fixxerT + "px"
        // });
        fixxer.css({
          top: 1600 + "px"
        });

        $(".project-scroller").css({
          "-webkit-transform": "translate3d(0px,0,0)",
          "-moz-transform": "translate3d(0px,0,0)",
          "-ms-transform": "translate3d(0px,0,0)",
          "-o-transform": "translate3d(0px,0,0)",
          transform: "translate3d(0px,0,0)"
        });
      } else {
        fixxer.removeClass("set");
        fixxer.addClass("fixed");
      }

      if (winT >= projectsW) {
        console.log("scrolled through all projects");

        // $(".project-scroller").css({
        //   "-webkit-transform": "translate3d(0px,0,0)",
        //   "-moz-transform": "translate3d(0px,0,0)",
        //   "-ms-transform": "translate3d(0px,0,0)",
        //   "-o-transform": "translate3d(0px,0,0)",
        //   transform: "translate3d(0px,0,0)"
        // });
        // fixxer.removeClass("fixed");
        // alert("or else!");

        // fixxer.removeClass("fixed");
        // fixxer.addClass("set");
        // fixxer.css({
        //   top: winT - fixxerT + "px"
        // });
      }
    } else {
      // scrolling uptime, past the projects
      fixxer.removeClass("fixed");
      fixxer.css({
        top: "0px"
      });
    }
  }
}

// mousehweel
// using on
// $(".fixxer").on("mousewheel", function(event) {
//   console.log(event.deltaX, event.deltaY, event.deltaFactor);
//   this.scrollLeft -= event.deltaX;
//   var scrollAmount = event.deltaY * event.deltaFactor;
//   $(".project-scroller").css(
//     "transform",
//     "translate3d(-" + scrollAmount + "px,0,0)"
//   );
//   $("window").scrollLeft -= event.deltaX;
// });

// var fixxer = $(".fixxer"),
//   fixxerT = fixxer.position(),
//   fixxerH = fixxer.outerHeight(),
//   fixxerW = fixxer.outerWidth();

// $(function() {
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > fixxerT.top) {
//       // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
//       fixxer.addClass("fixed");
//       fixxer.mousewheel(function(e, delta) {
//         // console.log(fixxerT.top);
//         // console.log(event.deltaX, event.deltaY, event.deltaFactor);

//         console.log(event.deltaY > 0 ? "UP" : "DOWN");
//         // this.scrollLeft -= delta;

//         if (delta > 0) {
//           $(".project-scroller").css(
//             "transform",
//             "translate3d(-" + delta * 100 + "px,0,0)"
//           );
//         }

//         e.preventDefault();
//       });

//       // alert("You've scrolled " + fixxerT.top + " pixels.");
//     } else if ($(this).scrollTop() > fixxerT.top + fixxerH) {
//       fixxer.removeClass("fixed");
//     }
//   });
// });

// using the event helper
// $(".fixxer").mousewheel(function(event) {
// console.log(event.deltaX, event.deltaY, event.deltaFactor);
// console.log(deltaY > 0 ? "UP" : "DOWN");
// });
// $(".fixxer").mousewheel(function(e, delta) {

// var projects = $(".project-section");

// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
// triggerElement: "#trigger-fix",
// duration: "100%",
// offset: projects.height() / 2
// })
// .setClassToggle(".fixxer", "fixed")
// .setTween(".fixxer", 1, { position: "fixed", top: 0 })
// .addIndicators({ name: "1 (duration: 0)" })
// .addTo(controller);

// $("html, body").mousewheel(function(e, delta) {
//   console.log(fixxer.top);

//   // console.log(delta > 0 ? "UP" : "DOWN");
//   this.scrollLeft -= delta;
//   e.preventDefault();
// });
