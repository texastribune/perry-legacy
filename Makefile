spreadsheet:
	node ./tools/download_xlsx.js
	node ./tools/build_data_json.js

# export PATH_TO_GOOGLE_AUTH_PEM="~/.ssh/trib/news-apps-template.pem"
# export GOOGLE_SERVICE_ACCOUNT_EMAIL=338673543645-tf5qmnh3m1h16a9avd2ja164v1pqokdg@developer.gserviceaccount.com


# deploy:
# 	aws s3 sync --delete --acl public-read dist s3://apps.texastribune.org/perry-legacy/
