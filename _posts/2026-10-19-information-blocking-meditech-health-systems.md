---
layout: post
title: "Fasten just filed 200+ information blocking complaints against health systems using MEDITECH"
date: 2026-10-19 08:17:00
image: assets/images/information-blocking-meditech.png
categories:
  - featured
author: jason
tags: [legal, information-blocking, featured]
navigation: false
---

200+ health systems never responded to our requests to let patients pull their own records into Fasten. 
We just filed information blocking complaints against all of them.

Registering with each organization’s EHR is a prerequisite for patients to use Fasten to access their own medical records 
through Patient Access APIs. Registration provides the EHR with an “app identity” so they can associate all subsequent 
patient authentication and authorization requests with that specific app.

> \[F\]or a patient to be able to use an application of their choice with certified API technology, the software application will need to be ‘‘registered.’’ In that regard, as a second example, an actor’s refusal to register a software application that enables a patient to access their EHI would effectively prevent its use **given that registration is a technical prerequisite for software applications to be able to connect to certified API technology.** As a result, such refusals in the context of patient access unless otherwise addressed in this rule **would be highly suspect and likely to implicate information blocking**.

[https\://www\.federalregister.gov/d/2020-07419/p-1910](https://www.federalregister.gov/d/2020-07419/p-1910)

Unfortunately, that registration still requires contacting each health system *individually*. There is no automatic distribution 
of Fasten’s client ID across these organizations. And without registration, the patient cannot authorize Fasten to retrieve their 
records. Their access is stuck before they even get to log in.

App developers like Fasten have to find a list of EHR customers, identify the department or individuals responsible for 
registration at each organization—legal, HIM/ROI, interoperability—find their contact information, and then cold-email them 
asking them to begin the registration process. Published endpoint lists, accessible through the Certified Health IT Product 
List (CHPL), help us find the APIs. They do not tell us who will actually register our app.

This is unacceptable. A patient’s ability to use an app to access their own medical records should not depend on whether a 
cold email reaches the right person or gets a response.

It’s worth mentioning that this is not necessarily the fault of the individual health systems. They are in the unenviable 
position of asking their first-level customer support teams to distinguish between phishing attacks and legitimate technical 
requests tied to the 21st Century Cures Act’s patient access requirements. Health systems have a legal responsibility to 
safeguard systems containing sensitive patient data. They have no idea who we are, often have little understanding of the 
technical requirements, and usually do not have the capability or capacity to vet apps even if they wanted to.

But, this is a solved problem. Unlike MEDITECH, many large EHR vendors, including Epic and Oracle Health, support automatic 
client registration and distribution of client IDs to their customers for qualifying apps requesting read-only, patient-scoped 
access with individual patient consent.

This allows their health system customers to support patient access without having to deal with the technical complexities 
of app registration. Yet many EHR vendors still do not support this capability, even though it’s better for both the patient 
and their health system customers.

![](assets/images/information-blocking-meditech-health-systems/trust-chain.png)

EHR vendors are the common point of trust between the health system and the app developer. Under [§170.404](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-D/section-170.404), 
certified API developers that verify a developer’s authenticity must complete that process within ten business days, 
then register and enable the application for production use within five business days. Yet in the process we have encountered, 
getting the app enabled at each health system remains a separate step. This gap needs to be closed.

ASTP/ONC must provide clear guidance requiring certified EHR vendors to facilitate automatic registration and distribution 
of client IDs for qualifying patient-facing apps on behalf of their customers.

In the meantime, we are filing complaints because unanswered registration requests leave patients unable to use Fasten 
to access their records. These complaints can have real consequences: providers in affected Medicare programs may face 
[financial disincentives](https://www.healthit.gov/wp-content/uploads/2024/06/Disincentives-Common-Questions-Fact-Sheet.pdf) 
if OIG determines they committed information blocking. We hope they’ll take these seriously.

Expect to see similar posts in the future for PointClickCare, Netsmart, and others.

Again, not because these EHR vendors are acting maliciously, but because the regulations have created conditions where 
entities with no prior relationship are expected to establish trust through cold emails before a patient can even choose an 
app, authorize access, and retrieve their own records.


<div class="alert alert-secondary" role="alert">
<i class="fa fa-info-circle"></i>
If you're a patient-facing organization that's overwhelmed by the difficulty registering your application with an EHR or Health System -- <a style="color:white; text-decoration: underline; font-weight: bold" href="https://calendly.com/jason-kulatunga/30min">please reach out</a>.
</div>
