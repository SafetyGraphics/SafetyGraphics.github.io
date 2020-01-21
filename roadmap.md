
# Interactive Safety Graphics Roadmap

**Last Update: 2020-01-21**

This document summarizes the current areas of emphasis for the ISG group. In general, we are focused on 3 interconnected areas: 

1. Hepatic Safety Explorer Enhancements
2. Interactive Graphics for new safety domains
3. safetyGraphics Platform Maintenance

These areas of work are described in more detail in the sections below. We’ve also included a sections describing the maintenance model for our group, a section listing active projects and a .

## Focus 1: Hepatic Safety Explorer Enhancements

### Overview

The ISG team’s first deliverable was a workflow to monitor for hepatoxicity using the new [safetyGraphics R package](https://github.com/SafetyGraphics/safetyGraphics) and a [well-documented clinical workflow](https://github.com/SafetyGraphics/SafetyGraphics.github.io/raw/master/ISG%20Hepatic%20Safety%20Explorer%20User's%20Manual%20%26%20Workflow%20v1.0.pdf) based on the safety clinician’s monitoring practice.  A primary focus of our ongoing work will be to maintain and improve the existing tool, starting with the items listed below. 

### Enhancements

- Incorporate a full participant profile
   - Display time course of study drug administration relative to laboratory changes.
   - Display time course of concomitant medication administration relative to laboratory changes.
   - Display the time course of adverse events relative to laboratory changes using swimmer plots. Consider color coding for AE severity.
- Improve R-Value functionality (DONE)
   - Show R value when an individual point is chosen
   - Display R value for each point in the lab value over time plot. 
- Add option to show plot for any given time point in the study (DONE)
- Add an option for adjusting the fold change calculation to a fixed value (e.g., fold change above an ALT of 30 U/L). 
- Enhance ability to load large datasets.
- Resolve other high-priority issues and bugs in the [issue tracker](https://github.com/SafetyGraphics/hep-explorer/issues) as they are reported. 

## Focus 2: Interactive Graphics for new safety domains

### Overview

While our initial focus was on hepatic safety, we plan to expand our work to cover additional safety domain as time and resources allow. Ideally, new graphics created for the topics listed below will follow the same model used for hepatic safety: A clinical workflow will be created to accompany the graphics, which will then be deployed as part of the overall safetyGraphics R package and Shiny application. 

### Nephrotoxicity

*   Identify subjects with serum creatinine values exceeding ULN (plots of SCr over time).
*   Identify subjects with elevations of serum creatinine >2x baseline, even if the values remain within the normal range.
*   Identify subjects with estimated glomerular filtration rate (eGFR) below a threshold value. Calculate eGFR based on serum creatinine and cystatin C. Display changes over time and compare relative changes in eGFR by creatinine and by cystatin C as an indicator of possible renal transporter inhibition.
*   Display changes in BUN over time with Scr and/or eGFR as an indicator of pre-renal azotemia.
*   Display study drug and concomitant medication administration, an appearance of AEs, relative to renal lab changes.

### QTc Prolongation

Based on the CTSPedia QTc graphic, allow the ability to select a point to drill down to subject details, such as:

*   Changes in QTc (by Fridericia, Bazett, Nomogram, Framingham, Hodges) over time.
*   Display of heart rate relative to QTc (to identify instances when the HR is <60).
*   Display PK data (as available) relative to QTc changes.

### Volcano Plot Explorer

Based on the CTSPedia volcano plot, allow the ability to select a point to drill down to the subject level details of those reporting that particular AE:

*   Demographics
*   Study drug dose distribution
*   Medical history
*   Concomitant medication use
*   Other associated AEs (with an adjustable frequency threshold)

And the ability to compare the characteristics of subjects experiencing this AE (as described above) to the rest of the study population to identify any imbalances that might suggest a risk factor, a drug/disease state interaction, or contributing confounding variable.

### Recurrent Adverse Events

This will require some thought as to how to statistically evaluate the concept. We typically evaluate AEs in terms of the frequency of subjects experiencing one or more instances of a particular AE. In doing so we lose information on the extent to which subjects experience more than one episode of the AE over the time of study drug administration. If an AE is random in nature, its recurrent appearance should be independent of time of study drug administration and independent of dose. However, if there is a causal connection, it may be related to time of administration and, possibly, dose. If an AE is random in nature, it may not be subject to reoccurrence over the duration of study drug administration. But the more frequent the recurrence during study drug administration, the greater the possibility of a causal association. Mean cumulative function may be the most appropriate statistical measure, but we need further statistical input.

### Other Topics

Other areas that have been discussed include: 

*   Anaphylaxis
*   Injection site reactions
*   Hypersensitivity
*   AE clustering by time
*   Vital signs
*   Bleeding

## Focus 3: safetyGraphics Platform Updates

### Overview

The primary platform for all ISG work to date is the safetygraphics R package. The core functionality of the app is an R Shiny application that provides:

*   Interactive hepatotoxicity explorer graphic
*   Easy loading of clinical lab data
*   Automatic data standard detection
*   Real-time data mapping and validation
*   Simple Data and Graphic export functionality

The safetygraphics R package is built to be modular and extensible, and the v1.0 release of the package includes optional access to [6 additional standard lab monitoring graphics](https://journals.sagepub.com/doi/abs/10.1177/2168479018754846) in addition to the custom hepatotoxicity explorer created by our ISG group. 

### Next Steps for the Platform

In addition to community created charts, next steps for core platform include adding support for: 

*   Create a walk-through describing how to add a new chart to the system.  (DONE in v1.1)
*   Easy communication between charts (DONE in v1.1)
*   Multiple data domains (Currently only labs data is supported)
*   More chart types (Currently only R htmlwidgets are easily supported) (DONE in v1.1)
*   Organization-specific data mappings and settings (DONE in v1.1)
*   Embedded access to clinical workflows within the shiny app 
*   Optimized graphics for studies with very large data sets
*   Automated tests for the shiny application
*   Facilitated “real-time” statistical analysis

## Maintenance Model

### Overview

Our group is committed to creating tools that are free and open-source. All work is done by volunteers and shared on [GitHub](https://github.com/SafetyGraphics/safetyGraphics). We are working to create a sustainable framework for long-term maintenance of our tools. An initial discussion of several key issues is provided below. 

### Software Maintenance

Community-maintained code can have much lower maintenance costs than in-house developed software. If a business is considering developing in-house software tools, they become the sole maintainers of it. But, if they can find other organizations that have the same problem, they can pool their resources to develop the code as an open source project.

###  Maintenance Types

The three types of maintenance – corrective, adaptive, and perfective maintenance. Adaptive maintenance is the addition of new functionalities, features, and capabilities to existing software, to take advantage of new technology, upgrades, new requirements, or new problems. The goal is to adapt the software to changing user needs, technologies, or computing environments. Corrective maintenance seeks to remove software defects that can result from design errors, logic errors, or coding errors. Perfective maintenance involves enhancing software performance without changing functionality by improving the system's efficiency, reliability, security, usability, or maintainability, often in response to user or system personnel requests.

The time taken to perform enhancive (adaptive and perfective) maintenance decreases as the degree of open responsibility increases, while the time taken for corrective maintenance decreases as the degree of delegated responsibility increases.

### Validation

The initial release of the tools are not validated and are intended for exploratory use only. We are certainly willing to consider validated versions of the tools in the future, and have team members closely involved with the R Validation Hub effort that establishing a general framework for R package validation in pharma.

##  Active Projects

The ISG has several projects that are active or ready to start. 

### 1. Create Participant Profile Graphic
-  **Overview**: Create a robust participant profile accessible via links from other charts. Update the clinical workflow for the hep-explorer to incorporate the new functionality
-  **Technical Lead**: Renan Sauteraud
-  **Clinical Lead**: *Help Wanted*
-  **Progress**: 50%

### 2. Create AE Volcano Plot Graphic
-  **Overview**: Create an interactive volcano plot module for Adverse Events
-  **Technical Lead**: Ke
-  **Clinical Lead**: Dennis
-  **Progress**: 25%

### 3. Add Support for Multiple Data Domains
-  **Overview**: Version 1.0 of the safetygraphics package only allows the user to load lab data. This project will add support for loading multiple data sets from different data domains and creating associated charts. 
-  **Technical Lead**: Becca
-  **Clinical Lead**: NA (technical work only)
-  **Progress**: 10%

### 4. Updated AE Dot plot 
-  **Overview**: (Was: Pilot adding statistical inference in htmlwidgets) Collaborative effort between ASA (including ISG), PhUSE and FDA to create an interactive Adverse event dot plot with robust statistical methods in R Shiny.
-  **Technical Lead**: Melvin
-  **Clinical Lead**: NA 
-  **Progress**: 10%
    
### 5. TIRS Manuscript
- **Overview**: Invited manuscript for TIRS
-  **Technical Lead**: Jeremy
-  **Clinical Lead**: Jim
-  **Progress**: 10%

### 6. Create Clinical Workflow for existing Laboratory Graphics
-  **Overview**: Create a clinical workflow to be used in conjunction with the existing graphics related to laboratory monitoring. Make updates to the graphics as needed based on clinical requests. 
-  **Technical Lead**: *Help Wanted*
-  **Clinical Lead**: *Help Wanted* 
-  **Progress**: 0%
    
### 7. Improve app performance with large data sets
-  **Overview**: Create a clinical workflow to be used in conjunction with the existing graphics related to laboratory monitoring. Make updates to the graphics as needed based on clinical requests. 
-  **Technical Lead**: *Help Wanted* 
-  **Clinical Lead**: *Help Wanted* 
-  **Progress**: 0%

## Completed Projects

### 1. Create PAlt Graphic
-  **Overview**: Add the calculation for PAlt and the associated estimate of hepatocyte loss to hep-explorer, and create a stand-alone graphic allowing users interactively to explore those parameters for different ALT profiles
-  **Technical Lead**: Jeremy Wildfire
-  **Clinical Lead**: Rachel Church and Paul Watkins
-  **Progress**: Complete. [Released with hep-explorer v1.3](https://github.com/SafetyGraphics/hep-explorer/releases/tag/v1.3.0)

### 2. Add Support for Multiple Chart Types
-  **Overview**: Version 1.0 of the safetygraphics package only supports creating charts using htmlwidgets - this project will add support for R graphics and standalone shiny modules. 
-  **Technical Lead**: Rebecca Krouse 
-  **Clinical Lead**: NA (technical work only)
-  **Progress**: Complete - [released in safetyGraphics v1.1](https://github.com/SafetyGraphics/safetyGraphics/releases/tag/v1.1.0)

## Graphic List

*Released* - The [safetyGraphics package](https://github.com/SafetyGraphics/safetyGraphics) currently support several graphics for monitoring lab data. 

- Hepatic Safety Explorer  - [Library](https://github.com/SafetyGraphics/hep-explorer), [Configuration](https://github.com/SafetyGraphics/hep-explorer/wiki/Configuration)
- Histogram -  [Library](https://github.com/RhoInc/safety-histogram), [Configuration](https://github.com/https://github.com/RhoInc/safety-histogram/wiki/Configuration)
- Outlier Explorer -  [Library](https://github.com/RhoInc/outlier-explorer), [Configuration](https://github.com/https://github.com/RhoInc/RhoInc/outlier-explorer)
- Shift Plot -  [Library](https://github.com/RhoInc/shift-plot), [Configuration](https://github.com/https://github.com/RhoInc/RhoInc/shift-plot)
- Results Over Time - [Library](https://github.com/RhoInc/results-over-time), [Configuration](https://github.com/https://github.com/RhoInc/RhoInc/results-over-time)
- Paneled Outlier Explorer -  [Library](https://github.com/RhoInc/paneled-outlier-explorer), [Configuration](https://github.com/https://github.com/RhoInc/RhoInc/paneled-outlier-explorer)
- Safety Delta-Delta - [Library](https://github.com/RhoInc/safety-delta-delta)

*In Development* -  Additional graphics are currently being developed or tested for use with [safetyGraphics](https://github.com/SafetyGraphics/safetyGraphics): 

- Volcano Plot - [Library](https://github.com/SafetyGraphics/volcano-plot) 
- Participant Profile - [Library](https://github.com/Novartis/patprofile)
- AE Dot Plot - [Library](https://github.com/RhoInc/aeexplorer)
- AE Timeline - [Library](https://github.com/RhoInc/ae-timelines)

*Idea List* - Finally, we're always looking for new types of interesting visualizations to develop. We've discussed adding the following:  

- Nephrotoxicity Domain
    - Identify subjects with serum creatinine values exceeding ULN (plots of SCr over time).
    - Identify subjects with elevations of serum creatinine >2x baseline, even if the values remain within the normal range.
    - Identify subjects with estimated glomerular filtration rate (eGFR) below a threshold value. Calculate eGFR based on serum creatinine and cystatin C. Display changes over time and compare relative changes in eGFR by creatinine and by cystatin C as an indicator of possible renal transporter inhibition.
    - Display changes in BUN over time with Scr and/or eGFR as an indicator of pre-renal azotemia.
    - Display study drug and concomitant medication administration, an appearance of AEs, relative to renal lab changes.
- QTc Prolongation Domain: Based on the CTSPedia QTc graphic, allow the ability to select a point to drill down to subject details, such as:
    - Changes in QTc (by Fridericia, Bazett, Nomogram, Framingham, Hodges) over time.
    - Display of heart rate relative to QTc (to identify instances when the HR is <60).
    - Display PK data (as available) relative to QTc changes.
- AE Domain
    - Tendril Plot
    - Analysis of Recurrent AEs
    - AE clustering by time
- Anaphylaxis
- Injection site reactions
- Hypersensitivity
- AE clustering by time
- Vital signs
- Bleeding
    
