import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Public pages
import Home from "./pages/home";
import Members from "./pages/members";
import Pricing from "./pages/pricing";
import Industries from "./pages/industries";
import Verification from "./pages/verification";
import About from "./pages/about";
import MemberProfile from "./pages/memberProfile";
import Login from "./pages/login";
import Register from "./pages/register";
import CountryMembers from "./pages/countryMembers";
import Clientregister from "./pages/clientregister";
import MembersList from "./pages/MembersList";
import JoinGBA from "./pages/joinGBA";
import MemberDetailsPage from "./components/MemberDetailsPage";




// Dashboard
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join-now" element={<Register />} />
          <Route path="/client-register" element={<Clientregister />} />
          <Route path="/members/profile/:slug" element={<MemberProfile />} />
          <Route path="/members/country/:country" element={<CountryMembers />} />



        </Route>
        <Route path="/join" element={<JoinGBA />} />

        {/* ================= DASHBOARD ================= */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members-list" element={<MembersList />} />
          <Route path="/dashboard/members/:id" element={<MemberDetailsPage />} />


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
