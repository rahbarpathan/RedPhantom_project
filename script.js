function customScroller() {
  let index = 1,
    prevIndex = -1;
  const scrollHeight =
    $("main").prop("scrollHeight") -
    $("section:last").outerHeight(true) -
    $("footer").outerHeight(true);
  const sections = document.querySelectorAll("section");
  $("main").scroll(() => {
    console.log("yes");

    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if ($("main").scrollTop() <= scrollHeight) {
        let sum = (100 / (sections.length - 1)) * (index - 1);

        $(".pointer").css({
          top: `${sum}%`,
          transition: "0.5s",
        });
      }
      if (
        sectionTop < viewportHeight * 0.5 &&
        sectionTop > -(viewportHeight * 0.5)
      ) {
        index = section.dataset.index;
        if (index != prevIndex) {
          $(`.nav-line ul li`).removeClass("active");
          $(`.nav-line ul a:nth-child(${index}) li`).addClass("active");
          prevIndex = index;
        }
      }
    });
  });
}

function customScroller2() {
  let index = 1,
    prevIndex = -1;
  const scrollHeight =
    $(".body_ad1").prop("scrollHeight") -
    $(".scrollify-section:last").outerHeight(true) -
    $("footer").outerHeight(true);
  const sections = document.querySelectorAll(".scrollify-section");
  $(window).scroll(() => {
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      console.log($(window).scrollTop(), section.dataset.index);

      if ($(window).scrollTop() <= scrollHeight) {
        let sum = (100 / (sections.length - 1)) * (index - 1);

        $(".pointer").css({
          top: `${sum}%`,
          transition: "0.5s",
        });
      }
      if (
        sectionTop < viewportHeight * 0.5 &&
        sectionTop > -(viewportHeight * 0.5)
      ) {
        index = section.dataset.index;
        if (index != prevIndex) {
          $(`.nav-line ul li`).removeClass("active");
          $(`.nav-line ul a:nth-child(${index}) li`).addClass("active");
          prevIndex = index;
        }
      }
    });
  });
}

function aboutScroll() {
  const container = document.getElementsByClassName("body_ad1")[0];
  const scrollDiv = document.querySelector("#sec3");
  const path = document.querySelector("#path");
  const circle = document.querySelector("#circle");
  const pathLength = path.getTotalLength();
  window.addEventListener("scroll", () => {
    const containerRect = container.getBoundingClientRect();
    console.log(containerRect);
    const scrollDivRect = scrollDiv.getBoundingClientRect();
    const scrollTop = scrollDiv.scrollTop - scrollDivRect.top;
    console.log(scrollTop);
    if (scrollTop > 0) {
      const scrollPercentage =
        scrollTop / document.getElementById("sec3").offsetHeight + 0.5;
      const drawLength = pathLength * scrollPercentage;
      console.log(scrollPercentage);
      const { x, y } = path.getPointAtLength(drawLength);
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      if (scrollPercentage >= 0.5171919438511274) {
        document.getElementsByClassName("div1")[0].style.opacity = 1;
      } else {
        document.getElementsByClassName("div1")[0].style.opacity = 0;
      }

      if (scrollPercentage >= 0.5770971578444349) {
        document.getElementsByClassName("div1")[1].style.opacity = 1;
      } else {
        document.getElementsByClassName("div1")[1].style.opacity = 0;
      }

      if (scrollPercentage >= 0.6059123251675429) {
        document.getElementsByClassName("div1")[2].style.opacity = 1;
      } else {
        document.getElementsByClassName("div1")[2].style.opacity = 0;
      }

      if (scrollPercentage >= 0.6855331782481117) {
        document.getElementsByClassName("div1")[3].style.opacity = 1;
      } else {
        document.getElementsByClassName("div1")[3].style.opacity = 0;
      }

      if (scrollPercentage >= 0.7037322274881517) {
        document.getElementsByClassName("div1")[4].style.opacity = 1;
      } else {
        document.getElementsByClassName("div1")[4].style.opacity = 0;
      }
      if (scrollPercentage >= 0.8288507109004739) {
        document.getElementsByClassName("div1")[5].style.opacity = 1;
      } else {
        document.getElementsByClassName("div1")[5].style.opacity = 0;
      }
    }
  });
}

function scrollMain() {
  // Get the container element
  var container = document.querySelectorAll("main")[0];

  // Get all the sections inside the container
  var sections = document.querySelectorAll("section");

  // Set up a variable to keep track of the current active section
  var currentSection = 0;

  // Function to handle scroll event
  // Calculate the scroll position and the height of the container
  var scrollPos = container.scrollTop;
  var containerHeight = container.clientHeight;

  // Loop through the sections to find the active section
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    // Check if the section is in the visible portion of the container
    if (
      sectionTop <= scrollPos + containerHeight / 2 &&
      sectionTop + sectionHeight > scrollPos + containerHeight / 2
    ) {
      // Update the current active section
      currentSection = i;
      break;
    }
  }
}

// Function to update content dimensions
function updateElementHeight() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  document.querySelector("main").style.height = windowHeight + "px";
  document.querySelector("main").style.height = windowWidth + "px";
}

// Function to update slide index
function updateSliderIndex($slider) {
  var currentIndex = $slider.find(".carousel-item.active").index() + 1;
  $slider.find(".slider-index").text(currentIndex);
}

let lastHoveredInfoId = 1;

function showInfo(infoId) {
  console.log(infoId);
  console.log(lastHoveredInfoId);
  if (lastHoveredInfoId && lastHoveredInfoId !== infoId) {
    $(".preview-card")
      .eq(lastHoveredInfoId - 1)
      .removeClass("active");
    $(`#info-${lastHoveredInfoId}`).collapse("hide");
  }
  lastHoveredInfoId = infoId;
  $(".preview-card")
    .eq(infoId - 1)
    .addClass("active");
  $(`#info-${infoId}`).collapse("show");
}

function hideInfo(infoId) {
  if (lastHoveredInfoId === infoId) {
    lastHoveredInfoId = null;
    $(`#info-${infoId}`).collapse("hide");
  }
}
function startCareer() {
  let sliderIndex = 1,
    sliderFactor = 1;

  setInterval(() => {
    if (sliderIndex === 3 && sliderFactor === 1) {
      $(`.catalog .card .face:nth-child(4)`).removeClass("show");
    } else if (sliderIndex === 2 && sliderFactor === -1) {
      $(`.catalog .card .face:nth-child(1)`).removeClass("show");
    } else {
      $(`.catalog .card .face:nth-child(${sliderIndex})`).removeClass("show");
    }
    if (
      (sliderIndex === 3 && sliderFactor === 1) ||
      (sliderIndex === 2 && sliderFactor === -1)
    ) {
      sliderFactor *= -1;
    } else {
      sliderIndex += 1 * sliderFactor;
    }
    $(
      `.catalog .card .face:nth-child(${sliderIndex + 1 * sliderFactor})`
    ).addClass("show");
  }, 3500);
}
function startNewsSlider() {
  const card = $(".cards-list .card");
  let index = 0,
    factor = 1,
    length = 6;
  setInterval(() => {
    if (factor == 1 && index + 3 == length - 1) {
      factor = -1;
    } else if (factor == -1 && index == 0) {
      factor = 1;
    }
    index += factor;
    card.removeClass("active");
    card.eq(index).addClass("active");
    card.eq(index + 1).addClass("active");
    card.eq(index + 2).addClass("active");
  }, 1000);
}

function start(card) {
  if (card) {
    const slides = card.find(".card-body");
    console.log(slides);
    let idx = 0,
      mf = 1;
    const n = 2;

    function moveCards() {
      if (idx + mf * (n - 1) == slides.length - 1) mf = -1;
      else if (idx == 0) mf = 1;
      slides.removeClass("active");
      idx += mf;
      for (let i = 0; i < n; i++) {
        slides.eq(idx + i).addClass("active");
      }
    }

    const interval = setInterval(moveCards, 1000);
  }
}

function startCarrerAnimation() {
  let index = 1,
    prevIndex = 1,
    sliderIndex = 1,
    sliderFactor = 1;
  setInterval(() => {
    if (sliderIndex === 3 && sliderFactor === 1) {
      $(`.career .content .card .face:nth-child(4)`).removeClass("show");
    } else if (sliderIndex === 2 && sliderFactor === -1) {
      $(`.career .content .card .face:nth-child(1)`).removeClass("show");
    } else {
      $(`.career .content .card .face:nth-child(${sliderIndex})`).removeClass(
        "show"
      );
    }
    if (
      (sliderIndex === 3 && sliderFactor === 1) ||
      (sliderIndex === 2 && sliderFactor === -1)
    ) {
      sliderFactor *= -1;
    } else {
      sliderIndex += 1 * sliderFactor;
    }
    $(
      `.career .content .card .face:nth-child(${
        sliderIndex + 1 * sliderFactor
      })`
    ).addClass("show");
  }, 5000);
}

function addHoverListnerOnBusiness() {
  let prevIndex = 1;
  $(".business .catalog .card").hover((event) => {
    if (event.target.dataset.index != null) {
      let _index = parseInt(event.target.dataset.index);
      console.log(_index, prevIndex);
      if (prevIndex != _index) {
        prevIndex = _index;
        const cards = $(`.business .catalog > div`).filter(".card");
        $(".business .catalog > .card").removeClass("active");
        $(".business .catalog > .info").removeClass("show");
        // $('.business .catalog > .info').css('order', _index + 1);
        setTimeout(
          () => $(".business .catalog > .info").addClass("show"),
          1000
        );
        $(".business .catalog > .info .face").removeClass("active");
        $(cards[_index - 1]).addClass("active");
        let i = 1,
          k = 0;
        while (i <= 5) {
          if (i === _index + 1) {
            $(".business .catalog > .info").css("order", i);
          } else {
            $(cards[k++]).css("order", i);
          }
          i++;
        }
        $(`.business .catalog > .info .face:nth-child(${_index})`).addClass(
          "active"
        );
      }
    }
  });
}

function slider(slider, slides) {
  let count = 0;
  const counter = slider.find(".display").eq(0);
  counter.text(count + 1);
  const prev = slider.find(".action").eq(0);
  const next = slider.find(".action").eq(1);
  prev.on("click", () => {
    if (count > 0) {
      slides.eq(count).removeClass("active");
      count -= 1;
      counter.text(count + 1);
      slides.eq(count).addClass("active");
    }
  });
  next.on("click", () => {
    if (count < slides.length - 1) {
      console.log(slides[count]);
      slides.eq(count).removeClass("active");
      count += 1;
      counter.text(count + 1);
      slides.eq(count).addClass("active");
    }
  });
}

$(document).ready(function () {
  if ($(window).width() > 500) {
    if (
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ] == "about_us.html"
    ) {
      $.scrollify({
        section: ".scrollify-section", // Selector for the sections
        easing: "easeOutExpo", // Easing animation
        scrollSpeed: 1000, // Scroll speed in milliseconds
        scrollbars: false, // Enable or disable scrollbars
        setHeights: false, // Set section heights based on content
        updateHash: false, // Update the URL hash on scroll
        before: function () {}, // Callback function before scrolling to a section
        after: function () {}, // Callback function after scrolling to a section
      });
      // Disable Scrollify in the third section
      var thirdSectionIndex = 2; // Index of the third section (0-based)
      var scrollEnabled = true;

      $(window).on("scroll", function () {
        var scrollPosition = $(this).scrollTop();
        var thirdSectionTop = $(".scrollify-section")
          .eq(thirdSectionIndex)
          .offset().top;

        if (scrollPosition >= thirdSectionTop && scrollEnabled) {
          scrollEnabled = false;
          $.scrollify.disable();
        } else if (scrollPosition < thirdSectionTop && !scrollEnabled) {
          scrollEnabled = true;
          $.scrollify.enable();
        }
      });
      customScroller2();
    }
    $("main").snapScroll();
    customScroller();
  }
  startCarrerAnimation();
  addHoverListnerOnBusiness();

  slider($(".slider#one"), $(".slides-container").children(".slide"));
  slider($(".slider#two"), null);

  startCareer();

  //about us scroll center

  let divClass = document.getElementsByClassName("div1");
  let lineClass = document.getElementsByClassName("line1");
  let arr = [18, 32, 51, 58, 32, 72];
  let arrWidth = [
    0,
    0,
    divClass[2].clientWidth / 2,
    divClass[3].clientWidth / 2,
    divClass[3].clientWidth / 4,
    divClass[5].clientWidth / 1.2,
  ];

  for (let i = 0; i < divClass.length; i++) {
    divClass[i].style.left =
      lineClass[i].getBoundingClientRect().x - 306 + arrWidth[i] + "px";
    divClass[i].style.top = arr[i] + "%";
    divClass[i].style.opacity = 0;
  }
  aboutScroll();

  //end

  //   start($("#carrer .card").eq(0));
  //   start($("#carrer .card").eq(1));

  // Call the function initially and whenever the window is resized
  // updateElementHeight();
  // window.addEventListener("resize", updateElementHeight);

  // Initialize slide index display on page load
  updateSliderIndex($("#slider-1"));
  updateSliderIndex($("#slider-2"));
  startNewsSlider();
  // Update slide index display on slide change
  $(".carousel").on("slid.bs.carousel", function (event) {
    console.log(event);
    var $slider = $(event.target);
    updateSliderIndex($slider);
  });

  $("section#business .card").on("click", function (event) {
    if ($(event.target).hasClass("readmore")) {
      $("section#business .card").not(this).addClass("collapse");
      $(this).addClass("expanded");
    }
  });

  $("section#business .card .close").on("click", function (event) {
    event.stopPropagation();
    $("section#business .card").removeClass("collapse");
    $("section#business .card").removeClass("expanded");
  });
});

function showVideoPopup() {
  console.log($("#video-popup"));
  $("#video-popup").addClass("active_you");
}

function closeVideoPopup() {
  $("#video-popup").removeClass("active_you");
}

$(".search_icon").click(function () {
  $(".search_icon").toggleClass("active");
  $("input[type=text]").toggleClass("active");
});
