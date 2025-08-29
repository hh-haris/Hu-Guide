import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";

import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Timeline from "./pages/Timeline";
import USAT from "./pages/USAT";
import RegistrationGuide from "./pages/RegistrationGuide";
import USATEngineering from "./pages/USATEngineering";
import USATMedical from "./pages/USATMedical";
import USATComputerScience from "./pages/USATComputerScience";
import USATArts from "./pages/USATArts";
import USATCommerce from "./pages/USATCommerce";
import USATGeneralScience from "./pages/USATGeneralScience";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import NotFound from "./pages/NotFound";
import Documents from "./pages/Documents";
import MotivationLetter from "./pages/MotivationLetter";
import Universities from "./pages/Universities";
import UniversitySearch from "./pages/UniversitySearch";
import Seniors from "./pages/Seniors";
import Official from "./pages/Official";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="light" storageKey="hungaricum-theme">
        {/* ✅ BrowserRouter is now opened correctly */}
        <BrowserRouter>
          <Sonner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/usat" element={<USAT />} />
            <Route path="/usat/registration-guide" element={<RegistrationGuide />} />
            <Route path="/usat/engineering" element={<USATEngineering />} />
            <Route path="/usat/medical" element={<USATMedical />} />
            <Route path="/usat/computer-science" element={<USATComputerScience />} />
            <Route path="/usat/commerce" element={<USATCommerce />} />
            <Route path="/usat/arts" element={<USATArts />} />
            <Route path="/usat/general-science" element={<USATGeneralScience />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/university-search" element={<UniversitySearch />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/documents/motivation-letter" element={<MotivationLetter />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:citySlug" element={<CityDetail />} />
            <Route path="/seniors" element={<Seniors />} />
            <Route path="/official" element={<Official />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
