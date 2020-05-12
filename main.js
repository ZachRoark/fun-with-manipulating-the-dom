// Use JavaScript to obtain a reference to the first 
// section with the class of article_header and change 
// its text with the textContent property to "Welcome to 
// the {insert your name here} blog"
const sectionEl = document.querySelector('.article__header');
    sectionEl.textContent = "Welcome to the Zach blog";

// Use JavaScript to obtain a reference to all 
// article__header elements and change their classList 
// property value to article__header important.
    const allHeader = document.querySelectorAll('.article__header');
for (let i = 0; i < allHeader.length; i++) {
    allHeader[i].classList.add('important');
};

// Obtain a reference the element with a class of dashed 
// and remove it.
const daEl = document.querySelector('.dashed');
    daEl.classList.remove('.dashed');

// Obtain a reference the element with a class of 
// article__footer and add the class of goldenrod it.
const footEl = document.querySelector('.article__footer');
    footEl.classList.add('.goldenrod');




