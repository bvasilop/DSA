const chai = require('chai');
const expect = chai.expect;
const LinkedList = require(__dirname + '/../LinkedList');
var ll;
describe('Linked List', function() {
  before(function () {
    ll = new LinkedList();
    ll.addArray(['a','b','c']);
  });

  it('should add an array of size 3 to a linked list', function() {
    expect(3).to.be.equal(ll.size());
  });

  it('should insert, remove and get', function() {
    ll.insert('d',0);
    var arr = ll.toArray();
    expect(4).to.be.equal(ll.size());
    expect('d').to.be.equal(arr[0]);
    ll.remove(0);
    arr = ll.toArray();
    expect(3).to.be.equal(ll.size());
    expect('a').to.be.equal(arr[0]);
    expect('b').to.be.equal(ll.get(1));
  });


});
