'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var List = require("bs-platform/lib/js/list.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var TypedGlamor__InternalHelpers = require("../src/TypedGlamor__InternalHelpers.bs.js");

function asDeclaration(pair) {
  return /* :: */[
          pair,
          /* [] */0
        ];
}

function testDeclaration(decl, expected) {
  return Jest.test(JSON.stringify(decl), (function () {
                return Jest.Expect[/* toEqual */12](/* :: */[
                            expected,
                            /* [] */0
                          ], Jest.Expect[/* expect */0](decl));
              }));
}

function testValue(value, expected) {
  return Jest.test(value, (function () {
                return Jest.Expect[/* toEqual */12](expected, Jest.Expect[/* expect */0](value));
              }));
}

function testSelector(selector, expected) {
  var match;
  try {
    match = List.hd(selector);
  }
  catch (exn){
    match = Pervasives.failwith("selector should be singular");
  }
  var decls$prime = expected[1];
  var k$prime = expected[0];
  var decls = match[1];
  var k = match[0];
  return Jest.test(k, (function () {
                return Jest.Expect[/* toEqual */12](/* tuple */[
                            k$prime,
                            TypedGlamor__InternalHelpers.Declarations[/* toDict */0](List.map(asDeclaration, decls$prime))
                          ], Jest.Expect[/* expect */0](/* tuple */[
                                k,
                                decls
                              ]));
              }));
}

exports.testDeclaration = testDeclaration;
exports.testValue = testValue;
exports.testSelector = testSelector;
/* Jest Not a pure module */
