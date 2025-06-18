---
layout: post
image: 'assets/images/tefca-ias-interoperability/network.jpg'
title: "TEFCA IAS - What Does it Actually Mean for Patients"
date: 2025-06-17 10:18:00
categories: [ guidebook  ]
tags: [tefca, featured, sticky]
author: jason
---

**Note:** This post is a follow-up to [TEFCA IAS - A Story of Interoperability and Unrealized Potential](https://blog.fastenhealth.com/tefca-ias-interoperability), 
where we discussed the structural challenges and limitations facing implementers of 
TEFCA Individual Access Services (IAS). If you haven't read that one, it's probably a good starting point.

With the ASTP's recent [Request for Information on the Health Technology Ecosystem](https://www.federalregister.gov/documents/2025/05/16/2025-08701/request-for-information-health-technology-ecosystem), 
discussions around health IT and interoperability are back in full swing. One recurring question has been: **Do we really need TEFCA IAS if we have Patient Access APIs?**

It's a fair question.

So rather than focus on hypotheticals, we wanted to show you what a real-world implementation of TEFCA IAS looks like for patients, so you can judge the benefits yourself.

---

## Patient Access APIs: What They Were Meant to Fix

Let's start with what's already out there: **Patient Access APIs**, introduced by the [21st Century Cures Act](https://www.healthit.gov/topic/oncs-cures-act-final-rule) and finalized 
by CMS in 2020. These APIs were meant to give patients direct, digital access to their clinical data from their health plans.

In practice, here's what they do:
- Enable patients to authorize third-party apps (like Fasten) to access their data
- Require healthcare organizations to make key records (like procedures, encounters, medications, immunizations) available via FHIR APIs
- Give developers a standardized (though not always consistent) way to build health record apps

And here's what it looks like in the real world:

<video
class="video-js"
controls
preload="auto"
width="600"
poster="MY_VIDEO_POSTER.jpg"
data-setup="{}"
>
<source src="/assets/media/Patient-Access-APIs-5.21.25.mp4" type="video/mp4" />
<p class="vjs-no-js">
  To view this video please enable JavaScript, and consider upgrading to a
  web browser that
  <a href="https://videojs.com/html5-video-support/" target="_blank"
    >supports HTML5 video</a
  >
</p>
</video>

If you watched that carefully, you saw:
- The patient searches for their healthcare provider by name
- They log in to their patient portal
- They grant consent for their data to be shared with their app of choice
- They are redirected back to the app

Simple, right?

Well... not really.

### The Real-World Pain Points
- **Portalitis**: Most patients have seen multiple providers over the years. Imagine having to search for, log into, and authorize sharing from each of those systems. Every. Single. Time.
- **Credential Confusion**: Many patients don't remember their portal credentials. Some never created accounts to begin with.
- **The Integration Tax**: There are over 300,000 healthcare organizations in the US, powered by 400+ different EHRs. If your app wants a full medical record, you have to piece it together like a jigsaw puzzle.

That brings us to TEFCA.

---

## TEFCA IAS: A Trusted Interoperability Layer

The **Trusted Exchange Framework and Common Agreement (TEFCA)** is an ONC-led initiative to streamline health data exchange at scale.

Within TEFCA, **Individual Access Services (IAS)** refers to the specific pathway that lets patients request their records through 
Qualified Health Information Networks (QHINs), rather than individual hospital portals. Verify your identity once, and 
pull all of your medical records.

It sounds like the [holy grail](https://brendanjkeeler.medium.com/indiana-jones-and-the-personal-health-record-c9935bdc956d) of interoperability, but what does it actually look like for patients?

<video
class="video-js"
controls
preload="auto"
width="600"
poster="MY_VIDEO_POSTER.jpg"
data-setup="{}"
>
<source src="/assets/media/TEFCA-Direct-Clear-6.18.25.mp4" type="video/mp4" />
<p class="vjs-no-js">
  To view this video please enable JavaScript, and consider upgrading to a
  web browser that
  <a href="https://videojs.com/html5-video-support/" target="_blank"
    >supports HTML5 video</a
  >
</p>
</video>

So What Just Happened? 
- A patient authenticated with an identity provider (in our case, via CLEAR ID)
- The TEFCA IAS-enabled application makes a query for the patients records on the TEFCA network via their QHIN.
- Records from participating health systems were delivered back to the app, without requiring portal logins
- It looks like magic

---

## Problem Solved, Right?

Well, not quite. TEFCA IAS is a huge leap forward, but we're not at the finish line.

### A Few Caveats

- **Epic's Approach Is Different**
    Epic uses something called Facilitated FHIR, which still requires the patient to authenticate with each institution's portal. They're working toward a unified login across Epic sites, but that's still in the future. We'll dive deeper into Epic Nexus & Facilitated FHIR in a future post.
- **Health Information Exchange (HIE) Participation Is Optional and Pricey**
    TEFCA only works if the data lives in a network that participates. In many states, HIE participation is voluntary, and smaller providers may not be included at all. That means a lot of care data—especially from primary care, specialists, or smaller clinics—might still require the traditional portal-based flow.
- **Technical Hurdles Still Exist**
    While some of the technical challenges discussed in our previous post have been overcome, many still exist (and we'll find more as TEFCA matures). 


---

## What This Means for Patients (and Developers)

<img src="/assets/images/tefca-ias/HIE.png" alt="drawing" width="45%"/>
<img src="/assets/images/tefca-ias/TEFCA.png" alt="drawing" width="45%"/>

Like many of you, we've been trying to figure out this out for a while. And it feels incredible to finally see that hard work start to pay off.

In the short term, apps like Fasten will need to support both TEFCA IAS and traditional Patient Access APIs to ensure 
comprehensive coverage. Until TEFCA participation is universal, there's no getting around that.

In the long term, we're hopeful that CMS and ASTP will incentivize TEFCA with stronger carrots (and sticks) to make participation the default, not the exception.

In the meantime, we'll keep building tools that work across both models, because patients (and app developers) shouldn't have to care about 
the backend plumbing.

<br/>
<div class="alert alert-secondary" role="alert">
    <i class="fa fa-info-circle"></i>
    <strong>Want to learn more about TEFCA IAS and Patient Access APIs?</strong><br/>
    Let’s talk. <a style="color:white; text-decoration: underline; font-weight: bold" href="https://calendly.com/jason-kulatunga/30min">Book time</a> to explore Fasten Health's unified API
</div>

<script src="https://vjs.zencdn.net/8.22.0/video.min.js"></script>