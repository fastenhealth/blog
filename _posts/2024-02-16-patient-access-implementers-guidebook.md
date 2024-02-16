---
layout: post
image: 'assets/images/2024-jan-app-stores.png'
title: 'Patient Access - An Implementer's Guidebook'
date: 2024-02-16 10:18:00
categories: [ guidebook ]
tags: []
author: jason
hidden: true
---

Hey Developers!

## What is SMART-on-FHIR

In essence, it's a powerful standard that allows healthcare applications to securely access data from different EHR systems using FHIR (Fast Healthcare Interoperability Resources) and enables third-party developers to create innovative healthcare apps that seamlessly integrate with these systems.

It's one of the foundational building blocks that allows [Fasten Health](https://www.fastenhealth.com/) - our open-source Personal Health Record app - to exist.

But as ever developer knows, SMART-on-FHIR is just OAuth + OpenID Connect, right? There are client libraries for both, available in every language under the sun.

Sounds fantastic, right? Absolutely! But here's the catch: while SMART-on-FHIR holds has a lot of potential, implementing it in practice isn't exactly a walk in the park -- there's a lot of nuance and edge-cases that implementers need to deal with when attempting to integrate with a new EHR platform.

## Implementer's Guidebook - A Blog Series

At Fasten Health, we've had the absolute ~~misery~~ pleasure of integrating with almost [20 different EHRs](https://github.com/fastenhealth/fasten-sources/blob/main/PLATFORM_LIST.md), from the largest, most mature platforms in the space (Epic, Cerner, Allscripts, etc) to some of the smallest, who are building EHRs specifically for small clinics & clinical specialists. And we're not done -- we have a list of over [150 different EHR's](https://github.com/fastenhealth/fasten-sources/blob/main/PLATFORM_LIST.md) we'd like to eventually support.

With each of these EHR's we've have the practical experience of: registering with their developer platforms, signing their legal and regulatory contracts, exploring their documentation, finding their Sandbox credentials, implementing their customized version of the SMART-on-FHIR flow and attempting to retrieve FHIR resources on bulk from their API.

Our plan is to write an Implementer's Guidebook, helping developers through this maze of complexities! With each installment, we'll delve into the intricacies of working with specific vendors like Epic, Cerner, Allscripts, and more, offering insights, tips, and best practices to help you navigate their documentation, policies & the details of their implementation.

At the very least, each post will include the following information for each vendor:
### Developer Portal Registration
- Self-service or Manual
### Development & Technical Requirements
- Links to Documentation
- Bulk Export - $everything/EHI export
- FHIR Endpoint lists
- Sandbox availability for testing
- Published Sandbox Credentials for testing
- Implementation Details:
    - Headers
    - Token Format (jwt, obscure)
    - Audience required
    - CORs supported
    - Fragment support
    - PKCE support
    - Public client support
    - Offline token scope
    - Dynamic client registration
    - Wildcard vs individual resource scopes
### Production Deployment
- Legal Requirements
- Manual Approval
- Costs

## Bookmark this Page

So, whether you're a seasoned developer looking to expand your expertise or a newcomer eager to explore the realm of healthcare interoperability, this series is tailor-made for you. Our goal is to help you unlock the full potential of SMART-on-FHIR and the future of healthcare, without getting bogged down in the details.

Each vendor guide will be linked below, and to kick things off we'll start by discussing Epic's SMART-on-FHIR implementation.


- [Patient Access - An Implementer's Guidebook - Epic]()
