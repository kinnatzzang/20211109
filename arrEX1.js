
const arr = ['타노스', '아이언맨', '블랙 위도우']

let pos = arr.indexOf("블랙 위도우")

//console.log(arr.indexOf("캡틴 아메리카"))

const changedLength = arr.push("블랙팬서")
console.log(changedLength)




arr.splice(1,1)

console.log(arr)

for (let i = 0; i < arr.length ; i++) {

    if(arr[i] === '블랙 위도우'){
        continue
    }
    console.log(i)
    console.log(arr[i])
}

console.log("-------------------------")

