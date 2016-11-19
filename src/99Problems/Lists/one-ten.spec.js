import 'babel-polyfill'
import * as assert from 'assert'
import * as ex from './one-ten'

describe("Lists 1-10", function(){
  it('My last', function(){
    assert.equal(4,ex.myLast([1,2,3,4]))
    assert.equal('z',ex.myLast(['x','y','z']))
  });
  it("My But Last", function(){
    assert.equal(3,ex.myButLast([1,2,3,4]));
    assert.equal('y',ex.myButLast(['a','b','y','z']))
  });
  it("Element At", function(){
    assert.equal(2,ex.elementAt([1,2,3],2));
    assert.equal('v',ex.elementAt("javascript",3));
  });
  it("Length", function(){
    assert.equal(3,ex.myLength([123, 456, 789]));
    assert.equal(13,ex.myLength("Hello, World!"));
  });
  it("Reverse", function(){
    assert.equal("!amanap ,lanac a ,nalp a ,nam A",ex.myReverse("A man, a plan, a canal, panama!"));
    assert.deepEqual([4,3,2,1], ex.myReverse([1,2,3,4]));
  });
  it("Palindrome",function(){
    assert.equal(false,ex.isPalindrome([1,2,3]));
    assert.equal(true,ex.isPalindrome("madamimadam"));
    assert.equal(true,ex.isPalindrome([1,2,4,8,16,8,4,2,1]))
  });
  it("Flatten",function(){
    assert.deepEqual([5],ex.flatten(5));
    assert.deepEqual([1,2,3,4,5],ex.flatten([1,[2,[3,4],5]]));
    assert.deepEqual([],ex.flatten([]));
  });
  it("Compress",function(){
    assert.deepEqual("abcade",ex.compress("aaaabccaadeeee"));
  });
  it("Pack",function(){
    assert.deepEqual(["aaaa","b","cc","aa","d","eeee"],ex.pack(['a', 'a', 'a',
    'a', 'b', 'c', 'c', 'a','a', 'd', 'e', 'e', 'e', 'e']));
  });
  it("Encode",function(){
    const code = [[4,'a'],[1,'b'],[2,'c'],[2,'a'],[1,'d'],[4,'e']]
    assert.deepEqual(code,ex.encode("aaaabccaadeeee"));
  });
})
