var ttRounding = "All intermediate steps should be truncated (not rounded) to 6 decimal places.  All final answers should be truncated (not rounded) at 3 decimal places."
function buildToolTip(aToolTip, aDisplayText)
{
	var out = "<a href='#' onclick='showToolTip(this);' title='" + aToolTip +"'>" + aDisplayText + "</a>";
	document.writeln(out);
}
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
	document.writeln(out);
}
function drawBigInt(lb, ub, func, d)
{
	var intSpan ="<span class=bigintegral>&int;";
	var lbSpan  ="<span class=lowbound>"+lb+"</span>";
	var ubSpan  ="<span class=upbound>"+ub+"</span>";
	var fncSpan ="<span class=function>"+"(&nbsp;<equ>" + func + "</equ>&nbsp;)<equ> " + d + "</equ></span></span>";
	var out = intSpan + lbSpan + ubSpan + fncSpan ;
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
function drawValidate(anId, aValidator, aClass)
{
	var out  = "<button id=" + anId + "  class=" + aClass + " onclick='" + aValidator + ".validate(this);' title='click to check your answer'>&#10004;</button>\n"	
	    out += "<img    id=" + anId + "c class='vImg hidden' src='../images/greenCheck.jpg'>\n";					
		out += "<img    id=" + anId + "x class='vImg hidden' src='../images/redX.jpg'>\n";						
	console.log(out);
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
	
	
	