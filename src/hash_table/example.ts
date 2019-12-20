import { HashTblWithSeparateChain } from './HashTbl'

console.log('========== 散列表-分离链接发法 测试 ==========')
console.log('init table with size: 10.')
let mySeparateChain = new HashTblWithSeparateChain(10)
console.log(`insert data: ${[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]}`)
let data1 = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
data1.forEach(el => mySeparateChain.insert(el))
mySeparateChain.print()
console.log('========== end ==========')
