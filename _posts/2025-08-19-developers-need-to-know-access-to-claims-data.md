---
layout: post
image: 'assets/images/developers-need-to-know-access-to-claims-data.png'
title: "Developers Need to Know: Which Payers Are Required to Provide API Access?"
date: 2025-08-19 10:18:00
categories: [ guidebook  ]
tags: [legal, information-blocking]
author: jason
---

Our previous post, [Who's Actually Required to Provide Access to Clinical Data](https://blog.fastenhealth.com/developers-need-to-know-access-to-clinical-data), covered the provider side of healthcare APIs. Now let's complete the picture with **payers**: the insurance companies and government programs that pay for healthcare services.

If providers hold the clinical story (diagnoses, treatments, outcomes), payers hold the financial story: **claims data** 
(billing records, coverage decisions, payment history, prior authorization). For developers building comprehensive healthcare apps, 
knowing which payers must provide API access is essential.

In this post we break down which types of payers are legally required to support Patient Access APIs and what that means 
when you're building healthcare applications.

---

### **So Who Counts as a "Payer"?**

Here's where it gets tricky for developers: **not all payer types have the same API requirements.** Some are federally 
mandated while others depend on state law.

| Payer Type                                                              | Patient Access API Required?            | Mandated By                                      |
|:------------------------------------------------------------------------|:----------------------------------------|:-------------------------------------------------|
| Medicare Advantage (MA) Organizations                                   | Yes                                     | CMS (Federal)                                    |
| State Medicaid & Children's Health Insurance Program (CHIP) Agencies    | Yes                                     | CMS (Federal)                                    |
| Qualified Health Plans (QHPs) on Federally-facilitated Exchanges (FFEs) | Yes                                     | CMS (Federal)                                    |
| Commercial Health Plans                                                 | Not federally mandated  Varies by State | Currently required in CA (SB-1419), TN (SB-2012) |

> NOTE: Commercial health plans are regulated at the state level unless they’re ACA QHPs on FFEs. States like California (SB-1419) and Tennessee (SB 2012\) passed legislation requiring all licensed health plans in their state, including commercial health plans, to implement Patient Access APIs.

### **What are the CMS Rules that apply to payers?**

Federal payer API requirements stem from two key CMS rules. The first established patient access to claims data, the second 
adds prior authorization and provider data sharing.

Here's a high level break down:

| Rule | Timeline | Required APIs |
| :---- | :---- | :---- |
| [CMS-9115-F](https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f) | In effect now | Patient Access API (claims, encounter, subset of clinical data) Provider Directory API (except QHPs on FFEs) |
| [CMS-0057-F](https://www.cms.gov/newsroom/fact-sheets/interoperability-and-patient-access-fact-sheet) | Rolling out 2026-2027 | Provider-to-Payer API Payer-to-Payer API Prior Authorization API |

### **Why Accurate Claims Data Matters**

When it comes to payers, the stakes are high for developers:  
If you assume every health plan supports Patient Access APIs, you risk making promises to patients you can’t actually keep.

* Many payers aren’t legally required to turn on APIs at all
* Even when they are, delays or gaps in data can leave patients frustrated
* Integrating with the wrong payer can waste months of approvals & engineering time, only to discover the connection won’t deliver

While Fasten Connect does integrate with some of the largest Payers (Anthem, Kaiser, Aetna, UHC, Humana, Medicare, and others), 
our focus is on providing access to Clinical data rather than Claims data.

*If your build requires deep claims integrations, Flexpa or OneRecord can complement what Fasten Connect provides.*

### **What’s Next?**

If you're not sure whether a payer needs to provide API access, or you’ve been told they’re “exempt” without much detail, 
it may be worth taking a closer look at the actual regulations.

* For the self-guided route: Review [CMS-9115-F](https://www.cms.gov/priorities/key-initiatives/burden-reduction/interoperability/policies-and-regulations/cms-interoperability-and-patient-access-final-rule-cms-9115-f), [CMS-0057-F](https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f), or our [earlier post](https://blog.fastenhealth.com/developers-need-to-know-access-to-clinical-data) on clinical data access.

Need help getting started? [Book a quick consult.](https://calendly.com/jason-kulatunga/30min)