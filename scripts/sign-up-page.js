document.getElementById("Submit").addEventListener('click',function() { 
    const UserName = document.getElementById('name').value;
    const Password = document.getElementById('pass').value;
    const Password1 = document.getElementById('pass1').value;
    
    let error = 0
    
    if (UserName=='' || Password==''){
        error=-1;
    }else if (Password!=Password1){
        error=-2;
    }

    if (error==-1){
        alert('DO not leave UserName or Password empty !!');
    }else if(error==-2){
        alert('Passwords does not match');
    }else{
        var query= "EXEC CreateUser @UserName='"+UserName+"', @UserPassword='"+Password+"';"
        fetch(`http://localhost:5000/execQuery?query=${encodeURIComponent(query)}`)
        alert(query);
        console.log(`http://localhost:5000/execQuery?query=${encodeURIComponent(query)}`)
    }

});
