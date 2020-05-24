#!/bin/bash

cd packages/container && yarn && yarn serve &
P1=$!
cd packages/module-navigation && yarn && yarn build:watch &
P2=$!
cd packages/module-navigation && yarn serve &
P3=$!
cd packages/module-users && yarn && yarn build:watch &
P4=$!
cd packages/module-users && yarn serve &
P5=$!
cd packages/module-user && yarn && yarn build:watch &
P6=$!
cd packages/module-user && yarn serve &
P7=$!
cd packages/module-settings && yarn && yarn build:watch &
P8=$!
cd packages/module-settings && yarn serve &
P9=$!
wait $P1 $P2 $P3 $P4 $P5 $P6 $P7 $P8 $P9
