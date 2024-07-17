---
layout: post
image: 'assets/images/information-blocking/maze.jpg'
title: "How to Ignore Information Blocking Legislation Like a Pro"
date: 2024-07-17 10:18:00
categories: [ guidebook  ]
tags: [legal]
author: jason
---

So, you want to join the ranks of numerous other large health systems and EHR platforms that protect their ~~intellectual property~~ patient’s medical records from the 21st Century Cures Act Final Rule mandates? You’re in the right place!

Let’s dive into the top-notch techniques that will help you keep those pesky patient records under wraps and maintain your stranglehold over healthcare data. Just a heads-up: most of these tactics are not exactly kosher and definitely go against the intention of the Cures Act Final Rule. But don’t worry too much; the ONC/OIG/HHS isn’t exactly dishing out fines left and right, and most Patient Access API implementers are small fry with zero legal clout. It’s all part of the process, right?

## The Art of Information Blocking: A Step-by-Step Guide

### Procedural

**1\. Documentation Gaps**

- Who needs thorough documentation anyway? Keep it vague and confusing. The less comprehensible, the better. When in doubt, copy and paste large chunks of the HL7 FHIR R4 specification into your docs to pad them, while adding little-to-no useful information.

**2\. Lack of Support & Contacts**

- Set up broken email addresses, ignored mailboxes and support phone numbers manned by clueless operators. This will ensure any developer attempting to get help quickly loses hope.
- If you’d like to learn more about this technique, please [contact our colleagues at InteliChart](https://github.com/fastenhealth/information-blocking-complaints/blob/main/IB-2819-intelichart.md) (if you can get a hold of them)

**3\. No Sandbox or Missing Sandbox Credentials**

- Why provide a sandbox? And if you do, make sure the credentials are harder to find than a needle in a haystack. 
- If you’re feeling generous, create a sandbox, but populate it with the bare-minimum synthetic data, so it’s effectively worthless for UI testing.
- Consider making developers sign an NDA before you can share your super secure sandbox password: `Password123!`

**4\. Delay, Delay, Delay**

- “Your email was caught by our spam filter”, decision maker on an extended vacation, or claiming the team is overseas are all great ways to stall. Delay tactics are your best friend.
- It’s easy to turn what should be a week-long process into a half-year “death by 1000 cuts.” since most developers aren’t aware of the [10 day / 5 day rule](https://www.ecfr.gov/current/title-45/part-170#p-170.404%28b%29%281%29)
- Since only Certified Health IT EHR vendors are subject to the 10 day/ 5 day rule, consider adding a third-party registration program as a requirement - [Dunn & Bradstreet numbers can take a couple of weeks to register](https://developers.humana.com/account/signup) and help redirect developer frustration towards a different company completely.

**5\. Patient Preregistration**

- A good technique is to put responsibility back on the patient -- since the developer doesn’t have much of a relationship with them yet.
- Require patients to manually “enable” the API in the patient portal, or better yet: request the app to be “installed” via a support email.
- This is great because the patient hasn’t used the app yet, so they’re unlikely to waste their time doing this work for no benefit.
- Bonus points if you find a way to hide or restrict the registration process for your Patient Portal too!

**6\. Individual Health System Registrations**

- Instead of potentially annoying your patients, you can force developers to integrate and register with each health system independently. Once the app developer realizes there’s more than 250,000 health systems registered with the ONC, they’ll probably just give up. Who wants to manage that many OAuth credentials?

**7\. Require Health Systems to Purchase Plugins**

- Our colleagues at Cerner have come up with a novel technique: they are Certified 170.315 (g)(10) compliant, however their Patient Access API is essentially unusable unless the Health System customer purchases and correctly installs [a plugin that exports PDFs when Binary resources are requested](https://forums.oracle.com/ords/apexds/post/binary-document-404-error-0893).
- On the surface the Health System is compliant, but when a developer attempts to request medical records they will be shown 404 errors - genius!
- Bonus points if you install this plugin in your Sandbox environment so everything works during testing, and developers only run into this problem when debugging issues with patients in production.

**8\. Cash Payment/Direct-to-Consumer Exclusions**

- Remember, providers that only accept cash payments aren’t required to use a [certified EHR or be HIPAA complaint](https://www.stevenslee.com/health-law-observer-blog/is-a-cash-only-medical-practice-subject-to-hipaa/)
- Which means all the pesky patient access API requirements may not apply to you.
- This is a handy workaround for Behavioral and Reproductive Health providers. Your records are of limited value anyways. What possible reason would patients have for wanting those records?

**9\. Apps are Dangerous - Trust us**

- Use FUD (Fear, Uncertainty, Doubt) to turn patients against their own interests. Display ominous warning messages to patients about the dangers of third-party apps. They’ll stick to your portal out of sheer terror.
- This is also a potential revenue stream - you can charge app developers significant amounts of money to become a “known app” without doing much additional work.

![](assets/images/information-blocking/cerner.png)

**10\. Existential Crisis**

- Question the viability of the company. Ask how they can afford to build their product. What’s their monetization structure? Pile on the skepticism.
- Make it clear that patients trust your organization to [protect their medical records](https://www.hipaajournal.com/healthcare-data-breach-statistics/), and a tiny startup would never be as safe and secure.

### Technical

**11\. Withhold Customer/Health System Info**

- Restrict access to your Health System customer list – just provide a single FHIR Endpoint for your production installation.
- Patients only know their Health System by name, not the EHR they use. By withholding _your_ customer list, application developers will be unable to provide a catalog of Health Systems they support, significantly limiting the usability of their product. Win-win!
- Most developers are only vaguely familiar with the [Service base URL publication requirement](https://www.ecfr.gov/on/2020-12-04/title-45/part-170#p-170.404%28b%29%282%29), but if anyone complains just tell them you're waiting until [Dec 2024 when HTI-1’s updated rules come into effect.](https://www.ecfr.gov/current/title-45/part-170/section-170.404#p-170.404%28b%29%282%29)

**12\. Unusable but compliant FHIR Endpoints**

- If you want to be extra creative, you can follow the letter of the law by publishing a single FHIR endpoint, but then require the patient to enter an `office_id` or `clinic_id` when they login with their portal credentials.
- This is a great technique because legally you’re complaint (atleast until HTI-1), but functionally your API is almost unusable since patients have no idea what an `office_id` is.
- Reach out to our colleagues at [AdvancedMD if you want to learn more](https://github.com/fastenhealth/information-blocking-complaints/blob/main/CFS-5410-advancedmd.md) about this technique.

![](assets/images/information-blocking/advancedmd.png)

**13\. API Rate Limits**

- You have a _duty_ to protect your infrastructure from grubby Patient Apps. Implement strict API rate limiting to make it time consuming for developers to sync a full copy of the medical record.
- A multi-hour sync is a lesson in patience for developers and a great way to ensure patients never use their app again.

**14\. Include Invalid & Broken References**

- Make sure to include missing, broken, or unauthorized FHIR resource references that patient apps will fail to request, causing broken UI bugs and lowering the trust in the 3rd party apps.
- Resources like ServiceRequest, Questionnaire & MedicationStatement are great examples, because they seem to be heavily used & referenced by EHRs, but are not mandatory under [USCDI Core](https://build.fhir.org/ig/HL7/US-Core/CapabilityStatement-us-core-client.html)

**15\. The Patient ID Loophole**

- This one's for you technical folks: The [Smart-on-FHIR](http://hl7.org/fhir/smart-app-launch/app-launch.html) specification doesn’t mandate how the Patient ID is provided to the application after the patient authenticates. So, instead of using the common `patient` field, use your own custom field like `profile` or `fhirUser`.
- Feel free to return the Patient ID in various formats:
    - `123`
    - `https://example.com/Patient/123`
    - `Patient/123`
- Be creative: the [FlatIron team returns `pp.patient_id` and `pp.group_id` fields after authentication](https://github.com/fastenhealth/fasten-sources/issues/42), which then need to be joined with a `.` character. After that, developers must replace all `_` characters with `--` to generate the correct Patient ID. The best part is that none of this is publicly documented!
- If you’re feeling a bit more agreeable, you can follow in Nextgen’s footsteps and send back a JWT `id_token`, and just embed the Patient ID in there. Just make it a game -- it’s a [fun little treasure hunt](http://hl7.org/fhir/smart-app-launch/worked_example_id_token.html).

### Legal

**16\. Get Legal Counsel Involved**

- Sometimes it’s best to just be bold and choose to (mis)understand the legislation in a way that doesn’t impact your organization. What’s the worst that could happen? A lawsuit? ha
- You’d be in good company: [Labcorp’s legal team](https://github.com/fastenhealth/information-blocking-complaints/blob/main/IB-2820-labcorp.md) seems to believe that Patient Access APIs should not be usable by 3rd party developers, only by the patient themselves? ie. all patients should learn to code.

_In particular, we provide patients with access to their health data through our patient portal and through other mechanisms in a manner that complies with our legal obligations. The information blocking rules are designed to increase patient access to health data, not to grant rights to third parties, like Fasten Health, to patient data._

## Conclusion

`</sarcasm>`

I hope you enjoyed my light-hearted attempt at discussing some of the serious issues that Patient Application developers (like Fasten Health) run into as we integrate with EHRs and Health Systems.

At the end of the day, these are real patients requesting access to their own medical records using a third party app that they trust.

Yes, security of medical records is incredibly important.

Yes, choosing the right application to trust with a copy of your records is important.

But the paternalistic, patronizing (or worse yet, malicious) blocking of medical record requests when the patient explicitly consented to sharing their data is unacceptable.

At the very least we need to start seeing:

- **\[ONC/OIG\]** Fines must be levied against organizations that break information blocking rules. The carrot's not working, so let's try the stick.
- **\[App Developers\]** Need to step up and start filing complaints with the ONC/OIG when they run into these issues. The more complaints that are filed, the more likely the ONC/OIG will take action.
Fasten Health has published our [complaints publically,](https://github.com/fastenhealth/information-blocking-complaints) and we urge others to do the same.
- **\[EHR Vendors\]** Provide sandboxes and patient test credentials. Developers _need_ these to ensure their applications function correctly without having to test in production, using real patients as guinea pigs.
- **\[ONC/EHR Vendors\]** Create Endpoint Catalogs or a National Provider Directory. This is [already in the works](https://build.fhir.org/ig/HL7/fhir-us-ndh/), but it can't come soon enough. Until then, Fasten is happy to share our open source catalog of [FHIR endpoints and branding information](https://github.com/fastenhealth/fasten-sources)
- **\[EHR Vendors\]** Implement a streamlined and reasonable registration process for application developers. Automated, self-service approvals, like those already used by major EHR platforms, should be the standard. Your multi-month long registration process requiring dozens of emails & Zoom meetings does not comply with the [10 day / 5 day rule](https://www.ecfr.gov/current/title-45/part-170#p-170.404%28b%29%281%29), and will not scale as more developers become aware of these Patient Access APIs.
- **\[ONC\]** [Patient-scoped Bulk Export](https://build.fhir.org/ig/argonautproject/ehi-api/ehi-export.html): please reconsider making this mandatory. Some [FHIR resources lack reciprocal relationships](https://www.youtube.com/watch?v=l93-yBCBl98) -- requiring app developers to parse each resource, extract references and make individual requests to retrieve a full copy of a patient's medical records. This process is unnecessarily complicated, fragile and resource-intensive for both EHR vendors and app developers.

<br/>
<div class="alert alert-secondary" role="alert">
<i class="fa fa-info-circle"></i>
If you're a patient-facing organization that's overwhelmed by the difficulty accessing medical records -- even when the patient has explicitly consented -- <a style="color:white; text-decoration: underline; font-weight: bold" href="https://forms.gle/CymBsKqLsX3bjuTEA">please reach out to me</a>.
</div>

Finally, a thanks to everyone who reviewed and gave me feedback on this post:

- Brendan Keeler
- Dave deBronkart
- H. Kamran
- Josh Mandel
- Michael Kennedy
- PhantomsGhost
