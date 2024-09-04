document.addEventListener('DOMContentLoaded', () => {
    const avatars = document.querySelectorAll('.avatar');
    
    avatars.forEach(avatar => {
        const info = avatar.querySelector('.info');
        const name = info.querySelector('.name');
        const rank = info.querySelector('.rank');
        
        document.querySelectorAll('.avatar').forEach(avatar => {
            avatar.addEventListener('click', () => {
                avatar.classList.toggle('clicked');
            });
        
            avatar.addEventListener('mouseleave', () => {
                avatar.classList.remove('clicked');
            });
        });
        

        // Toggle avatar position on hover
        avatar.addEventListener('mouseover', () => {
            avatar.style.transform = 'translateY(-10px)';
        });
        avatar.addEventListener('mouseout', () => {
            avatar.style.transform = 'translateY(0)';
        });
    });
});
