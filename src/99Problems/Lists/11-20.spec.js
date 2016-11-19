import 'babel-polyfill'
import * as assert from 'assert'
import * as ex from './11-20'

describe("Lists 11-20", function(){
  it("Encode Modified",function(){
    assert.deepEqual(["Multiple 4 a","Single b","Multiple 2 c",
    "Multiple 2 a","Single d","Multiple 4 e"],ex.encodeModified("aaaabccaadeeee"));
  });
  it("Decode Modified",function(){
    assert.deepEqual("aaaabccaadeeee",ex.decodeModified("Multiple 4 a","Single b","Multiple 2 c",
    "Multiple 2 a","Single d","Multiple 4 e"));
  });
  // it("Encode Direct",function(){
  //   assert.deepEqual(,ex.encodeDirect());
  // });
  it("Duplicate",function(){
    assert.deepEqual([1,1,2,2,3,3],ex.duplicate([1,2,3]));
  });
  it("Replicate",function(){
    assert.deepEqual("aaabbbccc",ex.replicate("abc",3));
  });
  it("Drop",function(){
    assert.deepEqual("abdeghk",ex.drop("abcdefghik",3))
  });
  it("Split",function(){
    assert.deepEqual(["abc","defghik"],ex.split("abcdefghik",3));
  })
})
