export VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID_JEST

vercel --local-config ./config/deploy/vercel.coverage.json --scope $VERCEL_SCOPE --token $VERCEL_TOKEN
