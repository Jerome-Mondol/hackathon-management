import type { LucideIcon } from "lucide-react"
import {
  BrainCircuit,
  Users,
  Radio,
  Code2,
  ShieldCheck,
  WalletCards,
} from "lucide-react"

export interface CapabilityItem {
  title: string
  description: string
  icon: LucideIcon
}

export const capabilityItems: CapabilityItem[] = [
  {
    title: "AI JUDGING",
    description:
      "Neural networks score submissions based on code quality and logic automatically without human bias.",
    icon: BrainCircuit,
  },
  {
    title: "AUTO-MATCHING",
    description:
      "Smart algorithms pair developers based on complementary tech stacks and roles for optimal builds.",
    icon: Users,
  },
  {
    title: "LIVE STREAM",
    description:
      "Integrated high-bitrate streaming for opening ceremonies and real-time demo day presentations.",
    icon: Radio,
  },
  {
    title: "CLOUD IDE",
    description:
      "Full browser-based coding environment for immediate participation without local setup.",
    icon: Code2,
  },
  {
    title: "VERIFY KYC",
    description:
      "Automated identity verification systems to ensure global compliance for prize distribution.",
    icon: ShieldCheck,
  },
  {
    title: "INSTANT PAYOUT",
    description:
      "Automated prize distribution via smart contracts or wire transfers triggered on win.",
    icon: WalletCards,
  },
]