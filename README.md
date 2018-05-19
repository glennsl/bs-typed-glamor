# Glamor. Typed.

`bs-typed-glamor` provides a strongly typed interface to glamor based on the types of [glennsl/bs-typed-css-core](https://github.com/glennsl/bs-typed-css-core).

## Annotated Example

```ml
(* The OCaml syntax is recommended with this DSL for improved readability, and will be shown here.
   Reason users can use a separate .ml file alongside each component file, for eaxample if the
   component is in `Foo.re`, you could have a `FooStyles.ml` alongside it and then refer to 
   `FooStyles.myStyle` in the component *)
   
open TypedGlamor

(* A basic style definition *)
let box = css [
  display block;
  color red;
]

(* triangle *)
let cube = css [
  (* style definitions can have labels which will be included in the generated classnames to aid debugging *)
  label "thing";
  
  (* multi-argument properties are suffixed with the number of arguments they take, and are labeled when there's confusion *)
  padding2 ~v:(em 0.75) ~h:(em 1.5);
  
  (* single-argument properties are not *)
  padding zero;
  
  (* properties that can take any number of arguments are pluralized and take a list *)
  transitions [
    (AnimatableProperty.opacity, ms 500, linear, ms 0);
    (AnimatableProperty.height, ms 300, linear, ms 200);
  ];
  
  (* they'll still have a non-pluralized variant which can take a single argument however,
      and which will still override the pluralzied variant *)
  transition unset;
  
  (* if a value and property name conflict by having the same name, the property name is "mangled" *)
  display flex;
  flex_ (int 1);

  (* `select`, given a css selector where `&` is substituted with the current element,
      will apply the given styles to the sub selection *)
  select "& > .title" [
    fontSize larger;
  ];
  
  (* `&` is implied at the start *)
  select "> .subtitle" [
    fontSize smaller;
  ];
  
  (* `:hover` and other pseudo-classes are all available statically typed  *)
  hover [
    background plum;
  ];
  
  (* media queries are not statically typed (yet), but can be stringly typed in a `select` *)
  select "@media (max-width: 600px)" [
    select "& > .subtitle" [
      display none;
    ];
  ];
]

(* Conditionals

   Since this is all just plain OCaml/Reason code and everytng is an exporession, you can just
   use all the conditional constructs you already know and love pretty much anywhere. Below are some
   examples to serve as inspiration *)
let root = fun ~isPublished ~style -> css [

  select "> div" (
    if not isPublished then [
      textDecoration lineThrough
  ] else []);

  backgroundColor (
    if isFocused then
      hsl (num 6.9) 90 90
    else
      white
  );

  if isFlagged then add [
    opacity 0.5;
  ] else add [
    boxShadows [shadow ~x:(ex 1.) ~y:(ex 1.) ~blur:(em 1.) (rgba 0 0 0 0.1)];
    backgroundColor whitesmoke;
  ];

  select "> *" [
    opacity (if isFlagged && not isFocused then 0.5 else 1.);
  ];
  
  color
    (match style with
    | `Heavy -> white
    | `Light -> whitesmoke
    | `Black -> black);
]

(* Global style declarations are supported through `global`.  *)
let _global = begin
  global "html" [
    fontSize (px 15);
    lineHeight (em 1.25);
  ];

  global "html, body" [
    backgroundColor white;
    minHeight (pct 100.);
  ];
end

(* The optional `extend` argument to `css` can be used to extend an existing style *)
let readme = css ~extend:CommonStyles.html [
  backgroundColor white;
  padding2 ~v:(em 2.) ~h:(em 4.);

  select "@media (max-width: 900px)" [
    padding2 ~v:(em 1.) ~h:(em 2.);
  ]
]
```

To use with ReasonReact:

```reason

module Box = {
  let component = ReasonReact.statelessComponent("Box");
  let make = _children => {
    ...component,

    render: (_self) =>
      <div className=(Styles.box |> TypedGlamor.toString) />
  }
};
```
