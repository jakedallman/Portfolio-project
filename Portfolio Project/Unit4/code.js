let answerArray = [[false, false],[false, false]];
let ButtonFirst = document.getElementById("one");
let ButtonSecond = document.getElementById("two");
let ButtonThird = document.getElementById("three");
let ButtonFourth = document.getElementById("four");
let submitButton = document.querySelector(".submit");
let checkbox = document.querySelector("#NSFW");
let checked = false;
let explainer = document.querySelector(".explaination");
let image = document.getElementById("display");
let submitted = false;
let link = document.querySelector("#learnMore");
let startOver = document.getElementById("startOver");
let questionOne = document.getElementById("questionOne");
let questionTwo = document.getElementById("questionTwo");
ButtonFirst.addEventListener("click", function(){
    ButtonFirst.style.backgroundColor="blue";
    ButtonSecond.style.backgroundColor="grey";
    answerArray[0]=[false, true];
})
ButtonSecond.addEventListener("click", function(){
    ButtonSecond.style.backgroundColor="blue";
    ButtonFirst.style.backgroundColor="grey";
    answerArray[0]=[true, true];
})
ButtonThird.addEventListener("click", function(){
    ButtonThird.style.backgroundColor="blue";
    ButtonFourth.style.backgroundColor="grey";
    answerArray[1]=[false, true];
})
ButtonFourth.addEventListener("click", function(){
    ButtonFourth.style.backgroundColor="blue";
    ButtonThird.style.backgroundColor="grey";
    answerArray[1]=[true, true];
})
checkbox.addEventListener("click", function(){
    checked = !checked;
    if (!checked)
    {
        image.style.display = "none";
    } else if (submitted)
    {
        image.style.display = "block";
    }
})
submitButton.addEventListener("click", function(){
    if (answerArray[0][1] && answerArray[1][1])
    {
        if (answerArray[0][0]){
            if (answerArray[1][0]){
                explainer.innerHTML = "You are a Moccasin infection. You are extravagant and steadfast. This parallels a moccasin infection which is relatively widespread and chronic.";
                link.style.display = "block";
                link.href = "https://my.clevelandclinic.org/health/diseases/22139-athletes-foot-tinea-pedis";
                if (checked)
                {
                    image.src = "https://img.grepmed.com/uploads/10585/moccasin-tineapedis-clinical-photo-variety-original.jpeg";
                    image.style.display = "block";
                }
            } else{
                explainer.innerHTML = "You are a Candidiasis infection. You like to live large, but you don't like to hang around too long. This parallels a candidiasis infection which is fairly large but is curable";
                link.style.display = "block";
                link.href = "https://www.healthline.com/health/skin/candida-fungus";
                if (checked)
                {
                    image.src = "https://media.sciencephoto.com/image/m1300239/800wm/M1300239-The_sole_of_a_foot_affected_by_candidiasis.jpg";
                    image.style.display = "block";
                }
            }
        }else{
            if(answerArray[1][0]){
                link.style.display = "block";
                explainer.innerHTML = "You are an Onychomycosis rash. You are fairly modest in style, but you are more than willing to stick around. This is like an Omychomycosis rash which is small but difficult to get remove.";
                link.href = "https://www.mayoclinic.org/diseases-conditions/nail-fungus/symptoms-causes/syc-20353294";
                if (checked)
                {
                    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oncymycosis.JPG/600px-Oncymycosis.JPG";
                    image.style.display = "block";
                }
            } else{
                link.href = "https://www.webmd.com/skin-problems-and-treatments/what-is-a-vesicular-rash";
                link.style.display = "block";
                explainer.innerHTML = "You are a vesicular rash. You aren't that noticible, and you don't remain in one place for too long. This is like a vesicular rash in that they are small and usually easy to remove (unless a symptom of an underlying disease).";
                if (checked)
                {
                    image.src = "https://s3.amazonaws.com/HMP/c360/imported/transfer/1206Con_DC_C3_0.jpg";
                    image.style.display = "block";
                }
            }
            
        }
        submitted = true;
        questionOne.style.border = "none";
        questionTwo.style.border = "none";
    }else{
        explainer.innerHTML = "Some questions have not been answered! Please answer them in order to submit!"
        if (!answerArray[0][1])
        {
            questionOne.style.border = "red dashed 3px";
        }
        if (!answerArray[1][1])
        {
            questionTwo.style.border = "red dashed 3px";
        }
    }
})
startOver.addEventListener("click", function(){
    checked = false;
    submitted = false;
    ButtonFirst.style.backgroundColor = "cadetblue";
    ButtonSecond.style.backgroundColor = "cadetblue";
    ButtonThird.style.backgroundColor = "cadetblue";
    ButtonFourth.style.backgroundColor = "cadetblue";
    image.style.display = "none";
    link.href = "";
    explainer.innerHTML = "";
    checkbox.checked = false;
    answerArray = [[false, false],[false, false]];
})