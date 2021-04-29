#!/bin/bash
curl -X POST -H "Content-Type: application/json" \
                                      -d '{
                                      "jsonrpc": "2.0",
                                        "method": "personal_unlockAccount", 
                                        "params": ["0xcff3ae6d6e1179cae2811254895b802faf729b82", "k3OJhM97c44e"],
                                        "id": 1
                                      }' http://localhost:8546

