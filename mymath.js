/* Standard Tooltips */
var ttRounding = "All intermediate steps should be truncated (not rounded) to 6 decimal places.  All final answers should be truncated (not rounded) at 3 decimal places."

// Array of Results
var results=[];
var startTime = getDateTime();


function buildToolTip(aToolTip, aDisplayText)
{
	var out = "<a href='#' onclick='showToolTip(this);return false;' title='" + aToolTip +"'>" + aDisplayText + "</a>";
	document.writeln(out);
}
function getDateTime()
{
	var currentDate = new Date(),
		day = currentDate.getDate(),
		month = currentDate.getMonth() + 1,
		year = currentDate.getFullYear()
		hours = currentDate.getHours(),
		minutes = currentDate.getMinutes();

	
	if (minutes < 10) {
	 minutes = "0" + minutes;
	}

	var suffix = "AM";
	if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
	}
	if (hours == 0) {
	 hours = 12;
	}

	return day + "/" + month + "/" + year + " " + hours + ":" + minutes + " " + suffix;
}

function setNumProblems(aNumProblems)
{
	for( var i=0; i<aNumProblems; i++ )
		results.push(0);
}
function scoreQuestion( aProbNbr, aScore )
{
	results[aProbNbr-1] = aScore;
}
function submitScores( anAssignment )
{
	var endTime = getDateTime();
	var person = prompt("Please enter your name", "");
	var doc = new jsPDF();
	var x = 100 - anAssignment.length / 2;
	doc.text( anAssignment, x, 10);
	doc.text( person, 10,20);
	doc.text( "Start Time: " + startTime, 120, 20);
	doc.text(   "End Time: " + endTime,   122, 30);

	var sum=0;
	for( var i=0; i<results.length; i++ )
	{
		sum += results[i];
		doc.text( "Problem Number " + (i+1) + ": " + results[i], 10, i*10 + 30 )
	}

	var avg = sum / results.length;

	doc.text('Average: ' + avg, 36, results.length * 10 + 30)
	doc.save(anAssignment + '.pdf')
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
function drawFrac(num,den)
{
	var out = "<table class=frac><tr><td class=fracNum><equ>" + num + "</equ></td></tr><tr><td class=fracDen><equ>" + den + "</equ></td></tr></table>";
	document.writeln(out);
}
function drawEval(lb, ub)
{
	var out="<table class=eval><tr><td class=evalUB valign=top>" + ub + "</td></tr><tr><td class=evalMB></td></tr><tr><td class=evalLB valign=bottom>" + lb + "</td></tr></table>";
	document.write(out);
}
function drawInt(lb, ub, func, d)
{
	var intSpan ="<span class=integral>&int;";
	var lbSpan  ="<span class=lowbound>"+lb+"</span>"; 
	var ubSpan  ="<span class=upbound>"+ub+"</span>";
	var fncSpan ="<span class=function>"+"<equ> " + func + " " + d + "</equ></span></span>";
	var out = intSpan + lbSpan + ubSpan + fncSpan ;
	document.writeln(out);
}
function drawBigInt(lb, ub, func, d)
{
	var intSpan ="<span class=bigintegral>&int;";
	var lbSpan  ="<span class=lowbound>"+lb+"</span>";
	var ubSpan  ="<span class=upbound>"+ub+"</span>";
	var fncSpan ="<span class=function>"+"<equ> " + func + " " + d + "</equ></span></span>";
	var out = intSpan + lbSpan + ubSpan + fncSpan ;
	document.writeln(out);
}
function drawRoot(body, root)
{
	var out = "<span class=root>&#8730;</span><span class=rootBody>"+ body + "</span>";
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
function drawValidate(aValidator, anId, aClass)
{
	var prfx = aValidator.toString();

	var out  = "<button id=" + prfx +"." + anId + "  class=" + aClass + " onclick='" + aValidator + ".validate(this);' title='click to check your answer'>&#10004;</button>\n"	
	    out += "<img    id=" + prfx +"." + anId + "c class='vImg hidden' src='../images/greenCheck.jpg'>\n";					
		out += "<img    id=" + prfx +"." + anId + "x class='vImg hidden' src='../images/redX.jpg'>\n";						
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

//Debugger Helper
function dumpHTML() {
  var text= document.documentElement.outerHTML;
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', "thisDoc.txt");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
	
	