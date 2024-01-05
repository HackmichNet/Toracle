var tools = [
    {
        "name": "Azure Active Directory PowerShell 2.0",
        "link":"https://learn.microsoft.com/de-de/powershell/azure/active-directory/overview?view=azureadps-2.0",
        "aud":"https://graph.windows.net",
        "command": "Connect-AzureAD -AadAccessToken $JWT$ -TenantId $tid$ -AccountId $oid$",
        "scopess":{}
    },
    {
        "name":"RoadTools",
        "link":"https://github.com/dirkjanm/ROADtools",
        "aud":"https://graph.windows.net",
        "command": "roadrecon auth --access-token $JWT$",
        "scopes":{}
    },
    {
        "name":"TeamFiltration",
        "link":"https://github.com/Flangvik/TeamFiltration",
        "aud":"https://graph.windows.net",
        "command": "TeamFiltration.exe --exfil --all --outpath $PATH$ --tokens $JWT$",
        "scopes":{}
    },
    {
        "name":"Microsoft Graph PowerShell",
        "link":"https://learn.microsoft.com/en-us/powershell/microsoftgraph/?view=graph-powershell-1.0",
        "aud":"https://graph.microsoft.com",
        "command": "Connect-MgGraph -AccessToken $JWT$",
        "scopes":{}
    },
    {
        "name":"AzureHound",
        "link":"https://github.com/BloodHoundAD/AzureHound",
        "aud":"https://graph.microsoft.com",
        "command": "azurehound.exe list az-ad --jwt $JWT$",
        "scopes":{}
    },
    {
        "name":"AzureHound",
        "link":"https://github.com/BloodHoundAD/AzureHound",
        "aud":"https://management.azure.com",
        "command": "azurehound.exe list az-rm --jwt $JWT$",
        "scopes":{}
    }
]

var dummy = {
    "name":"",
    "link":"",
    "aud":"",
    "command": "",
    "scopes":{
        "operation" : "or/and",
        "scopes": [] 
    }
}