حاضر، جهزت لك ملف README جاهز يحتوي كل الخطوات اللي شرحناها بالضبط لرفع المشروع على GitHub وربطه مع Netlify.


---

محتوى ملف README.md (يمكنك نسخه وحفظه في مجلد المشروع):

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
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main

> استبدل USERNAME باسم حسابك على GitHub وREPOSITORY باسم المستودع الذي تريد إنشاءه.




---

2. ربط المستودع بـ Netlify

1. سجل دخول في https://app.netlify.com.


2. اضغط على New site from Git.


3. اختر GitHub.


4. امنح Netlify صلاحية الوصول.


5. اختر مستودع المشروع.


6. اترك الإعدادات كما هي (لا حاجة لبناء لأن الموقع ثابت).


7. اضغط Deploy site.


8. انتظر قليلاً حتى يكتمل النشر.




---

3. تفعيل نموذج الحجز (Formspree)

الموقع يحتوي نموذج حجز يرسل طلبات إلى بريدك dz.cleaning@yahoo.com عبر Formspree.

قم بالتسجيل في https://formspree.io بنفس البريد.

قم بتفعيل الحساب واتبع التعليمات لاستقبال الطلبات بشكل رسمي.



---

4. تخصيص اسم نطاق (اختياري)

يمكنك ربط اسم نطاق خاص من Netlify أو من مزود النطاقات.

في لوحة تحكم Netlify، اذهب إلى Domain settings ثم Add custom domain.

اتبع التعليمات لتحديث سجلات DNS.



---

مبروك! موقعك جاهز للانطلاق 🎉


---

إذا احتجت أي مساعدة إضافية تواصل معي.

---

هل تريد أرسل لك الملف جاهزًا هنا لتقوم بتنزيله؟

