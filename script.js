/*Tlx - Top left x
  Trx - Top right x
  Blx - Bottom left x
  Brx - Bottom right x
  ... y
*/

$(document).ready(function () {
  var sliderTlx = $("#sliderTlx")[0];
  var sliderTrx = $("#sliderTrx")[0];
  var sliderBlx = $("#sliderBlx")[0];
  var sliderBrx = $("#sliderBrx")[0];
  var sliderTly = $("#sliderTly")[0];
  var sliderTry = $("#sliderTry")[0];
  var sliderBly = $("#sliderBly")[0];
  var sliderBry = $("#sliderBry")[0];
  var box = $("#box");
  var shortcode = $("#shortcode");
  var x = [0];
  var y = [0];
  var copyButton = $("#copy");

  //Criando os sldier com o noUiSlider
  noUiSlider.create(sliderTlx, {
    start: [10],
    step: 1,
    tooltips: {
      to: function (value) {
        return `top-left-x: ${Number(value)}%`;
      }
    },
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(sliderTrx, {
    start: [10],
    step: 1,
    direction: "rtl",
    tooltips: {
      to: function (value) {
        return `top-right-x: ${Number(value)}%`;
      }
    },
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(sliderBlx, {
    start: [10],
    step: 1,
    tooltips: {
      to: function (value) {
        return `bottom-left-x: ${Number(value)}%`;
      }
    },
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(sliderBrx, {
    start: [10],
    step: 1,
    direction: "rtl",
    tooltips: {
      to: function (value) {
        return `bottom-right-x: ${Number(value)}%`;
      }
    },
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(sliderTly, {
    start: [10],
    step: 1,
    orientation: "vertical",
    tooltips: {
      to: function (value) {
        return `top-left-y: ${Number(value)}%`;
      }
    },
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(sliderTry, {
    start: [10],
    step: 1,
    orientation: "vertical",
    tooltips: {
      to: function (value) {
        return `top-right-y: ${Number(value)}%`;
      }
    },
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(sliderBly, {
    start: [10],
    step: 1,
    orientation: "vertical",
    direction: "rtl",
    tooltips: {
      to: function (value) {
        return `bottom-left-y: ${Number(value)}%`;
      }
    },
    range: {
      min: 0,
      max: 100
    }
  });

  noUiSlider.create(sliderBry, {
    start: [10],
    step: 1,
    orientation: "vertical",
    direction: "rtl",
    tooltips: {
      to: function (value) {
        return `bottom-right-y: ${Number(value)}%`;
      }
    },
    range: {
      min: 0,
      max: 100
    }
  });

  //A função seta um arrary com os valores de cada slider, e os posiciona conforme o local
  function borderRadius(where, value) {
    value = Number(value);
    switch (where) {
      case "tlx":
        x[0] = value;
        break;

      case "trx":
        x[1] = value;
        break;

      case "brx":
        x[2] = value;
        break;

      case "blx":
        x[3] = value;
        break;

      case "tly":
        y[0] = value;
        break;

      case "try":
        y[1] = value;
        break;

      case "bry":
        y[2] = value;
        break;

      case "bly":
        y[3] = value;
        break;

      default:
        console.log("Error");
    }

    var newBorder = {
      "border-radius": `${x.join("% ")}% / ${y.join("% ")}%`,
      "-webkit-border-radius": `${x.join("% ")}% / ${y.join("% ")}%`,
      "-moz-border-radius": `${x.join("% ")}% / ${y.join("% ")}%`,
      "-o-border-radius": `${x.join("% ")}% / ${y.join("% ")}%`
    };

    //Atualiza o css
    box.css(newBorder);

    //Mostra em tela o css
    shortcode.html(
      `border-radius: ${x.join("% ")}% / ${y.join(
        "% "
      )}%;</br> -webkit-border-radius: ${x.join("% ")}% / ${y.join(
        "% "
      )}%;</br> -moz-border-radius: ${x.join("% ")}% / ${y.join(
        "% "
      )}%;</br> -o-border-radius: ${x.join("% ")}% / ${y.join("% ")}%;`
    );
  }

  //A cada atualização no slider é chamada a função borderRadius para atualizar os novos valores
  sliderTlx.noUiSlider.on("update", function () {
    borderRadius("tlx", sliderTlx.noUiSlider.get());
  });

  sliderTrx.noUiSlider.on("update", function () {
    borderRadius("trx", sliderTrx.noUiSlider.get());
  });

  sliderBlx.noUiSlider.on("update", function () {
    borderRadius("blx", sliderBlx.noUiSlider.get());
  });

  sliderBrx.noUiSlider.on("update", function () {
    borderRadius("brx", sliderBrx.noUiSlider.get());
  });

  sliderTly.noUiSlider.on("update", function () {
    borderRadius("tly", sliderTly.noUiSlider.get());
  });

  sliderTry.noUiSlider.on("update", function () {
    borderRadius("try", sliderTry.noUiSlider.get());
  });

  sliderBly.noUiSlider.on("update", function () {
    borderRadius("bly", sliderBly.noUiSlider.get());
  });

  sliderBry.noUiSlider.on("update", function () {
    borderRadius("bry", sliderBry.noUiSlider.get());
  });

  copyButton.click(function () {
    var temp = shortcode[0];
    if (document.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(temp);
      range.select();
      document.execCommand("Copy");
      alert("Copiado com sucesso!");
    } else if (window.getSelection) {
      // other browsers

      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(temp);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      alert("Copiado com sucesso!");
    }
  });
});
