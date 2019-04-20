window.onload = function () {
  var oHtml = document.documentElement
  getSize()
  function getSize () {
    var screenWidth = oHtml.clientWidth
    if (screenWidth >= 750) {
      oHtml.style.fontSize = '100px'
    } else if (screenWidth <= 320) {
      oHtml.style.fontSize = '45px'
    } else {
      oHtml.style.fontSize = screenWidth / (750 / 100) + 'px'
    }
  }
  window.onresize = function () {
    getSize()
  }
}
