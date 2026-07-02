const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {
    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        // 关闭其他已开启的内容
        document.querySelectorAll(".accordion-content").forEach(item => {
            if (item !== content) {
                item.style.maxHeight = null;
            }
        });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
});
