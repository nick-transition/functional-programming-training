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
})
