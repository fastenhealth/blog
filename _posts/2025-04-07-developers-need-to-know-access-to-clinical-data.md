---
layout: post
image: 'assets/images/developers-need-to-know-access-to-clinical-data.png'
title: "Developers Need to Know: Who’s Actually Required to Provide Access to Clinical Data?"
date: 2025-04-07 10:18:00
categories: [ guidebook  ]
tags: [legal, information-blocking]
author: jason
---

If you're building a patient-facing app that requires access to medical records, you've probably been given the runaround: 
told that you need to sign BAAs and pay exorbitant fees before gaining API access to patient records. However, you may have some recourse. 
Certain "actors" (as defined in the legislation) are legally required to share electronic health information (EHI) with 
patients upon request.

Here's what developers need to know about who they are and what’s expected of them.

# What Is Information Blocking—and Who’s Responsible?

The 21st Century Cures Act defines information blocking as any action that _interferes with the access, exchange, or use 
of electronic health information (EHI)_ unless a legal exception applies.

These regulations are enforced by the Assistant Secretary for Technology Policy (ASTP), previously known as the Office 
of the National Coordinator for Health Information Technology (ONC), under [45 CFR Part 171](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-171).

The rule applies specifically to three types of actors:
- Health Care Providers
- Health IT Developers of Certified Health IT
- Health Information Exchanges or Networks (HIEs/HINs)

Together, these entities have an almost complete picture of a patient's medical history.

By law, these actors must enable access to clinical data unless a defined exception applies. We’ve seen certified EHRs 
delay app approvals for weeks with vague “security reviews,” only to grant access quickly after an Information Blocking 
complaint (See our previous post for step-by-step instructions for [How to file an Information Blocking Complaint]({% post_url 2025-03-25-developers-need-to-know-information-blocking-complaint %})). 
These kinds of delays can disrupt developer timelines and impact patients waiting on care.

For more on who qualifies as an "actor" see our table below! (or the [ONC Information Blocking Actors Fact Sheet](https://www.healthit.gov/sites/default/files/2024-04/IB_Actors_Fact_Sheet_508_0.pdf))

# Who Counts as a Health Care Provider?

This category is broader than most developers expect. Below is a categorized list that reflects the provider types included
in the ASTP's regulatory definition:

| Category | Examples| 
| -------- | ------- |
| Institutional Providers | Hospitals, Skilled nursing facilities, Nursing facilities, Home health entities or Other long term care facilities, Health care clinics, Community mental health centers, Renal dialysis facilities, Blood centers, Ambulatory surgical centers, Emergency medical services providers, Federally qualified health centers, Rural health clinics |
| Individual/Group Practitioners | Group practice, Pharmacists, Physicians, Practitioners, Therapists |
| Ancillary Service Providers | Laboratories, Pharmacies |
| Tribal and Special Providers | Providers operated by or under contract with the Indian Health Service or by an Indian tribe, tribal organization, or urban Indian organization |
| Other Entities Determined Appropriate by HHS | Any other category of health care facility, entity, practitioner, or clinician deemed appropriate by the HHS Secretary, Covered entities under 42 U.S.C. 256b |

# How Fasten Health Helps

Fasten Health’s unified API connects to over 40,000 institutions, and our team has tackled everything from complaint filings 
to regulatory delays.

If your integration is stuck, chances are we’ve already encountered something similar and figured out how to work around it.


<div class="alert alert-secondary" role="alert">
    <i class="fa fa-info-circle"></i>
    <strong>Need help moving forward?</strong><br/>
   <a style="color:white; text-decoration: underline; font-weight: bold" href="https://calendly.com/jason-kulatunga/30min">Lets schedule a chat</a>.
</div>

# What’s Next?

Stay tuned for more insights in our ongoing "What Developers Need to Know" series. In our next post, we’ll break down 
claims data and what CMS rules mean for consumer access & payer APIs.
