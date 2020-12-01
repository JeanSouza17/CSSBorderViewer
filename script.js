$(document).ready(function () {
  var slider1 = document.getElementById("slider1");
  var slider2 = document.getElementById("slider2");
  var slider3 = document.getElementById("slider3");
  var slider4 = document.getElementById("slider4");
  var box = document.getElementById("box");

  noUiSlider.create(slider1, {
    start: [0],
    step: 1,
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(slider2, {
    start: [0],
    step: 1,
    direction: "rtl",
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(slider3, {
    start: [0],
    step: 1,
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(slider4, {
    start: [0],
    step: 1,
    direction: "rtl",
    range: {
      min: 0,
      max: 100
    }
  });

  slider1.noUiSlider.on("update", function () {
    box.style.borderTopLeftRadius = slider1.noUiSlider.get() + "%";
  });

  slider2.noUiSlider.on("update", function () {
    box.style.borderTopRightRadius = slider2.noUiSlider.get() + "%";
  });

  slider3.noUiSlider.on("update", function () {
    box.style.borderBottomLeftRadius = slider3.noUiSlider.get() + "%";
  });

  slider4.noUiSlider.on("update", function () {
    box.style.borderBottomRightRadius = slider4.noUiSlider.get() + "%";
  });
});
