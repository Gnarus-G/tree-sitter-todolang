module.exports = grammar({
  name: "todolang",

  rules: {
    source_file: ($) => repeat($._definition),
    _definition: ($) =>
      choice(
        $.todo_definition
        // TODO: more kinds of definitions
      ),
    todo_definition: ($) => seq("todo", /\s+/, $.text),
    text: (_) => /.*/,
  },
});
