#!/bin/bash
curl -X POST -H "Content-Type: application/json" \
                                      -d '{
                                      "jsonrpc": "2.0",
                                        "method": "personal_unlockAccount", 
                                        "params": ["0x42a71e1dfa96cd0652028fa0c09e7dddf129ec49", "1234567890"],
                                        "id": 1
                                      }' http://172.18.0.2:8546

