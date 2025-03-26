---
layout: post
image: 'assets/images/developers-need-to-know-information-blocking.png'
title: "Developers Need to Know: How to Report Information Blocking to ASTP"
date: 2025-03-11 10:18:00
categories: [ guidebook  ]
tags: [legal, information-blocking]
author: jason
---

Application Programming Interfaces (APIs) are a way to allow different applications to communicate and exchange data 
programmatically (without a human involved). They are incredibly common and can act like a market differentiator when 
comparing 2 similar products -- a good API (with a clean design and thorough documentation) can make or break a product 
-- depending on the industry.

APIs are also extremely common in Healthcare, but traditionally they’ve been designed for enterprise software integrations 
which require [BAA’s](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html), contracts, and large sums of money before they can be used. In general, it was thought that making it 
easy to manipulate/share medical records in an automated way was a security liability, not a feature.

With the introduction of the 21st Century Cures Act Patient Access APIs, EHR vendors are required to provide a new set of 
read-only APIs following the FHIR standard, allowing patients to securely share their medical records directly with trusted 
consumer apps, without requiring any BAA’s or HIPAA compliance.

This is a huge win for patients, however, it will be a burden for EHR vendors (due to ongoing maintenance and lost revenue). 
Because Patient Access APIs were introduced as a regulatory requirement, rather than a monetary/business incentive, 
most EHRs have only done the minimum amount of work required to be "certified".

## What’s happening with Patient Access APIs and Information Blocking requirements:

[Information Blocking Actors](https://www.healthit.gov/sites/default/files/2024-04/IB_Actors_Fact_Sheet_508_0.pdf) (such as Healthcare providers, EHR vendors, and health information networks) often face 
complex and sometimes ambiguous interpretations of information-blocking regulations, leading to inconsistent application. 
Financial incentives & differing interpretations around permissible exceptions (such as patient privacy, security concerns, 
or technical infeasibility) can complicate and stall the development of Patient Access APIs -- which fundamentally limit 
Patient's access to their own data. This complexity isn't just frustrating; it's officially recognized by ASTP as a 
significant barrier to effective health data exchange.

## Real Impact for Developers:

These seemingly arbitrary denials and delays can have a real impact on consumer application developers --
we waste valuable time & development resources, delaying the launches of innovative products and essential 
health solutions that directly affect patient care and outcomes.

## Information Blocking Complaints:
This brings us to the meat of this guide -- how to push back on EHR vendors and non-compliant healthcare institutions. 
Developers can directly report barriers through ASTP’s official Information Blocking Complaint Portal.

It starts by visiting the [Health IT Feedback and Inquiry Portal](https://www.healthit.gov/feedback), where developers 
can file a ticket with the Assistant Secretary for Technology Policy (ASTP, formerly the ONC).

![healthit-feedback-and-inquiry-portal.png](assets/images/information-blocking-complaints/healthit-feedback-and-inquiry-portal.png)

There are 4 different complaint forms available, but we find that the majority of our complaints are submitted via:

- `Report Issue with Certified Health IT` - This is for issues with an EHR vendor's API. Missing documentation, delays approving production access, missing endpoint catalogs, BAA requirements, etc are all valid reasons to file an issue.
- `Report Information Blocking` - This is for issues with a specific Healthcare institution. eg. Blocking patient's from  accessing their own medical records via a third-party app, missing portal registration processes or not providing information about their EHR vendor, etc.


![healthit-feedback-and-inquiry-portal-form.png](assets/images/information-blocking-complaints/healthit-feedback-and-inquiry-portal-form.png)<<IMAGE FROM FORM SUBMISSION HERE>>

Next, you must fill out the complaint form. You always have the option to file the complaint anonymously, however, if you're 
willing to share your contact information the ASTP will be able to reach out if they require additional context and you'll 
be able to easily [track the status of your submissions](https://inquiry.healthit.gov/support/plugins/servlet/desk/portal/6).

The complaint body is free text, but we like to follow a template when making submissions. It helps ensure important 
context is included in our submissions and hopefully makes the triage process quicker on the ASTP side.

```markdown
 
I am the President of <<COMPANY NAME HERE>> a <<1 LINE DESCRIPTION OF COMPANY APP>> that uses Patient Access APIs.

I’m submitting an Information Blocking Complaint against:

    Name: <<EHR VENDOR>>
    Website: <<EHR VENDOR WEBSITE>>
    Role: Certified Health IT
    CHPL Link: <<CHPL ENTRY LINK>>

<<SUMMARY OF ISSUE, MAKE SURE TO INCLUDE EXACTLY WHAT RULE/ACTION THE EHR VENDOR IS STOPPING>>

Timeline:
    <<DATE>> - <<1 LINE OF COMMUNICATION>> - <<RESULT OF COMMUNICATION>>
    <<DATE>> - <<1 LINE OF COMMUNICATION>> - <<RESULT OF COMMUNICATION>>
    <<DATE>> - <<1 LINE OF COMMUNICATION>> - <<RESULT OF COMMUNICATION>>

```

Here's an example [complaint against Intelichart](https://github.com/fastenhealth/information-blocking-complaints/blob/main/IB-2819-intelichart.md) following this format: 

```
I am the President of Fasten Health, Inc. a Personal Health Record (PHR) application that allows patients to create a 
longitudinal health record using Patient Access APIs.

I’m submitting an Information Blocking Complaint against:

- **Name**: InteliChart
- **Website**: https://www.intelichart.com/
- **Role**: Certified Health IT
- **CHPL Link**: https://chpl.healthit.gov/#/listing/8854

I’ve attempted to register with their development environment, and have experienced a number of issues making it impossible. 
I’ve attempted to reach out to their support team via email, forms, phone and directly contacting their CEO with no response.

Timeline:

- Sept 14, 2023 - Registered for a developer account on their developer portal, was given an error message that username and password did not match. Emailed info@intelichart.com - no response
- Feb 12, 2024 - Sent email to openapihelp@intelichart.com (as stated in their Terms of Use registration instructions) - Mail delivery failure - email does not exist
- Feb 12, 2024 - Phone call to their tech support - directed to hello@intellichart.com email address.
- Feb 12, 2024 - Separate email to hello@intelichart.com - No Response
- Feb 12, 2024 - Separate request via Support Form - Confirmation of submission email, No Response
- April 25, 2024 - Contacted CHPL entry official developer contact (Gary Hamilton, CEO) - Sent email to hello@intelichart.com, ghamilton@intelichart.com, info@intelichart.com,legal@intelichart.com - No Response

All of the information under the 170.315 (g)(10) heading in their CHLP entry is incorrect or non-functional. Their contact information is also incorrect or non-functional.
```

Also, make sure to include any screenshots or images that are relevant to your complaint.

Then hit submit! If you included your contact information with your submission, you will receive an automated email 
notifying you that your submission was received, at which point you can log in to the Inquiry Portal service desk (JIRA) 
and track the status of your submission.


## Tracking your Information Blocking Complaint

In an ideal world, patients & developers filing information-blocking complaints would know exactly how their complaint 
was handled by the ASTP, and what actions were made to resolve it. Unfortunately, once you submit an information-blocking 
complaint, it essentially disappears into a black hole. The ASTP will make note of it, aggregate it with similar tickets, 
and potentially reach out to the healthcare institution or EHR vendor if the ticket(s) are actionable, but you'll never know.

Instead, you'll find out if an action was taken if/when the EHR vendor messages you directly, you notice a generic update 
to the ASTP's [Health IT API Resource Guide](https://onc-healthit.github.io/api-resource-guide/inquiry-portal/404-inquiries/), 
or there's an article written about a [massive fine](https://www.hhs.gov/about/news/2025/03/06/hhs-office-civil-rights-imposes-200000-penalty-against-oregon-health-science-university-failure-provide-timely-access-patient-records.html) 
against the health system or vendor in question.


## How Fasten Health Helps:
At Fasten Health, we've had to navigate these complexities ourselves, having submitted numerous Information Blocking 
complaints and follow-ups to the ONC. Our unified API significantly reduces these regulatory burdens, allowing developers 
to avoid lengthy complaint processes and instead focus on a simple turnkey API for healthcare data integration.

## Links to ONC Resources:
- [ASTP FAQs on Information Blocking](https://www.healthit.gov/faqs) – Clarify common questions and interpretations.
- [Exception to Information Blocking Rules](https://www.healthit.gov/sites/default/files/2024-04/IB_Exceptions_Fact_Sheet_508_0.pdf) – Understand permissible scenarios clearly defined by ONC.
- [Health IT Feedback and Inquiry Portal](https://www.healthit.gov/feedback) - Where you can go to file a complaint with the ASTP
- [Health IT JIRA](https://inquiry.healthit.gov/support/plugins/servlet/desk/portal/6) - View the status of your complaints & provide additional feedback
- [Health IT API Resource Guide](https://onc-healthit.github.io/api-resource-guide/inquiry-portal/404-inquiries/) - Provides supplementary information & clarifications for developers, using the Inquiry Portal submissions. 

<br/>
<div class="alert alert-secondary" role="alert">
    <i class="fa fa-info-circle"></i>
    <strong>Have you encountered API integration roadblocks? </strong><br/>
    Let's address these challenges together -- <a style="color:white; text-decoration: underline; font-weight: bold" href="https://calendly.com/jason-kulatunga/30min">book time with our team</a>.
</div>


Stay tuned for more insights in our ongoing "Developers Need to Know" series, designed to help developers effectively navigate 
these regulatory challenges.

