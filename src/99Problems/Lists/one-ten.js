module.exports = {
  myLast: function(arr){
    return arr[arr.length-1]
  },
  myButLast: function(arr){
    return arr[arr.length-2]
  },
  elementAt: function(arr,idx){
    return arr[idx-1]
  },
  myLength: function(arr){
    return arr.length
  },
  myReverse: function(arr){
    return typeof(arr) == 'object' ? arr.reverse() : arr.split('').reverse().join('')
  },
  isPalindrome: function(arr){
    return JSON.stringify(arr) === JSON.stringify(this.myReverse(arr))
  },
  flatten: function(arr){
    let flatArray = []
    let flattener = function (a){
      return Array.isArray(a) ? a.map(elem => flattener(elem)) : flatArray.push(a);
    }
    flattener(arr)
    if (arr.length>1){return flatArray}
    else if(Array.isArray(arr)){return arr}
    else {return [arr]}
  },
  compress: function(arr){
    return [...arr].reduce(function(otpt,elem,id){
      if(id===0){otpt.push(elem);return otpt}
      else if(otpt[otpt.length-1]===elem){return otpt}
      else {otpt.push(elem);return otpt}
    },[]);
  },
  pack: function(arr){
    return arr.reduce(function(otpt,elem,id){
      if(id === 0){otpt.push(elem);return otpt}
      else if(elem === otpt[otpt.length-1][0]){
        otpt[otpt.length-1]=otpt[otpt.length-1].concat(elem);
        return otpt;
      } else {otpt.push(elem);return otpt}
    },[]);
  },
  encode:function(arr){
    return [...arr].reduce(function(otpt,elem,id){
      if(id===0){otpt.push([1,elem]);return otpt}
      else if(otpt[otpt.length-1][1]===elem){
        ++otpt[otpt.length-1][0]
        return otpt
      } else {otpt.push([1,elem]);return otpt}
    },[])

  }
}
