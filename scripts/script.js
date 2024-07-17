document.getElementById("Submit").addEventListener("click", function () {
    const username = document.getElementById("Name").value;
    const password = document.getElementById("Pass").value;
      

    if (username === "YP" && password === "123") {
      alert("Login successful!");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  });

  document.getElementById("Reset").addEventListener("click", function () {
    document.getElementById("Name").value='';
    document.getElementById("Pass").value='';
  });