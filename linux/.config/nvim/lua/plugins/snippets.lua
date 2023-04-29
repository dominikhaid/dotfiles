return {
  {
    "tzachar/cmp-tabnine",
    build = "./install.sh",
    opts = {
      max_lines = 1000,
      max_num_results = 20,
      sort = true,
      run_on_every_keystroke = true,
      snippet_placeholder = "..",
    },
  },
  {
    "rafamadriz/friendly-snippets",
    config = function()
      local loader = require("luasnip/loaders/from_vscode")
      loader.load({ paths = { "~/.config/nvim/lua/snippets" } })
      loader.lazy_load()
    end,
  },
}
