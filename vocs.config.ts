import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'FAIR Docs',
  logoUrl: "/fairlogo.svg",
  iconUrl: "/fair.png",
  description: "Documentation for for the FAIR Layer 1 blockchain network",
  theme: {
    colorScheme: "light",
  },
  topNav: [
    { text: 'Getting Started', link: '/' },
    { text: 'BITE Protocol', link: '/bite/introduction' },
    { text: 'Build on FAIR', link: '/builders/foundry' },
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/skalenetwork'
    },
    {
      icon: 'x',
      link: 'https://x.com/FAIR_Blockchain'
    },
    {
      icon: 'discord',
      link: 'https://discord.gg/skale'
    }
  ],
  ogImageUrl: "/fair.png",
  sidebar: [
    {
      text: 'Get Started',
      items: [
        { text: 'Overview', link: '/' },
        { text: "Use Cases", link: "/get-started/use-cases"}
      ],
    },
    {
      text: 'Builders',
      items: [
        {
          text: "Setup",
          items: [
            { text: 'Start with Foundry', link: '/builders/foundry' },
            { text: 'Start with Hardhat', link: '/builders/hardhat' },
          ]
        },
        {
          text: "Network Info",
          items: [
            { text: "FAIR Contracts", link: "/builders/contracts" },
            { text: "Network Fees", link: "/builders/network-fees" }
          ]
        },
        {
          text: 'Tutorials',
          items: [
            { text: 'Create a Confidential App (cApp)', link: '/builders/tutorials/create-a-capp' },
            { text: 'Launch a Token', link: '/builders/tutorials/launch-a-token' },
            { text: 'Launch a Collectible', link: '/builders/tutorials/launch-a-collectible' }
          ]
        },
      ],
    },
    {
      text: 'BITE Protocol',
      items: [
        { text: 'Introduction', link: '/bite/introduction' },
        { text: 'Phases of BITE', link: '/bite/phases' },
        { text: 'MEV Deep Dive', link: '/bite/mev-deep-dive' },
        {
          text: 'SDKs',
          items: [
            { text: 'TypeScript', link: '/bite/sdks/typescript' },
          ]
        },
      ]
    },
    {
      text: 'Resources',
      items: [
        { text: 'Glossary', link: '/resources/glossary' },
      ],
    },
  ],
})
