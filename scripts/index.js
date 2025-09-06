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