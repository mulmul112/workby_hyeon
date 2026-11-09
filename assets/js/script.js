/* ============================= */
/* 팝업창 작동 코드 */
/* ============================= */

const popup = document.querySelector('#itemPopup');
const popupOpen = document.querySelector('.popup-open');
const popupClose = document.querySelector('#popupClose');

/* 두 번째 항목 클릭 → 팝업 열기 */
popupOpen.addEventListener('click', function() {
  popup.hidden = false;
});

/* 닫기 버튼 클릭 → 팝업 닫기 */
popupClose.addEventListener('click', function() {
  popup.hidden = true;
});

/* 팝업 바깥 영역 클릭 → 팝업 닫기 */
popup.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.hidden = true;
  }
});

/* ESC 키 → 팝업 닫기 */
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    popup.hidden = true;
  }
});