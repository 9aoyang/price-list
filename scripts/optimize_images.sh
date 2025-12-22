#!/bin/bash

# Find all image files in src/assets
find src/assets -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.JPG" -o -name "*.JPEG" -o -name "*.PNG" \) | while read img; do
  # Skip if file is already in a thumbnails folder
  if [[ "$img" == *"/thumbnails/"* ]]; then continue; fi
  
  dir=$(dirname "$img")
  filename=$(basename "$img")
  thumb_dir="$dir/thumbnails"
  thumb_path="$thumb_dir/$filename"
  
  # Create thumbnails directory if it doesn't exist
  mkdir -p "$thumb_dir"
  
  # Generate thumbnail if it doesn't exist
  if [ ! -f "$thumb_path" ]; then
    echo "Generating thumbnail for $filename..."
    # Resize to max 800px width/height (good for cards and mobile)
    sips -Z 800 "$img" --out "$thumb_path" > /dev/null 2>&1
  fi
done

echo "Global image optimization complete."
