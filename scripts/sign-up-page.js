document.getElementById("Submit").addEventListener('click',function() {
    const UserName = document.getElementById('name').value;
    const Password = document.getElementById('pass').value;
    const Password1 = document.getElementById('pass1').value;

    const IsNotUpper = UserName.match("[A-Z]")===null
    const IsNotLower = UserName.match("[a-z]")===null
    const IsNotNumber = UserName.match("[0-9]")===null
    const IsNotSpecial = UserName.match("[!@#$]")===null

    const alertEle =document.getElementById("cabContain")

    let error = 0

    if (UserName=='' || Password==''){
      error=-1;
    }else if (Password!=Password1){
        error=-2;
      }else if (IsNotUpper|IsNotLower|IsNotNumber|IsNotSpecial){
        error=-3
      }

      if (error==-1){
        alert('DO not leave UserName or Password empty !!');
      }else if(error==-2){
        var htmlTxt = `Passwords <b>does not match</b> !!
        <br>
        <ul>
          <li>Prassword and <i>Re-entered</i>-password must be same !!</li>
        </ul>`;
        document.getElementById("alrtMsg").innerHTML=htmlTxt;
        alertEle.style.display='flex'

      }else if(error==-3){
        var htmlTxt = `
        Password should comprise of following
        <ul>
        <li>UpperCaseLetter</li>
        <li>LowerCaseLetter</li>
        <li>Number</li>
        <li>SpecialCharacter like ! @ # $</li>
        </ul>
        `;
        document.getElementById("alrtMsg").innerHTML=htmlTxt;
        alertEle.style.display='flex'
        // alert('Password should comprise of following \n\tUpperCaseLetter\n\tLowerCaseLetter\n\tNumber\n\tSpecialCharacter like ! @ # $')
      }else{
        var query= "EXEC CreateUser @UserName='"+UserName+"', @UserPassword='"+Password+"';"
        fetch(`http://localhost:5000/execQuery?query=${encodeURIComponent(query)}`)
        alert(query);
        console.log(`http://localhost:5000/execQuery?query=${encodeURIComponent(query)}`)
      }

    });

document.getElementById("Alertbtn").addEventListener('click',function(){
  const alertEle =document.getElementById("cabContain")
  alertEle.style.display='none'

})

// Make the DIV element draggable:
dragElement(document.getElementById("cabContain"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}