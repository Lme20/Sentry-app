#!/bin/bash

# Get the current date
DATE=$(date +"%Y-%m-%d")

# Update the date in your files
# This searches for files with the comment and excludes node_modules, .expo, and .vscode
find . -type f \( -name "*.js" -or -name "*.jsx" \) -not -path "./node_modules/*" -not -path "./.expo/*" -not -path "./.vscode/*" -exec grep -l "Last Updated:" {} \; | xargs sed -i '' 's/YYYY-MM-DD/'"$DATE"'/g'
