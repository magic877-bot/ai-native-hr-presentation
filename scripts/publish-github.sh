#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="ai-native-hr-presentation"
DESCRIPTION="AI-Native 组织：HR 的下一次跃迁——蓝紫霓虹 HTML 演示"

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI 尚未登录，请先运行：gh auth login -h github.com -p https -w" >&2
  exit 1
fi

OWNER="$(gh api user --jq .login)"
REPOSITORY="${OWNER}/${REPO_NAME}"
REPO_URL="https://github.com/${REPOSITORY}"
PAGES_URL="https://${OWNER}.github.io/${REPO_NAME}/"

if gh repo view "${REPOSITORY}" >/dev/null 2>&1; then
  echo "仓库已存在：${REPO_URL}"
  if ! git remote get-url origin >/dev/null 2>&1; then
    git remote add origin "${REPO_URL}.git"
  fi
  git push -u origin main
else
  gh repo create "${REPOSITORY}" \
    --public \
    --description "${DESCRIPTION}" \
    --source=. \
    --remote=origin \
    --push
fi

if gh api "repos/${REPOSITORY}/pages" >/dev/null 2>&1; then
  gh api --method PUT "repos/${REPOSITORY}/pages" \
    -f 'source[branch]=main' \
    -f 'source[path]=/docs' >/dev/null
else
  gh api --method POST "repos/${REPOSITORY}/pages" \
    -f 'source[branch]=main' \
    -f 'source[path]=/docs' >/dev/null
fi

gh repo edit "${REPOSITORY}" --homepage "${PAGES_URL}"

echo
echo "发布已提交："
echo "源码仓库：${REPO_URL}"
echo "在线演示：${PAGES_URL}"
echo "GitHub Pages 首次构建通常需要 1–3 分钟。"
