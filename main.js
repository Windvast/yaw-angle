let orbitAngle = 0
let orbitSpeed=2
let selfAngle = 0
function orbitRotateFn(){
    $('.planet_shaft').css('transform', `rotate(${orbitAngle}deg)`)
    orbitAngle+=orbitSpeed
}
function selfRotateFn(){
    selfAngle = 0.5*($('#rangeBar')[0].value)
    $('.planet').css('transform', `rotate(${selfAngle}deg)`)
    // selfAngle+=1
}



window.onload=function(){

    $('#title').html('animation')
    let orbitRotate = this.setInterval(orbitRotateFn,24)
    let selfRotate = this.setInterval(selfRotateFn,24)







}