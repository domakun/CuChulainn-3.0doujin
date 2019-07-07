import QRCode from 'qrcode'
import i18n from './locale/index'
import Vue from 'vue'
const vueInstance = new Vue({i18n})


export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

const getDate = (timeStamp, startType) => {
  const d = new Date(timeStamp * 1000)
  const year = d.getFullYear()
  const month = getHandledValue(d.getMonth() + 1)
  const date = getHandledValue(d.getDate())
  const hours = getHandledValue(d.getHours())
  const minutes = getHandledValue(d.getMinutes())
  const second = getHandledValue(d.getSeconds())
  let resStr = ''
  if (startType === 'year') {
    resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second
  } else {
    resStr = month + '-' + date + ' ' + hours + ':' + minutes
  }
  return resStr
}

export const getRelativeTime = timeStamp => {
  const IS_MILLISECOND = isMillisecond(timeStamp)
  if (IS_MILLISECOND) Math.floor(timeStamp /= 1000)
  timeStamp = Number(timeStamp)
  const currentTime = Math.floor(Date.parse(new Date()) / 1000)
  const IS_EARLY = isEarly(timeStamp, currentTime)
  let diff = currentTime - timeStamp
  if (!IS_EARLY) diff = -diff
  let resStr = ''
  const dirStr = IS_EARLY ? vueInstance.$t('time_ago') : vueInstance.$t('time_after')
  if (diff <= 59) {
    resStr = diff + vueInstance.$t('time_second') + dirStr
  } else if (diff > 59 && diff <= 3599) {
    resStr = Math.floor(diff / 60) + vueInstance.$t('time_minute') + dirStr
  } else if (diff > 3599 && diff <= 86399) {
    resStr = Math.floor(diff / 3600) + vueInstance.$t('time_hour') + dirStr
  } else if (diff > 86399 && diff <= 2623859) {
    resStr = Math.floor(diff / 86400) + vueInstance.$t('time_day') + dirStr
  } else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) {
    resStr = getDate(timeStamp)
  } else {
    resStr = getDate(timeStamp, 'year')
  }
  return resStr
}

export const createQRCode = (txt) => {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(
      txt,
      {errorCorrectionLevel: 'H'},
      (err, url) => {
        if (err) {
          resolve({
            created: false,
            url: ''
          })
        } else {
          resolve({
            created: true,
            url: url
          })
        }
      })
  })
}

export const copyTxt = (txt) => {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input')
    input.setAttribute('readonly', 'readonly')
    input.setAttribute('value', txt)
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    resolve()
  })
}

