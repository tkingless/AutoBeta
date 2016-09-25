#!/bin/bash

if [ ! -d $(pwd)/enabled ] ; then
echo "enabled folder not exists, going to create it..." 
mkdir $(pwd)/enabled
fi

echo "creating sym link to all .js of this folder" 
ln -s $(pwd)/*.js enabled/