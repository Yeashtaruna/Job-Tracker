let interviewList=[];
let rejectedList=[];

let total=document.getElementById("total");
let interview=document.getElementById("interviewTotal");
let rejected=document.getElementById("rejectedTotal");
let count=document.getElementById("count");

const filteredSection=document.getElementById("filtered-section");
const allCards=document.getElementById("allCard");
const mainContainer=document.querySelector("main");

const allFilterBtn=document.getElementById("all-filter-btn");
const interviewFilterBtn=document.getElementById("interview-filter-btn");
const rejectedFilterBtn=document.getElementById("rejected-filter-btn");

function calculateCount(){
    total.innerText=allCards.querySelectorAll(".card").length;
    interview.innerText=interviewList.length;
    rejected.innerText=rejectedList.length;
}

calculateCount()
count.innerText=allCards.querySelectorAll(".card").length;

function toggleStyle(id){

    allFilterBtn.classList.add("active");
    interviewFilterBtn.classList.add("active");
    rejectedFilterBtn.classList.add("active");

    allFilterBtn.classList.remove("active");
    interviewFilterBtn.classList.remove("active");
    rejectedFilterBtn.classList.remove("active");


    const selected=document.getElementById(id);
   
    selected.classList.remove("active");
    selected.classList.add("active");
   
}

mainContainer.addEventListener("click",function(event){

    if(event.target.classList.contains("interview-btn")){
        const card=event.target.closest(".card");
        const jobTitle=card.querySelector(".jobName").innerText;
        const companyName=card.querySelector(".compayName").innerText;
        const jobDescription=card.querySelector(".jobDescription").innerText;
        const status=card.querySelector(".status");
        const notes=card.querySelector(".notes").innerText;

        const jobObject={
            jobTitle,
            companyName,
            jobDescription,
            status: "Interview",
            notes
        }

        const interviewExists=interviewList.find(job=>job.jobTitle===jobTitle && job.companyName===companyName);
        if(!interviewExists){
            interviewList.push(jobObject);
            status.innerText="Interview";
            status.style.color="#16a34a";
            calculateCount();
        }
    }

    if(event.target.classList.contains("rejected-btn")){
        const card=event.target.closest(".card");
        const jobTitle=card.querySelector(".jobName").innerText;
        const companyName=card.querySelector(".compayName").innerText;
        const jobDescription=card.querySelector(".jobDescription").innerText;
        const status=card.querySelector(".status");
        const notes=card.querySelector(".notes").innerText;

        const jobObject={
            jobTitle,
            companyName,
            jobDescription,
            status: "Rejected",
            notes
        }

        const rejectedExists=rejectedList.find(job=>job.jobTitle===jobTitle && job.companyName===companyName);
        if(!rejectedExists){
            rejectedList.push(jobObject);
            status.innerText="Rejected";
            status.style.color="#dc2626";
            calculateCount();
        }
    }

    if(event.target.classList.contains("delete-btn") || event.target.closest(".delete-btn")){
        const card=event.target.closest(".card");
        const jobTitle=card.querySelector(".jobName").innerText;
        const companyName=card.querySelector(".compayName").innerText;

        interviewList=interviewList.filter(job=>!(job.jobTitle===jobTitle && job.companyName===companyName));
        rejectedList=rejectedList.filter(job=>!(job.jobTitle===jobTitle && job.companyName===companyName));

        card.remove();
        calculateCount();
        count.innerText=allCards.querySelectorAll(".card").length;
        
        if(allCards.querySelectorAll(".card").length===0){
            allCards.querySelector(".no-job-message").classList.remove("hidden");
        }
    }

})


function renderCards(list){
    filteredSection.innerHTML="";
    for (let job of list) {
        let div=document.createElement("div");
        div.className="card";
        div.innerHTML=`
                <div>
                    <div>
                        <p class="compayName">${job.companyName}</p>
                        <p class="jobName">${job.jobTitle}</p>
                        <p class="jobDescription">${job.jobDescription}</p>
                    </div>
                    
                    <p class="status">${job.status}</p>
                    <p class="notes">${job.notes}</p>
                   
                    <div class="action-btn">
                        <button class="interview-btn">Interview</button>
                        <button class="rejected-btn">Rejected</button>
                    </div>
                    
                </div>
                <div>
                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
                </div>
        `;
        filteredSection.appendChild(div);
    }
}

allFilterBtn.addEventListener("click",function(){
    allCards.style.display="grid";
    filteredSection.style.display="none";
    count.innerText=allCards.querySelectorAll(".card").length;
})

interviewFilterBtn.addEventListener("click",function(){
    allCards.style.display="none";
    filteredSection.style.display="grid";
    count.innerText=interviewList.length;
    if(interviewList.length===0){
        filteredSection.classList.remove("hidden");
    }else{
        renderCards(interviewList);
    }
})

rejectedFilterBtn.addEventListener("click",function(){
    allCards.style.display="none";
    filteredSection.style.display="grid";
    count.innerText=rejectedList.length;
    if(rejectedList.length===0){
        filteredSection.classList.remove("hidden");
    }else{
        renderCards(rejectedList);
    }
})