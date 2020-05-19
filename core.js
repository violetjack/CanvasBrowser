const BtnPrev = document.getElementById('btn-prev')
const BtnNext = document.getElementById('btn-next')
const BtnRefresh = document.getElementById('btn-refresh')
const BtnSearch = document.getElementById('btn-search')

const UrlInput = document.getElementById('url-input')
const BrowserCanvas = document.getElementById('browser-canvas')

BtnPrev.onclick = () => {}
BtnNext.onclick = () => {}
BtnRefresh.onclick = () => {}
BtnSearch.onclick = () => {
  console.log(UrlInput.value)
}