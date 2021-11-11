const arr = [
    {M : "Jan", amt:90},
    {M : "Feb", amt:87},
    {M : "Mar", amt:140},
    {M : "Apr", amt:120},
    {M : "May", amt:130},
    {M : "Jun", amt:150},
    {M : "Jul", amt:180},
    {M : "Aug", amt:240},
    {M : "Sep", amt:200},
    {M : "Oct", amt:180},
    {M : "Nov", amt:140},
    {M : "Dec", amt:190}
]

let max = 0
let period = 0
for (let i = 0; i < arr.length ; i++) {
    if(arr[i].amt>max) {
        max = arr[i].amt
        period = arr[i].M
    }
}
console.log(`MAX: ${max}만원입니다`)
console.log(`MAX: ${period}월 매출이 가장 많습니다`)