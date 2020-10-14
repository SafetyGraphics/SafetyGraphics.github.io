## Overview

Welcome to the Interactive Safety Graphics home page. We make open source interactive graphics for monitoring clinical trial safety. Check out a [sample graphic](https://safetygraphics.github.io/hep-explorer/test-page/example1) along with its paired [clinical workflow](https://github.com/SafetyGraphics/SafetyGraphics.github.io/raw/master/guide/HepExplorerWorkflow_v1_2.pdf) based on the medical literature, or explorer your own data using the [safetyGraphics R package](#safetygraphics-r-package) shown below.

![edishapp-take2_smallish](https://user-images.githubusercontent.com/3680095/51296057-e3195380-19df-11e9-971a-430c3be930a4.gif)

## Background

The Interactive Safety Graphics (ISG) subteam of the ASA Biopharm-DIA Safety Working Group is an interdisciplinary effort that, amongst other things, seeks to provide a clinical safety workflow for monitoring during clinical development in an open source model. For more details see:

- [About Page](about) - learn more about our team's motivation and see a full list of team members
- [Road Map](roadmap) - learn more about our active and planned projects
- [Contribution guidelines](https://github.com/SafetyGraphics/SafetyGraphics.github.io/blob/master/CONTRIBUTING.md) - learn about how to contribute code to the project

## safetyGraphics R Package

The safetyGraphics R package makes it easy for users to evaluate thier own clinical trial safety data in R. The package provides a simple workflow to load lab data from clinical trials (AdAM or SDTM preferred).

To learn more you can:

- See the package on [CRAN](https://cran.r-project.org/web/packages/safetyGraphics/index.html)
- Download the [clinical workflow](https://github.com/SafetyGraphics/SafetyGraphics.github.io/raw/master/guide/HepExplorerWorkflow_v1_2.pdf)
- View the [introductory vignette](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/shinyUserGuide.html) for detailed guidance on using the Shiny application
- Learn more about creating custom charts with the [advanced vignette](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/customWorkflows.html) or this [50 minute tutorial video](https://rhoworld.webex.com/recordingservice/sites/rhoworld/recording/play/a4dd5e4b9fe0421cb50f3db98ab4ee2c) 
- Explore the [github repo](https://github.com/SafetyGraphics/safetyGraphics) for the package
- Check out the underlying [javascript library](https://github.com/SafetyGraphics/hep-explorer) used to create the [Hepatic Safety Explorer Chart](https://safetygraphics.github.io/hep-explorer/test-page/example1)
- Try out a hosted version of the [shiny app](https://becca-krouse.shinyapps.io/safetyGraphicsApp/) (or run it locally using the code in the capsule summary above)
- Check out [other interactive graphics](https://rhoinc.github.io/safety-explorer-suite/) for safety monitoring.  We also wrote [a paper](https://journals.sagepub.com/doi/abs/10.1177/2168479018754846) about these. Our plan is to add some of them to SafetyGraphics package in future releases.
- Take a look at the [technical framework](https://user-images.githubusercontent.com/3680095/51296179-6f2b7b00-19e0-11e9-841a-afc2964a7e1a.png) being used to create the chart
- Explore some of our presentations
    - See [the poster](https://github.com/RhoInc/RStudioConf2019-ePoster/) we presented at RStudio::conf(2019) 
    - See [the slides](https://github.com/SafetyGraphics/SafetyGraphics.github.io/raw/master/presentations/SafetyGraphics_RPharma2020.pdf) introducing safetyGraphics v2.0 from R in Pharma 2020