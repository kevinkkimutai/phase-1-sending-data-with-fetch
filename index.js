// Add your code here
function submitData(name, email) {
    let users = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(users)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
            let h2 = document.createElement('h2');
            h2.innerHTML = object.id;
            document.body.appendChild(h2);
            
        })
        .catch(function(error) {
            let h2 = document.createElement('h2');
            h2.innerHTML = error.message;
            document.body.appendChild(h2);
        });
}
submitData('kelvin', 'kimutai');

