function buildHeader(aTitle)
{
var out =`
<table id=header >
	<tr>
		<td id=hamburgerCol>
			<div id=hamburgerMenu onclick='hamburgerClicked();'>	
				<div id=hamburger></div>
				<div id=hamburger></div>
				<div id=hamburger></div>
			</div>
		</td>
		<td id=leftArrowCol>
			<img src='../images/leftArrow.png' onclick='leftArrowClicked();return false;'>
		</td>
		<td id=titleDiv>` + aTitle + `</td>
		<td id=rightArrowCol>
			<img src='../images/rightArrow.png' onclick='rightArrowClicked();return false;'>
		</td>
		<td id=referenceCol>
			<div id=references onclick='showHideReferences(this);return false;'>+ References</div>
		</td>
	</tr>
</table>
`;
	document.writeln(out);
}

function buildMenu()
{
var out =`
<div id=referenceDropDown>
	<input id='otrefs' 	type='checkbox' checked onclick='referencesClicked("oref", this);'><label></label><br>
	<input id='grefs' 	type='checkbox' checked onclick='referencesClicked("gref", this);'><label></label><br>
	<input id='ntrefs' 	type='checkbox' checked onclick='referencesClicked("nref", this);'><label></label><br>
	<input id='revrefs' type='checkbox' checked onclick='referencesClicked("rref", this);'><label></label><br>
	</tr>
</div>


<div id=menu>
	<div class='item'>
		<img class='rt' src='../images/r.png' href='' onclick='bClick(this)'>
		<img class='dn' src='../images/d.png' href='' onclick='bClick(this)'>
		<a href=# onclick='bClick(this)'>Chapter 1 Limits</a> <span id=menuX onclick='closeMenu();'>x</span>
		<div class='items'>
			<a class='menuItem' href='../Ch1.01'>Area between 2 Curves</a>
		</div>
	</div>

	<div class='item'>
		<img class='rt' src='../images/r.png' href='' onclick='bClick(this)'>
		<img class='dn' src='../images/d.png' href='' onclick='bClick(this)'>
		<a href=# onclick='bClick(this)'>Chapter 2 Derivatives</a>
		<div class='items'>
			<a class='menuItem' href='../Ch2.01'>Area between 2 Curves</a>
		</div>
	</div>

	<div class='item'>
		<img class='rt' src='../images/r.png' href='' onclick='bClick(this)'>
		<img class='dn' src='../images/d.png' href='' onclick='bClick(this)'>
		<a href=# onclick='bClick(this)'>Chapter 3</a>
		<div class='items'>
			<a class='menuItem' href='../Ch3.01'>Applications of Derivatives</a>
		</div>
	</div>

	<div class='item'>
		<img class='rt' src='../images/r.png' href='' onclick='bClick(this)'>
		<img class='dn' src='../images/d.png' href='' onclick='bClick(this)'>
		<a href=# onclick='bClick(this)'>Chapter 4 Integrals</a>
		<div class='items'>
			<a class='menuItem' href='../Ch4.01'>Integrate</a>
		</div>
	</div>

	<div class='item'>
		<img class='rt' src='../images/r.png' href='' onclick='bClick(this)'>
		<img class='dn' src='../images/d.png' href='' onclick='bClick(this)'>
		<a href=# onclick='bClick(this)'>Chapter 5 Applications of Integrals</a>
		<div class='items'>
			<a class='menuItem' href='../Ch5.01'>Area between 2 Curves</a>
		</div>
	</div>

</div>
`;
	document.writeln(out);
}

var lastURL="";
function hamburgerClicked()
{
	var e = document.getElementById("menu");
	if(e.style.display != "inline")
		e.style.display = "inline";
	else
		e.style.display = "none";
}

function bClick(e) {
	e = e.parentNode;
	var br = e.getElementsByTagName("img")[0];
	var bd = e.getElementsByTagName("img")[1];
	var sub = e.getElementsByTagName("div")[0];
	if( br.style.display == "none" )
	{
		br.style.display = "inline";
		bd.style.display = "none";
		sub.style.display = "none";
	}
	else 
	{
		br.style.display = "none";
		bd.style.display = "inline";
		sub.style.display = "block";
	}
}
function closeMenu()
{
	document.getElementById("menu").style.display="none";
}
function urlClicked(e) {
	document.getElementById("iframeLoadChapter").src=e;
	closeMenu();
}
function chapterLoaded()
{
	var title = document.getElementById("iframeLoadChapter").contentWindow.document.title;
	if(title.indexOf("404") > -1 )
	{
		document.getElementById("iframeLoadChapter").src = lastURL;
		return;
	}
	else
		lastURL = document.getElementById("iframeLoadChapter").src;
	document.getElementById("titleDiv").innerHTML=title;
	var body = document.getElementById("iframeLoadChapter").contentWindow.document.body.innerHTML;
	document.getElementById("chapterDiv").innerHTML = body;
	
	// Hide Reference Drop down and any references that are not clicked
	document.getElementById("referenceDropDown").style.display="none";
	var e=new Object();
	if( document.getElementById("otrefs") != null )
	{
		e.checked = document.getElementById("otrefs").checked;
		referencesClicked("oref", e);
	}
	if( document.getElementById("grefs") != null )
	{
		e.checked = document.getElementById("grefs").checked;
		referencesClicked("gref", e);
	}
	if( document.getElementById("ntrefs") != null )
	{
		e.checked = document.getElementById("ntrefs").checked;
		referencesClicked("nref", e);
	}
	if( document.getElementById("revrefs") != null )
	{
		e.checked = document.getElementById("revrefs").checked;
		referencesClicked("rref", e);
	}
}

// Hide/Show a given class of divs
function referencesClicked(aRef, e)
{
	try {
		var refs = document.getElementsByClassName(aRef);
		for (var i = 0; i < refs.length; i ++) 
		{
			if( e.checked )
				refs[i].style.display = 'table-cell';
			else
				refs[i].style.display = 'none';
		}
	}
	catch(err) {
		alert( "referencesClicked: " + err.message );
	}
}
function showHideReferences(event)
{
	var e = document.getElementById("referenceDropDown");
	if(e.style.display == "none")
	{
		document.getElementById("references").innerHTML="- References";
		e.style.display = "block";
	}
	else
	{
		document.getElementById("references").innerHTML="+ References";
		e.style.display = "none";
	}
}

function leftArrowClicked()
{

	var url = document.getElementById("iframeLoadChapter").contentWindow.document.getElementsByTagName("META")[0].getAttribute("prevchapter");
	urlClicked(url);
}
function rightArrowClicked()
{
	var url = document.getElementById("iframeLoadChapter").contentWindow.document.getElementsByTagName("META")[0].getAttribute("nextchapter");
	urlClicked(url);
}

// Load KeyListener.  This is outside of any funciton and should load when page loads
document.onkeydown = function(e) {
switch (e.keyCode) {
	case 37:
		leftArrowClicked();
		break;
	case 39:
		rightArrowClicked();
		break;
}};
