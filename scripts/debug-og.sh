#!/bin/bash

# OG Image Debug Script
# Tests the OpenGraph image generation locally and on production

set -e

PRODUCTION_URL="https://247sales.dyagnosys.com"
LOCAL_URL="http://localhost:3000"

echo "🔍 OG Image Debug Script"
echo "========================"
echo ""

test_og_endpoint() {
    local base_url=$1
    local name=$2
    
    echo "Testing $name ($base_url)"
    echo "------------------------"
    
    # Test without trailing slash
    echo -n "  /api/og (no slash): "
    local status_no_slash=$(curl -s -o /dev/null -w "%{http_code}" "${base_url}/api/og" 2>/dev/null || echo "000")
    echo "HTTP $status_no_slash"
    
    # Test with trailing slash
    echo -n "  /api/og/ (with slash): "
    local status_with_slash=$(curl -s -o /dev/null -w "%{http_code}" "${base_url}/api/og/" 2>/dev/null || echo "000")
    echo "HTTP $status_with_slash"
    
    # Download image and check
    local img_file="/tmp/og-${name}.png"
    curl -s "${base_url}/api/og/" -o "$img_file" 2>/dev/null
    
    if [ -f "$img_file" ]; then
        local file_type=$(file -b "$img_file")
        local file_size=$(ls -la "$img_file" | awk '{print $5}')
        echo "  Image type: $file_type"
        echo "  Image size: $file_size bytes"
        
        if [[ "$file_type" == *"PNG"* ]]; then
            echo "  ✅ Valid PNG image generated"
        else
            echo "  ❌ NOT a valid PNG image!"
            echo "  Content: $(cat "$img_file")"
        fi
    else
        echo "  ❌ Failed to download image"
    fi
    echo ""
}

# Check if local server is running
echo -n "Checking local server... "
if curl -s -o /dev/null -w "%{http_code}" "${LOCAL_URL}" 2>/dev/null | grep -q "200\|301\|302"; then
    echo "✅ Running"
    test_og_endpoint "$LOCAL_URL" "local"
else
    echo "❌ Not running (start with 'npm run dev')"
    echo ""
fi

# Test production
test_og_endpoint "$PRODUCTION_URL" "production"

# Test OpenGraph meta tags
echo "OpenGraph Meta Tags Check"
echo "-------------------------"
echo ""

check_meta_tags() {
    local url=$1
    local name=$2
    
    echo "Checking $name: $url"
    
    local html=$(curl -s "$url" 2>/dev/null)
    
    # Check og:image
    local og_image=$(echo "$html" | grep -oP 'property="og:image"\s*content="[^"]*"' | sed 's/.*content="//;s/"//')
    if [ -n "$og_image" ]; then
        echo "  og:image: $og_image"
        
        # Check if trailing slash
        if [[ "$og_image" == */ ]]; then
            echo "  ✅ Has trailing slash"
        else
            echo "  ⚠️  Missing trailing slash (may cause redirect issues)"
        fi
    else
        echo "  ❌ og:image not found"
    fi
    
    # Check twitter:image
    local twitter_image=$(echo "$html" | grep -oP 'name="twitter:image"\s*content="[^"]*"' | sed 's/.*content="//;s/"//')
    if [ -n "$twitter_image" ]; then
        echo "  twitter:image: $twitter_image"
    else
        echo "  ⚠️  twitter:image not found"
    fi
    
    echo ""
}

check_meta_tags "${PRODUCTION_URL}/en/" "EN page"
check_meta_tags "${PRODUCTION_URL}/pt/" "PT page"

# Use Facebook Sharing Debugger API simulation
echo "Social Media Preview Simulation"
echo "--------------------------------"
echo ""
echo "Test your OG images with these tools:"
echo "  • Facebook: https://developers.facebook.com/tools/debug/?q=${PRODUCTION_URL}/pt/"
echo "  • Twitter:  https://cards-dev.twitter.com/validator"
echo "  • LinkedIn: https://www.linkedin.com/post-inspector/inspect/${PRODUCTION_URL}/pt/"
echo "  • Discord:  Just paste the URL in a chat"
echo ""

echo "Done!"
