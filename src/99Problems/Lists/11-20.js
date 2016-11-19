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
  },
  /*
  Problem 13:
  Implement the so-called run-length encoding data compression method
  directly. I.e. don't explicitly create the sublists containing the
  duplicates, as in problem 9, but only count them. As in problem P11,
  simplify the result list by replacing the singleton lists (1 X) by X.

  Not certain what this means..
  */
  // encodeDirect: function(){
  //   return
  // },
  duplicate: function(arr){
    return arr.reduce(function(otpt,elem,id){
      otpt.push(elem)
      otpt.push(elem)
      return otpt
    },[])
  },
  replicate: function(arr,num){
    return [...arr].reduce(function(otpt,elem,id){
      return otpt.concat(elem.repeat(num))
    },"")
  },
  drop: function(arr,num){
    return [...arr].reduce(function(otpt,elem,id){
      if((id+1)%num===0){return otpt}
      else {return otpt.concat(elem)}
    },"")
  },
  split: function(arr,num){
    return [...arr].reduce(function(otpt,elem,id){
      if (id+1 > num){
        otpt[1] = otpt[1].concat(elem)
        return otpt
      }else{
        otpt[0] = otpt[0].concat(elem)
        return otpt
      }
    },["",""])
  },
  slice: function(arr,lb,ub){
    return arr.reduce(function(otpt,elem,id){
      if(id+1>=lb && id+1 <= ub){otpt.push(elem);return otpt;}
      else {return otpt}
    },[]).join("")
  },
  rotate: function(arr,num){
    return "".concat(arr.slice(num%arr.length).join(""),arr.slice(0,num%arr.length).join(""))
  },
  removeAt:function(arr,num){
    return [...arr].reduce(function(otpt,elem,id){
      if(id+1==num){otpt[0]=elem;return otpt}
      else {otpt[1]=otpt[1].concat(elem);return otpt}
    },["",""]);
  }
}
