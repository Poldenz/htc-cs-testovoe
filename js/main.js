// tabs movies/channels
document.querySelectorAll('.tabs__item').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');


        document.querySelectorAll('.tabs__item').forEach(
            (child) => child.classList.remove('tabs__item--active')
        );
        document.querySelectorAll('.tab-content__item').forEach(
            (child) => child.classList.remove('tab-content__item--active')
        );

        item.classList.add('tabs__item--active');
        document.getElementById(id).classList.add('tab-content__item--active');
    })
);
document.querySelector('.tabs__item').click();

// login popup
document.getElementById("popup-btn").addEventListener("click", function() {
    document.querySelector(".popup-login").style.display = "block";
})
document.querySelector(".close-popup").addEventListener("click", function() {
    document.querySelector(".popup-login").style.display = "none";
})
