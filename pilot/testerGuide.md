# Alpha/Beta Testing Guide
 
## Objective

Gather technical and clinical feedback for the new interactive graphic eDish tool being created by the ASA/DIA Interactive Safety Graphics (ISG) working group.

## Summary of the eDish Tool

Evaluation of Drug-Induced Serious Hepatotoxicity (eDISH) plots are a key tool used to assess liver toxicity in clinical trials. Our tool implements the standard eDish workflow as a free and open source interactive graphic paired with a thoroughly documented clinical workflow. The graphic itself was created using javascript and will run in any modern web browser. We’ve also created an R package to make it as easy as possible for users to create eDish charts for using their own clinical data. 

## Testing Process Overview

In addition to attend kick-off and wrap-up meetings, we’ve broken the testing process in to 2 separate evaluations of the eDish tool: 

- Evaluation 1 - Evaluate the eDish Graphic using demo data and complete the web survey
- Evaluation 2 - Evaluate the eDish Graphic using your organization’s data and complete the web survey

More details on each Phase is provided below
 
## Evaluation 1: Evaluating the eDish graphic using demo data

First, we’d like to get some clinical feedback on the graphic using a demo data set. For this phase, we’re asking that clinical users use the clinical workflow document (link) to access safety signals in a data set that we provide. More technical testers, can skip this testing phase. 

### Step-By-Step [Total Time Required: 30 minutes to 1 hour]

1. Open the eDish graphic in your web-browser at [this link](https://safetygraphics.github.io/safety-eDISH/test/). We recommend avoiding Internet Explorer if at all possible. 
2. Download the clinical workflow document [at this link](https://github.com/SafetyGraphics/SafetyGraphics.github.io/raw/master/eDISH%20ISG%20User's%20Manual%20%26%20Workflow%20draft%204Feb2019.docx), and use it’s guidance (in combination with your own clinical expertise) to review the data shown in the chart. 
3. Complete <a href="https://www.surveymonkey.com/r/BWPZB7V" target="_blank">the survey</a>. 

## Evaluation 2: Evaluating the eDish graphic using your organization’s data 

Next, we’d like you to load some data from your organization into the tool using the safetyGraphics R package. In general, we think that it will be easiest for a technical user (with experience using R and RStudio) to configure the chart and then share a simple html version of the graphic with clinical users.

### Step-by-step [Total Time Required: 1 hour for technical users, 30 minutes for clinical users]

1. [All Users] Identify a lab data set to use for the test. The data should be “long” (one record per person per visit per lab test) instead of wide. If you’ve got ADaM or SDTM data, that’s ideal. 
2. [Technical User] Install the most recent versions of R and RStudio if you haven’t already.
3. [Technical User] We’ll be using the new safetyGraphics R package to create a standalone version of the eDish chart using your data. We strongly recommend reviewing this [“Shiny Application User Guide” Vignette](https://github.com/SafetyGraphics/safetyGraphics/wiki/Vignette:-Shiny-User-Guide) before getting started. 
4. [Technical User] Using the vignette as a guide, open up the app, load your data, update the settings as needed, and export a copy of the eDish plot. 
5. [All Users] Share the exported html graphic with the testing team at your organization, and play with the graphic. 
6. [All Users] Fill out <a href="https://www.surveymonkey.com/r/BS6FHDH" target="_blank">the survey</a>.

## Notes

Note that although you will be viewing your data in a web browser, both the shiny application and the exported reports are self-contained and do not send data to the internet. 


 
## Disclaimer

The workflow incorporated in this tool is not comprehensive.  It only addresses evaluation of labs and does not take into account adverse events, for instance.  We plan to expand the workflow reflected in this tool in future versions.

## Questions? 

The R package is very much under development so if you find problems please let us know. [Email us](mailto:rinki_jajoo@merck.com), [file an issue on github](https://github.com/SafetyGraphics/safetyGraphics/issues) or send a meeting invite and we’ll talk you through it! 
