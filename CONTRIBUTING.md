# Interactive Safety Graphics Contribution Guidelines

**This page is under development. We'd love your help making it better!**

# Overview 

Hello! Thank you for your interest in contributing to the ASA/DIA Interactive Safety Graphics (ISG) working group. This page provides guidelines for technical contributors to this project. Most of our programming is done in R and Javascript, and we assumes a basic understanding of GitHub and Git (see links below for training resources). For new contributors, we suggest getting started by reviewing the Papers and Presentations listed below. 

If you can't find what you need on this page or need help finding a good first issue to work on, don't hesitate to post to the [safetyGraphics discussion](https://github.com/SafetyGraphics/safetyGraphics/discussions) board with questions. 



 If you've never used GitHub, we strongly recommend reading through their [help pages](https://help.github.com/en/github) and/or doing some [online learning](https://www.coursera.org/learn/introduction-git-github). 

# Helpful Links

## Project Web pages

- [Interactive Safety Graphics Working Group Home page](https://safetygraphics.github.io/)
- [safetyGraphics Github Organization](https://github.com/SafetyGraphics/)
- [Project Road Map](https://github.com/SafetyGraphics/SafetyGraphics.github.io/blob/master/roadmap.md)
 
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

# Technical Overview

The safetyGraphics project consists of several GitHub repositories that are maintained in the [safetyGraphics GitHub organization](https://github.com/SafetyGraphics/). These projects can roughly be broken into 2 categories: 

1. safetyGraphics Framework - The overall framework for loading data, customizing settings and creating interactive graphics for monitoring clinical trial safety. This is mostly done with [`safetyGraphics/safetyGraphics`](https://github.com/SafetyGraphics/safetyGraphics) R package. This vignette provides an overview of the overall [safetyGraphics framework](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/shinyUserGuide.html). 

2. Renderers - Stand-alone interactive graphics used for monitoring a specific aspect of clinical trial safety. For example, the [`safetyGraphics/hep-explorer`](https://github.com/SafetyGraphics/safetyGraphics) repo is focused on monitoring liver toxicity. These charts are designed to be used as part of the overall safetyGraphics framework, and can be created using javascript or R. [This vignette](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/customWorkflows.html) provides extensive technical details about the creation of custom renderers.

# Contributing Code 

## User Access

To gain access, [send Jeremy your GitHub user name](mailto:jwildfire@gmail.com?subject=safetyGraphics%20Access%20Request), and he will grant you access to the organization and add you to the appropriate teams. 

## Issue Tracking

All repos have active issue trackers. All issues should, at a minimum contain a name, description, assignee and release version (tracked using a GitHub "Milestone").

## Project Boards

Each release has it's own [GitHub project board](https://help.github.com/en/github/managing-your-work-on-github/managing-project-boards) containing all issues being resolved in the release. We typically use columns for 'To Do', 'In Progress', 'Ready for review' and 'Done'. Developers should update the project board as they go. 

## Branches

 We typically use three types of branches: 

- **`master`** - The production version of the repository. Commits directly to the `master` branch are not permitted, so all code development must be done in development and feature branches as described below.
- **Development Branches** - Development branches contain all code for a given release, and should be named `vX.X.X-dev`. When the work on the release is complete, the development branch will be merged to `master` via a pull request. 
- **Feature Branches** - Feature branches resolve one or more issues and should be named to reflect the new features added  (e.g. `add-participant-filter`). Once all issues are resolved, the feature branch should be merged into a development branch. 

For a large release, there will likely be several feature branches merged to the development branch before the development branch is merged to `master`. Commits directly to development branches are discouraged since we generally recommend making a feature branch/PR instead. However, for a small release that only resolves a few features, a single development branch may be sufficient. Following this Branch structure is important since our quality control is built using this framework. 

All merging should be done via pull requests. More details of our merge/PR process are provided in the Quality Control section below. 

## Commit Messages

Please reference issue numbers in commit messages whenever possible. 

## Quality Control

We pay great attention to the quality of our tools, and all repos have undergone significant testing and quality control and have detailed documentation. More detail is provided in the links below. That said, none of our repositories are currently validated per the [21 CFR Part 11](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=11) guidelines.  We also have several team members who are actively involved in the [R Validation Hub effort](https://www.pharmar.org/).

For R packages, we follow the guidelines in Hadley Wickham's [R Packages](http://r-pkgs.had.co.nz/) book. And include extensive tests via the `testthat` package. 

For javascript renderers, we follow the guidelines [described here](https://github.com/RhoInc/open-source-handbook/blob/master/workflow/testing/readme.md). 
