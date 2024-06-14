# tree-sitter-todolang

`todolang` is being developed at part of the [mynd](https://github.com/Gnarus-G/mynd) project.

## Usage (Neovim)

[nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter/?tab=readme-ov-file#adding-parsers) has the full relevant instructions.

Clone this repo into `~/projects/tree-sitter-todolang/`

```sh
mkdir ~/projects/tree-sitter-todolang
git clone https://github.com/Gnarus-G/tree-sitter-todolang ~/projects/tree-sitter-todolang
```

Add the following to your `init.lua`

```lua
local parser_config = require "nvim-treesitter.parsers".get_parser_configs()
parser_config.todolang = {
  install_info = {
    url = "~/projects/tree-sitter-todolang",       -- local path or git repo
    files = { "src/parser.c" },             -- note that some parsers also require src/scanner.c or src/scanner.cc
    -- optional entries:
    branch = "main",                        -- default branch in case of git repo if different from master
    generate_requires_npm = false,          -- if stand-alone parser without npm dependencies
    requires_generate_from_grammar = false, -- if folder contains pre-generated src/parser.c
  },
}

vim.filetype.add({
  extension = {
    todo = "todolang",
    td = "todolang"
  }
})
```

And copy the contents of `queries/highlights.scm` from this repo to a `queries` folder, like `.config/nvim/after/queries/todolang`

```scm
"todo" @keyword

(chars) @string

[
 "{"
 "}"
] @punctuation.bracket
```

Then in neovimg run the command:

`:TSInstall todolang`
