let orbitAngle = 0
let orbitSpeed=2
let selfAngle = 0
function orbitRotateFn(){
    $('.planet_shaft').css('transform', `rotate(${orbitAngle}deg)`)
    orbitAngle+=orbitSpeed
}
function selfRotateFn(){
    $('.planet').css('transform', `rotate(${selfAngle}deg)`)
    selfAngle+=1
}



window.onload=function(){
let orbitRotate = this.setInterval(orbitRotateFn,24)
let selfRotate = this.setInterval(selfRotateFn,24)







}