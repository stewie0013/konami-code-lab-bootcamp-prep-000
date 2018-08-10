const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var indx = 0
  
  document.body.addEventListener('keydown', function(e)
  {
    indx = (codes[indx] === e.key) ? ++indx : 0
    
    if (indx === codes.length)
    {
      window.alert("hurray!")
      indx = 0
    }
  })
}
