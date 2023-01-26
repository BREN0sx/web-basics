function createRepeat(callBack, repeat, interval) {

}

const fn = createRepeat(console.log, 3, 4)

fn('helloWorld') // Saída helloWorld a cada 4 segundos, saída 3 vezes







// Olhe atentamente para a resposta
// Olhe atentamente para a resposta
// Olhe atentamente para a resposta
























// function createRepeat(callBack, repeat, interval) {
//     let repeatNum = 0
//     let intervalId = null
//     return (...param) => {
//       intervalId = setInterval(() => {
//         console.log(new Date())
//         callBack(...param)
//         repeatNum += 1
//         if (repeatNum >= repeat) {
//           clearInterval(intervalId)
//           intervalId = null
//         }
//       }, interval * 1000)
//     }
// }
