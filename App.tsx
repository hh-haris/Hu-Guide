const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="hungaricum-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            <Route path="/theme-demo" element={<ThemeDemo />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
