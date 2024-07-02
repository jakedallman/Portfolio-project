let tiles = [[]]
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
let snake = [[7,7]];
let heading = "up"
let lost = false;
let apples = [[false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false], [false, false, false, false, false,false, false, false, false, false,false, false, false, false, false]]
for (let i =0; i < 15; i++)
{
    for (let j = 0; j < 0; j++)
    {
        let id = String(alphabet[i]+j);
        let element = document.getElementById(id);
        (tiles[i]).push(element);
    }
    tiles.push([]);
}
console.log(tiles);
function move()
{
    if (heading === "up" && snake[0][1] != 0)
    {
        snake.unshift(snake[0][0],snake[0][1]-1);
        tiles[snake[0][0]][snake[0][1]].style.backgroundColor="yellow";
        for (let j = 1; j < snake.length-1; j++)
        {
            snake[j]=snake[j+1];
        }
        let last = snake.pop();
        tiles[last[0]][last[1]].style.backgroundColor = "green";
    }
    else if (heading === "down" && snake[0][1] != 14)
    {
        snake.unshift(snake[0][0],snake[0][1]+1);
        tiles[snake[0][0]][snake[0][0]].style.backgroundColor= "yellow";
        for (let j = 1; j < snake.length-1; j++)
        {
            snake[j]=snake[j+1];
        }
        let last = snake.pop();
        tiles[last[0]][last[1]].style.backgroundColor = "green";
    }
    else if (heading === "left" && snake[0][0] != 0)
    {
        snake.unshift(snake[0][0]-1,snake[0][1]);
        tiles[snake[0][0]][snake[0][0]].style.backgroundColor= "yellow";
        for (let j = 1; j < snake.length-1; j++)
        {
            snake[j]=snake[j+1];
        }
        let last = snake.pop();
        tiles[last[0]][last[1]].style.backgroundColor = "green";
    }
    else if (heading === "right" && snake[0][1] != 14)
    {
        snake.unshift(snake[0][0]+1,snake[0][1]);
        tiles[snake[0][0]][snake[0][0]].style.backgroundColor= "yellow";
        for (let j = 1; j < snake.length-1; j++)
        {
            snake[j]=snake[j+1];
        }
        let last = snake.pop();
        tiles[last[0]][last[1]].style.backgroundColor = "green";
    }
}
function checkCollisions()
{
    if (snake[0][0] === 0 ||snake[0][0] === 14 || snake[0][1] === 0 || snake[0][1] === 14)
    {
        lost = true;
    }
}
function generateApple()
{
    let x = Math.floor(Math.random()*15);
    let y = Math.floor(Math.random()*15);
    apples[x][y] = true;
}
function apple()
{
    if (apples[snake[0][0]][snake[0][1]] === true)
    {
        let xChange = snake[snake.length-1][0] - snake[snake.length-2][0];
        let yChange =snake[snake.length-1][1] - snake[snake.length-2][1];
        if (xChange != 0)
        {
            if (xChange > 0)
            {
                snake.push([snake[snake.length-1][0]+1,snake[snake.length-1][1]]);
            } else{
                snake.push([snake[snake.length-1][0]-1,snake[snake.length-1][1]])
            }
        }
        else if (yChange != 0)
        {
            if (yChange > 0)
            {
                snake.push([snake[snake.length-1][0],snake[snake.length-1][1]+1]);
            } else{
                snake.push([snake[snake.length-1][0],snake[snake.length-1][1]-1]);
            }
        }
        apples[snake[0][0]][snake[0][1]] === false;
        generateApple();
    }
}
function run()
{
    move();
    checkCollisions();
    apple();
}
setTimeout(run,500);
