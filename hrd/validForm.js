// 현재 날짜 new Date()
const today = new Date()
console.log(today)  //Thu Jul 28 2022 14:39:28 GMT+0900 (대한민국 표준시)
                //20220728
console.log("년도 : " + today.getFullYear())
console.log("월 : " + (today.getMonth()+1)) //월 0~11
console.log("일 : " + today.getDate())
const month = today.getMonth()+1
let result = [today.getFullYear(),month.toString().padStart(2,0),today.getDate()].join('')

 
function valid_check(){
    const frm = document.forms[0]
    const id = frm.cus_id
    const name = frm.name
    const phone = frm.phone
    const addr = frm.addr
    const date = frm.date
    const grade = frm.grade
    const city = frm.city
    let isValid = true
    let regPhone = /^010-([0-9]{4})-([0-9]{4})$/;
    if(name.value == ''){
        alert('이름은 필수입력사항입니다.')
        name.focus()
        isValid = false
    }
    if(regPhone.test(phone.value)==false ){
        alert('전화번호 형식이 잘못되었습니다.')
        phone.focus()
        isValid = false
    }
    if(addr.value == ''){
        alert('주소는 필수입력사항입니다.')
        addr.focus()
        isValid = false
    }
    if(date.value ==''){
        alert('가입일자는 필수 입력 사항입니다.')
        date.focus()
        isValid=false
    }
    if(date.value != result){
        alert('가입일자는 오늘 날짜입니다.')
        date.focus()
        isValid=false
    }
    if(grade.value != 'A' && grade.value != 'B' && grade.value != 'C'){
        alert('고객등급은 A, B, C 중 하나입니다.')
        grade.focus()
        isValid=false
    }
    if(city.value.length != 2){
        alert('도시코드는 두자리 입니다.')
        city.focus()
        isValid = false
    }


    if(isValid){

    } else{
        alert('유효성 통과 실패!')
    }
}