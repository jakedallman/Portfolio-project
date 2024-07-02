let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let announcer = document.getElementById("announcer");

let resetButton = document.getElementById("reset");

let turn = false;

let array = [["none", "none", "none"], ["none", "none", "none"], ["none", "none", "none"]]
function change(box, xcoord, ycoord)
{
    if (array[xcoord][ycoord] === "none")
    {
        if (turn)
        {
            box.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/200px-Red_X.svg.png?20070510203255')";
            box.style.backgroundRepeat ="no-repeat";
            box.style.backgroundSize="contain";
            box.style.backgroundPosition ="center";
            turn = false;
            array[xcoord][ycoord] = "X";
        } else{
            box.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/d/d0/Letter_o.svg')";
            box.style.backgroundRepeat ="no-repeat";
            box.style.backgroundSize= "contain";
            box.style.backgroundPosition ="center";
            turn = true;
            array[xcoord][ycoord] = "O";
        }
        check();
    } else{
        announcer.innerHTML= "Please click a tile not already being used";
    }
}
function checkTwo(itemOne, itemTwo, itemThree)
{
    if (itemOne === itemTwo && itemOne === itemThree && itemOne != "none")
    {
        announcer.innerHTML = itemOne + " wins";
    }
}
function check()
{
    let itemOne;
    let itemTwo;
    let itemThree;
    for (let y =0; y < 3; y++)
    {
        itemOne = array[0][y];
        itemTwo = array[1][y];
        itemThree = array[2][y];
        checkTwo(itemOne, itemTwo, itemThree);
    }
    for (let x =0; x < 3; x++)
    {
        itemOne = array[x][0];
        itemTwo = array[x][1];
        itemThree = array[x][2];
        checkTwo(itemOne, itemTwo, itemThree);
    }
    itemOne = array[0][0];
    itemTwo = array[1][1];
    itemThree= array[2][2];
    checkTwo(itemOne, itemTwo, itemThree);
    itemOne = array[0][2];
    itemTwo = array[1][1];
    itemThree= array[2][0];
    checkTwo(itemOne, itemTwo, itemThree);
}
one.addEventListener("click", function()
{
    change(one, 0, 0);
})
two.addEventListener("click", function()
{
    change(two, 1, 0);
})
three.addEventListener("click", function()
{
    change(three, 2, 0);
})
four.addEventListener("click", function()
{
    change(four, 0, 1);
})
five.addEventListener("click", function()
{
    change(five, 1, 1);
})
six.addEventListener("click", function()
{
    change(six, 2, 1);
})
seven.addEventListener("click", function()
{
    change(seven, 0, 2);
})
eight.addEventListener("click", function()
{
    change(eight, 1, 2);
})
nine.addEventListener("click", function()
{
    change(nine, 2, 2);
})
resetButton.addEventListener("click", function()
{
    turn = false;
    array = [["none", "none", "none"], ["none", "none", "none"], ["none", "none", "none"]];
    one.style.backgroundImage ="";
    two.style.backgroundImage ="";
    three.style.backgroundImage ="";
    four.style.backgroundImage ="";
    five.style.backgroundImage ="";
    six.style.backgroundImage ="";
    seven.style.backgroundImage ="";
    eight.style.backgroundImage ="";
    nine.style.backgroundImage ="";
    announcer.innerHTML = "";
})