export VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID_E2E

VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID vercel --local-config ./config/deploy/vercel.coverage-e2e.json --scope $VERCEL_SCOPE --token $VERCEL_TOKEN
