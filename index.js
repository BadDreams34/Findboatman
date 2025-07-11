const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let gameover = 0;
const img = new Image()
img.src = "image.png"
img.addEventListener("load", ()=> {
   
})

let starttime = Date.now()

const targets = [{name: "boat", found: false, X: [1, 40], Y: [135, 270]}, {name: "man",found: false, X: [130, 190], Y: [400, 500]}, {name: "Oldman",found: false, X:[215, 250], Y: [350, 440]}]


const one = new Image()
one.src = "1.png"
const two = new Image()
two.src = "2.png"
const three = new Image()
three.src = "3.png"
canvas.addEventListener('mousemove', (e)=> {
  
    console.log('x', e.offsetX)
    console.log('y', e.offsetY)
ctx.fillStyle = "red"


 ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
 ctx.drawImage(one, 100, 0, 40,100)
  ctx.drawImage(two, 150, 0, 40,100)
    ctx.drawImage(three, 200, 0, 40,100)
 ctx.fillRect(e.offsetX, e.offsetY, 4, 8)
})



canvas.addEventListener('click', (e)=> {


  
        for (let target of targets) {
                if (e.offsetX > target.X[0] && e.offsetX < target.X[1] && e.offsetY > target.Y[0] && e.offsetY < target.Y[1] ) {
          
      
            ctx.font = "30px serif"
            ctx.fillText(`${target.name} found !!`, 60, 60 )
           
               
            target.found = true
            console.log(true)
             if (won()) {
                let endTime = Date.now()
                let totaltime = ((endTime - starttime)/1000).toFixed(2)
                
                localStorage.setItem('score', totaltime)
                alert(`congratulations u found all the three in ${totaltime}seconds`)
                window.location.href = './requestsend.html'
        
    }
            return true
            
        } else {
            console.log(false)  
        }
        }
   ctx.font = "30px serif"
            ctx.fillText(`Target Not found !!`, 60, 60 )
            return false

   
})

function won() {
  
     for (let target of targets) { 
      
        if (target.found == true) {
            continue
        } else {return false;}
}

       return true
    }
