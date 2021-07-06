let content = document.getElementById("present1")
let show = document.getElementById("showContent")
show.onclick = function() {
    if (content.style.display === "block") {
      content.style.display = "none"
      show.value = 'Показать еще'
    } else {
      content.style.display = "block"
      show.value = 'Скрыть'
    }
  };