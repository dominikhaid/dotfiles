ZSH_THEME="agnoster"
ENABLE_CORRECTION="true"
ZSHZ_CASE=smart
DISABLE_MAGIC_FUNCTIONS=true
ZSH_AUTOSUGGEST_MANUAL_REBIND=1
COMPLETION_WAITING_DOTS=true
DISABLE_UNTRACKED_FILES_DIRTY=true
ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#ff00ff,bg=cyan,bold,underline"
EMOJI_CLI_KEYBIND=^a
#ENHANCD_COMPLETION_BEHAVIOR="list"


bindkey -v
export TMPDIR="/tmp" 
export ENHANCD_FILTER="fzf --preview='exa --tree --group-directories-first --git-ignore --level 1 {}'"
export ENHANCD_COMMAND=ecd
export EDITOR=nvim
source "$HOME/antigen.zsh"
export ZSH="$HOME/.oh-my-zsh"
source $ZSH/oh-my-zsh.sh
export TERM="xterm-256color" # This sets up colors properly
export HISTORY_IGNORE="(ls|cd|pwd|exit|sudo reboot|history|cd -|cd ..)"
export HISTCONTROL=ignoreboth 	
export VISUAL=nvim
# export ARCHFLAGS="-arch x86_64"
# export LANG=en_US.UTF-8


source "$HOME/.local/share/zsh/zsh-autocomplete/zsh-autocomplete.plugin.zsh"
antigen use oh-my-zsh
antigen bundle fikovnik/zsh-quickjump
antigen bundle git
antigen bundle pip
antigen bundle autojump
antigen bundle command-not-found
antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle b4b4r07/enhancd
antigen bundle zsh-users/zsh-autosuggestions
#antigen bundle leophys/zsh-plugin-fzf-finder
#antigen bundle sinetoami/web-search
#antigen bundle IngoMeyer441/zsh-easy-motion
# Tell Antigen that you're done.
antigen apply


autoload -U compinit && compinit
autoload zmv
autoload zcalc
zstyle ':completion:*' menu select


alias ..='cd ..' 
alias ...='cd ../..'
alias .3='cd ../../..'
alias .4='cd ../../../..'
alias .5='cd ../../../../..'

alias br='br -sdph'

# git
#alias addup='git add -u'
#alias addall='git add .'
#alias branch='git branch'
#alias checkout='git checkout'
#alias clone='git clone'
#alias commit='git commit -m'
#alias fetch='git fetch'
#alias pull='git pull origin'
#alias push='git push origin'
#alias status='git status'
#alias tag='git tag'
#alias newtag='git tag -a'

if [ -z "$SSH_AUTH_SOCK" ] ; then
   eval `ssh-agent -s`
     ssh-add
fi

eval "$(starship init zsh)"
eval "$(zoxide init zsh)"
#source /home/dominik/.config/broot/launcher/bash/br

# Generated for envman. Do not edit.
#[ -s "$HOME/.config/envman/load.sh" ] && source "$HOME/.config/envman/load.sh"

