// DARK MODE
function toggleDark(){ 
    document.body.classList.toggle('dark'); 
}

// SCROLL ANIMATION
window.addEventListener('scroll', () => {
    document.querySelectorAll('.card').forEach(card => {
        let top = card.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){ 
            card.classList.add('reveal'); 
        }
    });
});

// AUTO-FETCH GITHUB PROJECTS
fetch("https://api.github.com/users/sowmiyaaravind/repos")
.then(res => res.json())
.then(data => {
    let container = document.getElementById("github-projects");
    data.slice(0,4).forEach(repo => {
        container.innerHTML += `
        <div class="github-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available."}</p>
            <a href="${repo.html_url}" target="_blank">🔗 View on GitHub</a>
        </div>`;
    });
});
