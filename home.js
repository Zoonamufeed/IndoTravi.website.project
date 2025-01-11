// view more button
const viewMoreButton = document.querySelector('.view');
const hiddenImages = document.querySelectorAll('.destination-images.hidden');

viewMoreButton.addEventListener('click', () => {
    hiddenImages.forEach(image => image.classList.remove('hidden'));
    viewMoreButton.style.display = 'none';
});

//Feedback click buttons left and right
document.addEventListener("DOMContentLoaded", () => {
    const firstFeedback = document.querySelector(".feedback-container.first");
    const secondFeedback = document.querySelector(".feedback-container.second");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

   
    rightBtn.addEventListener("click", () => {
        firstFeedback.style.display = "none";  
        secondFeedback.style.display = "flex"; 
    });

    
    leftBtn.addEventListener("click", () => {
        firstFeedback.style.display = "flex";  
        secondFeedback.style.display = "none"; 
    });
});

// view1 more button
const viewMore = document.querySelector('.view1');
const hiddenblogs = document.querySelectorAll('.blog-card.hidden');
const blogsContainer = document.querySelector('.blogs-container');

viewMore.addEventListener('click', () => {
    hiddenblogs.forEach(blogs => blogs.classList.remove('hidden'));
    viewMore.style.display = 'none';
});

// Form Javascript
const form = document.querySelector('.on-header');

// event listener to submit form
form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const date = document.querySelector('input[name="date"]').value;
    const budget = document.querySelector('input[name="budget"]').value;
    const guest = document.querySelector('input[name="guest"]').value;
    if (!date || !budget || !guest) {
        alert('Please fill out all fields in the form.');
        return;
    }
    const resultMessage = `Search Successfull`;
    alert(resultMessage);


    console.log('Form Data:', { date, budget, guest });
});
