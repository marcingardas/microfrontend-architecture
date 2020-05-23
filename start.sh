#!/bin/bash

cd packages/container && yarn && yarn serve &
P1=$!
cd packages/navigation && yarn && yarn build:watch &
P2=$!
cd packages/navigation && yarn serve &
P3=$!
cd packages/timetable && yarn && yarn build:watch &
P4=$!
cd packages/timetable && yarn serve &
P5=$!
wait $P1 $P2 $P3 $P4 $P5
