#!/bin/sh

if [ "$CI" != true ]; then
   echo "Olé"
else
   echo "Olá"
fi
