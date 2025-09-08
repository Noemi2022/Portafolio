document.addEventListener("DOMContentLoaded", () => {
    getProfile()
})

function getProfile() {
    fetch("https://api.github.com/users/Noemi2022")
    .then(res => res.json())
    .then(json => {
        console.log(json.avatar_url)
    })
}



const toggleButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('listas-opcionales');

  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show');
  });