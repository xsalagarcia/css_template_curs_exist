//with bmenu.css

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.bmenu-icon')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.bmenu-menu ul')
            menu_items.classList.toggle('show')
            btn_menu.classList.toggle('show')
        })
        
    }
})