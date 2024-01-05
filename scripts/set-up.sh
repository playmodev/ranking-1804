#/bin/bash
sed -E -i '' "s|(VITE_API_URL=).*|\1$(sls info | grep endpoint | awk '{print substr($0, 17)}')|" '.env.production'