#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Delete existing processes if they exist
pm2 delete 2b 2>/dev/null || true
pm2 delete 2c 2>/dev/null || true
pm2 delete 3 2>/dev/null || true

# Start the 2b server (index.html) on port 8850
pm2 start "$SCRIPT_DIR/../servers/server_2b.js" --name 2b

# Start the 2c server (2c.html) on port 8851
pm2 start "$SCRIPT_DIR/../servers/server_2c.js" --name 2c

# Start the 3 server (Module3.html) on port 8852
pm2 start "$SCRIPT_DIR/../servers/server_3.js" --name 3

echo "Servers started:"
echo "2b (index.html): http://localhost:8850"
echo "2c (2c.html): http://localhost:8851"
echo "3 (Module3.html): http://localhost:8852"
echo ""
echo "To stop servers: pm2 delete 2b 2c 3"
