curl -X POST "http://your-jenkins-url/computer/doCreateItem?name=new-agent-node-name" \
--user your-username:your-password \
--header "Content-Type: application/json" \
--data '{
  "name": "new-agent-node-name",
  "type": "hudson.slaves.DumbSlave$DescriptorImpl",
  "numExecutors": 1,
  "remoteFS": "/home/jenkins",
  "labelString": "new-agent-node-label",
  "mode": "NORMAL",
  "launcher": {
    "st": {
      "protocol": "ssh",
      "privatekey": "your-private-key"
    }
  },
  "retentionStrategy": {
    "hudson.slaves.RetentionStrategy$Always": {}
  },
  "nodeProperties": {
    "hudson.slaves.EnvironmentVariablesNodeProperty": {}
  }
}'
