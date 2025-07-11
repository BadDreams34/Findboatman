const btn = document.querySelector('#Ok')

let user = []
btn.addEventListener('click', async ()=>{
    const name = document.querySelector('#name').value
    const score = localStorage.getItem('score')
    const body = {name, score}
    const res = await fetch('findboatmanbackend-production.up.railway.app/add', {method: "POST", body: JSON.stringify(body), headers: {"Content-Type": "application/json"}})

    if (res.ok) {
        let data = await res.json()
        user = data
        console.log(user)
        localStorage.removeItem('score')
        render()
    } else {
        console.log("wrong");
    }

})
function render() {
    user.sort((a,b)=>{
    return ( - b.Score + a.Score)
})
 
const ol = document.querySelector('.tab')
let i = 1
user.forEach((user)=>{
  const tr = document.createElement('tr')
  const td1 = document.createElement('td')
  const td2 = document.createElement('td')
  const td0 = document.createElement('td')
  td0.textContent = `${i}`
  i++
  td1.textContent = `${user.username}`
  td2.textContent = `${user.Score}`
  tr.appendChild(td0)
  tr.appendChild(td1)
  tr.appendChild(td2)
  ol.appendChild(tr)
})
}
