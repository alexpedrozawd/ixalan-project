export interface ArticleBodySection {
  type: 'paragraph' | 'list' | 'card-image'
  content?: string
  items?: string[]
  cardUrl?: string
  cardAlt?: string
}

export interface NewsArticle {
  id: number
  title: string
  description: string
  imageUrl: string
  date: string
  slug: string
  body?: ArticleBodySection[]
}

export interface SidebarSection {
  id: number
  heading: string
  content: string
}

export type Language = 'en' | 'pt'

export interface NavLink {
  label: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: DropdownItem[]
}

export interface DropdownItem {
  label: string
  href: string
}
