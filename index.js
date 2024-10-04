const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  const searchParams = new URLSearchParams(window.location.search)
  console.log(searchParams.get('log'))
})
