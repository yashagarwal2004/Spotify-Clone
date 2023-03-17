console.log('Welcome to spotify');

let songIndex=0;
let audioElement=new Audio('Songs/Kahani Suno.mp3');
let masterplay=document.getElementById('masterplay');
let progressBar=document.getElementById('ProgressBar');
let previous=document.getElementById('previous');
let next=document.getElementById('next');
let current=document.getElementById('currenttime');
let total=document.getElementById('totaltime');

let songs=['Songs/Kahani Suno.mp3', 'Songs/Maan Meri Jaan.mp3', 'Songs/Kesariya.mp3', 'Songs/Gallan Goodiyaan.mp3', 'Songs/Apna Bana Le.mp3', 'Songs/Bekhayali.mp3', 'Songs/Teri Mitti.mp3']
let songstime=['2:53','3:14','4:28','4:56','3:24','6:10','5:25'];
masterplay.addEventListener('click',()=>{
	if(audioElement.paused||audioElement.currentTime==0)
	{
		audioElement.play();
		masterplay.classList.remove('fa-circle-play');
		masterplay.classList.add('fa-circle-pause');
	}
	else
	{
		audioElement.pause();
		masterplay.classList.remove('fa-circle-pause');
		masterplay.classList.add('fa-circle-play');
	}
})

document.addEventListener('keydown',event=>{
	if(event.keyCode==32){
	if(audioElement.paused||audioElement.currentTime==0)
	{
		audioElement.play();
		masterplay.classList.remove('fa-circle-play');
		masterplay.classList.add('fa-circle-pause');
	}
	else
	{
		audioElement.pause();
		masterplay.classList.remove('fa-circle-pause');
		masterplay.classList.add('fa-circle-play');
	}
	}
})


document.addEventListener('keydown',event=>{
	if(event.keyCode==37){
		audioElement.currentTime-=5;
	}
	else if(event.keyCode==39){
		audioElement.currentTime+=10;
	}
})


audioElement.addEventListener('timeupdate',()=>{
	progress=parseInt(audioElement.currentTime/audioElement.duration*1000000000);
	progressBar.value=progress;
	currentmin=parseInt(audioElement.currentTime/60);
	currentsec=parseInt(audioElement.currentTime%60);
	current.innerHTML=currentmin+":"+currentsec;
	total.textContent=songstime[songIndex];
})

progressBar.addEventListener('change',()=>{
	audioElement.currentTime=progressBar.value*audioElement.duration/1000000000;
})

const makeAllPlays=()=>{
	Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
		element.classList.remove('fa-circle-pause');
		element.classList.add('fa-circle-play');
	})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
	element.addEventListener('click',(e)=>{
		makeAllPlays();
		songIndex=parseInt(e.target.id);
		e.target.classList.remove('fa-circle-play');

		e.target.classList.add('fa-circle-pause');
		audioElement.src=songs[songIndex];
		audioElement.currentTime=0;
		audioElement.play();
		masterplay.classList.remove('fa-circle-play');
		masterplay.classList.add('fa-circle-pause');
	})
})

previous.addEventListener('click',()=>{
	if(songIndex==0){
		songIndex=6;
	}
	else{
		songIndex-=1;
	}
	makeAllPlays();
	document.getElementById(songIndex).classList.remove('fa-circle-play');
	document.getElementById(songIndex).classList.add('fa-circle-pause');
	audioElement.src=songs[songIndex];
	audioElement.currentTime=0;
	audioElement.play();
	masterplay.classList.remove('fa-circle-play');
	masterplay.classList.add('fa-circle-pause');
})

next.addEventListener('click',()=>{
	if(songIndex==6){
		songIndex=0;
	}
	else{
		songIndex+=1;
	}
	makeAllPlays();
	document.getElementById(songIndex).classList.remove('fa-circle-play');
	document.getElementById(songIndex).classList.add('fa-circle-pause');
	audioElement.src=songs[songIndex];
	audioElement.currentTime=0;
	audioElement.play();
	masterplay.classList.remove('fa-circle-play');
	masterplay.classList.add('fa-circle-pause');
})
