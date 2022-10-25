#! /bin/bash
kill -9 $(lsof -t -i:8081)
npm run ios
