export VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID_JEST
echo "$VERCEL_PROJECT_ID"
VERCEL_PROJECT_ID="$VERCEL_PROJECT_ID" vercel --local-config ./config/deploy/vercel.coverage.json --scope $VERCEL_SCOPE --token $VERCEL_TOKEN
