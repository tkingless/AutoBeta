#!/bin/bash

#SetEnv
#ABSOLUTE_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
ABSOLUTE_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo $ABSOLUTE_PATH

PATH="$ABSOLUTE_PATH/node_modules/phantomjs/bin:$PATH" 
