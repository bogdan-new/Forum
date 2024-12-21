let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});
let themeButton = document.querySelector('.theme-button');
let body = document.body;
let header = document.querySelector('.header');
let main = document.querySelector('.main');

body.classList.add('white-theme');
header.classList.add('white-theme');
main.classList.add('white-theme');

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('white-theme');
    
    header.classList.toggle('dark-theme');
    header.classList.toggle('white-theme');

    main.classList.toggle('dark-theme');
    main.classList.toggle('white-theme');
});

document.querySelectorAll('.like-button').forEach(button => {
    let likeCount = button.querySelector('.likeCount');
    let likes = 0;
    let liked = false;

    button.addEventListener('click', () => {
        if (!liked) {
            likes++;
            button.classList.add('liked');
        } else {
            likes--;
            button.classList.remove('liked');
        }

        liked = !liked;
        likeCount.textContent = likes;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Знаходимо всі кнопки для надсилання коментарів
    const commentButtons = document.querySelectorAll(".comment-button");

    commentButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Отримуємо поле вводу коментаря та секцію для коментарів
            const commentInput = button.previousElementSibling;
            const commentsSection = button.parentElement.nextElementSibling;

            // Перевірка, чи є текст у полі вводу
            if (commentInput.value.trim() !== "") {
                // Створюємо новий елемент для коментаря
                const comment = document.createElement("p");
                comment.textContent = commentInput.value;
                comment.classList.add("comment");

                // Додаємо коментар до секції
                commentsSection.appendChild(comment);

                // Очищаємо поле вводу
                commentInput.value = "";
            } else {
                // Якщо поле пусте, виводимо повідомлення про помилку
                alert("Please write a comment before sending.");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const shareButtons = document.querySelectorAll(".share-button");

    shareButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Знаходимо текст поста для поділу
            const postContent = button.closest(".wraapper_block_reactions").querySelector(".block_news1").textContent;
            const currentURL = window.location.href;

            // Дані для поділу
            const shareData = {
                title: 'Check this out!',
                text: postContent,
                url: currentURL,
            };

            // Використання Web Share API
            if (navigator.share) {
                navigator.share(shareData)
                    .then(() => console.log('Successfully shared!'))
                    .catch((error) => console.error('Error sharing:', error));
            } else {
                alert('Web Share API is not supported in this browser. Try using a mobile browser.');
            }
        });
    });
});
console.log('Web Share API supported:', navigator.share !== undefined);
document.addEventListener("DOMContentLoaded", () => {
    const newsBlocks = document.querySelectorAll(".wraapper_block_reactions");

    newsBlocks.forEach((block) => {
        const viewCountElement = block.querySelector(".viewCount");
        let views = parseInt(localStorage.getItem(block.dataset.id) || 0);

        // Оновлення відображення кількості переглядів
        viewCountElement.textContent = views;

        // Збільшення кількості переглядів на 1 при завантаженні
        views += 1;
        viewCountElement.textContent = views;

        // Збереження кількості переглядів у локальному сховищі
        localStorage.setItem(block.dataset.id, views);
    });
});