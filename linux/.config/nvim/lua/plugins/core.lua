-- since this is just an example spec, don't actually load anything here and return an empty spec
-- stylua: ignore
if false then return {
} end
-- every spec file under config.plugins will be loaded automatically by lazy.nvim
--
-- In your plugin files, you can:
-- * add extra plugins
-- * disable/enabled LazyVim plugins
-- * override the configuration of LazyVim plugins
return {
  {
    "folke/trouble.nvim",
    opts = { use_diagnostic_signs = true },
  },
  {
    "simrat39/symbols-outline.nvim",
    cmd = "SymbolsOutline",
    keys = { { "<leader>cs", "<cmd>SymbolsOutline<cr>", desc = "Symbols Outline" } },
    config = true,
  },
  {
    "hrsh7th/nvim-cmp",
    dependencies = { "hrsh7th/cmp-emoji" },
    ---@param opts cmp.ConfigSchema
    opts = function(_, opts)
      local cmp = require("cmp")
      opts.sources = cmp.config.sources(vim.list_extend(opts.sources, { { name = "emoji" }, { name = "tn" } }))
    end,
  },
  {
    "telescope.nvim",
    dependencies = {
      "nvim-telescope/telescope-fzf-native.nvim",
      build = "make",
      config = function()
        require("telescope").load_extension("fzf")
      end,
    },
  },
  -- add pyright to lspconfig
  {
    "neovim/nvim-lspconfig",
    ---@class PluginLspOpts
    opts = {
      ---@type lspconfig.options
      servers = {
        -- pyright will be automatically installed with mason and loaded with lspconfig
        pyright = {},
      },
    },
  },
  {
    "nvim-treesitter/nvim-treesitter",
    opts = function(_, opts)
      vim.list_extend(opts.ensure_installed, {
        "bash",
        "html",
        "scss",
        "css",
        "go",
        "javascript",
        "dockerfile",
        "graphql",
        "java",
        "json",
        "json5",
        "jsonc",
        "python",
        "dart",
        "lua",
        "rust",
        "tsx",
        "typescript",
        "toml",
        "php",
        "jsdoc",
        "yaml",
      })
    end,
  },
  {
    "williamboman/mason.nvim",
    opts = {
      ensure_installed = {
        -- "angular-language-server",
        -- "ansible-language-server",
        -- "awk-language-server",
        "bash-language-server",
        "bash-debug-adapter",
        "beautysh",
        "blue",
        "chrome-debug-adapter",
        -- "clang-format",
        -- "clangd",
        -- "csharp-language-server",
        "css-lsp",
        "cssmodules-language-server",
        -- "cucumber-language-server",
        -- "deno",
        "debugpy",
        "delve",
        "dockerfile-language-server",
        "docker-compose-language-service",
        -- "dot-language-server",
        "eslint_d",
        "flake8",
        "firefox-debug-adapter",
        "fixjson",
        -- "gofumpt",
        -- "goimports",
        -- "golines",
        -- "gomodifytags",
        "google-java-format",
        "gradle-language-server",
        "groovy-language-server",
        -- "graphql-language-service-cli",
        "helm-ls",
        "html-lsp",
        "htmlbeautifier",
        -- "java-language-server",
        "jdtls",
        "jq",
        "js-debug-adapter",
        "json-lsp",
        "lua-language-server",
        "marksman",
        -- "nginx-language-server",
        "node-debug2-adapter",
        "prettierd",
        "pyright",
        "python-lsp-server",
        "rome",
        "ruff",
        -- "ruby-lsp",
        "ruff-lsp",
        "rust-analyzer",
        -- "rustfmt",
        "shellcheck",
        "shellharden",
        "shfmt",
        "sqlfmt",
        "stylelint",
        "stylelint-lsp",
        "stylua",
        "sqlls",
        "textlint",
        -- "terraform-ls",
        "taplo",
        -- "tailwindcss-language-server",
        "typescript-language-server",
        -- "vim-language-server",
        "yaml-language-server",
        -- "vue-language-server",
        "xmlformatter",
        "yamlfix",
        "yamlfmt",
        "yamllint",
        -- "intelephense",
      },
    },
  },
  {
    "L3MON4D3/LuaSnip",
    keys = function()
      return {}
    end,
  },
  {
    "hrsh7th/nvim-cmp",
    dependencies = {
      "hrsh7th/cmp-emoji",
    },
    ---@param opts cmp.ConfigSchema
    opts = function(_, opts)
      local has_words_before = function()
        unpack = unpack or table.unpack
        local line, col = unpack(vim.api.nvim_win_get_cursor(0))
        return col ~= 0 and vim.api.nvim_buf_get_lines(0, line - 1, line, true)[1]:sub(col, col):match("%s") == nil
      end

      local luasnip = require("luasnip")
      local cmp = require("cmp")

      opts.mapping = vim.tbl_extend("force", opts.mapping, {
        ["<Tab>"] = cmp.mapping(function(fallback)
          if cmp.visible() then
            cmp.select_next_item()
            -- You could replace the expand_or_jumpable() calls with expand_or_locally_jumpable()
            -- they way you will only jump inside the snippet region
          elseif luasnip.expand_or_jumpable() then
            luasnip.expand_or_jump()
          elseif has_words_before() then
            cmp.complete()
          else
            fallback()
          end
        end, { "i", "s" }),
        ["<S-Tab>"] = cmp.mapping(function(fallback)
          if cmp.visible() then
            cmp.select_prev_item()
          elseif luasnip.jumpable(-1) then
            luasnip.jump(-1)
          else
            fallback()
          end
        end, { "i", "s" }),
      })
    end,
  },
}
