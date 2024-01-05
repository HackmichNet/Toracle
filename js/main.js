function analyze() {
    var tokenDetails = document.getElementById('token-details');
    tokenDetails.innerHTML = "";
    var raw_token = $('#input-area').val();
    try {
        var decodedToken = parseJwt(raw_token);
        //tokenDetails.innerHTML = '<pre>' + JSON.stringify(decodedToken, null, 2) + '</pre>';
        var entryFound = false;
        tools.forEach(element => {
            if(element.aud == decodedToken.aud){
                $('#input-area').val("");
                $('#input-area').hide();
                $('#usage-table').removeClass("d-none");
                $('#usage-table').show();
                entryFound = true;
                var shown_command = element.command;
                shown_command = shown_command.replace("$tid$", decodedToken.tid);
                shown_command = shown_command.replace("$oid$", decodedToken.oid);

                var hidden_command = element.command;
                hidden_command = hidden_command.replace("$JWT$", raw_token);
                hidden_command = hidden_command.replace("$tid$", decodedToken.tid);
                hidden_command = hidden_command.replace("$oid$", decodedToken.oid);
                var row = '<tr><th scope="row">'+ element.name +'</th><td><a target="blank" href=\'' + element.link + '\'>' + element.link + '</a></td><td>' + shown_command + '</td><td><button class="btn btn-primary" onclick="copyToClip(\''+ hidden_command.trim() +'\')">Copy to Clipboard</button></td></tr>';
                $('#usage-table tbody').append(row);
            }
        });
        if(!entryFound){
            tokenDetails.innerHTML = '<p>Sorry no info found, try another token.</p>';
        }
    } catch (error) {
        tokenDetails.innerHTML = '<p>Invalid JWT token.</p>';
    }
}

function goBack() {
    $('#input-area').show();
    var tokenDetails = document.getElementById('token-details');
    tokenDetails.innerHTML = "";
    $('#usage-table').hide();
    $('#usage-table tr').remove();
    $('#input-area').val("");
}


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function copyToClip(command){
    navigator.clipboard.writeText(command);
    alert("Copied to clipboard");
}