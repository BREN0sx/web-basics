/*
 * Author       : BREN0sx
 * Date         : 2021-09-13 16:14:51
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04 16:02:13
 * FilePath     : /js-base/src/scene/time.js
 * description  : JS converte o timestamp para apenas, alguns minutos atrás, algumas horas atrás, alguns dias atrás, algumas semanas atrás, alguns meses atrás, etc.
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Ideia: obter a diferença de timestamp
// A diferença horária é dividida pelo múltiplo exigido pelo formato da hora. Se for superior a 1, significa que a diferença horária está neste nível
function getDateDiff(dateTimeStamp) {
  const now = Date.now()
  const diffValue = now - dateTimeStamp
  if (diffValue < 0) {
    console.error('A data final não pode ser menor que a data inicial!')
    return
  }
  // Número múltiplo necessário para conversão de formato de hora
  const minute = 1000 * 60 //
  const hour = minute * 60//
  const day = hour * 24 // alguns dias atrás
  const month = day * 30 // lua
  // Divida pelo múltiplo exigido pelo formato de hora
  const monthC = diffValue / month
  const weekC = diffValue / (7 * day)
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute
  // Se for superior a 1, significa que a diferença de horário está neste nível
  let result = ''
  if (monthC >= 1) {
    result = `publicado em ${parseInt(monthC, 10)} mês atrás`
  } else if (weekC >= 1) {
    result = `publicado em ${parseInt(weekC, 10)} uma semana atrás`
  } else if (dayC >= 1) {
    result = `publicado em ${parseInt(dayC, 10)} dias atrás`
  } else if (hourC >= 1) {
    result = `publicado em ${parseInt(hourC, 10)} horas atrás`
  } else if (minC >= 1) {
    result = `publicado em ${parseInt(minC, 10)} minutos atrás`
  } else result = 'acabou de publicar'
  return result
}

// código de teste
console.log(getDateDiff(Date.now() - 10)) // apenas
console.log(getDateDiff(Date.now() - 1000 * 60 * 5)) // cinco minutos atrás
console.log(getDateDiff(Date.now() - 1000 * 60 * 60 * 2)) // 2 horas atrás
console.log(getDateDiff(Date.now() - 1000 * 60 * 60 * 24 * 3)) // 3 dias atrás
console.log(getDateDiff(Date.now() - 1000 * 60 * 60 * 24 * 30 * 4)) // quatro meses atrás
