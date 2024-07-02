
let map = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
let mines = [[]];
let tagged = [[]];
let clicked = [[]];
let tiles = [[]];
let letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
let unearthed = 10;
let announcer = document.getElementById("clickCounter");
let toggle = document.getElementById("unearth");
let unearth = true;
let submit = document.getElementById("submit");
let pop = document.getElementById("popUp");
let header = document.getElementById("top");
let reset = document.getElementById("reset");
let unearthsUp = false;
function mine(div)
{
    div.style.backgroundColor = "red"
}
function check(x,y)
{
    if (map[x][y]===0)
    {
        tiles[x][y].click();
    }
}
function checkForZero(x,y)
{
    if (x === 0 && y === 0)
    {
        check(x+1,y);
        check(x+1,y+1);
        check(x,y+1);
    }
    else if (x === 0 && y === 14)
    {
        check(x+1,y);
        check(x+1,y-1);
        check(x,y-1);
    }
    else if (x === 14 && y === 14)
    {
        check(x-1,y);
        check(x-1,y-1);
        check(x,y-1);
    }
    else if (x === 14 && y === 0)
    {
        check(x-1,y);
        check(x-1,y+1);
        check(x,y+1);
    }
    else if (x === 0)
    {
        check(x,y-1);
        check(x+1,y-1);
        check(x+1,y);
        check(x+1,y+1);
        check(x,y+1);
    }
    else if (x === 14)
    {
        check(x,y-1);
        check(x-1,y-1);
        check(x-1,y);
        check(x-1,y+1);
        check(x,y+1);
    }
    else if (y === 14)
    {
        check(x,y-1);
        check(x-1,y-1);
        check(x-1,y);
        check(x+1,y-1);
        check(x+1,y);
    }
    else if (y === 0)
    {
        check(x,y+1);
        check(x-1,y+1);
        check(x-1,y);
        check(x+1,y+1);
        check(x+1,y);
    }
    else
    {
        check(x-1,y);
        check(x-1,y-1);
        check(x,y-1);
        check(x+1,y-1);
        check(x+1,y);
        check(x+1,y+1);
        check(x,y+1);
        check(x-1,y+1);
    }
}
function start1()
{
    for (let i =0; i <15; i++)
    {
        for (let j=1; j<16; j++)
        {
            let id = String(letters[i]+j);
            let div = document.getElementById(id);
            tiles[i].push(div);
            div.addEventListener("click", function()
            {
                if (!tagged[i][j-1])
                {
                    if (!unearth)
                    {
                        if (map[i][j-1] === 10)
                        {
                            mine(div);
                            pop.style.display = "block";
                            header.innerHTML = "Not Quite! You Lose!";

                        }
                        else
                        {
                            div.innerHTML = map[i][j-1];
                            checkForZero(i,j-1);
                        }
                    }
                    else
                    {
                        if (map[i][j-1] === 10)
                        {
                            mine(div);
                        }
                        else
                        {
                            div.innerHTML = map[i][j-1];
                            if (map[i][j-1]===0)
                            {
                                checkForZero(i,j-1);
                            }
                        }
                        if (!clicked[i][j-1])
                        {
                            unearthed--;
                        }
                        announcer.innerHTML = unearthed +" free unearths left";
                        if (unearthed < 1)
                        {
                            unearth = false;
                            announcer.innerHTML = 0 +" free unearths left";
                            toggle.innerHTML = "Cannot enable unearth"
                            unearthsUp = true;
                        }
                    }
                    clicked[i][j-1] = true;
                }
            })
            div.addEventListener("contextmenu", function()
            {
                if (tagged[i][j-1])
                {
                    div.style.backgroundColor = "blanchedalmond";
                    tagged[i][j-1]= false;
                } else {
                    div.style.backgroundColor = "blue";
                    tagged[i][j-1]= true;
                }
            })
        }
        tiles.push([])
    }
}
function add(xsecond, ysecond)
{
    if (map[xsecond][ysecond] != 10)
    {
        map[xsecond][ysecond]++;
    }
}
function generate(x, y)
{
    if (map[x][y] === 10)
    {
        if (x === 0 && y === 0)
        {
            add(x,y+1);
            add(x+1,y+1);
            add(x+1,y);
        }
        else if (x===0 && y === 14)
        {
            add(x+1,y);
            add(x+1,y-1);
            add(x,y-1);
        }
        else if (x===14 && y === 14)
        {
            add(x-1,y);
            add(x-1,y-1);
            add(x,y-1);
        }
        else if (x===14 && y === 14)
        {
            add(x-1,y);
            add(x-1,y+1);
            add(x,y+1);
        }
        else if (x===0)
        {
            add(x,y-1);
            add(x+1,y-1);
            add(x+1,y);
            add(x+1,y+1);
            add(x,y+1);
        }
        else if (x===14)
        {
            add(x, y-1);
            add(x-1, y-1);
            add(x-1, y);
            add(x-1, y+1);
            add(x, y+1);
        }
        else if (y===0)
        {
            add(x-1, y);
            add(x+1, y);
            add(x-1, y+1);
            add(x, y+1);
            add(x+1, y+1);
        }
        else if (y===14)
        {
            add(x-1, y);
            add(x+1, y);
            add(x-1, y-1);
            add(x, y-1);
            add(x+1, y-1);
        }
        else
        {
            add(x-1,y);
            add(x-1,y-1);
            add(x,y-1);
            add(x+1,y-1);
            add(x+1,y);
            add(x+1,y+1);
            add(x,y+1);
            add(x-1,y+1);
        }
    }
}
function start2()
{
    for (let i =0; i < 15; i++)
    {
        for (let j=0; j < 15; j++)
        {
            if (Math.random() > 0.75)
            {
                map[i][j]=10;
                mines[i].push(true)
            } else{
                mines[i].push(false);
            }
            tagged[i].push(false);
            clicked[i].push(false);
        }
        mines.push([]);
        tagged.push([]);
        clicked.push([]);
    }
    for (let i =0; i < 15; i++)
    {
        for (let j=0; j < 15; j++)
        {
            generate(i,j);
        }
    }
}
toggle.addEventListener("click", function(){
    if (unearthed > 0)
    {
        unearth = !unearth;
    }
    if (unearth && !unearthsUp)
    {
        toggle.innerHTML = "Toggle Unearth";
    } else if (!unearthsUp){
        toggle.innerHTML = "Enable Unearth"
    }
})
submit.addEventListener("click", function(){
    if (JSON.stringify(mines)===JSON.stringify(tagged))
    {
        pop.style.display = "block";
        header.innerHTML ="Congratulations! You Win!";
    } else{
        pop.style.display = "block";
        header.innerHTML = "Not Quite! You Lose!";
    }
})
reset.addEventListener("click", function(){
    unearth = true;
    toggle.innerHTML = "Toggle Unearth";
    map = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
    mines = [[]];
    tagged = [[]];
    unearthed = 10;
    unearthsUp = false
    announcer.innerHTML = "10 free unearths";
    pop.style.display = "none";
    tiles.forEach(function(x){
        x.forEach(function(y){
            y.style.backgroundColor="blanchedalmond";
            y.innerHTML ="";
        })
    })
    start1();
    start2();
    console.log(map);
})
start1();
start2();
console.log(map);