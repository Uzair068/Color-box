// console.log('hello')
// let reddiv=document.getElementById('red')
// let yellowdiv=document.getElementById('yellow')
// let greendiv=document.getElementById('green')

// reddiv.onclick=()=>console.log('red box')
// yellowdiv.onclick=()=>console.log('yellow box')
// greendiv.onclick=()=>console.log('green box')

const timeclicked={"red":0,"yellow":0,"green":0}
const squares=document.querySelectorAll('.colorsqr')
console.log(squares)

squares.forEach(square=>{
  square.onclick=()=>{
    timeclicked[square.value]+=1
    square.innerText=timeclicked[square.value]
  }
    // console.log(square.value)
})

const clearscore=()=>{
  timeclicked.red=0
  timeclicked.yellow=0
  timeclicked.green=0
  squares.forEach(square=>{
    square.innerText=''
  })
}
const cleargamedic=document.getElementById('cleargame')
cleargamedic.onclick=()=>clearscore()