---
layout: post
image: 'assets/images/banner.png'
title: "Healthcare & Open-Source - A Viral Privacy Policy"
date: 2024-03-05 10:18:00
categories: [ philosophy  ]
tags: [opensource, legal]
author: jason
---


As I've been building [Fasten Health](https://www.fastenhealth.com/), I've been thinking a lot about the principles of 
open-source software, and how they can be applied to healthcare. Not as technical solutions but as an ethos & philosophy.

I've been an open-source [advocate for over 10 years](https://github.com/AnalogJ), but even I sometimes have trouble 
understanding the concepts behind open-source.

In my head, it all comes down to recognition: developers build tools and applications that they want to share with the 
world, but they don't want corporations to steal their work and sell it as their own -- something incredibly easy to do 
with source code -- so they "license" their code with a viral, open-source license. A viral license, more commonly known 
as a “copyleft license”, would require that any derivative work needs to be open-source as well, or at the very least 
include a [copy of the original license and copyright notice](https://choosealicense.com/licenses/).

Sure, this can have a chilling effect on usage of open-source in some corporate environments, but it allows for communities 
to form around a project and ensures everyone who contributes gets the credit they deserve. Developers get to focus on 
the problem they actually want to solve instead of re-inventing the wheel every time. We get to stand on the shoulders 
of giants like [Linux](https://www.linux.com/), [GCC](https://gcc.gnu.org/), [OpenSSL](https://www.openssl.org/), similar 
to how our understanding of science is built atop the work of previous generations of scientists.

<img src="https://imgs.xkcd.com/comics/dependency_2x.png" alt="Obligatory XKCD 2 - GDPR" style="height:500px;"/>

> Note: Recognition != Fame

## HIPAA & The 21st Century Cures Act

HIPAA, known to most Americans as the regulations that **protect an individual's right to the privacy of his or her 
medical information**,  was recently *modernized* by The 21st Century Cures Act.

The Cures Act Final Rule introduces a number of foundational changes, including interoperability requirements and 
mandating that Patients are guaranteed access to their Health Records electronically, though third-party apps, that 
don't need to be HIPAA-compliant.

**Third Party Apps don't need to be HIPAA-compliant**.

As a developer, I'm incredibly excited. I've been working on compliant software (HIPAA, SOC, PCI, FedRAMP) for almost 
my entire professional career, and compliance mostly boils down to one thing - money. Money to hire engineers, auditors, 
consultants and complete a metric ton of paperwork. Healthcare data is some of the most valuable data in the world, and 
the Cures Act Final Rule just made it possible for individual engineers to compete with behemoths in the healthcare space, 
with 10,000s of employees.

As a patient, I'm frankly a bit terrified. My medical records contain information about me that I cannot change about 
myself. They'll still be relevant and valuable in 20 years, something you can't really say about my browsing history.
At the same time, the healthcare industry has been letting down patients for decades. Electronic Health Record (EHR) 
systems were supposed to make patient-practitioner communication quicker and more accurate, but at this point they're 
mostly just designed for your hospital's billing department. We *deserve* better applications to inform and manage our 
own health.

There's going to be a land-grab -- the only question is if developers are going to be stealing market share from large 
corporations like Epic & Cerner, or continuing to [abuse, data mine & monetize](https://www.hfma.org/technology/technology-roi/63157/) patient's private medical records.

## So what's the problem? Just write a Privacy Policy

<img src="https://imgs.xkcd.com/comics/gdpr_2x.png" alt="Obligatory XKCD 2 - GDPR" style="height:700px;"/>

As I've been building [Fasten Health, an open source Personal Health Record (PHR)](https://www.fastenhealth.com/) that 
lets patients automatically aggregate their medical records from 100,000s of healthcare institutions in one private 
health vault, I've spent a lot of time thinking about the implications of this single data source.

Yes, it's an incredibly powerful tool for patients who would have had to visit a dozen or more individual patient portals 
to get a full copy of their medical history.

Yes, it'll allow parents, caregivers, **and practitioners** to have the correct historical context when dealing with 
patients that are unable to advocate for themselves -- think patients suffering from dementia or young children.

But it also makes it easier for patients to mistakenly share their medical records with organizations that want to 
misuse & data mine their records without the patient's knowledge or consent. Once your medical records are stored on a 
server in the cloud, the only thing protecting your data is the privacy policy and terms of use of that service.

And even if that service is not malicious, their "service providers" may be. Or theirs. Or theirs. Do you trust that an 
organization you've never interacted with, 2 or 3 or more levels removed from the app you shared your medical records with, 
won't sell your personally identifiable medical records to make some money?

**When was the last time you fully read an app's privacy policy?**

- Privacy Policies are traditionally written in dense legalese, partially because they were written by lawyers, and partly to make it difficult for regular people to understand how their data is actually being used.
- Privacy Policies are also a living document, they can change over time -- with little or no notice required for users.
- Privacy Policies are not standardized -- every Privacy Policy is unique, with the potential to hide anti-consumer clauses in a variety of places.
- Privacy Policies are an agreement between you and the company. Once your data has been shared with a third party service provider, none of the promises in the current document apply.

## Open-Source Licenses, but for Data & Privacy Policies?

Open Source Licenses have some unique characteristics that I think would be interesting to apply to Medical Data & 
Privacy Policies:

- They're standardized, with a [managing body](https://opensource.org/licenses) that ensures they comply with the "Open Source Definition" and don't have unusual, unexpected clauses
- Some of them are viral, meaning that the clauses apply to not only a project built on-top of the Open-Source project, but all subsequent projects built on-top of that one.

Given the explosion of applications built on-top of the new interoperability APIs that we're about to see, I wonder if it would be possible to write a viral Privacy Policy (or clause) that would be standardized, enforce some standardized patient-rights (notice, access, security, retention, disclosure), and ensure that this standard clause is required of any and all third party services that may receive your personally identifiable medical data, no matter how far they are from the original service/app.

**The goal is for patients to always be aware of who has a copy of their identifiable medical records**

The [CARIN Alliance's Code of Conduct](https://www.carinalliance.com/wp-content/uploads/2024/02/CARIN_Code_of_Conduct_2023.pdf) has something similar, however it's missing the viral aspect that made Open-Source licenses so powerful:

> III. Use & Disclosure
> We will:
> a) Contractually bind third-party vendors and contractors to the commitments we make to users, in substantively similar language, regarding use or disclosure of user data (pursuant to Section 1b of the Code) and prohibit uses or disclosures of user data for any purposes not consistent with those commitments without informed, proactive consent from the user.

This clause only requires third-party services to be bound to the same patient-friendly privacy policy, but does not require that *their* vendors are bound the same.

## Why does this matter again?

Medical Data Brokers are a thing.

- [Now for sale: Data on your mental health](https://www.washingtonpost.com/technology/2023/02/13/mental-health-data-brokers/)
- [How Data Brokers Make Money Off Your Medical Records](https://www.scientificamerican.com/article/how-data-brokers-make-money-off-your-medical-records/)
- [Should You Worry About Data From Your Period-Tracking App Being Used Against You?](https://kffhealthnews.org/news/article/period-tracking-apps-data-privacy/)

And that was even before the 21st Century Cures Act & interoperability opened the floodgates to non-HIPAA compliant 
applications. If we don't start thinking about the incentive structure, our medical data could end-up as easily accessible 
as our [financial data](https://www.denverpost.com/2019/08/31/credit-card-privacy-concerns/).


---
![[banner-transparent.png]]
**I'm not a lawyer and I don't know if any of this is possible, but I hope it is.**

If you have some ideas about how Fasten Health could implement something like this, please join us on the [Fasten Health Discord](https://discord.gg/Bykz6BAN8p)

If you're interested in learning more about Fasten Health, please visit:
- [www.fastenhealth.com](https://www.fastenhealth.com)
- [github.com/fastenhealth/fasten-onprem/](https://github.com/fastenhealth/fasten-onprem/)
- [join our newsletter](https://forms.gle/3DuTtrx5po71C1xF8)
