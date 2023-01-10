import { Skills } from './components'

export interface SignRequest {
  email: string
  password: string
  returnSecureToken: boolean
}

export interface UserInfoRequest {
  firstName: string
  lastName: string
  position: string
  skills: Skills[]
}

export interface NameResponse {
  name: string
}

export interface RegisterSuccessResponse {
  kind: string
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}

export interface SignInSuccessResponse {
  kind: string
  localId: string
  email: string
  displayName: string
  idToken: string
  registered: boolean
  refreshToken: string
  expiresIn: string
}

export interface changeDataResponse {
  localId: string
  email: string
  idToken: string
  providerUserInfo: ProviderUserInfo[]
  refreshToken: string
  expiresIn: string
  passwordHash: string
  emailVerified: boolean
}

export interface ProviderUserInfo {
  providerId: string
  federatedId: string
  email: string
  rawId: string
}

export interface ErrorResponse {
  error: RegisterErrorResponseError
}

export interface RegisterErrorResponseError {
  code: number
  message: string
  errors: ErrorElement[]
}

export interface ErrorElement {
  message: string
  domain: string
  reason: string
}

export interface GetUserInfoResponse {
  kind: string
  users: User[]
}

export interface User {
  localId: string
  email: string
  passwordHash: string
  emailVerified: boolean
  passwordUpdatedAt: number
  providerUserInfo: ProviderUserInfo[]
  validSince: string
  lastLoginAt: string
  createdAt: string
  lastRefreshAt: Date
}

export interface ProviderUserInfo {
  providerId: string
  federatedId: string
  email: string
  rawId: string
}

export interface UserInfo {
  firstName: string
  lastName: string
  position: string
  skills: Skills[]
}

export interface ProviderUserInfo {
  providerId: string
  federatedId: string
  email: string
  rawId: string
}

export interface AuthInfoResponse {
  kind: string
  localId: string
  email: string
  providerUserInfo: ProviderUserInfo[]
  passwordHash: string
  emailVerified: boolean
}
