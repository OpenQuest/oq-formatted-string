'use strict';

var mocha = require('mocha');
var chai = require('chai');
var format = require('./index.js');

var expect = chai.expect;

describe('Formatted String', function() {

    it('should export a function', function() {
        expect(format).to.be.a('function');
    });

    it('should replace denoted keys with corresponding values', function() {
        var str = format('I am {name}, my age is {age}', {
            name: 'David',
            age: 20
        });

        expect(str).to.equal('I am David, my age is 20');
    });

    it('should leave any unsatisfied keys unchanged', function() {
        var str = format('I am {name}, my age is {age}', {
            name: 'David'
        });

        expect(str).to.equal('I am David, my age is {age}');
    });

    it('should return a functio if an object is not supplied', function() {
        var func = format('I am {name}, my age is {age}');

        expect(func).to.be.a('function');

        var str = func({
            name: 'David',
            age: 20
        });

        expect(str).to.equal('I am David, my age is 20');
    });
});