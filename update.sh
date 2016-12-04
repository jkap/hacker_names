#!/bin/sh

pushd `dirname $0` > /dev/null
git pull
popd > /dev/null
