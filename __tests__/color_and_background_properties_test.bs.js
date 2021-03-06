'use strict';

var TestHelpers = require("./TestHelpers.bs.js");
var TypedGlamor = require("../src/TypedGlamor.bs.js");

TestHelpers.testDeclaration(TypedGlamor.color(TypedGlamor.lemonchiffon), /* tuple */[
      "color",
      "lemonchiffon"
    ]);

TestHelpers.testDeclaration(TypedGlamor.opacity(0.325), /* tuple */[
      "opacity",
      "0.325"
    ]);

TestHelpers.testDeclaration(TypedGlamor.background(TypedGlamor.none), /* tuple */[
      "background",
      "none"
    ]);

TestHelpers.testDeclaration(TypedGlamor.background(TypedGlamor.salmon), /* tuple */[
      "background",
      "salmon"
    ]);

TestHelpers.testDeclaration(TypedGlamor.background(TypedGlamor.url("foo")), /* tuple */[
      "background",
      "url(foo)"
    ]);

TestHelpers.testDeclaration(TypedGlamor.backgroundColor(TypedGlamor.peachpuff), /* tuple */[
      "backgroundColor",
      "peachpuff"
    ]);

TestHelpers.testDeclaration(TypedGlamor.backgroundImage(TypedGlamor.none), /* tuple */[
      "backgroundImage",
      "none"
    ]);

TestHelpers.testDeclaration(TypedGlamor.backgroundImage(TypedGlamor.url("foo")), /* tuple */[
      "backgroundImage",
      "url(foo)"
    ]);

TestHelpers.testDeclaration(TypedGlamor.backgroundRepeat(TypedGlamor.repeatY), /* tuple */[
      "backgroundRepeat",
      "repeat-y"
    ]);

TestHelpers.testDeclaration(TypedGlamor.backgroundAttachment(TypedGlamor.fixed), /* tuple */[
      "backgroundAttachment",
      "fixed"
    ]);

TestHelpers.testDeclaration(TypedGlamor.backgroundPosition(TypedGlamor.unset), /* tuple */[
      "backgroundPosition",
      "unset"
    ]);

TestHelpers.testDeclaration(TypedGlamor.backgroundPosition2(TypedGlamor.left, TypedGlamor.center), /* tuple */[
      "backgroundPosition",
      "left center"
    ]);

TestHelpers.testDeclaration(TypedGlamor.backgroundPosition2(TypedGlamor.pct(75), TypedGlamor.px(2)), /* tuple */[
      "backgroundPosition",
      "75% 2px"
    ]);

/*  Not a pure module */
