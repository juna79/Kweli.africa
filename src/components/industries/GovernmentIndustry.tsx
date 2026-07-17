import { IndustryPage } from "@/components/industries/shared/IndustryPage";
import { government } from "@/lib/industryContent/government";

export function GovernmentIndustry() {
  return <IndustryPage content={government} />;
}
