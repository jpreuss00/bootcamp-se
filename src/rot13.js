

function rot13_encode(str) { // LBH QVQ VG!
    var re = new RegExp("[a-z]", "i");
    var min = 'A'.charCodeAt(0);
    var max = 'Z'.charCodeAt(0);
    var factor = 13;
    var result = "";
    str = str.toUpperCase();
    
    for (var i=0; i<str.length; i++) {
      result += (re.test(str[i]) ?
        String.fromCharCode((str.charCodeAt(i) - min + factor) % (max-min+1) + min) : str[i]);
    }
    
    return result;
  }

function rot13_decode(str) { // LBH QVQ VG!
    var re2 = new RegExp("[a-z]", "i");
    var min2 = 'A'.charCodeAt(0);
    var max2 = 'Z'.charCodeAt(0);
    var factor2 = 13;
    var result2 = "";
    str = str.toUpperCase();
    
    for (var i=0; i<str.length; i++) {
      result2 += (re2.test(str[i]) ?
        String.fromCharCode((str.charCodeAt(i) - min2 + factor2) % (max2-min2+1) + min2) : str[i]);
    }
    
    return result2;
  }


export {rot13_encode, rot13_decode};