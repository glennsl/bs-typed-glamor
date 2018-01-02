// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Glamor      = require("../src/Glamor.bs.js");
var TestHelpers = require("./TestHelpers.bs.js");

describe("margin", (function () {
        TestHelpers.testDeclaration(Glamor.margin(Glamor.auto), /* tuple */[
              "margin",
              "auto"
            ]);
        TestHelpers.testDeclaration(Glamor.margin2(Glamor.zero, Glamor.auto), /* tuple */[
              "margin",
              "0 auto"
            ]);
        TestHelpers.testDeclaration(Glamor.margin3(Glamor.pct(10), Glamor.auto, Glamor.px(45)), /* tuple */[
              "margin",
              "10% auto 45px"
            ]);
        TestHelpers.testDeclaration(Glamor.margin4(Glamor.pct(10), Glamor.auto, Glamor.px(45), Glamor.ex(2)), /* tuple */[
              "margin",
              "10% auto 45px 2ex"
            ]);
        TestHelpers.testDeclaration(Glamor.marginTop(Glamor.px(1)), /* tuple */[
              "marginTop",
              "1px"
            ]);
        TestHelpers.testDeclaration(Glamor.marginRight(Glamor.px(1)), /* tuple */[
              "marginRight",
              "1px"
            ]);
        TestHelpers.testDeclaration(Glamor.marginBottom(Glamor.px(1)), /* tuple */[
              "marginBottom",
              "1px"
            ]);
        return TestHelpers.testDeclaration(Glamor.marginLeft(Glamor.px(1)), /* tuple */[
                    "marginLeft",
                    "1px"
                  ]);
      }));

describe("padding", (function () {
        TestHelpers.testDeclaration(Glamor.padding(Glamor.px(-1)), /* tuple */[
              "padding",
              "-1px"
            ]);
        TestHelpers.testDeclaration(Glamor.padding2(Glamor.zero, Glamor.pct(50)), /* tuple */[
              "padding",
              "0 50%"
            ]);
        TestHelpers.testDeclaration(Glamor.padding3(Glamor.pct(10), Glamor.pct(50), Glamor.px(45)), /* tuple */[
              "padding",
              "10% 50% 45px"
            ]);
        TestHelpers.testDeclaration(Glamor.padding4(Glamor.pct(10), Glamor.pct(50), Glamor.px(45), Glamor.ex(2)), /* tuple */[
              "padding",
              "10% 50% 45px 2ex"
            ]);
        TestHelpers.testDeclaration(Glamor.paddingTop(Glamor.px(1)), /* tuple */[
              "paddingTop",
              "1px"
            ]);
        TestHelpers.testDeclaration(Glamor.paddingRight(Glamor.px(1)), /* tuple */[
              "paddingRight",
              "1px"
            ]);
        TestHelpers.testDeclaration(Glamor.paddingBottom(Glamor.px(1)), /* tuple */[
              "paddingBottom",
              "1px"
            ]);
        return TestHelpers.testDeclaration(Glamor.paddingLeft(Glamor.px(1)), /* tuple */[
                    "paddingLeft",
                    "1px"
                  ]);
      }));

describe("border", (function () {
        TestHelpers.testDeclaration(Glamor.border(Glamor.none), /* tuple */[
              "border",
              "none"
            ]);
        TestHelpers.testDeclaration(Glamor.border2(/* None */0, /* None */0, Glamor.ridge), /* tuple */[
              "border",
              "ridge"
            ]);
        TestHelpers.testDeclaration(Glamor.border2(/* Some */[Glamor.px(1)], /* None */0, Glamor.dashed), /* tuple */[
              "border",
              "1px dashed"
            ]);
        TestHelpers.testDeclaration(Glamor.border2(/* None */0, /* Some */[Glamor.green], Glamor.inset), /* tuple */[
              "border",
              "inset green"
            ]);
        TestHelpers.testDeclaration(Glamor.border2(/* Some */[Glamor.px(1)], /* Some */[Glamor.aqua], Glamor.$$double), /* tuple */[
              "border",
              "1px double aqua"
            ]);
        TestHelpers.testDeclaration(Glamor.border3(Glamor.px(1), Glamor.solid, Glamor.slategray), /* tuple */[
              "border",
              "1px solid slategray"
            ]);
        TestHelpers.testDeclaration(Glamor.borderWidth(Glamor.px(2)), /* tuple */[
              "borderWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(Glamor.borderTopWidth(Glamor.px(2)), /* tuple */[
              "borderTopWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(Glamor.borderRightWidth(Glamor.px(2)), /* tuple */[
              "borderRightWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(Glamor.borderBottomWidth(Glamor.px(2)), /* tuple */[
              "borderBottomWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(Glamor.borderLeftWidth(Glamor.px(2)), /* tuple */[
              "borderLeftWidth",
              "2px"
            ]);
        TestHelpers.testDeclaration(Glamor.borderStyle(Glamor.solid), /* tuple */[
              "borderStyle",
              "solid"
            ]);
        TestHelpers.testDeclaration(Glamor.borderTopStyle(Glamor.dashed), /* tuple */[
              "borderTopStyle",
              "dashed"
            ]);
        TestHelpers.testDeclaration(Glamor.borderRightStyle(Glamor.dotted), /* tuple */[
              "borderRightStyle",
              "dotted"
            ]);
        TestHelpers.testDeclaration(Glamor.borderBottomStyle(Glamor.ridge), /* tuple */[
              "borderBottomStyle",
              "ridge"
            ]);
        TestHelpers.testDeclaration(Glamor.borderLeftStyle(Glamor.inset), /* tuple */[
              "borderLeftStyle",
              "inset"
            ]);
        TestHelpers.testDeclaration(Glamor.borderColor(Glamor.transparent), /* tuple */[
              "borderColor",
              "transparent"
            ]);
        TestHelpers.testDeclaration(Glamor.borderTopColor(Glamor.transparent), /* tuple */[
              "borderTopColor",
              "transparent"
            ]);
        TestHelpers.testDeclaration(Glamor.borderRightColor(Glamor.transparent), /* tuple */[
              "borderRightColor",
              "transparent"
            ]);
        TestHelpers.testDeclaration(Glamor.borderBottomColor(Glamor.transparent), /* tuple */[
              "borderBottomColor",
              "transparent"
            ]);
        return TestHelpers.testDeclaration(Glamor.borderLeftColor(Glamor.transparent), /* tuple */[
                    "borderLeftColor",
                    "transparent"
                  ]);
      }));

/*  Not a pure module */
