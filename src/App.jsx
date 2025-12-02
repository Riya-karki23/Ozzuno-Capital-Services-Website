// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1/Page1";
import SubPage1 from "./pages/Page1/SubPage1";
import SubPage2 from "./pages/Page1/SubPage2";
import SubPage3 from "./pages/Page1/SubPage3";
import SubPage4 from "./pages/Page1/SubPage4";
import Page2 from "./pages/Page2/Page2";
import IbdIpo from "./pages/Page2/IbdIpo";
import IbdIpoSovereigntyProtocol from "./pages/Page2/IbdIpoSovereigntyProtocol";
import IbdGovernanceDiagnostic from "./pages/Page2/IbdGovernanceDiagnostic";
import IbdMerchant from "./pages/Page2/IbdMerchant";
import IbdCapitalGovernanceModel from "./pages/Page2/IbdCapitalGovernanceModel";
import IbdProspectusDrafting from "./pages/Page2/IbdProspectusDrafting";
import IbdDebt from "./pages/Page2/IbdDebt";
import IbdLiabilityOptimization from "./pages/Page2/IbdLiabilityOptimization";
import IbdDistressedDebtRestructuring from "./pages/Page2/IbdDistressedDebtRestructuring";
import ScrollToTop from "./Components/ScrollToTop";

import Layout from "./Layout";

// page3
import  Page3 from "./pages/Page3/Page3";
import CagInorganicGrowth from "./pages/Page3/CagInorganicGrowth";
import CagInorganicConquestCycle from "./pages/Page3/CagInorganicConquestCycle";
import CagTargetScreening from "./pages/Page3/CagTargetScreening";
import CagDivestiture from "./pages/Page3/CagDivestiture";
import CagLiquidityPathway from "./pages/Page3/CagLiquidityPathway";
import CagIntrinsicValuation from "./pages/Page3/CagIntrinsicValuation";
import CagTransformation from "./pages/Page3/CagTransformation";
import CagCorporateDarwinism from "./pages/Page3/CagCorporateDarwinism";
import CagOperationalLatency from "./pages/Page3/CagOperationalLatency";
import CagDealValidation from "./pages/Page3/CagDealValidation";
import CagTransactionFirewall from "./pages/Page3/CagTransactionFirewall";
import CagCommercialStressTest from "./pages/Page3/CagCommercialStressTest";    

// page4

import Page4 from "./pages/Page4/Page4";
import  Level4Page1 from "./pages/Page4/Level4Page1";
import Level4Subpage1_1 from "./pages/Page4/Level4Subpage1_1";
import Level4Subpage1_2 from "./pages/Page4/Level4Subpage1_2";
import Level4Page2 from "./pages/Page4/Level4Page2";
import Level4Subpage2_1 from "./pages/Page4/Level4Subpage2_1";
import Level4Subpage2_2 from "./pages/Page4/Level4Subpage2_2";


// page5
import Page5 from "./pages/Page5/Page5";
import  Level5Page1 from "./pages/Page5/Level5Page1";
import Level5Subpage1_1 from "./pages/Page5/Level5Subpage1_1";
import Level5Subpage1_2 from "./pages/Page5/Level5Subpage1_2";
import Level5Subpage1_3 from "./pages/Page5/Level5Subpage1_3";

// page6

import Page6  from "./pages/Page6/Page6";
import Level6Page1 from "./pages/Page6/Level6Page1";
import Level6Subpage1_1 from "./pages/Page6/Level6Subpage1_1";
import Level6Subpage1_2 from "./pages/Page6/Level6Subpage1_2";
import Level6Subpage1_3 from "./pages/Page6/Level6Subpage1_3";


// page7

import Page7 from "./pages/Page7/Page7";
import Level7Page1 from "./pages/Page7/Level7Page1";
import Level7Page2 from "./pages/Page7/Level7Page2";
import Level7Subpage1_1 from "./pages/Page7/Level7Subpage1_1";
import Level7Subpage1_2 from "./pages/Page7/Level7Subpage1_2";
import Level7Subpage2_1 from "./pages/Page7/Level7Subpage2_1";
import Level7Subpage2_2 from "./pages/Page7/Level7Subpage2_2";


// page8

import  Page8 from "./pages/Page8/Page8";
import Level8Page1 from "./pages/Page8/Level8Page1";
import Level8Subpage1_1 from "./pages/Page8/Level8Subpage1_1";
import Level8Subpage1_2 from "./pages/Page8/Level8Subpage1_2";

// page9

import  Page9 from "./pages/Page9/Page9";
import Level9Page1 from "./pages/Page9/Level9Page1";
import Level9Subpage1_1 from "./pages/Page9/Level9Subpage1_1";
import Level9Subpage1_2 from "./pages/Page9/Level9Subpage1_2";
import Level9Login from "./pages/Page9/Level9Login";

// page 10

import Page10 from "./pages/Page10/Page10";
import Level10Page1 from "./pages/Page10/Level10Page1";
import Level10Login from "./pages/Page10/Level10Login";

// page11
import Page11 from "./pages/Page11/Page11";
import Level11DigitalFoundry from "./pages/Page11/Level11DigitalFoundry";
import Level11CyberSovereignty from "./pages/Page11/Level11CyberSovereignty";
import Level11FintechSolutions from "./pages/Page11/Level11FintechSolutions";

// page 12
import Page12 from "./pages/Page12/Page12";
import Page13 from "./pages/Page13/Page13";
import Page14 from "./pages/Page14/Page14";
import Page15 from "./pages/Page15/Page15";
import Page16 from "./pages/Page16/Page16";
import Footer from "./webpages/Footer";
import CookieBanner from "./Components/CookieBanner";
import ChatWidget from "./Components/ChatWidget";
import ContactModal from "./Components/ContactModal";

// policies

import Policy1 from "./Policies/Policy1";
import Policy2 from "./Policies/Policy2";
import Policy3 from "./Policies/Policy3";
import Policy4 from "./Policies/Policy4";
import Policy5 from "./Policies/Policy5";
import Policy6 from "./Policies/Policy6";
import Policy7 from "./Policies/Policy7";
import Policy8 from "./Policies/Policy8";
import Policy9 from "./Policies/Policy9";
import Policy10 from "./Policies/Policy10";
import Policy11 from "./Policies/Policy11";
import Policy12 from "./Policies/Policy12";

import Navbar from "./Components/Navbar";
import WhitepapersPage from "./pages/WhitePapers/WhitePapersPage";
import ContactPage from "./Components/ContactPage";
import Services from "./pages/Services";

const App = () => {
  const [openContactFromNav, setOpenContactFromNav] = useState(false);

  const handleOpenContact = () => {
    setOpenContactFromNav(true);
  };
  return (
    <div>
       <Navbar openContact={handleOpenContact} />
       <ScrollToTop />
       

      <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>

      
                <Page1 />
              
              <Page2/>
              <Page3/>
              <Page4/>
              <Page5/>
              <Page6/>
              <Page7/>
              <Page8/>
              <Page9/>
              <Page10/>
              <Page11/>
              <Page12/>
              <Page13/>
              <Page14/>
              <Page15/>
              <Page16/>
              <Footer />
               <CookieBanner />
               <ChatWidget />
               <ContactModal/>
              

            </>
          }
        />

        {/* future: standalone page */}
        <Route path="/about" element={<Page1 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
   

        <Route path="/subpage1" element={<SubPage1 />} />
        <Route path="/subpage2" element={<SubPage2 />} />
        <Route path="/subpage3" element={<SubPage3 />} />
        <Route path="/subpage4" element={<SubPage4 />} />

        {/* page 2 routes */}
        <Route path="/ibd/ipo" element={<IbdIpo />} />
<Route path="/ibd/ipo/sovereignty-protocol" element={<IbdIpoSovereigntyProtocol />} />
<Route path="/ibd/ipo/governance-diagnostic" element={<IbdGovernanceDiagnostic />} />

<Route path="/ibd/merchant-banking" element={<IbdMerchant />} />
<Route path="/ibd/merchant/capital-governance-model" element={<IbdCapitalGovernanceModel />} />
<Route path="/ibd/merchant/prospectus-drafting" element={<IbdProspectusDrafting />} />

<Route path="/ibd/debt-syndication" element={<IbdDebt />} />
<Route path="/ibd/debt/liability-optimization" element={<IbdLiabilityOptimization />} />
<Route path="/ibd/debt/distressed-debt-restructuring" element={<IbdDistressedDebtRestructuring />} />

{/* page 3 routes */}
<Route path="/cag/inorganic-growth" element={<CagInorganicGrowth />} />
  <Route path="/cag/inorganic-growth/conquest-cycle" element={<CagInorganicConquestCycle />} />
  <Route path="/cag/inorganic-growth/target-screening" element={<CagTargetScreening />} />

  {/* Divestiture */}
  <Route path="/cag/divestiture" element={<CagDivestiture />} />
  <Route path="/cag/divestiture/liquidity-pathway" element={<CagLiquidityPathway />} />
  <Route path="/cag/divestiture/intrinsic-valuation" element={<CagIntrinsicValuation />} />

  {/* Transformation */}
  <Route path="/cag/transformation" element={<CagTransformation />} />
  <Route path="/cag/transformation/corporate-darwinism" element={<CagCorporateDarwinism />} />
  <Route path="/cag/transformation/operational-latency" element={<CagOperationalLatency />} />

  {/* Deal validation */}
  <Route path="/cag/deal-validation" element={<CagDealValidation />} />
  <Route path="/cag/deal-validation/transaction-firewall" element={<CagTransactionFirewall />} />
  <Route path="/cag/deal-validation/commercial-stress-test" element={<CagCommercialStressTest />} />

       
{/* page4  */}

<Route path="/level4/page1" element={<Level4Page1 />} />
  <Route path="/level4/subpage1-1" element={<Level4Subpage1_1 />} />
  <Route path="/level4/subpage1-2" element={<Level4Subpage1_2 />} />

  <Route path="/level4/page2" element={<Level4Page2 />} />
  <Route path="/level4/subpage2-1" element={<Level4Subpage2_1 />} />
  <Route path="/level4/subpage2-2" element={<Level4Subpage2_2 />} />


{/* page5 */}

<Route path="/Page5" element={<Page5 />} />
  <Route path="/level5/page1" element={<Level5Page1 />} />
  <Route path="/level5/subpage1-1" element={<Level5Subpage1_1 />} />
  <Route path="/level5/subpage1-2" element={<Level5Subpage1_2 />} />
  <Route path="/level5/subpage1-3" element={<Level5Subpage1_3 />} />

{/* page 6  */}
  <Route path="/level6/page1" element={<Level6Page1 />} />
  <Route path="/level6/subpage1-1" element={<Level6Subpage1_1 />} />
  <Route path="/level6/subpage1-2" element={<Level6Subpage1_2 />} />
  <Route path="/level6/subpage1-3" element={<Level6Subpage1_3 />} />

  {/* page7 */}
<Route path="/level7/page1" element={<Level7Page1 />} />
<Route path="/level7/page2" element={<Level7Page2 />} />
<Route path="/level7/subpage1-1" element={<Level7Subpage1_1 />} />
<Route path="/level7/subpage1-2" element={<Level7Subpage1_2 />} />
<Route path="/level7/subpage2-1" element={<Level7Subpage2_1 />} />
<Route path="/level7/subpage2-2" element={<Level7Subpage2_2 />} />


  {/* page8 */}
<Route path="/level8/page1" element={<Level8Page1 />} />
<Route path="/level8/subpage1-1" element={<Level8Subpage1_1 />} />
<Route path="/level8/subpage1-2" element={<Level8Subpage1_2 />} />

{/* page 9  */}
<Route path="/level9/page1" element={<Level9Page1 />} />
<Route path="/level9/subpage1-1" element={<Level9Subpage1_1 />} />
<Route path="/level9/subpage1-2" element={<Level9Subpage1_2 />} />
<Route path="/level9/login" element={<Level9Login />} />

{/* page 10 */}
<Route path="/level10/page1" element={<Level10Page1 />} />
<Route path="/level10/login" element={<Level10Login />} />

{/* page 11 */}

<Route path="/level11/digital-foundry" element={<Level11DigitalFoundry />} />
<Route path="/level11/cyber-sovereignty" element={<Level11CyberSovereignty />} />
<Route path="/level11/fintech-solutions" element={<Level11FintechSolutions />} />


{/* policies */}
<Route path="/policy/termsOfEngagement" element={<Policy1 />} />
<Route path="/policy/dataSovereignty" element={<Policy2 />} />
<Route path="/policy/riskDisclosure" element={<Policy3 />} />
<Route path="/policy/AMLCharter" element={<Policy4 />} />
<Route path="/policy/VigilMechanism" element={<Policy5 />} />
<Route path="/policy/CookieProtocol" element={<Policy6 />} />
<Route path="/policy/LimitationOfLiability" element={<Policy7 />} />
<Route path="/policy/IntellectualSovereignty" element={<Policy8 />} />
<Route path="/policy/NonRefundMandate" element={<Policy9 />} />
<Route path="/policy/ThirdPartyProtocol" element={<Policy10 />} />
<Route path="/policy/DigitalConductDirective" element={<Policy11 />} />
<Route path="/policy/EthicalSourcingManifesto" element={<Policy12 />} />



{/* whitepapers */}

<Route path="/whitePapers" element={<WhitepapersPage />} />
</Route>
      </Routes>
    </div>
  );
};

export default App;