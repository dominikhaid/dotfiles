-- bootstrap lazy.nvim, LazyVim and your plugins
vim.cmd("source $HOME/.vimrc")
vim.g.mapleader = ","
require("config.lazy")
require("debug")
