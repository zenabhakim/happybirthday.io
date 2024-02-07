document.addEventListener("DOMContentLoaded", function() {
  var candles = document.querySelectorAll(".candles");
  candles.forEach(function(candle) {
      candle.addEventListener("click", function() {
          document.querySelector(".flame").style.opacity = 0;
          document.querySelector(".flame2").style.opacity = 0;
          document.querySelector(".flame3").style.opacity = 0;

          var textElement = document.querySelector(".text");
          textElement.style.top = "-90px";
          textElement.style.opacity = 1;
      });
  });
});
