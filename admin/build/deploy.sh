#!/usr/bin/env bash

name=$1
branch="master"
target=".deploy"

dist_path="dist"
index_path=${dist_path}/index.html
to_dist_path=""
to_index_path=${to_dist_path}/index.html

repo=""

if [ ! -d "node_modules" ]; then
    npm install --save-dev
    echo "\033[34m npm install finished \033[0m"
fi

if [ ! -d ${target} ]; then
    git clone ${repo} ${target}
    echo "\033[34m clone target finished \033[0m"
fi

cd ${target}
git checkout ${branch}
git pull origin ${branch} --rebase
cd ..

# begin build
npm run build
echo "\033[34m dest success \033[0m"

if [ ! -d ${target}/${to_dist_path} ]; then
    echo "\033[31m no release repo \033[0m"
    exit
fi

rm -rf ${target}/${to_dist_path}/*
echo 'clear release'

# cp assets
cp -Rf ${dist_path}/* ${target}/${to_dist_path}
echo 'add to deploy'

# cp index
#cp -f ${from_path}/${fe_index_path} ${target}/${index_topath}

# cp ico
#cp src/assets/images/favicon.ico ${target}/hulk-web/src/main/webapp/hulk2/dist/img/

echo "\033[34m copy success \033[0m"

# git commit back-end repo
cd ${target}
git add .
git commit -m "fe-release"
git push origin HEAD:refs/for/${branch}

echo "\033[34m fe-release \033[0m"
