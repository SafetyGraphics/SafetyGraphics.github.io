# Interactive Safety Graphics Contribution Guidelines

**This page is under development. We'd love your help making it better!**

# Overview 

 This page provides guidelines for technical contributors to the ASA/DIA Interactive Safety Graphics (ISG) working group. For a non-technical overview, check out our [home page](https://safetygraphics.github.io/). You can also always ask us questions or comments by posting to the [safetyGraphics discussion](https://github.com/SafetyGraphics/safetyGraphics/discussions). 

# Getting Started

Hello! Thank you for your interest in contributing to this project! Here's a quick guide to getting started: 

1. **Review the Technical Requirements** - Most of our programming is done in R and Javascript, and we assume a basic understanding of GitHub and Git. We've provided a few links to a few technical resources and tutorials [below](#Technical-Resources).
2. **Read about the Project** -  Learn a bit about safetyGraphics by reviewing the rest of this document and checking out the Vignettes, Papers and Presentations listed in the [Resources Section](#Resources) below. 
3. **Join the Mailing List** - Take 2 minutes to fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSd4wkSfaajuj3iaVHirqj8L05S3yH7GVGwopufWRMmjif4IDg/viewform?usp=sf_link) to let us know you're interested; we'll reach out to discuss. 
4. **Start Contributing**  - Look through the [Good First Issues](https://github.com/issues?q=is%3Aopen+is%3Aissue+author%3Ajwildfire+archived%3Afalse+user%3ASafetyGraphics+label%3A%22good+first+issue%22) to find a topic to work on. You can also post to the [safetyGraphics discussion board](https://github.com/SafetyGraphics/safetyGraphics/discussions) to discuss options. Once you find a topic, you can get to work on your first Pull Request. 

# Technical Overview

The safetyGraphics project consists of several GitHub repositories that are maintained in the [safetyGraphics GitHub organization](https://github.com/SafetyGraphics/). The [safetyGraphics](https://github.com/SafetyGraphics/safetyGraphics) package provides a platform for loading data, customizing settings and creating interactive graphics for monitoring clinical trial safety. However, the safetyGraphics platform really doesn't do much by iteslf! In fact, none of the content on the Charts tab is actually found in the safetyGraphics package; the default charts live in the  [safetyCharts](https://github.com/SafetyGraphics/safetyCharts) package. safetyCharts has over a dozen charts that are configured to work with {safetyGraphics}, but can also easily be used independently. [This vignette](https://github.com/SafetyGraphics/SafetyGraphics/wiki/ChartConfiguration) provides describes this relationship in more detail along with extensive technical details about the creation of custom renderers.

# Contributing Code 

## User Access

To gain access, go through the [Getting Started](#Getting-Started) section above. We'll add you to the GitHub Organization once you fill out [the form] (https://docs.google.com/forms/d/e/1FAIpQLSd4wkSfaajuj3iaVHirqj8L05S3yH7GVGwopufWRMmjif4IDg/viewform?usp=sf_link) letting us know you'd like to contribute. 

## Branches and Pull Requests

 We typically use three types of branches: 

- **`main`** - The main branch has the latest release for repository. Commits directly to the `main` branch are not permitted. When a given release is complete and all needed contet is in the `dev` branch, admins merge `dev` in to main and tag a release. 
- **`dev`** - `dev` is the default branch and is generally the target branch for Pull requests. Commits directly to `dev` should be avoided - use Feature branches as described below instead. 
- **Feature Branches** - Feature branches resolve one or more issues and should be named to reflect the new features added  (e.g. `add-participant-filter` of `fix-118`). Once all issues are resolved, the feature branch should be merged into `dev`. Once new features are developed, the developer creates a pull request and requests a code review from a teammate. Once approved, the Feature branch can be merged to dev. 

All merging should be done via pull requests. More details of our merge/PR process are provided in the Quality Control section below. 

## Issue Tracking

All repos have active issue trackers. All issues should, at a minimum contain a name, description, assignee and release version (tracked using a GitHub "Milestone").

## Project Boards

Each release has it's own [GitHub project board](https://help.github.com/en/github/managing-your-work-on-github/managing-project-boards) containing all issues being resolved in the release. We typically use columns for 'To Do', 'In Progress', 'Ready for review' and 'Done'. Developers should update the project board as they go. 

## Commit Messages

Please reference issue numbers in commit messages whenever possible. 

## Quality Control, Validation, Etc.

For other technical questions see the safetyGraphics [Technical FAQ](https://github.com/SafetyGraphics/SafetyGraphics/wiki/TechnicalFAQ) Vignette.

# Resources
## Project Web pages

- [Interactive Safety Graphics Working Group Home page](https://safetygraphics.github.io/)
- [safetyGraphics Github Organization](https://github.com/SafetyGraphics/)
- [Road Map](https://github.com/SafetyGraphics/SafetyGraphics.github.io/blob/master/roadmap.md)

## Vignettes

- [Intro to safetyGraphics](https://github.com/SafetyGraphics/SafetyGraphics/wiki/Intro)
- [Chart Configuration Vignette](https://github.com/SafetyGraphics/SafetyGraphics/wiki/ChartConfiguration) - details about the charting process including technical specifications and step-by-step instructions
- [Cookbook Vignette](https://github.com/SafetyGraphics/SafetyGraphics/wiki/Cookbook) - a series of examples showing how to initialize the safetyGraphics Shiny app in different scenarios
- [Technical FAQ Vignette](https://github.com/SafetyGraphics/SafetyGraphics/wiki/TechnicalFAQ) - vignette discussing security, validation and other technical issues

## Presentations 

- [Building Open Source Tools for Safety Monitoring: Advancing Research Through Community Collaboration](https://rinpharma.com/publication/rinpharma_105/) Presented by Becca Krouse at R/Pharma 2019 
- [safetyGraphics v2.0 - Open Source Collaboration in Pharma using R and Shinyo](https://www.youtube.com/watch?v=2Ykw1jwSw5M) Presented by Jeremy Wildfire at R/Pharma 2020 

## Papers

- [The Safety Explorer Suite: Interactive Safety Monitoring for Clinical Trials](https://journals.sagepub.com/doi/abs/10.1177/2168479018754846), Wildfire et al. 2018
- [A New Paradigm for Safety Signal Detection and Evaluation Using Open-Source Software Created by an Interdisciplinary Working Group.](https://link.springer.com/content/pdf/10.1007/s43441-021-00319-3.pdf) Buchanan et al. 2021
- [Data Monitoring committees for clinical trials evaluating treatments of COVID-19](https://www.contemporaryclinicaltrials.com/article/S1551-7144(20)30232-9/fulltext) Tobias Mütze and Tim Friede. 2020 

## Technical Resources

- [GitHub Help Pages](https://help.github.com/en/github)
- [Git/GitHub Online Learning](https://www.coursera.org/learn/introduction-git-github)
- [R Packages by Hadley Wickham](http://r-pkgs.had.co.nz/)
- [Rho's Open Source Handbook](https://github.com/RhoInc/open-source-handbook/)
