let questions = document.querySelectorAll('.question-answer-group');

for(var i=0; i<questions.length; i++){
  questions[i].addEventListener('click', function(){
    this.classList.toggle("hidden");
    let icon = this.children[0].children;
    if (icon[0].classList[1] === 'bxs-chevron-down'){
      icon[0].className = 'bx bxs-chevron-right';
    } else if(icon[0].classList[1] === 'bxs-chevron-right'){
      icon[0].className = 'bx bxs-chevron-down';
    }
  });
}
