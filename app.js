// import './style.css';
src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"

console.log("Hello World !");
// Videos in playlist: 

// var scroll = setInterval(function(){ window.scrollBy(1000, 1000)}, 1000);

// array that contains all videos that the page contains and its titles -> for further manipulation
var arr = Array.from(document.querySelectorAll('.ytd-rich-grid-media #video-title')).map((el) => {return el.textContent.trim()}).join("\n").split("\n");

// just list all elements
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    console.log(" ")
}

console.log(document.querySelector('video').textTracks)

// var allText = [];
// var trackCues = document.querySelector('video').textTracks[0].cues;
// var i;

// for (i = 0; i < trackCues.length; i += 1) {
//   allText.push(trackCues[i].text);
// }

// document.getElementById('text').innerText = allText.join('\n');