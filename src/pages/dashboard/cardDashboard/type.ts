export interface iCardProps {
  item: iItem;
}
export interface iItem {
  userId: number;
  service_provider: string;
  service_provider_avatar: string;
  kind_of_service: string;
  phone_number: string;
  description: string;
  id: number;
}
