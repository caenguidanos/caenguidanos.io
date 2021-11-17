export VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID_JEST

vercel \
   --production \
   --scope $VERCEL_SCOPE \
   --token $VERCEL_TOKEN \
   --local-config ./config/deploy/vercel.coverage.json
