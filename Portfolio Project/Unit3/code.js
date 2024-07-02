let announcer = document.querySelector(".announcer");
let OneButton = document.querySelector("#one");
let TwoButton = document.querySelector("#two");
let image = document.querySelector(".mainImage");
let choice = [[false, false], [false, false, false]];
let clickCounter = document.querySelector(".clickCounter");
let clickNumber = 0;
OneButton.addEventListener("click",function()
{
    if (!choice[1][2])
    {
        if (!choice[0][0] && !choice[1][2])
        {
            choice[0][0]=true;
            image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/400px-Question_mark_%28black%29.svg.png";
            announcer.innerHTML = "You have been tardy from school one too many times; you are expelled following your absense. You are now out of school and have no job. Do you want to become a coal miner or a steel worker?";
            OneButton.innerHTML = "Coal Miner";
            TwoButton.innerHTML = "Iron Worker"
        } else{
            if (choice[0][1])
            {
                announcer.innerHTML = "You get stuck in more traffic when you take the other way. You are incredibly late, so you are counted late. Because this was your last allowed tardy, you are expelled";
                image.src = "https://nybusinessdivorce.lexblogplatform.com/wp-content/uploads/sites/94/2015/09/Expulsion.png";
                choice[1][0]=true;
                choice[1][2] = true;
            }
            else{
                announcer.innerHTML = "Congratulations. You are a coal miner."
                image.src = "https://www.nsenergybusiness.com/wp-content/uploads/sites/4/2019/02/coal2.jpg";
                choice[1][2] = true;
            }
            OneButton.innerHTML = "Start Over";
            TwoButton.style.visibility = "hidden";
        }
    }
    else{
        choice = [[false, false],[false, false, false]];
        image.src = "https://as1.ftcdn.net/v2/jpg/03/08/40/58/1000_F_308405853_Kmi4wPUpquVwcNNUx3wta15cZO5A50dF.jpg";
        announcer.innerHTML = "You wake up late for school. You can either sleep in just a little longer, or you can actually get up.";
        OneButton.innerHTML = "Sleep-in.";
        TwoButton.innerHTML = "Get up and go to school.";
        clickNumber=0;
        clickCounter.innerHTML="";
        clickCounter.style.visibility = "hidden";
        TwoButton.style.visibility = "visible";
    }
})
TwoButton.addEventListener("click",function()
{
    if (!choice[1][2])
    {
        if (!choice[0][0])
        {
            choice[0][0]=true;
            choice[0][1] = true;
            image.src = "https://www.haskell.com/wp-content/uploads/2020/08/blog-traffic-jam-header.jpg";
            announcer.innerHTML = "You get out of the door just in time. While driving to school, though, you run into traffic. You can take the back-way in order to get to school faster, or you can just wait in line";
            OneButton.innerHTML = "Go the back-way";
            TwoButton.innerHTML = "Wait in traffic";
        } else{
            if (choice[0][1])
            {
                announcer.innerHTML = "You end up being late. Although you were already at the maximim number of allowed tardies, your teacher was also late. Consequently, they were lenient and you went about your school day. You suceeded!";
                image.src = "https://t3.ftcdn.net/jpg/03/29/12/70/240_F_329127097_TyY8kiNyU1OwNLjE5akWGGppmh64UUio.jpg";
                choice[1][1] = true;
                choice[1][0]=true;
                choice[1][2] = true;
            } else{
                announcer.innerHTML = "Congratulations. You are a steel worker."
                image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Construction_Workers.jpg/440px-Construction_Workers.jpg";
                choice[1][0]=true;
                choice[1][1] = true;
                choice[1][2] = true;
            }
            OneButton.innerHTML = "Start Over";
            TwoButton.style.visibility = "hidden";
        }
    }
})
image.addEventListener("click", function(){
    if (choice[0][0] && !choice[1][1] && !choice[0][1]){
        clickCounter.style.visibility = "visible";
        clickNumber++;
        clickCounter.innerHTML = "You have " + clickNumber+" coals";
    }
    if (choice[0][0] && choice[1][1] && !choice[0][1]){
        clickCounter.style.visibility = "visible";
        clickNumber++;
        clickCounter.innerHTML = "You have " + clickNumber+" steels";
    }
    if (choice[0][0] && choice[1][1] && choice[0][1]){
        clickCounter.style.visibility = "visible";
        clickNumber++;
        clickCounter.innerHTML = "You have " + clickNumber+" hoorays";
    }
    if (choice[0][0] && !choice[1][1] && choice[0][1]){
        clickCounter.style.visibility = "visible";
        clickNumber++;
        clickCounter.innerHTML = "You have " + clickNumber+" explulsions";
    }
})

