//전역변수 선언할 위치
const frm = document.forms[0]
const day = frm.days
const start = frm.start
const end = frm.end
let to = 0

function daySelect(){
    if(day.value == 1){
        console.log('1박')
        to = 1
    }
    if(day.value == 2){
        console.log('2박')
        to = 2
    }
    if(day.value == 3){
        console.log('3박')
        to = 3
    }
    if(day.value == 4){
        console.log('4박')
        to = 4
    }
    endOutput()
}
function endOutput(){
    let month = (new Date(start.value).getMonth()+1).toString().padStart(2,0)
    let date = (new Date(start.value).getDate()+to).toString().padStart(2,0)
    let result = [new Date(start.value).getFullYear(),month, date].join('-')
    console.log(result)
    end.value = result
}