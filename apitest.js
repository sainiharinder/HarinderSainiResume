function setup(){
	loadJSon("http://api.open-notify.org/astros.json", gotData, 'jsonp');
}
function gotData(data){
	println(data);
}
  