const items = document.querySelectorAll('div');

function changeColor() {
    document.body.className = this.className;
  }
  
items.forEach(function(item){
    item.addEventListener("click", changeColor);
})
