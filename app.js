function filter() {
    var text, output, alphabet, r;
    r = ['а','b','с','ԁ','е','f','g','h','і','ј','k','l','m','ո','о','р','ԛ','r','ѕ','t','ս','ν','ԝ','х','у','ᴢ','Α','Β','С','D','Ε','F','G','Η','Ι','Ј','Κ','L','Μ','N','Ο','Р','Q','R','Ѕ','Τ','U','V','Ԝ','Х','Υ','Ζ', ' '];
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', ' '];
    text = document.getElementById("text").value;
    output = document.getElementById("response");
    for (let i = 0; i < alphabet.length; i++) {
        text = text.replaceAll(alphabet[i], r[i]);
    }
    output.value = text;
}
