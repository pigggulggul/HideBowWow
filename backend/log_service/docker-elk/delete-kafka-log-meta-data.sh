# Deleting specific Kafka log files
rm -rf ./kafka/logs/1
rm -rf ./kafka/logs/2
rm -rf ./kafka/logs/3

# Execute the main container command
exec "$@"