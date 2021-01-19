
# Interactive Safety Graphics Roadmap

**Last Update: 2020-12-09**

This document summarizes the objectives and projects for the ISG group.

## Group Objectives

In general, we are currently focused on 3 interconnected areas: 

1. Improve the safetyGraphics Platform 
2. Create new charts for safety monitoring
3. Validation/Qualification

These areas of work are linked to the active projects shown below. 

## 2021 Overview

The technical team is focused on the v2 release of safetyGraphics along with the new safetyCharts and safetyData packages. Our goal is to start alpha and beta testing and have a release to CRAN by the end of Q2. The clinical team is focused on defining future graphics priorities.  The goal is to create a prioritized list of charts by the end of Q2, so that the technical team can quickly transition in to working on new charts in the 2nd half of the year. 

##  Active Projects

The ISG has several projects that are active or ready to start. 

### 1. [safetyGraphics](https://github.com/SafetyGraphics/safetyGraphics) v2.0 
- **Overview**: [safetyGraphics](https://github.com/SafetyGraphics/safetyGraphics) v2 expands the scope of the app to include all data domains and a wide range of charts. For a full list of development tasks see the [issue tracker](https://github.com/SafetyGraphics/safetyGraphics/milestone/21)
-  **Technical Lead**: Jeremy Wildfire
-  **Clinical Lead**: None. Will gather extensive clinical feedback in beta testing.
-  **Progress**: 75%
-  **Updates**
    - 2020-10-28: Working prototype is ~80% complete. Aiming to finalize development by end of 2020, and start beta testing in early 2021
    - 2020-01-19: Formed v2 working group. Targeting Q2 release. 

### 2. [safetyCharts](https://github.com/SafetyGraphics/safetyCharts) v1.0 
- **Overview**: safetyGraphics v2 will import all charts from other libraries, including safetyCharts, which will become a dependency. Our goal is to have a robust set of R tables, listings and figures defined in this package - see this [wiki page](https://github.com/SafetyGraphics/safetyCharts/wiki/Chart-List) for a draft list of charts. The charts will include both static and interactive charts displays and will range from simple listings to more complex interactive displays. All charts in safetyCharts will be configured to easily work with our typical safetyGraphics workflow. 
-  **Technical Lead**: Jeremy Wildfire -> ???
-  **Clinical Lead**: None. Will gather extensive clinical feedback in beta testing.
-  **Progress**: 60%
-  **Updates**
    - 2020-10-28: Working prototype is ~80% complete. Aiming to finalize development by end of 2020, and start beta testing in early 2021
    - 2020-12-09: Basic package structure is in place, and we will be updating charts to follow package development best practices as we get closer to a v2 release. Starting an effort to make prioritized list of charts to create early next year, which will include components of the Novartis Participant Profile. As such we are closing out the standalone Participant Profile project and rolling it in to safetyCharts. 
    - 2020-01-19: Continuing development. Adding automation with GitHub actions. Planning to release along with safetyCharts v2.0
  
### 3. [AE Dot plot using Analysis Data](https://jwildfire.github.io/forest-plot/)
-  **Overview**: (Was: Pilot adding statistical inference in htmlwidgets) Collaborative effort between ASA (including ISG), PhUSE and FDA to create an interactive Adverse event dot plot with robust statistical methods in R Shiny.
-  **Technical Lead**: Jeremy
-  **Clinical Lead**: Melvin 
-  **Progress**: 90%
-  **Updates**
    - 2020-10-28: Jeremy created a [prototype](https://github.com/jwildfire/forest-plot) to generate a forrest plot using analysis results data and made an [htmlwidget](https://github.com/SafetyGraphics/safetyCharts/tree/forestPlot) so that it can be initialized in R.  Going to make a few more updates and call this done. Will re-evaluate approach for phase 2 of the project.  

### 4. TIRS Manuscript
- **Overview**: Invited manuscript for TIRS
-  **Technical Lead**: Jeremy
-  **Clinical Lead**: Jim
-  **Progress**: 90%
-  **Updates**
    - 2020-10-28: Jim and Mengchun created a solid first draft. Waiting on Jeremy for technical section. 
    - 2020-12-4: Jim circulated a draft to the full team in early December. Plan is to consolidate feedback and submit to TIRS in the coming weeks. 

## Inactive Projects - Help Wanted!

### 1. [nR Update for hep-explorer](https://github.com/SafetyGraphics/hep-explorer/pull/326)
- **Overview**: Finalize addition of nR to the hep-explorer tool
-  **Technical Lead**: Jeremy
-  **Clinical Lead**: Jim
-  **Progress**: 80%
-  **Updates**
    - 2020-11-04: Coding is done. Need to QC/validate. Jeremy to provide guidance to Pavan.
    - 2021-01-19: Waiting for validation programmer!

### 2. Nephrotoxicity Graphics
-  **Overview**: Create a suite of graphics for analyzing nephrotoxicity
-  **Technical Lead**: Spencer -> ???
-  **Clinical Lead**: Jim
-  **Progress**: 50%
-  **Updates**
    - 2020-10-28: Bad News: Development stalled when Spencer left the project. Good News: Spencer left a solid prototype. Need to regroup and assess features needed and testing/QC needed for v1 release. 

### 3. Create Clinical Workflow for existing Laboratory Graphics
-  **Overview**: Create a clinical workflow to be used in conjunction with the existing graphics related to laboratory monitoring. Make updates to the graphics as needed based on clinical requests. 
-  **Technical Lead**: *Help Wanted*
-  **Clinical Lead**: *Help Wanted* 
-  **Progress**: 0%
    
### 4. Improve app performance with large data sets
-  **Overview**: Create a clinical workflow to be used in conjunction with the existing graphics related to laboratory monitoring. Make updates to the graphics as needed based on clinical requests. 
-  **Technical Lead**: *Help Wanted* 
-  **Clinical Lead**: *Help Wanted* 
-  **Progress**: 0%

### 5. Validation 
-  **Overview**: Team focused on the validation of our tools
-  **Technical Lead**: *Help Wanted* 
-  **Clinical Lead**: *Help Wanted* 
-  **Progress**: 0%


### 6. AE Volcano Plot Graphic
-  **Overview**: Create an interactive volcano plot module for Adverse Events
-  **Technical Lead**: Ke -> Isaac
-  **Clinical Lead**: Dennis
-  **Progress**: 75%
-  **Updates**
    - 2020-10-28: Isaac is making good progress on the refactor, and will coordinate with Jeremy to prepare a stable release as part of the safetyGraphcis v2 rollout.
    - 2020-12-09: On hold until Isaac has time or a new developer can take this on. 
  
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

### 3. Add Support for Multiple Data Domains
-  **Overview**: Version 1.0 of the safetygraphics package only allows the user to load lab data. This project will add support for loading multiple data sets from different data domains and creating associated charts. 
-  **Technical Lead**: Becca -> Jeremy
-  **Clinical Lead**: NA (technical work only)
-  **Progress**: 100%
-  **Updates** 
    - 2020-10-28 - Technical work is done in safetyGraphcis v2!
  
### 4. Participant Profile Graphic
-  **Overview**: Create a robust participant profile accessible via links from other charts. Update the clinical workflow for the hep-explorer to incorporate the new functionality
-  **Technical Lead**: Renan Sauteraud -> Xiao Ni
-  **Clinical Lead**: *Help Wanted*
-  **Progress**: 50%
-  **Updates**
    - 2020-10-28: The modules created in the Novartis participant profile are supported in safetyGraphics v2.0 and will be included in the default chart list. 
    - 2020-12-9: Closing this project and moving the work it in to safetyCharts

### 5. safetyData v1.0
-  **Overview**: The [safetyData](https://safetygraphics.github.io/safetyData/) package is a standalone package with PHUSE ADaM and SDTM data sets. 
-  **Technical Lead**: Jeremy Wildifre
-  **Clinical Lead**: NA
-  **Progress**: 100%
-  **Updates**
    - 2020-01-19 - Released to CRAN

