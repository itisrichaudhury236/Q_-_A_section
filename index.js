const questions=document.querySelectorAll(".question");
console.log(questions);
questions.forEach((question)=>{
    const btn=question.querySelector(".question-btn");
    console.log(btn);
    btn.addEventListener("click",()=>{
        question.classList.toggle("show-text")
    })
}
)