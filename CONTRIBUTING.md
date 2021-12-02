# Interactive Safety Graphics Contribution Guidelines

**This page is under development. We'd love your help making it better!**

# Overview 

 This page provides guidelines for technical contributors to the ASA/DIA Interactive Safety Graphics (ISG) working group. For a non-technical overview, check out our [home page](https://safetygraphics.github.io/). You can also always ask us questions or comments by posting to the [safetyGraphics discussion](https://github.com/SafetyGraphics/safetyGraphics/discussions). 

# Getting Started

Hello! Thank you for your interest in contributing to this project! Here's a quick guide to getting started: 

1. **Review the Technical Requirements** - Most of our programming is done in R and Javascript, and we assume a basic understanding of GitHub and Git. We've provided a few links to a few technical resources and tutorials [below](#Technical-Resources).
2. **Read about the Project** -  Learn a bit about safetyGraphics by reviewing the rest of this document and checking out the Vignettes, Papers and Presentations listed in the [Resources Section](#Resources) below. 
3. **Join the Mailing List** - Take 2 minutes to fill out [this form] (https://docs.google.com/forms/d/e/1FAIpQLSd4wkSfaajuj3iaVHirqj8L05S3yH7GVGwopufWRMmjif4IDg/viewform?usp=sf_link) to let us know you're interested; we'll reach out to discuss. 
4. **Start Contributing**  - Look through the [Good First Issues](https://github.com/issues?q=is%3Aopen+is%3Aissue+author%3Ajwildfire+archived%3Afalse+user%3ASafetyGraphics+label%3A%22good+first+issue%22) to find a topic to work on. You can also post to the [safetyGraphics discussion board](https://github.com/SafetyGraphics/safetyGraphics/discussions) to discuss options. Once you find a topic, you can get to work on your first Pull Request. 

# Technical Overview

The safetyGraphics project consists of several GitHub repositories that are maintained in the [safetyGraphics GitHub organization](https://github.com/SafetyGraphics/). These projects can roughly be broken into 2 categories: 

1. safetyGraphics Framework - The overall framework for loading data, customizing settings and creating interactive graphics for monitoring clinical trial safety. This is mostly done with [`safetyGraphics/safetyGraphics`](https://github.com/SafetyGraphics/safetyGraphics) R package. This vignette provides an overview of the overall [safetyGraphics framework](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/shinyUserGuide.html). 

2. Renderers - Stand-alone interactive graphics used for monitoring a specific aspect of clinical trial safety. For example, the [`safetyGraphics/hep-explorer`](https://github.com/SafetyGraphics/safetyGraphics) repo is focused on monitoring liver toxicity. These charts are designed to be used as part of the overall safetyGraphics framework, and can be created using javascript or R. [This vignette](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/customWorkflows.html) provides extensive technical details about the creation of custom renderers.

# Contributing Code 

## User Access

To gain access, go through the [Getting Started](#Getting-Started) section above. We'll add you to the GitHub Organization once you fill out [the form] (https://docs.google.com/forms/d/e/1FAIpQLSd4wkSfaajuj3iaVHirqj8L05S3yH7GVGwopufWRMmjif4IDg/viewform?usp=sf_link) letting us know you'd like to contribute. 

## Branches and Pull Requests

 We typically use three types of branches: 

- **`dev`** - Development branches contain all code for a given release, and should be named `vX.X.X-dev`. When the work on the release is complete, the development branch will be merged to `master` via a pull request. 
- **`main`** - The production version of the repository. Commits directly to the `master` branch are not permitted, so all code development must be done in development and feature branches as described below.
- **Feature Branches** - Feature branches resolve one or more issues and should be named to reflect the new features added  (e.g. `add-participant-filter`). Once all issues are resolved, the feature branch should be merged into a development branch. 

For a large release, there will likely be several feature branches merged to the development branch before the development branch is merged to `master`. Commits directly to development branches are discouraged since we generally recommend making a feature branch/PR instead. However, for a small release that only resolves a few features, a single development branch may be sufficient. Following this Branch structure is important since our quality control is built using this framework. 

All merging should be done via pull requests. More details of our merge/PR process are provided in the Quality Control section below. 

## Issue Tracking

All repos have active issue trackers. All issues should, at a minimum contain a name, description, assignee and release version (tracked using a GitHub "Milestone").

## Project Boards

Each release has it's own [GitHub project board](https://help.github.com/en/github/managing-your-work-on-github/managing-project-boards) containing all issues being resolved in the release. We typically use columns for 'To Do', 'In Progress', 'Ready for review' and 'Done'. Developers should update the project board as they go. 

## Commit Messages

Please reference issue numbers in commit messages whenever possible. 

## Quality Control

We pay great attention to the quality of our tools, and all repos have undergone significant testing and quality control and have detailed documentation. More detail is provided in the links below. That said, none of our repositories are currently validated per the [21 CFR Part 11](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=11) guidelines.  We also have several team members who are actively involved in the [R Validation Hub effort](https://www.pharmar.org/).

For R packages, we follow the guidelines in Hadley Wickham's [R Packages](http://r-pkgs.had.co.nz/) book. And include extensive tests via the `testthat` package. 

For javascript renderers, we follow the guidelines [described here](https://github.com/RhoInc/open-source-handbook/blob/master/workflow/testing/readme.md). 

# Resources
## Project Web pages

- [Interactive Safety Graphics Working Group Home page](https://safetygraphics.github.io/)
- [safetyGraphics Github Organization](https://github.com/SafetyGraphics/)
- [Road Map](https://github.com/SafetyGraphics/SafetyGraphics.github.io/blob/master/roadmap.md)

## Vignettes

- [Intro to safetyGraphics](https://github.com/SafetyGraphics/wiki/Intro)
- [Chart Configuration Vignette](https://github.com/SafetyGraphics/wiki/ChartConfiguration) - details about the charting process including technical specifications and step-by-step instructions
- [Cookbook Vignette](https://github.com/SafetyGraphics/wiki/Cookbook) - a series of examples showing how to initialize the safetyGraphics Shiny app in different scenarios
- [Technical FAQ Vignette](https://github.com/SafetyGraphics/wiki/TechnicalFAQ) - vignette discussing security, validation and other technical issues


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
