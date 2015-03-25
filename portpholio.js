'use strict';

	var workBlock = document.querySelector('.works');
	workBlock.addEventListener('click', function(event){
	event = event || window.event;
    var target = event.target || event.srcElement;	
	
	var holders = workBlock.querySelectorAll(".holder");
	var images = workBlock.querySelectorAll("img");	
	var tasks = workBlock.querySelectorAll(".taskDescription");

	if (target.tagName === 'IMG'){
    	for (var i=0; i<images.length; i++){
    		if (target.src === images[i].src){
    			console.log(tasks[i].style.display === "none")
    			if (tasks[i].style.display === "none"){
    				tasks[i].style.display = 'inline-block';
    				return
    			}else{}
    			tasks[i].style.display = "none";
    		}
    		
    	}
    }
    }, false);



