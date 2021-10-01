import { NextPage } from 'next'
import { ReactNode } from 'react'

export type Page<P = any, IP = P> = NextPage<P, IP> & {
  Layout?: ReactNode
  authenticate?: boolean | 'both' | { redirectTo?: string }
}
