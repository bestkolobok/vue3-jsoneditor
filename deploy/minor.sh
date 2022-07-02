#!/usr/bin/env sh

# abort on errors
set -e

# final commit
git add -A
git commit -m 'deploy'

# update package version
npm version minor

# build
npm run build
npm run build:gh

# publish
npm publish

# navigate into the build output directory
cd gh-dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:bestkolobok/vue3-jsoneditor.git main:gh-pages

cd -