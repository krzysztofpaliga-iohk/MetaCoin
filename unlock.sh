#!/bin/bash
curl -X POST -H "Content-Type: application/json" \
                                      -d '{
                                      "jsonrpc": "2.0",
                                        "method": "personal_unlockAccount", 
                                        "params": ["0x8fb9ed1d0a677e0f141699dfc4eedad68432a5fb", "1234567890"],
                                        "id": 1
                                      }' http://localhost:8546

