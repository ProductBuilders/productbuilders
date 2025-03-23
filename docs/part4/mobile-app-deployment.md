---
title: "Chapter 8 - Mobile App Deployment – From Build to Store"
description: "Learn how to deploy your mobile application to the App Store and Google Play Store using Expo and best practices."
keywords: "mobile deployment, Expo, App Store, Google Play, TestFlight, app publishing"
author: "Product Builders"
---

# Chapter 8: Mobile App Deployment – From Build to Store 📱🚀

> "The most important thing is the user experience and how your app can solve a problem." - WWDC

<div class="content-box">

Building your mobile app is a big step, but getting it into the hands of users through the [App Store](https://developer.apple.com/app-store/) (iOS) and [Google Play Store](https://play.google.com/console) (Android) is where your product truly comes to life. This chapter walks you through how to deploy an Expo-based mobile app, starting from setting up your Expo project to publishing on both platforms.

</div>

## 1️⃣ Setting Up Your Expo Project for Deployment

<div class="content-box">

Expo makes mobile app development and deployment significantly easier. Before you think about publishing, properly configuring your Expo project is essential.

### ✅ Step 1: Sign Up and Set Up Expo

Create an Expo Account:
- 👉 Visit [https://expo.dev](https://expo.dev) and sign up for a free account.
- This account is essential for managing builds, OTA (Over-the-Air) updates, and app publishing.

### ✅ Step 2: Create a Project in Expo Dashboard

- Go to [https://expo.dev/accounts](https://expo.dev/accounts)
- Under your account, create a new project. This will generate a unique projectId.
- Copy this projectId — You'll need to use this in your app configuration.

### ✅ Step 3: Add projectId in Your App Code

You can just mention this to your AI Agent so that the Agent configures this on your behalf using the following prompt:

```
These are the expo details:
Slug: {Add yours}
ID: {Add yours}
Owner: {Add yours}

Expo init and build the expo app ({Android or iOS}) using the EAS workflow for {production or preview}
```

👉 Next steps:
- You would need to log in to your Expo account using your username and password (the agent would ask you that).
- In case you face errors, I would suggest deleting folders node_modules, Android or iOS, package-lock.json, and package.json and trying again npm install and expo building yourself

💡 Important:
- This projectId uniquely identifies your app for Expo's build and update services.
- Preview builds are meant for internal testing and QA (Quality Assurance) before you launch your app to real users
- Production builds are optimized, secure, and ready for publishing to the App Store or Google Play Store.

### 📚 Refer to Official Expo Documentation

For the most up-to-date details, always refer to Expo's official documentation:
👉 [Expo Documentation](https://docs.expo.dev/)
👉 [EAS Build Documentation](https://docs.expo.dev/eas/)
👉 [Expo Updates Guide](https://docs.expo.dev/versions/latest/sdk/updates/)

</div>

## 2️⃣ Generating Production Builds (Android & iOS)

<div class="content-box">

### 📌 Step 1: Set Up Developer Accounts

- [Apple Developer Program](https://developer.apple.com/programs/) → $99/year - Join here
- [Google Play Developer Account](https://play.google.com/console/signup) → $25 one-time fee - Join here

### 📌 Step 2: Generate App Builds (Using Expo)

If you're using Expo, generate production-ready builds using:
```bash
eas build -p android
eas build -p ios
```

- Android → .aab file (Android App Bundle)
- iOS → .ipa file
- These are the files you will upload to the respective app stores.

</div>

## 3️⃣ Uploading Your App to the Stores

<div class="content-box">

### 📱 Google Play Store (Android)

➡️ Go to [Google Play Console](https://play.google.com/console) → Click "Create App"
➡️ Fill out App Details (Name, Description, Category)
➡️ Upload the .aab file (mandatory for new apps)
➡️ Set up Store Listing (Screenshots, Privacy Policy, Keywords)

#### ⚠️ New Google Play Policy (Effective 2024)

🚨 Mandatory 14-Day & 20-Tester Rule Before Public Launch:
To move to production, Google now requires:
- At least 20 testers in Open or Closed Testing tracks.
- Minimum 14 days of testing before public release.
- Note: Internal Testing does not count toward this requirement.

#### ✅ Testing Tracks Explained:

<div class="table-container">

| Type | Purpose | Visible Publicly? | Tester Limit | Counts for 14-Day Rule? |
|------|---------|------------------|--------------|------------------------|
| Internal | Quick internal tests within the dev team | ❌ No | Up to 100 | ❌ No |
| Closed | Private invite-only testing (QA teams, trusted users) | ❌ No | Flexible (email/groups) | ✅ Yes |
| Open | Public beta testing, anyone can join | ✅ Yes (as a test) | Unlimited | ✅ Yes |
| Production | Full public release | ✅ Yes | Unlimited | ✅ After meeting the 14-day requirement |

</div>

#### 💡 Recommended Google Play Flow:
1. Start with Internal Testing to fix initial bugs.
2. Move to Closed/Open Testing (get at least 20 testers), run for 14 days.
3. Once stable, promote to Production.

#### ✅ Finding Testers for Google Play (Closed/Open Testing):
- [r/AndroidClosedTesting](https://www.reddit.com/r/AndroidClosedTesting/) – A popular Reddit community for finding Android testers.
- Beta Testing Communities on [Discord](https://discord.com/), and [Slack](https://slack.com/).
- Social Media & Forums – Post in relevant groups ([Twitter](https://twitter.com/), [LinkedIn](https://www.linkedin.com/), [Indie Hackers](https://www.indiehackers.com/), [r/androiddev](https://www.reddit.com/r/androiddev/)).
- Email Lists & Waitlists – Engage early subscribers and communities.

💡 Pro Tip: Always share clear instructions on how to join, what feedback is needed, and where to report issues (e.g., Google Form, Discord, email).

### 🍏 Apple App Store (iOS)

➡️ Upload the .ipa file using:
- [EAS Submit](https://docs.expo.dev/eas/submit/) (direct from Expo CLI), or
- [Apple Transporter](https://apps.apple.com/us/app/transporter/id1450874784) (Mac App Store), or
- [Xcode](https://developer.apple.com/xcode/) (if you prefer manual upload).

➡️ Create an App Store Listing in [App Store Connect](https://appstoreconnect.apple.com/).
➡️ Submit for [TestFlight](https://developer.apple.com/testflight/) Beta Testing (highly recommended before public release).
➡️ Set up App Store Metadata:
  - Screenshots
  - App Icon
  - Description
  - Pricing
➡️ Submit for Review – Typically takes 1–2 days (may take longer if issues arise).
➡️ Once approved, schedule or manually release your app!

💡 Pro Tip: Apple is strict about [Privacy Policies](https://developer.apple.com/app-store/app-privacy-details/), [UI guidelines](https://developer.apple.com/design/human-interface-guidelines/), and [in-app purchases](https://developer.apple.com/in-app-purchase/)—double-check these before submission.

</div>

## 4️⃣ Handling Common Review Rejections

<div class="content-box">

### 💥 Google Play Rejections:
- ❌ Policy Violations – Review [Google's Content Policies](https://play.google.com/about/developer-content-policy/).
- ❌ Crashes & ANRs (App Not Responding) – Test on multiple devices before submission.

### 💥 Apple App Store Rejections:
- ❌ Privacy Issues – Only request necessary permissions.
- ❌ Inaccurate Metadata – Ensure descriptions & screenshots reflect real app behavior.
- ❌ Performance Bugs – Apple tests on real devices, to avoid crashes!

</div>

## 5️⃣ Post-Launch: Monitoring & Updates

<div class="content-box">

🚀 Once your app is live, focus on growth and stability:
- ✅ Crash Monitoring → Tools like [Sentry](https://sentry.io/) or [Firebase Crashlytics](https://firebase.google.com/products/crashlytics).
- ✅ Analytics → [Google Analytics](https://analytics.google.com/), [PostHog](https://posthog.com/), [Mixpanel](https://mixpanel.com/).
- ✅ OTA (Over-The-Air) Updates → Use [Expo Updates](https://docs.expo.dev/versions/latest/sdk/updates/) or [CodePush](https://appcenter.ms/).
- ✅ Push Notifications → [OneSignal](https://onesignal.com/), [Firebase Messaging](https://firebase.google.com/products/cloud-messaging).

</div>

## 🎯 Your App is Live — What's Next?

<div class="content-box">

Congratulations! 🎉 Your app is now available for users worldwide. But the work doesn't stop here:
- Gather real user feedback.
- Monitor performance and stability.
- Plan and release updates to improve user experience.

👉 Up next: How to iterate, scale, and grow your product to the next level! 🚀 

</div>

<div class="nav-links">
  <a href="/part4/web-app-deployment" class="nav-link">← Previous: Web App Deployment</a>
  <a href="/part5/overview" class="nav-link">Next: Growth Overview →</a>
</div> 