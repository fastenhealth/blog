---
layout: post
image: 'assets/images/cms-interop-framework/fasten-pledge.png'
title: "Fasten Health Pledges to CMS Interoperability Framework"
date: 2025-07-31 10:18:00
categories: [ ]
tags: [legal, cms, featured]
author: jason
---

Fasten Health started as an open-source privacy focused Personal Health Record app (PHR). One of the first of its kind.

I built it because I ended up getting duplicate blood work and duplicate imaging, because the left-hand doesn’t know what 
the right hand is doing. My medical data was fractured across almost a dozen different healthcare institutions and specialists
that weren’t coordinating with each other. So I became the paperwork mule, shuffling my own paper records from one institution
to another.

My story is not unique, patients all over the country have had the same experience – there are over 300,000 healthcare 
organizations in the US, and each of them could potentially hold a fraction of your medical history. That’s insanity.

Large health systems and hospitals have a solution: they’ve joined national networks called Health Information Exchanges 
(HIEs), which let them query and share patient records with other providers.

But Patients didn’t have access to HIEs, I’ve tried. There’s a number of reasons why this is the case (HIPAA TPO, Treatment 
purpose of use, HIPAA low-probability of compromise breach) but fundamentally it’s because the HIE networks are designed 
around trust. On the network, providers can only access medical records if they have a clinical relationship with you, the 
patient. And when they respond to patient record requests, they trust that the request on the network was done in good faith 
by another HIPAA compliant entity that is treating their patient.

Instead, patients were left requesting their medical records by logging into their patient portals. Portals that… are 
for health systems we forgot we visited, aren’t known for their ease of use, have passwords we may not remember, or require 
accounts that we never created in the first place.

—

This brings us to yesterday, where Fasten Health joined 59 other companies at the White House to sign the CMS Interoperability
Framework.

> We pledge to empower patients to retrieve their health records from CMS Aligned Networks or personal health record apps 
> and share them with providers via QR codes or Smart Health Cards/Links using FHIR bundles. When possible, we will 
> return visit records to patients in the same format. We commit to seamless, secure data exchange—eliminating the need 
> for patients to repeatedly recall and write out their medical history. We are committed to “kill the clipboard,” one 
> encounter at a time.

We pledged to do what we’ve already been doing for years: make it simple for patients to gain access to their own medical 
data, and share it with organizations, health care institutions & applications that they trust.

Everyone agrees that filling out the same information over and over, every time you visit a clinic is beyond frustrating. 
The Smart Health Links (eg. QR codes) standard has been around for years, but most PHR apps don’t implement it because most 
Providers and EHR’s don’t support it.

Everyone agrees that patient portals are a problem, for every two you remember, there’s probably one you forgot. While a 
national record locator service could fix this, it’s unlikely to be implemented in the US. So, let’s allow patients to use 
the record locator services that the national HIE networks already support!

Everyone agrees that remembering dozens of usernames and passwords for patient portals is difficult (if not impossible), 
so let’s allow patients to verify their access using trusted identification providers like CLEAR and Id.me that millions of 
Americans already trust when they board a plane or visit a stadium.

Alone, most of these ideas are just an incremental benefit, but together they have the potential to foundationally shift 
the way that patients interact with the healthcare system.

What really changed yesterday is that the CMS & HHS put a bunch of health tech organizations in the same room, and got 
them to essentially commit to creating markets for each other. Finally creating the adoption necessary to make them viable 
in the real world.

“If you build it, they will come” is a well known lie, but these pledges flip the conversation around to “they’re coming, 
you should build it” – which is much safer ground.

If this already existed, I don’t know if I would have built Fasten. I wouldn’t have needed to.
But, having the opportunity to help build that future for millions of patients is incredibly humbling and exciting at the 
same time.

A unified API for identity, access and medical record retrieval.
