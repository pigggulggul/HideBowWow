# Deleting specific Kafka log files
rm -rf ./kafka/logs/1/meta.properties
rm -rf ./kafka/logs/2/meta.properties
rm -rf ./kafka/logs/3/meta.properties

# Execute the main container command
exec "$@"