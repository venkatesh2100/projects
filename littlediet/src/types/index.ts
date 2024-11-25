export interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export interface IconTextProps {
  icon: string;
  text: string;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface NavLinkProps {
  href: string;
  text: string;
  isActive?: boolean;
}
