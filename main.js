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
    let orbitAngle = 0
  
    function startFn(){

        function orbitRotateFn(){
            let orbitSpeed=$('#speedBar').val()
            orbitAngle+=0.02*orbitSpeed
           
            
            $('.planet_shaft').css('transform', `rotate(${orbitAngle}deg)`)
        }
        function selfRotateFn(){
            let frictionLeft = (1*$('#rangeBar_left').val()+10) / 110
            let frictionRight = (1*$('#rangeBar_right').val()+10) / 110
            let linearSpeed = $('#speedBar').val()*1
            let selfAngleLeft = yawAngleCalc(linearSpeed, frictionLeft)
            let selfAngleRight = yawAngleCalc(linearSpeed, frictionRight)
            $('#planet_left').css('transform', `rotate(${selfAngleLeft}deg)`)
            $('#planet_right').css('transform', `rotate(${selfAngleRight}deg)`)
            $('.title_left').html('偏航角<br/>'+selfAngleLeft.toFixed(2)+'° '+'<br/>')
            $('.title_right').html('偏航角<br/>'+selfAngleRight.toFixed(2)+'°'+'<br/>')
            $('.desc_left').html('附着系数<br/>'+frictionLeft.toFixed(2))
            $('.desc_right').html('附着系数<br/>'+frictionRight.toFixed(2))
            $('.desc_middle').html('Speed<br/>'+linearSpeed+'kph')
        }
        orbitRotateFn()
        selfRotateFn()
    }

    function yawAngleCalc(speed, frCof, radius=100){
        let roCof = -1*frCof/40+13/400
        let yawAngle = Math.atan(speed*speed/3.6/3.6/10/radius/(frCof+roCof))*180 / Math.PI
        return yawAngle
    }

    let startBtn = $('#startBtn')
    let started = 0
    let setStart
    startBtn.click(function(){
        
        if(!started){
            setStart = setInterval(startFn,24)
            started = 1
        }else{
            clearInterval(setStart)
            console.log('clear')
            started = 0
        }
    })
    



    
 })
