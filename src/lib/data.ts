import memberships from "../../data/seeds/memberships.json";
import services from "../../data/seeds/services.json";
import vendors from "../../data/seeds/vendors.json";
import bookings from "../../data/seeds/bookings.json";
import contentItems from "../../data/seeds/contentItems.json";
import socialPosts from "../../data/seeds/socialPosts.json";
import qualityScores from "../../data/seeds/qualityScores.json";
import type { GovernedRecord, MembershipMetadata, VendorMetadata } from "./types";

export const brand = {
  name: "VYTAL House",
  tagline: "Recharge. Recover. Evolve.",
  owners: "Chauncey Gardner and Kathy Ha",
  description:
    "A premium recovery and wellness club combining clinical-grade modalities with a dark, spacecraft-inspired member experience.",
};

export const sourceLinks = [
  { name: "Oxycell OxyPro Sovereign", url: "https://www.oxycell.com/product/oxypro-sovereign/" },
  { name: "Hyperbaric Pro exercise-ready chamber", url: "https://www.hyperbaricpro.com/product/exercise-ready-multiplace-hard-shell-hyperbaric-oxygen-chamber/" },
  { name: "Oxynergy2", url: "https://oxynergy2.com/" },
  { name: "True REST Alexandria", url: "https://truerest.com/locations/alexandria/" },
  { name: "VacuActiv", url: "https://vacuactiv.com/products/fitness-devices/" },
  { name: "Eleve Longevity Lounge", url: "https://elevelongevity.com/" },
  { name: "Maryland Business Express", url: "https://businessexpress.maryland.gov/start/register-a-business-in-maryland" },
  { name: "HHS HIPAA Privacy Rule", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html" },
];

export const membershipRecords = memberships as GovernedRecord<MembershipMetadata>[];
export const serviceRecords = services as GovernedRecord<{ description: string; category: string }>[];
export const vendorRecords = vendors as GovernedRecord<VendorMetadata>[];
export const bookingRecords = bookings as GovernedRecord<{ member: string; service: string; date: string; time: string }>[];
export const contentRecords = contentItems as GovernedRecord<{ channel: string; source: string }>[];
export const socialRecords = socialPosts as GovernedRecord<{ publishDate: string; channel: string; pillar: string; brief: string }>[];
export const qualityRecords = qualityScores as GovernedRecord<{ minimumScore: number }>[];

export const monthlyMembershipRevenue = membershipRecords.reduce(
  (sum, tier) => sum + tier.metadata.monthlyPrice * tier.metadata.projectedMembers,
  0,
);
