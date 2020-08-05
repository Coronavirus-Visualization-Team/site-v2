/** @jsx jsx */
import React from "react"
import { Box, jsx, Text, useColorMode, Container , Embed} from "theme-ui"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/visualizations/risk-score-vis');

const RiskScorePage = props => {
  return (
    <>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Helmet title="CVT | Risk Score Model" />
      <Text
        sx={{
          fontSize: [3, 4],
          maxWidth: ["100%", "65%"],
          m: "2vh 0vw"
        }}
      >
      COVID-19 Risk Score Model
      </Text>
      </Box>
      <Box
        sx={{
          width: "92%",
          mt: 4,
          m: "auto"
        }}
      >
        <Embed
          src={'/us_risk_scores.html'}
          sx={{
            background: "transparent",
            border: "1px solid #ccc",
            height: [400, 400], 
            borderRadius: "25px"
          }}
        />
        <Text
          sx={{
            fontSize: [0, 1],
            maxWidth: ["100%", "65%"],
            m: "2vh auto 0 auto",
            textAlign: "center",
            color: "primary",
            position: "relative"
          }}
          >
            By Amin Boukari, Aniruddha Murali, Bryan Lu, Ispeeta Deka, Jacob Nardini, and Srikripa Krishnan | Socioeconomic Factors Team
        </Text>
    </Box>
     
    <Text
      sx={{
        variant: "styles.headerText",
        mt: "2vh",
        color: "primary",
        position: "relative"
        }}
      >
      Overview
      </Text>
      <Text
        sx={{ 
          variant: "styles.bodyText", 
          color: "secondary", 
          fontSize: [1, 2],
          position: "relative"
        }}
        >
        The pandemic has shed light on societal disparities and economic 
        inequalities. We are undertaking extensive analysis and drawing 
        data-driven insights on how the pandemic is disproportionately 
        affecting marginalized and underserved communities. We are assessing
        the relationship between socioeconomic variables and the epidemiological
        profiling of COVID-19 including case, death, and recovery rates on 
        zip-code, county, state, and nation-wide level through statistical testing
        and modelling. This has enabled us to understand the distribution of spread
        and impact across geographies on a local district level to a country wide 
        level. Through methodologies such as feature extraction and cluster analyses
        we are able to understand the inherent correlations between socioeconomic
        variables so we can model appropriately.
        <br></br>
        <br></br>
        Our team has also computed and visualized aggregate risk scores for 
        specific counties based on the socioeconomic variables, population density, 
        and testing rate  so we can inform, or rather, assist policy makers and higher
        officials in their prioritization and allocation of resources.
        </Text>
      
      
    {/* <Text
          sx={{
            variant: "styles.headerText",
            mt: "6vh",
            color: "#639FAB"
          }}
        >
        Feature Importance 
        </Text>
        <Text
          sx={{ 
            variant: "styles.bodyText", 
            color: "grey", 
            fontSize: [1, 2]
          }}
        >
        Features that highly correlate and importance in predicting fataility rate
        </Text>
        <Text
          sx={{ 
            variant: "styles.bodyText", 
            color: "grey", 
            fontSize: [1, 2]
          }}
        >
        Features that highly correlate to and important in predicting Case rate
        </Text>
        <Text
          sx={{ 
            variant: "styles.bodyText", 
            color: "grey", 
            fontSize: [1, 2]
          }}
        >
        Inherent correlations between features used
        </Text>
        */}

       {/* <Text
          sx={{
            variant: "styles.headerText",
            mt: "6vh",
            color: "#639FAB"
          }}
        >
        Cluster Analysis 
        </Text>
        */}

        <Text
          sx={{
            variant: "styles.headerText",
            mt: "2vh",
            color: "primary",
            position: "relative"
          }}
        >
        Methodology For Developing The Model 
        </Text>
        <Text
          sx={{ 
            variant: "styles.bodyText", 
            color: "secondary", 
            fontSize: [1, 2],
            position: "relative"
          }}
        >
        <ol>
        <li>Pull and parse relevant data from credible data sources with proper licenses.</li>
        <li>Clean dataset.</li>
        <li>Hone in on 99 socioeconomic variables from ACS Census Bureau  2015-2019.</li> 
        <li>Pull population density and append with rest of data.</li>
        <li>Pull updated case and death data for each county and calculate respective
            case and fatality rates per 1000 tests.</li>    
        <li>Normalize all variables using min-max scaler function.</li>    
        <li>Determine correlation coefficients between each variable + case rate / fatality 
            rate and multiply them by each index to then create a matrix.</li>   
        <li>Sum all indexes across the row to get total risk score for each county.</li>    
        <li>Visualize data.</li>    
        </ol>
        </Text>

      </> 
  ) 
}

export default RiskScorePage;