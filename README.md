## Background

This is the homepage for the Interactive Safety Graphics (ISG) subteam of the ASA Biopharm-DIA Safety Working Group. The working group is an interdisciplinary effort that, amongst other things, seeks to provide a clinical safety workflow for monitoring during clinical development in an open source model. The ISG team’s first deliverable is a workflow to monitor for hepatoxicity using the new [safetyGraphics R package](https://github.com/SafetyGraphics/safetyGraphics) and a [well-documented clinical workflow](https://github.com/SafetyGraphics/SafetyGraphics.github.io/raw/master/ISG%20Hepatic%20Safety%20Explorer%20User's%20Manual%20%26%20Workflow%20v1.0.pdf) based on the safety clinician’s monitoring practice. You can try out the interactive eDish graphic used in the R package [here](https://safetygraphics.github.io/safety-eDISH/test/).

## safetyGraphics R Package

The safetyGraphics R package allows users to evaluate clinical trial safety in R, starting with hepatoxicity. These specialized graphics use lab data from clinical trials (AdAM or SDTM preferred). You can see the R package in action below:

![edishapp-take2_smallish](https://user-images.githubusercontent.com/3680095/51296057-e3195380-19df-11e9-971a-430c3be930a4.gif)

To learn more you can:

- See the package on [CRAN](https://cran.r-project.org/web/packages/safetyGraphics/index.html)
- View the [vignette](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/shinyUserGuide.html) for detailed guidance on using the Shiny application
- Explore the [github repo](https://github.com/SafetyGraphics/safetyGraphics) for the package
- Check out the underlying [javascript library](https://github.com/SafetyGraphics/safety-eDISH) used to create the [eDish Chart](https://safetygraphics.github.io/safety-eDISH/)
- See [the poster](https://github.com/RhoInc/RStudioConf2019-ePoster/) we presented at RStudio::conf(2019)
- Try out a hosted version of the [shiny app](https://becca-krouse.shinyapps.io/safetyGraphicsApp/) (or run it locally using the code in the capsule summary above)
- Check out [other interactive graphics](https://rhoinc.github.io/safety-explorer-suite/) for safety monitoring.  We also wrote [a paper](https://journals.sagepub.com/doi/abs/10.1177/2168479018754846) about these. Our plan is to add some of them to SafetyGraphics package in future releases.
- Take a look at the [technical framework](https://user-images.githubusercontent.com/3680095/51296179-6f2b7b00-19e0-11e9-841a-afc2964a7e1a.png) being used to create the chart

## Motivation

Clinical trial research is highly regulated and notoriously slow moving. As a result, modern data analysis tools and techniques that have become commonplace in other industries have struggled to achieve broad or consistent adoption. Our group seeks to allow clinical trial researchers to interact with their data using tools that are free, reproducible, customizable, and easy to use. Our tools typically combine JavaScript-based interactive graphics with a flexible R data pipeline built for existing clinical data standards. This flexible technical framework, combined with an open source development workflow in GitHub, may provide a useful road map for creating similar tools in other change-resistant environments.

### Problems
- Clinical trial research is highly regulated and notoriously slow moving.
- Manual review of huge data listings is still common.
- Existing analysis tools are expensive, difficult to customize and tend to use proprietary formats, limiting reproducibility.

### Solutions

We're working to create interactive tools that are:
- **Open Source** - Transparent. Customizable. Free!
- **Interactive** - Users can explore their data.
- **Easy to Use** - Just open up a webpage.
- **Easy to Configure** - Streamlined configuration with R.  
- **Compliant with Data Standards** - Support ADaM and SDTM by default.
- **Highly Collaborative** - Clinicians and Programmers working together.
- **Agile** - Frequent releases with GitHub.
- **Engaging** - Regular Feedback from users. Pilot testing. Open issue tracking.

## About the Team

The safetyGraphics and safety-eDish projects are maintained by the ASA Biopharm/DIA Safety Working Group’s Interactive Safety Graphics Taskforce, which includes stakeholders from across the pharmaceutical industry, including the FDA. All work is free and open source with an MIT License.

We are indebted to the ASA Biopharm-DIA Safety WG for agreeing to sponsor this Interactive Safety Graphics (ISG) Taskforce. Jeremy Wildfire (Rho) developed the initial Javascript code and worked with Rebecca Krouse (Rho) and Preston Burns (Rho) develop the associated safetyGraphics R package, with an assist from Xiao Ni (Novartis); James Buchanan (Covilance) authored the User’s Guide; Zachary Skrivanek (Lilly) and Melvin Munsaka (AbbVie) authored the beta test plan; Rinki Jajoo (Merck) and Nathan Li (Merck) serve as our project managers (previously Susan Duke); Xiao Ni (previously Susan Duke) represents ISG on the WG’s Communications Team.  Frank Harrell (Vanderbilt University and FDA) provided invaluable advice at many steps along the way.

Clinicians who provided invaluable feedback on tool features and the clinical workflow include James Buchanan, Eileen Navarro (FDA), Dennis O’Brien (Boehringer-Ingelheim), Barbara Hendrickson (Abbvie), Jonathan Seltzer (ACI Clinical), Mengchun Li (TB Alliance) and Mary Furnari (Celgene).  Their willingness to enter their comments into GitHub not only improved the tool but also demonstrated their interest and need for it.

In addition to the data scientists and statisticians noted above, our other members include Karl Brand (Bayer), Brian Cohen (ACI Clinical), Rachel Duglash (FDA), Robert Gordon (J&J), Hong Wang (Boehringer-Ingelheim) and Richard Zink (Target Pharma Solutions).

[Alpha and Beta testing](./pilot/testerGuide) for the hepatoxicity graphics took place in early 2019 with participant from more than 20 individuals from the 10 organizations including: Abbvie, Bayer, Boehringer Ingelheim, FDA, Eli Lilly & Co, Janssen, Merck, Novartis, and Rh. Many thanks to all of the testers who participanted.

The ASA Biopharm/DIA Safety Working Group is ably lead by Judy Li (Celgene) and William Wang (Merck).

Eileen Navarro, Mat Soukup, Gregory Levin, Lei Nie, Paul Schuette, Rachel Duglash, Susan Duke and Frank Harrell at Center for Drug Evaluation, FDA provided helpful feedback for consideration on tool features and usage, and technical help within the CDER environment.
