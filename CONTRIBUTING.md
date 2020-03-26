# Contribution Guidelines for Packages in the safetyGraphics organization

**This page is under development. We'd love your help making it better!**

# Overview 

Hello! Thank you for your interest in contributing to the ASA/DIA Interactive Safety Graphics (ISG) working group. This page provides guidelines for technical contributors to this project. For a non-technical overview, please visit [our homepage](https://safetygraphics.github.io/) or the [safetyGraphics R package](https://safetygraphics.github.io/safetyGraphics/). If you can't find what you need on this page, don't hesitate to [email Jeremy](mailto:jwildfir@rhoworld.com?Subject=safetyGraphics Technical Question" target="_top) with questions. 

# Approach

Our group seeks to provide an open-source model. As noted on our [About Us page](https://safetygraphics.github.io/about), we're working to create a clinical safety workflow that is:

- **Open Source** - Transparent. Customizable. Free!
- **Interactive** - Users can explore their data.
- **Easy to Use** - Just open up a webpage.
- **Easy to Configure** - Streamlined configuration with R.  
- **Compliant with Data Standards** - Support ADaM and SDTM by default.
- **Highly Collaborative** - Clinicians and Programmers working together.
- **Agile** - Frequent releases with GitHub.
- **Engaging** - Regular Feedback from users. Pilot testing. Open issue tracking.

The rest of this document provides details about the technical approach we use to meet these goals. 

# Prerequisites

This guide assumes a basic understanding of GitHub. If you've never used GitHub, I strongly recommend reading through their [help pages](https://help.github.com/en/github) and/or doing some [online learning](https://www.coursera.org/learn/introduction-git-github).

# Technical Overview

The safetyGraphics project consists of several GitHub repositories that are maintained in the [safetyGraphics GitHub organization](https://github.com/SafetyGraphics/). These projects can roughly be broken into 2 categories: 

1. safetyGraphics Framework - The overall framework for loading data, customizing settings and creating interactive graphics for monitoring clinical trial safety. This is mostly done with [`safetyGraphics/safetyGraphics`](https://github.com/SafetyGraphics/safetyGraphics) R package. This vignette provides an overview of the overall [safetyGraphics framework](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/shinyUserGuide.html). 

2. Renderers - Stand-alone interactive graphics used for monitoring a specific aspect of clinical trial safety. For example, the [`safetyGraphics/hep-explorer`](https://github.com/SafetyGraphics/safetyGraphics) repo is focused on monitoring liver toxicity. These charts are designed to be used as part of the overall safetyGraphics framework, and can be created using javascript or R. [This vignette](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/customWorkflows.html) provides extensive technical details about the creation of custom renderers.

# Contributing Code 

## User Access

To gain access, [send Jeremy your GitHub user name](mailto:jwildfir@rhoworld.com?Subject=safetyGraphics Access Request" target="_top), and he will grant you access to the organization and add you to the appropriate teams. 

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
