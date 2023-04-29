# 💤 LazyVim

A starter template for [LazyVim](https://github.com/LazyVim/LazyVim).
Refer to the [documentation](https://lazyvim.github.io/installation) to get started.

## FORMATING
Format on save by default is enabled for .js, .rs, .go, .java, .rs, .sh, .lua, .css, .ts, .php, .tsx, .jsx, .md.

## DAP / DEBUGGING
Debugging is by default configrued for the following languages.

- JavaScript (node, chrome, firefox)
- DotNet
- Go
- Lua
- Java
- Php
- Python
- Rust / C++

All debug adapters are located in /lua/dap/w
There is an additional configuration for Java in /lua/jdtls_setup.lua

## REST / HTTP
A http client is integrated, for further instructions visit [link](https://github.com/NTBBloodbath/rest.nvim)

## DATABASE
A Databse client is integrated, for further instructions visit [vim-dadbod](https://github.com/tpope/vim-dadbod) and [ui](https://github.com/kristijanhusak/vim-dadbod-ui). Keybindings are set as alway in /lua/keymappings.lua.

## KEYBINDINGS

### METAKEYS
- Vim `<leader>`,
- Git `<leader>g`
- Debug `<leader>d`
- File `<leader>f`
- Command `<leader>c`
- Window `<leader>w`
- Quickfix `<leader>q`
- Loclist `<leader>l`
- Code `<space>c` TODO
- Database `<leader>b`
- Rest `<leader>r`

### FOLDING
- Unfold all file `zR`
- Fold all file `zM`
- Unfold all selection `zC`
- Toggle fold selection `za`
- Toggle fold selection `zA`
- Open fold selection `zo`
- Open fold all selection `zO`
- Close fold selection `zC`
- Close all fold selection `zc`

### MOVEMENT
- Move selection line up `v K`
- Move selection line down `v J`
- Jump `<leader>j`
- Jump over Windoe `<leader>jw`
- Jump to line `<leader>l`
- Jump to sign `<leader>s`
- Jump next fucntion start `]m`
- Jump next class start `]]`
- Jump next fucntion end `]M`
- Jump next class end `][`
- Jump previous function start `[m`
- Jump previous class start `[[`
- Jump previous function end `[M`
- Jump previous class end `[]`

### COPY & PASTE
- Copy `y`
- Copy selection to Clipboard `v y`
- Copy line `yy`
- Copy line to ClipBoard `YY`
- Paste appending `p`
- Paste prepanding `P`

### SELECTION
- Select inside `v i "`
- Select outside `v a "`
- Treesitter `gnn`
- Node incremental `grn`
- Scope incremental `grc`
- Node decremental `grm`
- Select inner function `if`
- Select outer function `af`
- Select outer class `ac`
- Select class inner `ic`

### EMMET
- `div+div>p>span+em^bq`
- `div>(header>ul>li*2>a)+footer>p`
- `div#header+div.page+div#footer.class1.class2.class3`
- `td[title="Hello world!" colspan=3]`
- `ul>li.item$@-3*5`
- `p>{Click }+a{here}+{ to continue}`

[DOCS](https://docs.emmet.io/abbreviations/syntax/)

### SURROUNDINGS
- change '' to "" `cs'"`
- change tag to "" `cst"`
- remove "" `ds"`
- selection `V S <p>`
- word `ysiw"`
- tag `ysi<p>`
- line `yss)`

### LSP
- Go refrence `gr`
- Go definition `gd`
- Code actions `<space>ca`
- Code Lens `<space>la`
- Diagnostics Quickfix `<space>q`
- Format `<space>f`
- Type definition `<space>D`
- Document symbol `g0`
- Workspace Symbol `workspace symbol`
- Go implementation `gi`
- Rename `<space>rn`
- Show definition `gp`
- Signaturehelp `gs`
- Hover doc `K`
- Function outer `df`
- Class outer `dF`

### WORKSPACE
- Split `<leader>h`
- Split vertical `<leader>v`
- Close buffer `<leader>q`
- Broot `<leader>br`
- File browser `<leader>b`
- Arrange Windows `<leader>H/L/J/K`
- Find buffer `<leader>fb`
- Find files `<leader>ff`
- File grep `<leader>fg`
- Fles Media `<leader>fm`
- Terminal `<leader>t`
- CWD to file `<leader>.`
- CWD to parent `<leader>..`

### TELESCOPE
- Open vertical `<C-v>`
- Open horizontal `<C-s>`
- Open tab `<C-t>`
- Mark `tab`
- Up Down `<C-n/p>`
- Selection to Quickfix `<M-q>`
- All to quickfix `<C-q>`
- Scroll preview `<C-d/u`
- Show Quickfix `<leader>qf`
- Show loclist `<leader>lf`

### GIT

#### BASIC
- LazyGit `<leader>gl`
- Git merge/diff `<leader>gm`
- Git merge tool `<leader>gmt`
- Git remove `<leader>grf`
- Git Commits `<leader>gc`
- Git blame `<leader>gb`
- Git branch commits `<leader>gbc`
- Git branch `<leader>gbr`
- Git repos `<leader>gr`
- Git status `<leader>gs`
- Show file in browser `<leader>gbw`
  **NOTE: Git repos is just a local search**

#### DIFFVIEW
- Git merge `<leader>gd`
- Go file `gf`
- Stage `-`
- Stage all `S`
- Unstage all `U`
- Revert `X`
- File history `gfh`
- Show last commit `gdl`

##### HUNKS
- Git go next hunk `]c`
- Git go prev hunk `[c`
- Git stage hunk `<leader>hs`
- Git undo stage hunk `<leader>hu`
- Git reset hunk `<leader>hr`
- Git reset buffer `<leader>hR `
- Git preview hunk `<leader>hp`
- Git blame hunk `<leader>hb`
- Git stage buffer `<leader>hS`
- Git undo buffer `<leader>hU`

### DEBUG
- Add breakpont `<leader>db`
- Start debbuger `<leader>ds`
- Debug lua `<leader>dl`
- Debug java `<leader>dj`
- Debug Commands `<leader>dc`
- Debug Variables `<leader>dv`
- Debug Brealpoints `<leader>db`
- Debug Ui `<leader>dt`
- Debug REPL open `<leader>do`
- Debug step over `<leader>dso`
- Debug step into `<leader>dsi`

### DATABASE
- DB Ui `<leader>bu`
- DB Find `<leader>bf`
- DB Rename `<leader>brr`
- DB LastQuery `<leader>bl`

### REST
- Run http `<leader>r`
- Run Preview `<leader>rp`
- Run Last `<leader>rl`

### DOCKER
- Show docker panel `<leader>d`

### UTILS
    - sudormrfbin/cheatsheet.nvim
    - folke/which-key.nvim
    - ojroques/nvim-lspfuzzy
    - tjdevries/nlua.nvim
    - xolox/vim-session

#### SCRATCHPAD
    - metakirby5/codi.vim

### MARKDOWN
    - ellisonleao/glow.nvim

### REST
    - NTBBloodbath/rest.nvim

### DATABASE
    - kristijanhusak/vim-dadbod-ui
    - tpope/vim-dadbod

### FORMATTER
    - mhartington/formatter.nvim

### DOCKER
    - kkvh/vim-docker-tools

### DEBUG
    - jbyuki/one-small-step-for-vimkind
    - rcarriga/nvim-dap-ui
    - mfussenegger/nvim-dap
    - nvim-telescope/telescope-dap.nvim
    - theHamsta/nvim-dap-virtual-text

### GIT
    - lewis6991/gitsigns.nvim
    - sindrets/diffview.nvim
    - tpope/vim-fugitive
    - cljoly/telescope-repo.nvim
