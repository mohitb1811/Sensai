import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/actions/user";
import { getIndustryInsights } from "@/actions/dashboard";
import DashboardView from "./_components/dashboardview";


const IndustryInsightsPage = async() => {

     const { isOnboarded } = await getUserOnboardingStatus();
     const insights= await getIndustryInsights();
      
      if (!isOnboarded) {
        redirect("/onboarding"); // ✅ Fixed syntax
      }
  return (
    <div className="container mx-auto">
      <DashboardView insights={insights}/>
    </div>
  );
};

export default IndustryInsightsPage;