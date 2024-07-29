//dark mode
export type StyleState = {
  isDark: boolean
}

//user table mock data
export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
  selected?: boolean
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

//user endpoint response
export interface UserResponse {
  id: number
  name: string
  surname: string
  username: string
  email: string
  userRole: string
  company: string
  iat?: number
}
