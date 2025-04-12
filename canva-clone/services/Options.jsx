import { Folder, Home, Image, LayoutDashboardIcon, LayoutTemplate, LayoutTemplateIcon, Settings, ShapesIcon, Sparkle, WalletCardsIcon } from "lucide-react"

export const WorkspaceMenu=[
    {
        name:'Home',
        icon:Home,
        path:'/workspace'

    },
    {
        name:'Projects',
        icon:Folder,
        path:'/workspace/projects'

    },
    {
        name:'Templates',
        icon:LayoutDashboardIcon,
        path:'/workspace/templates'

    },
    {
        name:'Billing',
        icon:WalletCardsIcon,
        path:'/workspace/templates/billing'

    },

]

export const canvasSizeOptions=[
   {
    name:'Instagram Post',
    width:500,
    height:500,
    icon:'/instagrampost.png'
   },
   {
    name:'Instagram Story',
    width:500,
    height:500,
    icon:'/instagrampost.png'
   },
   {
    name:'Youtube Thumbnail',
    width:1280,
    height:720,
    icon:'/youtube.png'
   },
   {
    name:'Youtube Banner',
    width:1600,
    height:900,
    icon:'/youtube.png'
   },
   {
    name:'Youtube Post',
    width:1280,
    height:720,
    icon:'/youtube.png'
   },
   {
    name:'PowerPoint Slide',
    width:1280,
    height:720,
    icon:'/powerpoint.png'
   },
   {
    name:'Facebook Post',
    width:1280,
    height:720,
    icon:'/facebook.png'
   },
   {
    name:'Twitter Post',
    width:1280,
    height:720,
    icon:'/twitter.png'
   },
   {
    name:'LinkedIn Post',
    width:1280,
    height:720,
    icon:'/linkedin.png'
   },
   {
    name:'Pinterest Pin',
    width:1280,
    height:720,
    icon:'/pinterest.png'
   },
];

export const sideBarMenu = [
    {
      name: 'Templates',
      icon: LayoutTemplate,
      desc: 'Browse and select from a variety of pre-designed templates.'
    },
    {
      name: 'Elements',
      icon: ShapesIcon,
      desc: 'Add shapes, lines, icons, and other design elements.'
    },
    {
      name: 'Images',
      icon: Image,
      desc: 'Upload or choose images to enhance your design.'
    },
    {
      name: 'Text',
      icon: LayoutTemplateIcon,
      desc: 'Insert and style text blocks for titles, subtitles, or body.'
    },
    {
      name: 'AI',
      icon: Sparkle,
      desc: 'Use AI tools for smart suggestions and content generation.'
    },
    {
      name: 'Settings',
      icon: Settings,
      desc: 'Adjust design settings like dimensions, background, and more.'
    }
  ];
  