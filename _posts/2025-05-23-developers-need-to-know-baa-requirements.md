---
layout: post
image: 'assets/images/developers-need-to-know-baa-requirements.png'
title: "Developers Need to Know: Do Patient Access Apps Need to Sign a BAA with Providers/EHRs?"
date: 2025-05-23 10:18:00
categories: [ guidebook  ]
tags: [legal, information-blocking]
author: jason
---


Developers building patient-directed apps often get asked by healthcare providers or EHR vendors to sign a Business 
Associate Agreement (BAA). So is this actually required? Let's clear this up.

# First What Is a BAA? Why Are They Traditionally Required?

A Business Associate Agreement (BAA) is a legal document required under HIPAA regulations that outlines responsibilities 
for safeguarding protected health information (PHI) when third parties perform services on behalf of healthcare providers 
or EHR vendors. BAAs ensure that anyone handling sensitive patient data adheres strictly to privacy and security standards. 
Traditionally, BAAs are required for any external partner handling PHI **directly** for healthcare providers like billing companies, 
transcription services, or cloud storage providers.

However, for **patient-directed** health apps, the situation is different.

# What Does the Law Say?

Under HIPAA guidelines, healthcare providers and their EHR vendors must share electronic protected health information 
(ePHI) with any third-party app **designated by a patient**, provided the data is readily available in the requested format. 
Importantly, **no BAA is required** between the provider (or their EHR vendor) and the app developer because the app is not 
acting on behalf of the provider and therefore doesn’t meet the definition of a business associate.

This distinction matters because a BAA is specifically intended for third parties performing services directly for a 
healthcare provider or EHR vendor. Patient-directed apps are chosen directly by patients for their personal use and don't 
typically fit the criteria for BAA requirements. [(HHS Guidance)](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access-right-health-apps-apis/index.html)

**BAA Required:**
- Provider-selected App ➜ Scheduling/Billing/Operations/Treatment ➜ ✅ BAA Required

**No BAA Required:**
- Patient-selected App ➜ Personal Health Management ➜ ❌ No BAA Required

# Why Does This Matter for Developers?

When providers or EHR vendors misunderstand HIPAA and incorrectly require a BAA, it leads to unnecessary legal back-and-forth. 
Developers end up wasting valuable time and resources on issues that shouldn’t exist in the first place. The result?

- Costly legal reviews and contract negotiations
- Delays in integration timelines
- Higher engineering overhead
- Frustrated patients waiting for access to their health data

These challenges are avoidable, but only if everyone understands when a BAA is (and isn’t) required.

# So What Can Developers Do?

First, know your rights. If you’re building a patient-directed app and the provider is requiring a BAA, they may not fully 
understand how HIPAA applies. Even though it’s not your burden to fix, it can become your delay if you don’t push back.

At Fasten Health, we’ve worked through this with developers who’ve faced stalled integrations, confusing paperwork, or 
straight denials. Our unified API takes care of those barriers by standardizing the process so you can focus on building, 
not negotiating.

If you want to handle it on your own, you can push back. Filing an Information Blocking Complaint is one option, and 
we’ve broken it down step-by-step in this post: [How to Report Information Blocking to ASTP](https://blog.fastenhealth.com/developers-need-to-know-information-blocking-complaint). 
If you’re not sure what to do next, we’re happy to chat.
