//starting 
function rot13(str) {
    let result = "";
    let split = str.split("");
    let lookup = {
        A: "N",
        B: "O",
        C: "P",
        D: "Q",
        E: "R",
        F: "S",
        G: "T",
        H: "U",
        I: "V",
        J: "W",
        K: "X",
        L: "Y",
        M: "Z",
        N: "A",
        O: "B",
        P: "C",
        Q: "D",
        R: "E",
        S: "F",
        T: "G",
        U: "H",
        V: "I",
        W: "J",
        X: "K",
        Y: "L",
        Z: "M"
    };
    let regex = /[,!-?. ]/gi
    let alphabet = /[a-zA-Z]/i
    for (let i = 0; i < split.length; i++) {
       if (regex.test(split[i])) {
        result += split[i];
       }
       if (alphabet.test(split[i])) {
        let lookupKey = split[i];
      result += lookup[lookupKey];
       }
      
    }
    return result;
  }
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));