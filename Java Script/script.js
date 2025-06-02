document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;

        // 检查当前状态，切换显示或隐藏
        if (details.style.maxHeight === '0px' || details.style.maxHeight === '') {
            details.style.maxHeight = details.scrollHeight + 'px';  // 动态计算高度
            details.style.opacity = '1';  // 显示内容
            button.textContent = 'Pack up details Button';  // 修改按钮文字
        } else {
            details.style.maxHeight = '0';  // 隐藏内容
            details.style.opacity = '0';  // 隐藏内容
            button.textContent = 'Detail Disclosure Button';  // 修改按钮文字
        }
    });
});
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('body *').forEach((el, i) => {
    el.classList.add('fade-in-up-global');
    el.style.animationDelay = (i * 0.05) + 's';
  });
});
