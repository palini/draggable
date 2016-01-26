$("#square").draggable();
//$("#resizeable").resizable();
$("#target").droppable({
	drop: function(ui,event){
		$("#target").css("background-color","red");
	}
});