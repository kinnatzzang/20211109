const readLine = require('readline-sync')

try {
    console.log("1피트당 샷시의 가격은 얼마인가요?")
    const perFeet = parseFloat(readLine.prompt())

}catch(e){
    console.log("잘못 입력했어요...")
}




console.log("가로길이는 얼마인가요? cm")
const width = parseInt(readLine.prompt())

console.log("세로길이는 얼마인가요? cm")
const height = parseInt(readLine.prompt())

3

const totalLength = (width * 2) + (height * 2)

const totalFeet = Math.ceil(totalLength / 30.48)





const totalPay = totalFeet * perFeet

console.log(totalPay)