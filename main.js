/*
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
    let orbitRotate = this.setInterval(orbitRotateFn,24)
    let selfRotate = this.setInterval(selfRotateFn,24)
}
 */

 $(document).ready(function(){
    let orbitSpeed=1
    let orbitAngle = 0
    let selfAngle = 0
    // let orbitSpeed= setInterval(getSpeed,24)
    // let orbitRotate = setInterval(orbitRotateFn,24)
    // let selfRotate = setInterval(selfRotateFn,24)
    $('#speedBar').click(function(){
        $('.header').html(this.value)
        orbitSpeed=this.value
        console.log(this.value)
    })
    let setStart = setInterval(START,24)
    function START(){
        function getSpeed(){
            let orbitSpeed=$('#speedBar')[0].value
            $('.header').html(orbitSpeed)
        }
        function orbitRotateFn(){
            $('.planet_shaft').css('transform', `rotate(${orbitAngle}deg)`)
            
            orbitAngle+=0.025*orbitSpeed
            orbitSpeed=$('#speedBar')[0].value
        }
        function selfRotateFn(){
            selfAngleLeft = 0.3*($('#rangeBar_left')[0].value)
            selfAngleRight = 0.3*($('#rangeBar_right')[0].value)
            $('#planet_left').css('transform', `rotate(${selfAngleLeft}deg)`)
            $('#planet_right').css('transform', `rotate(${selfAngleRight}deg)`)
        }
        // let speed=getSpeed()
        orbitRotateFn()
        selfRotateFn()
    }


    
 })
