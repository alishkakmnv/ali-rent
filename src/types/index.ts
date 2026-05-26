export interface EquipmentCategory {
  id: string
  name: string
  icon: string
  priceFrom: number
  unit: string
  description: string
}

export interface EquipmentModel {
  id: string
  categoryId: string
  name: string
  brand: string
  model: string
  image?: string
  specs: { label: string; value: string }[]
  pricePerShift: number
  pricePerHour: number
  available: boolean
}

export interface CaseStudy {
  id: string
  title: string
  location: string
  type: string
  duration: string
  equipment: string
  description: string
  result: string
  image?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface WorkStep {
  id: number
  title: string
  description: string
  icon: string
}

export interface Advantage {
  id: string
  title: string
  description: string
  icon: string
}
