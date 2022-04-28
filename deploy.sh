rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:auoHan/vue3-peach-ui-website-1.git &&
git push -f -u origin main &&
cd -
echo https://auohan.github.io/vue3-peach-ui-website-1/
