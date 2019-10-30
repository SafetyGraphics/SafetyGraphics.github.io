# Beta Testing Guide

## Objective

Gather technical and clinical feedback for the new interactive  eDish tool being created by the ASA/DIA Interactive Safety Graphics (ISG) working group.

## Summary of the eDish Tool

Evaluation of Drug-Induced Serious Hepatotoxicity (eDISH) plots are a key tool used to assess liver toxicity in clinical trials. Our tool implements the standard eDish workflow as a free and open source interactive graphic paired with a thoroughly documented clinical workflow. The graphic itself was created using javascript and will run in any modern web browser. We’ve also created an R package to make it as easy as possible for users to create eDish charts for using their own clinical data.

## Testing Process Overview

In addition to attend kick-off and wrap-up meetings, we’ve broken the testing process in to 2 separate evaluations of the eDish tool:

- Evaluation 1 - Evaluate the web-based eDish Graphic and complete the web survey
- Evaluation 2 - Evaluate the safetyGraphics R application and complete a separate web survey

More details on each Phase is provided below

## Evaluation 1: Evaluating the web-based eDish Graphic

First, we’d like to get some clinical feedback on the graphic using a demo data set. For this phase, we’re asking that clinical users use the [clinical workflow document](https://github.com/SafetyGraphics/SafetyGraphics.github.io/raw/master/guide/HepExplorerWorkflow_v1_1.pdf) to access safety signals in a data set that we provide. More technical testers, can skip this testing phase. 

### Step-By-Step
[Total Time Required: 30 minutes to 1 hour]

1. Open the eDish graphic in your web-browser at [this link](https://safetygraphics.github.io/hep-explorer/test-page/example1). We recommend avoiding Internet Explorer if at all possible. Chrome, Firefox and Safari should all work great.
2. Download the clinical workflow document [at this link](https://github.com/SafetyGraphics/SafetyGraphics.github.io/raw/master/eDISH%20ISG%20User's%20Manual%20%26%20Workflow%20draft%204Feb2019.docx), and use it’s guidance (in combination with your own clinical expertise) to review the data shown in the chart.
3. Complete <a href="https://www.surveymonkey.com/r/BWPZB7V" target="_blank">the survey</a>.

## Evaluation 2: Evaluating the safetyGraphics R package

Next, we’d like you to evaluate the safetyGraphics R package. In general, we think that it will be easiest for a technical user (with experience using R and RStudio) to configure the chart and then share a simple html version of the graphic with clinical users.

### Step-by-Step
[Total Time Required: 1 hour for technical users, 30 minutes for clinical users]

1. __All Users__ - Identify a lab data set to use for the test. The data should be “long” (one record per person per visit per lab test) instead of wide. If you’ve got ADaM or SDTM data, that’s ideal. For convienience, we've also provided several suitable data sets below.
2. __Technical User__ - Install the most recent versions of R and RStudio if you haven’t already.
3. __Technical User__ - We’ll be using the latest development version of safetyGraphics R package to create a standalone version of the eDish chart using your data. We strongly recommend reviewing this [“Shiny Application User Guide” Vignette](https://github.com/SafetyGraphics/safetyGraphics/wiki/Vignette:-Shiny-User-Guide) before getting started.
4. __Technical User__ - Install the R package from github using the `devtools` package, open up the app, load a data set, update the settings as needed, and export a copy of the eDish plot. See the technical notes below if you run in to problems.
5. __All Users__ - Share the exported html graphic with the testing team at your organization, and ask them to follow the [clinical workflow](https://github.com/SafetyGraphics/SafetyGraphics.github.io/raw/master/eDISH%20ISG%20User's%20Manual%20%26%20Workflow%20draft%204Feb2019.docx) for this tool.
6. __All Users__ - Fill out <a href="https://www.surveymonkey.com/r/BS6FHDH" target="_blank">the survey</a>.

## Technical Notes

- Here are some sample data sets that can be used to test the `safetyGraphics` Shiny App. Just click below to download the file to your computer, and then upload it in to the app as described in the vignette:
  - [SDTM Data](https://raw.githubusercontent.com/SafetyGraphics/SafetyGraphics.github.io/master/pilot/SampleData_SDTM.csv)
  - [Partial SDTM Data](https://raw.githubusercontent.com/SafetyGraphics/SafetyGraphics.github.io/master/pilot/SampleData_PartialSDTM.csv)
  - [Partial ADaM Data](https://raw.githubusercontent.com/SafetyGraphics/SafetyGraphics.github.io/master/pilot/SampleData_PartialADaM.csv)
  - [Data with No Data Standard](https://raw.githubusercontent.com/SafetyGraphics/SafetyGraphics.github.io/master/pilot/SampleData_NoStandard.csv)

- Check [the vignette](https://github.com/SafetyGraphics/safetyGraphics/wiki/Vignette:-Shiny-User-Guide) first.
- We recommend avoiding Internet Explorer if at all possible. Chrome, Firefox and Safari should all work great.
- To load a file larger than 5mb, follow the instructions [here](https://github.com/SafetyGraphics/safetyGraphics/wiki/Vignette:-Shiny-User-Guide#loading-large-files)
- We'll be making updates as needed throughout the beta test, so remember to load the latest version of the R package using devtools. The code to start the application using devtools is below.

```
install.packages("devtools")
library("devtools")
devtools::install_github("ASA-DIA-InteractiveSafetyGraphics/safetyGraphics")
library("safetyGraphics")
safetyGraphicsApp()
```

- Note that you might need to run the code above line-by-line since devtools sometimes has some prompts that can steal  lines of code when pasting in a large code block!
- `safetyGraphics` requires a fairly recent version of R (>v3.5).
- No data leaves your computer (or is sent outside your company's firewall) using the standard configuration of the `safetyGraphics` library.  Although you will be viewing the data in a web browser, both the shiny application and the exported reports are hosted on your computer as described [here](https://shiny.rstudio.com/articles/persistent-data-storage.html#local-vs-remote).

## Disclaimer

The workflow incorporated in this tool is not comprehensive.  It only addresses evaluation of labs and does not take into account adverse events, for instance.  We plan to expand the workflow reflected in this tool in future versions.

## Questions?

The R package is very much under development so if you find problems please let us know. [Email us](mailto:rinki_jajoo@merck.com), [file an issue on github](https://github.com/SafetyGraphics/safetyGraphics/issues) or send a meeting invite and we’ll talk you through it!
