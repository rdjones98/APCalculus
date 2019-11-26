function submitScore( aProbNbr, aScore )
{
	var results = "You made a " + aScore + " on Problem #" + aProbNbr;
	alert(results);
	var results = "<html><body>"+results+"<br>CheckSum:" + checksum(results) + "</body></html>";
	download("score.html", results );
}
function checksum(s)
{
  var chk = 0x12345678;
  var len = s.length;
  for (var i = 0; i < len; i++) {
      chk += (s.charCodeAt(i) * (i + 1));
  }

  return (chk & 0xffffffff).toString(16);
}
function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

function buildExp(base,exp)
{
	var out = "<span>" + base + "</span><sup>" +exp + "</sup>";
	return out;
}

function drawInt(lb, ub, func, d)
{
	var fontSize = window.getComputedStyle( document.body, null).getPropertyValue("font-size");
	var size = fontSize.substr(0, fontSize.length-2 );
	var intSize = size*2;
/*	var ubTop   = -1*intSize * .6;
	var ubLeft  = -1*intSize * .2;
	var lbTop   =    intSize * .3;
	var lbLeft  = -1*intSize * .05;
	var fcTop   = -1*intSize * .2; 
	var fcLeft  = -1*intSize * .2; */
	var ubTop   = -20;
	var ubLeft  = -5;
	var lbTop   =  10;
	var lbLeft  = -1;
	var fcTop   = -3; 
	var fcLeft  = -3; 
	var intSpan ="<span style='font-size:" + intSize + "px; top:5px;'>&int;</span>";
	var lbSpan  ="<span style='font-size:smaller; top:" + lbTop + "px;left:" + lbLeft + "px;'>"+lb+"</span>";
	var ubSpan  ="<span style='font-size:smaller; top:" + ubTop + "px;left:" + ubLeft + "px;'>"+ub+"</span>";
	var fncSpan ="<span top:" + fcTop + "px;left:" + fcLeft + "px;'>"+"(&nbsp;<equ>" + func + "</equ>&nbsp;)<equ>" + d + "</equ></span>";
	var out = intSpan + lbSpan + ubSpan + fncSpan ;
	document.writeln(out);
}
function setVal( anE, aVal )
{
	var e = document.getElementById(anE);
	e.value = aVal;
	e.readOnly=true;
}
function hide(anE)
{
	var e = document.getElementById(anE);
	if(e != null)
		e.style.display='none';
}
function show(anE)
{
	var e = document.getElementById(anE);
	if(e != null)
		e.style.display='block';
}
function showToolTip(e)
{
	alert(e.title);
}
	