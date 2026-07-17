import { IndustryPage } from "@/components/industries/shared/IndustryPage";
import { trade } from "@/lib/industryContent/trade";

export function TradeIndustry() {
  return <IndustryPage content={trade} />;
}
