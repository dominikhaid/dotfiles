#!/bin/bash
#shopt -s nullglob dotglob
SCRIPT=$(readlink -f $0)
SCRIPTPATH=`dirname $SCRIPT`
options=($(echo $@ | tr " " "\n"))

#NOTE TOOLS
__help=$"
Usage: $(basename $0) app [OPTIONS]
Options:
  --set                        Set permanent config
  --config                      Set run with config once
"
source $SCRIPTPATH/inst-depend
source $SCRIPTPATH/pick-file
source $SCRIPTPATH/scripts-help
source $SCRIPTPATH/pip-detect

LIST_DIR=~/.config/proxychains
COPY_DIR=/etc/proxychains4.conf
FILE_REGEX="*.conf"
SCRIPT_DEPEND=(proxychains4 qbittorrent transmission-cli)
TARGETS=()
LIST_FILES=()
TARGET=""

if [[ "${options[@]}" == "--help" ]]; then
    echo "$__help"
    exit
fi

if ! command -v we-get &>/dev/null;then
      pip3 install https://github.com/rachmadaniHaryono/we-get/archive/dev.zip
fi

    if  command -v we-get &>/dev/null;then
        TARGETS=($(we-get -G))
    fi

    list_targets

list_targets() {
  declare -i cnt=1
  for target in "${TARGETS[@]}";
  do
    echo "( $cnt ) " $target
    cnt+=1
  done;
  get_user_input
}

get_user_input() {
  echo ""
  echo "Input the number inside the brackets to pick a config"
  read TARGET_NR
  if [ -n "$TARGET_NR" ] && [ "$TARGET_NR" -eq "$TARGET_NR" ]; then
     TARGET_NR=$((TARGET_NR - 1));
     TARGET=${TARGETS[$TARGET_NR]}
  else
    echo "Something is wrong with your input!";
    exit;
  fi
}

get_targets

exit;
