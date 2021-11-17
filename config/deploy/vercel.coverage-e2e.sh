export VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID_E2E

vercel \
   --production \
   --scope $VERCEL_SCOPE \
   --token $VERCEL_TOKEN \
   --local-config ./config/deploy/vercel.coverage-e2e.json
