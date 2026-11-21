#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch.
set -euo pipefail

npm run build
npx gh-pages -d dist
echo "Deployed: https://aniketjethva.github.io/aniket-jethava-portfolio/"
