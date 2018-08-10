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
    console.log(indx)
    
    if (indx === codes.length - 1)
    {
      alert("hurray!")
      indx = 0
    }
  })
}