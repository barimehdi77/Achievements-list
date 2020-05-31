function doanim(numbtn){
	$(numbtn).addClass("active");
	// Add Success Class After 1.5 Seconds
	setTimeout(function(){
		$(numbtn).addClass("success");
	}, 1500);
};
function doanimF(numbtn){
	$(numbtn).addClass("active");


	// Add Success Class After 3 Seconds
	setTimeout(function(){
		$(numbtn).addClass("failed");
	}, 3000);



	// Remove class after 3 second
	setTimeout(function(){
		$(numbtn).removeClass("active");
		$(numbtn).removeClass("failed");
		alert("This Achievement dosen't Completed");
	}, 3000);
};

$(document).ready(function(){
	/*document.getElementById("ac1").innerHTML = "Item was changed";
	document.getElementById("ac2").innerHTML = "Item was changed";
	document.getElementById("ac3").innerHTML = "Item was changed";*/
	$("#ac1").attr('data-before','100%');
	$("#ac3").attr('data-before','100%');
	$("#ac1").attr('data-before1','');
	$("#ac3").attr('data-before1','');
	$("#ac2").attr('data-before1','43%');
	$(".btn1").click(function(){
		doanim(".btn1");
	});
	$(".btn2").click(function(){
		doanimF(".btn2");
	});
	$(".btn3").click(function(){
		doanim(".btn3");
	});
});
