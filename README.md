# DZ Cleaning Services - Deployment Guide

## 1. رفع المشروع على GitHub

1. أنشئ حساب GitHub من https://github.com إذا لم يكن لديك.
2. افتح الطرفية (Terminal أو Git Bash) في مجلد المشروع.
3. نفذ الأوامر التالية:

```bash
git init
git add .
git commit -m "Initial commit - DZ Cleaning site"
git branch -M main
git remote add origin https://github.com/dzcleaning/dz-cleaning.service.git
git push -u origin main
