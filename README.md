## Overview 

This is the homepage for the Interactive Safety Graphics (ISG) subteam of the ASA Biopharm-DIA Safety Working Group. The working group is an interdisciplinary effort that, amongst other things, seeks to provide a clinical safety workflow for monitoring during clinical development in an open source model. The ISG team’s first deliverable is a workflow to monitor for hepatoxicity using a new [safetyGraphics R package](https://github.com/ASA-DIA-InteractiveSafetyGraphics/safetyGraphics) and a [well-documented clinical workflow]() based on the safety clinician’s monitoring practice. You can try the interactive prototype [here](https://asa-dia-interactivesafetygraphics.github.io/safety-eDISH/test/).

## Resources

### Alpha/Beta testing

Alpha and Beta testing for the hepatoxicity graphics is underway! Resources for testers are below. 

- [Tester Email](./pilot/introEmail) and [Guide](./pilot/testerGuide)
- [Clinical Workflow](https://github.com/ASA-DIA-InteractiveSafetyGraphics/ASA-DIA-InteractiveSafetyGraphics.github.io/raw/master/eDISH%20ISG%20User's%20Manual%20%26%20Workflow%20draft%204Feb2019.docx) (download word document)
- [R User Guide](https://github.com/ASA-DIA-InteractiveSafetyGraphics/safetyGraphics/wiki/Vignette:-Shiny-User-Guide)
- [Demo Data Survey](https://www.surveymonkey.com/r/BWPZB7V) and [User Data Survey](https://www.surveymonkey.com/r/BS6FHDH)
- [Tester List](https://docs.google.com/document/d/17JKAuu-aJjwzvyENtkf9y-G_nPqvNsbOiazDuhbnwoM/edit)

### safetyGraphics R Package

The safetyGraphics R package that allows users to evaluate clinical trial safety in R, starting with hepatoxicity. These specialized graphics use lab data from clinical trials (AdAM or SDTM preferred). To learn more you can:

- See the package on [CRAN](https://cran.r-project.org/web/packages/safetyGraphics/index.html)
- View the [vignette](https://cran.r-project.org/web/packages/safetyGraphics/vignettes/shinyUserGuide.html) for detailed guidance on using the Shiny application
- Explore the [github repo](https://github.com/ASA-DIA-InteractiveSafetyGraphics/safetyGraphics) for the package
- Check out the underlying [javascript library](https://github.com/ASA-DIA-InteractiveSafetyGraphics/safety-eDISH) used to create the [eDish Chart](https://asa-dia-interactivesafetygraphics.github.io/safety-eDISH/)
- Try out a hosted version of the [shiny app](https://becca-krouse.shinyapps.io/safetyGraphicsApp/) (or run it locally using the code in the capsule summary above)
- Check out [other interactive graphics](https://rhoinc.github.io/safety-explorer-suite/) for safety monitoring.  We also wrote [a paper](https://journals.sagepub.com/doi/abs/10.1177/2168479018754846) about these. Our plan is to add some of them to SafetyGraphics package in future releases.
- Take a look at the [technical framework](https://user-images.githubusercontent.com/3680095/51296179-6f2b7b00-19e0-11e9-841a-afc2964a7e1a.png) being used to create the chart
- See the Shiny App in action below: 

![edishapp-take2_smallish](https://user-images.githubusercontent.com/3680095/51296057-e3195380-19df-11e9-971a-430c3be930a4.gif)

## About the Team

The safetyGraphics and safety-eDish projects are maintained by the ASA Biopharm/DIA Safety Working Group’s Interactive Safety Graphics Taskforce, which includes stakeholders from across the pharmaceutical industry, including the FDA. All work is free and open source with an MIT License. 

We are indebted to the ASA Biopharm-DIA Safety WG for agreeing to sponsor this Interactive Safety Graphics (ISG) Taskforce. Jeremy Wildfire (Rho) developed the initial Javascript code, and worked with Rebecca Krouse (Rho) and Preston Burns (Rho) to wrapped the Javascript within RShinydevelop the associated safetyGraphics R package, with an assist from Xiao Ni (Novartis); James Buchanan (Covilance) authored the User’s Guide; Zackary Skrivanek (Lilly) and Melvin Munsaka (AbbVie) authored the beta test plan; Rinki Jajoo (Merck) and Nathan Li (Merck) serve as our project managers (previously Susan Duke); Xiao Ni (previously Susan Duke) represents ISG on the WG’s Communications Team.  Frank Harrell (Vanderbilt University and FDA) provided invaluable advice at many steps along the way.

Clinicians who provided invaluable feedback on tool features and the clinical workflow include James Buchanan, Eileen Navarro (FDA), Dennis O’Brien (Boehringer-Ingelheim), Barbara Hendrickson (Abbvie), Jonathan Seltzer (ACI Clinical), Mengchun Li (TB Alliance) and Mary Furnari (Celgene).  Their willingness to enter their comments into GitHub not only improved the tool but also demonstrated their interest and need for it.

In addition to the data scientists and statisticians noted above, our other members include Karl Brand (Bayer), Brian Cohen (ACI Clinical), Rachel Duglash (FDA), Robert Gordon (J&J), Hong Wang (Boehringer-Ingelheim) and Richard Zink (Target Pharma Solutions).

The ASA Biopharm/DIA Safety Working Group is ably lead by Judy Li (Celgene) and William Wang (Merck).

Eileen Navarro, Mat Soukup, Gregory Levin, Lei Nie, Paul Schuette, Rachel Duglash, Susan Duke and Frank Harrell at Center for Drug Evaluation, FDA provided helpful feedback for consideration on tool features and usage, and technical help within the CDER environment.
