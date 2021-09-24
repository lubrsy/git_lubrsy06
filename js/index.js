window.onload = function(){
	var oInfo = document.getElementById("info");
	var oInput = document.getElementsByTagName("input");
	oInfo.onscroll = function(){
		if(oInfo.scrollHeight - oInfo.scrollTop == oInfo.clientHeight){
			oInput[0].disabled = false;
			oInput[1].disabled = false;
		}
	};
};