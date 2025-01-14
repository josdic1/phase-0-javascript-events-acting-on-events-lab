let xaxis;
let yaxis;

let leftLoc = !dodger.style.left ? "0" : parseInt(dodger.style.left, 10)
let rightLoc = !dodger.style.right ? "0" : parseInt(dodger.style.right, 10)
let upLoc = !dodger.style.top ? "0" : parseInt(dodger.style.top, 10)
let downLoc = !dodger.style.bottom ? "0" : parseInt(dodger.style.bottom, 10)

const table = document.createElement('table')

table.innerHTML = `
<thead>
 <tr>
<th>X</th>
<th>Y</th>

 </tr>
</thead>
<tbody>
   <tr>
   <td id='x'>${xaxis}</td>
   <td id='y'>${yaxis}</td>
 </tr>
</tbody>
`

document.body.appendChild(table);

function moveDodgerLeft() {
         const currentVal = `${leftLoc -= 10}px`
      dodger.style.left = currentVal
  document.getElementById('x').innerText = leftLoc
         }

function moveDodgerRight() {
   const currentVal = `${leftLoc += 10}px`
   dodger.style.left = currentVal
   document.getElementById('x').innerText = leftLoc
}
      
document.addEventListener('keydown', function (e) {
   if(e.key === 'ArrowLeft') {
      moveDodgerLeft()
   }
})

document.addEventListener('keydown', function (e) {
   if(e.key === 'ArrowRight') {
      moveDodgerRight()
   }
})








