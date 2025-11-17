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

