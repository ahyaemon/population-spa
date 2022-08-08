cd `dirname $0`
apikey=$1
curl -H "x-api-key: $apikey" -o ../src/data/prefectures.json https://opendata.resas-portal.go.jp/api/v1/prefectures
