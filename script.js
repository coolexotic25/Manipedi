function checkUpdate() {
    const appID = document.getElementById('appID').value.trim();
    if (! appID) return alert ("Enter AppID first!");
  
    const steamDBURL = `https://steamdb.info/app/${appID}/history`;
    window.open(steamDBURL, '_blank');
  
    document.getElementById('buildInfo').innerText =
      ` Please check SteamDB manually:\nhttps://steamdb.info/app/${appID}//herited/`;
  }
  
  function downloadFares() {
    const appID = document.getElementById('appID').value.trim();
    if (! appID) return alert ("Enter AppID first!");
    const url = `https://fares.top/${appID}.zip`;
  
    const a = document.createElement('a');
    a.href = url;
    a.download = `${appID}.zip`;
    a.click();
  }
