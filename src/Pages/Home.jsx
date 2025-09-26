import React, { Suspense, lazy } from "react";
import Loader from "../Components/Loader";

// 🔹 Lazy load all sections
const Hero = lazy(() => import("../Components/Hero"));
const Section = lazy(() => import("../Components/Section"));
const WhoWeAre = lazy(() => import("../Components/WhoWeAre"));
const Clients = lazy(() => import("../Components/Clients"));
const Services = lazy(() => import("../Components/Services"));
const Steps = lazy(() => import("../Components/Steps"));
const BestCompany = lazy(() => import("../Components/BestCompany"));
const GalleryShowcase = lazy(() => import("../Components/GalleryShowcase"));
const Achievements = lazy(() => import("../Components/Achievements"));
const BoardMembers = lazy(() => import("../Components/BoardMembers"));
const TopCompany = lazy(() => import("../Components/TopCompany"));
const Blogs = lazy(() => import("../Components/Blogs"));
const FaqSection = lazy(() => import("../Components/FaqSection"));

export default function Home() {
    return (
        <div className="space-y-24">
            <Suspense fallback={<Loader />}>
                <Hero />
                <Section />
                <WhoWeAre />
                <Clients />
                <Services />
                <Steps />
                <BestCompany />
                <GalleryShowcase />
                <Achievements />
                <BoardMembers />
                <TopCompany />
                <Blogs />
                <FaqSection />
            </Suspense>
        </div>
    );
}
