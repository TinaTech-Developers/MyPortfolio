let circularProgress = document.querySelector(".circular-progress");
    progressValue = document.querySelector(".progress-value");


let progressStartValue=0;
    progressEndValue=90;
    speed=100;

let progress = setInterval(()=>{
    progressStartValue++;

    progressValue.textContent=`${progressStartValue}%`;
    circularProgress.style.background=`conic-gradient(#152238 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
},speed);


let circularProgress1 = document.querySelector(".circular-progress1");
    progressValue1 = document.querySelector(".progress-value1");


let progressStartValue1=0;
    progressEndValue1=98;
    speed=100;

let progress1 = setInterval(()=>{
    progressStartValue1++;

    progressValue1.textContent=`${progressStartValue1}%`;
    circularProgress1.style.background=`conic-gradient(#152238 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`;

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }
},speed);

let circularProgress2 = document.querySelector(".circular-progress2");
    progressValue2 = document.querySelector(".progress-value2");


let progressStartValue2=0;
    progressEndValue2=80;
    speed=100;

let progress2 = setInterval(()=>{
    progressStartValue2++;

    progressValue2.textContent=`${progressStartValue2}%`;
    circularProgress2.style.background=`conic-gradient(#152238 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`;

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }
},speed);

let circularProgress3 = document.querySelector(".circular-progress3");
    progressValue3 = document.querySelector(".progress-value3");


let progressStartValue3=0;
    progressEndValue3=95;
    speed=100;

let progress3 = setInterval(()=>{
    progressStartValue3++;

    progressValue3.textContent=`${progressStartValue3}%`;
    circularProgress3.style.background=`conic-gradient(#152238 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`;

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }
},speed);


// progress bars
const skillsSection = document.getElementById('skills-section');

const progressBars =document.querySelectorAll('.progres-bar');

function showProgress(){
    progressBars.forEach(progressBar => {
        const value= progressBar.dataset.progress;
        progressBar.style.opacity=1;
        progressBar.style.width=`${value}%`;
        
    });
}

function hideProgress(){
    progressBars.forEach(p=>{
        p.style.opacity=0;
        p.style.width=0;
    });
}

window.addEventListener('scroll',()=>{
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos<screenPos){
        showProgress();
    }
    else{
        hideProgress();
    }

})