module.exports = {
  encodeModified: function(arr){
    return [...arr].reduce(function(otpt,elem,id){
      if(id===0){otpt.push(["Single",elem]);return otpt}
      else if(otpt[otpt.length-1][0]=="Multiple" && otpt[otpt.length-1][2]==elem){
        ++otpt[otpt.length-1][1]
        return otpt
      }
      else if(otpt[otpt.length-1][1]==elem){
        otpt[otpt.length-1] = ["Multiple",2,elem]
        return otpt;
      }
      else {otpt.push(["Single",elem]);return otpt}
    },[]).map(elem => elem.join(" "))
  },
  decodeModified: function(){
    let args = Array.from(arguments);
    return [...arguments].reduce(function(str,elem,id){
      elem = elem.split(" ")
      if(elem[0]==="Multiple"){
        return str.concat(elem[2].repeat(elem[1]))
      } else if(elem[0]==="Single"){return str.concat(elem[1])}
    },"")
  }
}
