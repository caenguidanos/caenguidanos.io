# GCP Artifact Registry - Repository

## Create Docker Repository

```bash
gcloud artifacts repositories create "$REPOSITORY_NAME"
   --repository-format=docker \
   --location="$PROJECT_REGION" \
   --description="$REPOSITORY_DESCRIPTION"
```

## Configure Docker Auth

```bash
gcloud auth configure-docker $PROJECT_REGION-docker.pkg.dev
```

## List

```bash
gcloud artifacts repositories list
```

## Push Container

```bash
docker push $PROJECT_REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/$IMAGE_NAME:$IMAGE_TAG
```
