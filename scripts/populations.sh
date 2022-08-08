cd `dirname $0`
apikey=$1

for i in {1..47}; do
  curl -H "x-api-key: $apikey" -o "../src/data/$i.json" "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=11"
  sleep 1
done
