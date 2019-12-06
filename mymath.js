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
	var intSpan ="<span class=integral>&int;";
	var lbSpan  ="<span class=lowbound>"+lb+"</span>";
	var ubSpan  ="<span class=upbound>"+ub+"</span>";
	var fncSpan ="<span class=function>"+"(&nbsp;<equ>" + func + "</equ>&nbsp;)<equ> " + d + "</equ></span></span>";
	var out = intSpan + lbSpan + ubSpan + fncSpan ;
	console.log(out);
	document.writeln(out);
}
function drawBigInt(lb, ub, func, d)
{
	var intSpan ="<span class=bigintegral>&int;";
	var lbSpan  ="<span class=lowbound>"+lb+"</span>";
	var ubSpan  ="<span class=upbound>"+ub+"</span>";
	var fncSpan ="<span class=function>"+"(&nbsp;<equ>" + func + "</equ>&nbsp;)<equ> " + d + "</equ></span></span>";
	var out = intSpan + lbSpan + ubSpan + fncSpan ;
	console.log(out);
	document.writeln(out);
}
/***************************************************************************************
 * Draw the group of validator buttons and indicators for correct/incorrect answers
 * inputs: 	anId the elementId for the set of input fields we are validating.  
 *			aValidator - the object upon which to call the method "validate()"
 * Naming convention:  anId  - Example 1.step1
 *                     anIdc - Example 1.step1c for correct checkmark
 *					   anIdx - Example 1.step1x for incorrect checkmark
 ***************************************************************************************/
function drawValidate(anId, aValidator)
{
	var out  = "<button id=" + anId + " class=hidden onclick='" + aValidator + ".validate(this);'>&#10004;</button>"	
	    out += "<img id=1.step2c class=hidden src='../images/greenCheck.jpg'>";					
		out += "<img id=1.step2x class=hidden src='../images/redX.jpg'>";						
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
	