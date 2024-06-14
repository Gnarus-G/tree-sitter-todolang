module.exports = grammar({
  name: "todolang",

  rules: {
    source_file: ($) => repeat($._definition),
    _definition: ($) =>
      choice(
        $.todo_definition
        // TODO: more kinds of definitions
      ),
    todo_definition: ($) => choice(seq("todo", $.chars), seq("todo", $.block)),
    block: ($) => seq("{", $.chars, "}"),
    chars: (_) => repeat1(/\S/),
  },
});
