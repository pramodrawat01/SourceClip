import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Organizations from "./pages/orgs/Organizations";
import Models from "./pages/models/Models";
import OrganizationDetails from "./pages/orgs/OrganizationDetails";
import OrganizationModels from "./pages/orgs/OrganizationModels";
import ModelDetails from "./pages/models/ModelDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        {/*** organizations */}
        <Route path="organizations">
          <Route index element={<Organizations />} />

          <Route path=":organizationId" element={<OrganizationDetails />} />

          {/* Organization Models */}
          <Route path=":organizationId/models">
            <Route index element={<OrganizationModels />} />

            <Route path=":modelId" element={<ModelDetails />} />
          </Route>

          {/* Organization Products */}
          {/* <Route path=":organizationId/products">
            <Route index element={<OrganizationProducts />} />

            <Route path=":productId" element={<ProductDetails />} />
          </Route> */}

          {/* Organization Releases */}
          {/* <Route path=":organizationId/releases">
            <Route index element={<OrganizationReleases />} />

            <Route path=":releaseId" element={<ReleaseDetails />} />
          </Route> */}

          {/* Organization Research */}
    {/* <Route path=":organizationId/research">
      <Route
        index
        element={<OrganizationResearch />}
      />

      <Route
        path=":researchId"
        element={<ResearchDetails />}
      />
    </Route> */}

        </Route>

        {/** models */}
        <Route path="models" element={<Models />} />
      </Route>
    </Routes>
  );
}

export default App;
