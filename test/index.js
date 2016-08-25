import expect from 'expect.js';
import Test from 'index.js';


describe('TestClass', function() {
  it('should have hello attribute', function () {
    expect(Test.hello).to.be('Hello World!');
  });
});

