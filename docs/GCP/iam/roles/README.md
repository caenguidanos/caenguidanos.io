# IAM Roles

## Create Role

```bash
gcloud iam roles create $ROLE_ID --project=$PROJECT_ID \
  --file=$YAML_FILE_PATH
```

## Bind role to Service Account

```bash
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="projects/$PROJECT_ID/roles/$ROLE_NAME"
```

## Describe Role

```bash
gcloud iam roles describe $ROLE_NAME --project="$PROJECT_ID"
```
