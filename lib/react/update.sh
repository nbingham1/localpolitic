#!/bin/sh

rm -f *.js
wget -O react.js https://unpkg.com/react@16.12.0/umd/react.development.js
wget -O react-dom.js https://unpkg.com/react-dom@16/umd/react-dom.development.js

