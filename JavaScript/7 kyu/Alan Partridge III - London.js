function alan(x){
    const stations = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
    let includesAll = true;
    stations.forEach(y => {
      if (!x.includes(y)) {
        includesAll = false;
      }
    })
    return includesAll ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';
  }