-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
local opts = { noremap = false, silent = true }
local utils = require("config.utils")
utils.map("n", "<Leader>h", ":<C-u>split<CR>", { noremap = true })
utils.map("n", "<Leader>v", ":<C-u>vsplit<CR>", { noremap = true })
utils.map("n", "<Leader>+", ':exe "vertical resize +5"<CR>', { noremap = true })
utils.map("n", "<Leader>-", ':exe "vertical resize -5"<CR>', { noremap = true })
utils.map("n", "<leader>L", "<cmd>wincmd L<CR>")
utils.map("n", "<leader>H", "<cmd>wincmd H<CR>")
utils.map("n", "<leader>K", "<cmd>wincmd K<CR>")
utils.map("n", "<leader>J", "<cmd>wincmd J<CR>")
utils.map("n", "<leader>T", "<cmd>wincmd T<CR>")

-- EASY MOTION
--vim.api.nvim_set_keymap("n", "<leader>s", "<Plug>(easymotion-overwin-f2)", opts)
--vim.api.nvim_set_keymap("n", "<leader>l", "<Plug>(easymotion-overwin-line)", opts)
--vim.api.nvim_set_keymap("n", "<leader>j", "<Plug>(easymotion-bd-e)", opts)
--vim.api.nvim_set_keymap("n", "<leader>jw", "<Plug>(easymotion-overwin-w)", opts)
--utils.map("n", "<leader>w", "")

-- DOCKER
utils.map("n", "<leader>d", "<cmd>DockerToolsToggle<CR>", { noremap = true })

--GIT
utils.map("n", "<leader>gh", ":DiffviewFileHistory<CR>", { noremap = true })
utils.map("n", "<leader>ghf", ":DiffviewFileHistory %<CR>", { noremap = true })
utils.map("n", "<leader>ghc", "<cmd>DiffviewClose<CR>", { noremap = true })
utils.map("n", "<leader>gbl", ":Git blame<CR>", { noremap = true })
utils.map("n", "<leader>ga", ":Gitsigns toggle_current_line_blame<CR>", { noremap = true })
utils.map("n", "<leader>hd", ":Gitsigns preview_hunk<CR>", { noremap = true })
utils.map("n", "<leader>hs", ":Gitsigns stage_hunk<CR>", { noremap = true })
utils.map("n", "<leader>hn", ":Gitsigns next_hunk<CR>", { noremap = true })
utils.map("n", "<leader>hp", ":Gitsigns prev_hunk<CR>", { noremap = true })
utils.map("n", "<leader>hus", ":Gitsigns undo_stage_hunk<CR>", { noremap = true })
utils.map("n", "<leader>bs", ":Gitsigns stage_buffer<CR>", { noremap = true })
utils.map("n", "<leader>br", ":Gitsigns reset_buffer<CR>", { noremap = true })
utils.map("n", "<leader>bd", ":Gitsigns diffthis<CR>", { noremap = true })
utils.map("n", "<leader>gc", "<cmd>Telescope git_commits<cr>", { noremap = true })
utils.map("n", "<leader>gb", "<cmd>Telescope git_branches<cr>", { noremap = true })
utils.map("n", "<leader>gbc", "<cmd>Telescope git_bcommits<cr>", { noremap = true })
utils.map("n", "<leader>gs", "<cmd>Telescope git_status<cr>", { noremap = true })
utils.map("n", "<leader>gr", "<cmd>Telescope repo list<cr>", { noremap = true })

-- FILES
utils.map("n", "<leader>ff", "<cmd>Telescope fd<cr>", { noremap = true })
--utils.map("n", "<leader>b", "<cmd>Telescope file_browser<cr>", { noremap = true })
utils.map("n", "<leader>fb", "<cmd>Telescope buffers<cr>", { noremap = true })
--utils.map("n", "<Leader>fh", "<cmd>Clap history<cr>")

-- FIND
utils.map("n", "<leader>fz", "<cmd>Telescope current_buffer_fuzzy_find<cr>", { noremap = true })
utils.map("n", "<leader>fg", "<cmd>Telescope live_grep<cr>", { noremap = true })

-- HELP
--utils.map("n", "<leader>sh", "<cmd>Telescope help_tags<cr>", { noremap = true })
--utils.map("n", "<leader>y", ":History:<CR>", { noremap = true })
utils.map("n", "<Leader>fc", "<cmd>Telescope commands<cr>")

--  EDITOR
utils.map("c", "w!!", 'execute "silent! write !sudo tee % >/dev/null" <bar> edit!', { noremap = true })
utils.map("n", "<leader><", ":set number relativenumber<CR>", { noremap = true })
utils.map("n", "<leader><space>", ":noh<cr>", { noremap = true })
utils.map("n", "<leader>.", ":lcd %:p:h<CR>", { noremap = true })
utils.map("n", "<leader>..", ":lcd ..<CR>", { noremap = true })
utils.map("n", "<leader>q", ":bd<CR>", { noremap = true })
utils.map("n", "n", "nzzzv", { noremap = true })
utils.map("n", "N", "Nzzzv", { noremap = true })
utils.map("v", "<", "<gv", { noremap = true })
utils.map("v", ">", ">gv", { noremap = true })
utils.map("n", "<leader>fo", ":Format<CR>", { noremap = true, silent = true })
--utils.map("n", "<leader>md", ":Glow<CR>", { noremap = true })
-- vim.api.nvim_set_keymap("n", "<leader>m", "<cmd>Minimap<CR>", { silent = true, noremap = true })
-- vim.api.nvim_set_keymap("n", "<leader>t", ":terminal<CR>", { noremap = true })
utils.map("i", "jk", "<Esc>")

-- TAB
utils.map("n", "<C-Tab>", "gt", { noremap = true })
utils.map("n", "<Tab>", "gt", { noremap = true })
utils.map("n", "<S-Tab>", "gT", { noremap = true })
utils.map("n", "<S-t>", ":tabnew<CR>", { silent = true, noremap = true })

-- WINDOWS
utils.map("n", "<C-j>", "<C-w>j", { noremap = true })
utils.map("n", "<C-j>", "<C-w>j", { noremap = true })
utils.map("n", "<C-k>", "<C-w>k", { noremap = true })
utils.map("n", "<C-l>", "<C-w>l", { noremap = true })
utils.map("n", "<C-h>", "<C-w>h", { noremap = true })

-- LISTS
utils.map("n", "<space>cp", ":cprev<CR>", { noremap = true })
utils.map("n", "<space>cn", ":cnext<CR>", { noremap = true })
utils.map("n", "<space>lp", ":lprev<CR>", { noremap = true })
utils.map("n", "<space>ln", ":lnext<CR>", { noremap = true })
utils.map("n", "<space>qf", ":Telescope quickfix<CR>", { noremap = true })
utils.map("n", "<space>lf", ":Telescope loclist<CR>", { noremap = true })

-- SESSIONS
utils.map("n", "<leader>so", ":OpenSession<Space>", { noremap = true })
utils.map("n", "<leader>ss", ":SaveSession<Space>", { noremap = true })
utils.map("n", "<leader>sd", ":DeleteSession<CR>", { noremap = true })
utils.map("n", "<leader>sc", ":CloseSession<CR>", { noremap = true })

--Tree
--utils.map("n", "<leader>nt", ":CHADopen<CR>", { noremap = true })
utils.map("n", "<leader>tr", ":TroubleToggle<CR>", { noremap = true })
--utils.map("n", "<leader>fh", ":Telescope oldfiles<CR>", { noremap = true })
utils.map("n", "n", "<C-d>", { noremap = true })
utils.map("n", "m", "<C-u>", { noremap = true })

-- LSP
--vim.api.nvim_set_keymap("n", "gD", "<cmd>lua vim.lsp.buf.declaration()<CR>", opts)
--vim.api.nvim_set_keymap("n", "gd", "<cmd>lua vim.lsp.buf.definition()<CR>", opts)
--vim.api.nvim_set_keymap("n", "K", "<cmd>lua vim.lsp.buf.hover()<CR>", opts)
--vim.api.nvim_set_keymap("n", "gi", "<cmd>lua vim.lsp.buf.implementation()<CR>", opts)
--vim.api.nvim_set_keymap("n", "gs", "<cmd>lua vim.lsp.buf.signature_help()<CR>", opts)
--vim.api.nvim_set_keymap("n", "<space>wa", "<cmd>lua vim.lsp.buf.add_workspace_folder()<CR>", opts)
--vim.api.nvim_set_keymap("n", "<space>wr", "<cmd>lua vim.lsp.buf.remove_workspace_folder()<CR>", opts)
--vim.api.nvim_set_keymap("n", "<space>wl", "<cmd>lua print(vim.inspect(vim.lsp.buf.list_workspace_folders()))<CR>", opts)
--vim.api.nvim_set_keymap("n", "<space>D", "<cmd>lua vim.lsp.buf.type_definition()<CR>", opts)
--vim.api.nvim_set_keymap("n", "<space>rn", "<cmd>lua vim.lsp.buf.rename()<CR>", opts)
--vim.api.nvim_set_keymap("n", "<space>ca", "<cmd>lua vim.lsp.buf.code_action()<CR>", opts)
--vim.api.nvim_set_keymap("n", "gr", "<cmd>lua vim.lsp.buf.references()<CR>", opts)
--vim.api.nvim_set_keymap("n", "<space>e", "<cmd>lua vim.lsp.diagnostic.show_line_diagnostics()<CR>", opts)
--vim.api.nvim_set_keymap("n", "[d", "<cmd>lua vim.lsp.diagnostic.goto_prev()<CR>", opts)
--vim.api.nvim_set_keymap("n", "]d", "<cmd>lua vim.lsp.diagnostic.goto_next()<CR>", opts)
--vim.api.nvim_set_keymap("n", "<space>q", "<cmd>lua vim.lsp.diagnostic.set_loclist()<CR>", opts)
--vim.api.nvim_set_keymap("n", "<space>f", "<cmd>lua vim.lsp.buf.formatting()<CR>", opts)
--vim.api.nvim_set_keymap("n", "g0", "<cmd>:SymbolsOutline<CR>", opts)

-- LSP JDTLS
vim.api.nvim_set_keymap("n", "<A-CR>", '<Cmd>lua require("jdtls").code_action()<CR>', opts)
vim.api.nvim_set_keymap("n", "<A-CR>", '<Esc><Cmd>lua require("jdtls"").code_action(true)<CR>', opts)
vim.api.nvim_set_keymap("v", "<leader>r", '<Cmd>lua require("jdtls").code_action(false, "refactor")<CR>', opts)
vim.api.nvim_set_keymap("n", "<A-o>", '<Cmd>lua require"jdtls".organize_imports()<CR>', opts)
vim.api.nvim_set_keymap("n", "crv", '<Cmd>lua require("jdtls").extract_variable()<CR>', opts)
vim.api.nvim_set_keymap("v", "crv", '<Esc><Cmd>lua require("jdtls").extract_variable(true)<CR>', opts)
vim.api.nvim_set_keymap("n", "crc", '<Cmd>lua require("jdtls").extract_constant()<CR>', opts)
vim.api.nvim_set_keymap("v", "crc", '<Esc><Cmd>lua require("jdtls").extract_constant(true)<CR>', opts)
vim.api.nvim_set_keymap("v", "crm", '<Esc><Cmd>lua require("jdtls").extract_method(true)<CR>', opts)
vim.api.nvim_set_keymap("n", "<leader>dj", "<Cmd>lua require('jdtls.dap').setup_dap_main_class_configs()<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>djn", '<Cmd>lua require"jdtls".test_nearest_method()<CR>', opts)

--DEBUG
vim.api.nvim_set_keymap("n", "<leader>dt", '<Cmd>lua require("dapui").toggle()<CR>', opts)
vim.api.nvim_set_keymap("n", "<leader>dc", "<Cmd>:Telescope dap commands<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>dv", "<Cmd>:Telescope dap variables<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>dbl", "<Cmd>:Telescope dap list_breakpoints<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>dl", "<Cmd>lua require'osv'.run_this()<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>db", "<cmd>lua require'dap'.toggle_breakpoint()<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>ds", "<cmd>lua require'dap'.continue()<CR>", opts)
vim.api.nvim_set_keymap(
  "n",
  "<leader>drp",
  "<Cmd>lua require 'dap'.run(require 'dap'.configurations.javascriptAttach)<CR>",
  opts
)
vim.api.nvim_set_keymap(
  "n",
  "<leader>drc",
  "<Cmd>lua require 'dap'.run(require 'dap'.configurations.javascriptChrome)<CR>",
  opts
)
vim.api.nvim_set_keymap(
  "n",
  "<leader>drn",
  "<Cmd>lua require 'dap'.run(require 'dap'.configurations.javascriptNext)<CR>",
  opts
)
vim.api.nvim_set_keymap(
  "n",
  "<leader>drf",
  "<Cmd>lua require 'dap'.run(require 'dap'.configurations.javascriptFirefox)<CR>",
  opts
)
vim.api.nvim_set_keymap("n", "<leader>dso", "<cmd>lua require'dap'.step_over()<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>dsi", "<cmd>lua require'dap'.step_into()<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>do", "<cmd>lua require'dap'.repl.open()<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>dk", "<cmd>lua require('dapui').eval()<CR>", opts)

-- DB
vim.api.nvim_set_keymap("n", "<leader>bu", ":DBUIToggle<CR> ", opts)
vim.api.nvim_set_keymap("n", "<leader>bf", ":DBUIFindBuffer<CR> ", opts)
vim.api.nvim_set_keymap("n", "<leader>brr", ":DBUIRenameBuffer<CR> ", opts)
vim.api.nvim_set_keymap("n", "<leader>bl", ":DBUILastQueryInfo<CR>", opts)

--REST
vim.api.nvim_set_keymap("n", "<leader>r", "<Cmd>lua require('rest-nvim').run()<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>rp", "<Cmd>lua require('rest-nvim').run(true)<CR>", opts)
vim.api.nvim_set_keymap("n", "<leader>rl", "<Cmd>lua require('rest-nvim').last()<CR>", opts)
