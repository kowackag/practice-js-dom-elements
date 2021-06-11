console.log('DOM');
const commentsItemNewestList = document.querySelectorAll('.comments__item.comments__item--newest'); // uzyłam querySelectorAll by sprawdzić czy nie ma więcej takich elementów z podwójną klasą
if (commentsItemNewestList) {
    commentsItemNewestList.forEach(function (element) {
        const dataInfoList = element.querySelectorAll('[data-info]');
        console.log(`liczba znaczników z atrybutem [data-info]: ${dataInfoList.length}`)
    })
}