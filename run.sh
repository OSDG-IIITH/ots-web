#!/bin/bash

if [[ $OTS_WEBSITE_DIR == "" ]]; then
    OTS_WEBSITE_DIR=.
fi

docker-compose -f $OTS_WEBSITE_DIR/docker-compose.yml -p web up --build
