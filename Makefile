spreadsheet:
	node ./tools/download_xlsx.js
	node ./tools/build_data_json.js

# deploy:
# 	aws s3 sync --delete --acl public-read dist s3://apps.texastribune.org/perry-legacy/
