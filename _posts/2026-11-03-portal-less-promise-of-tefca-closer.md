---
layout: post
image: 'assets/images/portal-less-promise-of-tefca-closer/the-portal-less-promise.png'
title: "The Portal-Less Promise of TEFCA Is Getting (One Step) Closer"
date: 2026-11-03 10:18:00
categories: [ update  ]
tags: [tefca, featured, sticky]
author: jason
---

Fasten now supports Epic ID and MyChart Central for TEFCA Individual Access Services (IAS).

Patients can sign in once with their Epic ID, select their linked MyChart organizations, and authorize those organizations 
to share their medical records with Fasten -- all in a single experience.

This addresses one of the biggest sources of patient friction in TEFCA -- one that patients have been complaining about 
for years.

Fasten was one of the first IAS Providers to connect to TEFCA in early 2025. From the beginning, patients retrieving records
from Epic health systems had to complete identity proofing and then sign in again to each organization’s patient portal. 
Unfortunately, this made the TEFCA experience more burdensome than connecting directly through traditional SMART-on-FHIR 
integrations, which only require a portal login. That additional friction undermined TEFCA’s central promise: verify your 
identity once and retrieve your longitudinal medical history across the entire network -- no portals required.

With Epic ID/MyChart Central finally live on TEFCA, we can almost cross off another item from our 
["TEFCA IAS: A Story of Interoperability and Unrealized Potential"](https://blog.fastenhealth.com/tefca-ias-interoperability) list. 
We're on the cusp of that portal-less future.

So for those of you following along, here's a quick timeline of Epic Nexus on TEFCA IAS:

- March 2025: Fasten became one of the first IAS applications to retrieve medical records from Epic Nexus in production.
- July 2025: Epic announced MyChart Central and Epic ID, giving patients a single login for their linked MyChart accounts.
- October 2026: Epic ID supported on TEFCA for IAS apps. Patients using the Fasten widget can authorize all their linked healthcare institutions to share their records with just a single portal login! 🎉

There is an important caveat: this experience is currently available only for Epic sites running Epic’s August 2026 release.

Brendan Keeler's ["Your Version Is Showing"](https://healthapiguy.substack.com/p/your-version-is-showing) post dives into 
the nitty-gritty details, but suffice it to say that most of Epic's health system customers will be rolling onto the August 
2026 release over the next 6-9 months.

This is not the end of portal friction, but it is meaningful progress toward the future we were promised: a nationwide 
network where patients can verify their identity once and retrieve their complete medical history without tracking down 
a collection of usernames and passwords.

<video style="display: block; margin-left: auto; margin-right: auto;" class="video-js" controls="" preload="auto" width="600" poster="MY_VIDEO_POSTER.jpg" data-setup="{}">
<source src="/assets/media/Epic-Community-Linked-Accounts-Oct-22.mp4" type="video/mp4" />
<p class="vjs-no-js">
  To view this video please enable JavaScript, and consider upgrading to a
  web browser that
  <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
</p>
</video>

<div class="alert alert-secondary" role="alert">
<i class="fa fa-info-circle"></i>
If you're interested in TEFCA or want to learn more about patient-mediated access to medical records, <a style="color:white; text-decoration: underline; font-weight: bold" href="https://calendly.com/fastenhealth/book-intro">please reach out</a>.
</div>
