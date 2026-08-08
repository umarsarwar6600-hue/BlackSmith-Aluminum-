export type Language = 'ar' | 'en';

export interface ServiceItem {
  id: string;
  iconName: string;
  title: { ar: string; en: string };
  shortDesc: { ar: string; en: string };
  fullDesc: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  image: string;
  badge?: { ar: string; en: string };
}

export interface GalleryItem {
  id: string;
  category: 'gates' | 'windows' | 'railings' | 'shades' | 'fences' | 'partitions';
  title: { ar: string; en: string };
  location: { ar: string; en: string };
  image: string;
  description: { ar: string; en: string };
  specs?: { ar: string[]; en: string[] };
}

export interface ReviewItem {
  id: string;
  author: { ar: string; en: string };
  district: { ar: string; en: string };
  rating: number;
  date: { ar: string; en: string };
  comment: { ar: string; en: string };
  serviceUsed: { ar: string; en: string };
  avatar?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  district: string;
  projectDetails: string;
  estimatedBudget?: string;
}

export interface CostEstimateInput {
  serviceType: string;
  width: number;
  height: number;
  materialGrade: 'standard' | 'premium' | 'luxury';
  includeInstallation: boolean;
}
