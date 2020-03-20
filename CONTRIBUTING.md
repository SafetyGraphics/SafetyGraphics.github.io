# Contribution Guidelines for Packages in the safetyGraphics organization

** This page is under development. We'd love your help making it better! **

# Overview 

Hello! Thank you for your interest in contributing to the ASA/DIA Interactive Safety Graphics (ISG) working group. This page provides guidelines for technical contributors to this project. For a non-technical overview, please visit [our homepage](https://safetygraphics.github.io/) or the [safetyGraphics R package](https://safetygraphics.github.io/safetyGraphics/). If you can't find what you need on this page, don't hesitate to [email Jeremy](mailto:jwildfir@rhoworld.com?Subject=safetyGraphics Technical Question" target="_top) with questions. 

# Approach

Our group seeks to provide a  in an open source model. As noted on our [About Us page](https://safetygraphics.github.io/about), we're working to create a clinical safety workflow that is:

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

This guide assumes a basic understanding of GitHub. If you've never used GitHub, I strongly recommend reading though their [help pages](https://help.github.com/en/github) and/or doing some [online learning](https://www.coursera.org/learn/introduction-git-github).

# Technical Overview

The safetyGraphics project consists of several GitHub repositories that are maintained in the [safetyGraphics GitHub organization](https://github.com/SafetyGraphics/). These projects can roughly be broken in to 2 categories: 

1. safetyGraphics Framework - The overall framework for loading data, customizing settings and creating interactive graphics for monitoring clinical trial safety. This is mostly done with via [`safetyGraphics/safetyGraphics`](https://github.com/SafetyGraphics/safetyGraphics) R package. This vignette provides an overview of the overall [safetyGraphics framework](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/shinyUserGuide.html). 

2. Renderers - Stand-alone interactive graphics used for monitoring a specific aspect of clinical trial safety. For example, the [`safetyGraphics/hep-explorer`](https://github.com/SafetyGraphics/safetyGraphics) repo is focused on monitoring liver toxicity. These charts are designed to be used as part of the overall safetyGraphics framework, and can be created using javascript or R. [This vignette](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/customWorkflows.html) provides extensive technical details about the creation of custom renderers.

# Contributing Code 

## Branches

## Pull Requests

## Quality Control

## Documentation

## Guidelines for R

## Guidelines for javascript
