const NUM_BOTTLES = 99;
const BOTTLE_NAME = "bottle";

window.onload = function() {
  playSong();
}

function playSong()
{
  for (let i = NUM_BOTTLES; i >= 0; i--)
  {
    var lyric = getLyricForAmount(i);
    addLyricToPage(lyric);
  }
}

function capitalizeFirstLetter(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getBottlesLyricForAmount(amount)
{
  var bottleText = `${BOTTLE_NAME}${amount != 1 ? 's' : ''}`;
  return `${amount === 0 ? 'no more' : amount} ${bottleText}`;
}

function getLyricForAmount(amount)
{
  var numBottlesText = getBottlesLyricForAmount(amount);
  var numBottlesMinusOneText = getBottlesLyricForAmount(amount - 1);

  if (amount === 0)
  {
    return `${capitalizeFirstLetter(numBottlesText)} of beer on the wall, ${numBottlesText} of beer.<br/>
            Go to the store and buy some more, ${getBottlesLyricForAmount(NUM_BOTTLES)} of beer on the wall.`
  }
  else
  {
    return `${capitalizeFirstLetter(numBottlesText)} of beer on the wall, ${numBottlesText} of beer.<br/>
            Take one down and pass it around, ${numBottlesMinusOneText} of beer on the wall.`
  }
}

function addLyricToPage(lyric)
{
  var main = document.getElementsByTagName("main")[0];

  var p = document.createElement("p");
  p.innerHTML = lyric;

  main.appendChild(p);
}
