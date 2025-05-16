import { Blend, BookType, Folder,Home, Image, Italic, LayoutDashboardIcon, LayoutTemplate, LayoutTemplateIcon, Minus, Palette, Settings, ShapesIcon, Sparkle, Square, SquareRoundCorner, Sticker, Text, Trash, WalletCardsIcon } from "lucide-react"
import { Rocket } from "lucide-react";
import BackgroundSetting from "./Components/BackgroundSetting";
import AddImageSetting from "./Components/AddImageSetting";
import Shapes from "./Sharable/Shapes";
import Elements from "./Components/Elements";
import FillColor from "./Sharable/FillColor";
import BorderColor from "./Sharable/BorderColor";
import BorderWidth from "./Sharable/BorderWidth";
import Opacity from "./Sharable/Opacity";
import BorderRadius from "./Sharable/BorderRadius";
import TrashButton from "./Sharable/TrashButton";
import AITransformSetting from "./Components/AITransformSetting";
import TextSettings from "./Components/TextSettings";
import FontFamily from "./Sharable/FontFamily";
import FontStyles from "./Sharable/FontStyles";


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
      desc: 'Add shapes, lines, icons, and other design elements.',
      component:<Elements />
    },
    
    {
      name: 'Images',
      icon: Image,
      desc: 'Upload or choose images to enhance your design.',
      component:<AddImageSetting />
    },
    {
      name: 'Text',
      icon: LayoutTemplateIcon,
      desc: 'Add Text and Heading',
      component:<TextSettings />
    },
    {
      name: 'AI',
      icon: Sparkle,
      desc: 'Use AI tools for smart suggestions and content generation.',
      component:<AITransformSetting />
    },
    {
      name: ' Background',
      icon: Rocket,
      desc: 'Add background colors and gradients',
      component:<BackgroundSetting />
    },
    
    {
      name: 'Settings',
      icon: Settings,
      desc: 'Adjust design settings like dimensions, background, and more.'
    }
  ];

  export const ShapeList=[
    {
      name:'Circle',
      icon:'/circle.png'
    },
    {
      name:'Triangle',
      icon:'/triangle.png'
    },
    {
      name:'Square',
      icon:'/square.png'
    },
    {
      name:'Rectangle',
      icon:'/rectangle.png'
    },
    {
      name:'Line',
      icon:'/Line.png'
    },
  ];

  export const shapesSettingList=[
    {
      name:'Fill',
      icon:Palette,
      component:<FillColor />
    },
    {
      name:'Stroke Color',
      icon:Square,
      component:<BorderColor />
    },
    {
      name:'Stroke Width',
      icon:Minus,
      component:<BorderWidth />
    },
    {
      name:'Opacity',
      icon:Blend,
      component:<Opacity />
    },
    {
      name:'Rounded Corner',
      icon:SquareRoundCorner,
      component:<BorderRadius />
    },
    {
      name:'Font',
      icon:BookType,
      component:<FontFamily />
    },
    {
      name: 'Font Style',
      icon:Text, // or whatever icon you want
      component: <FontStyles />
    },
    
    {
      name:'Delete',
      icon:Trash,
      component:<TrashButton />
    }
  ];

  export const AITransformationSettings=[
    {
      name:'Background Remove',
      command:'e-bgremove',
      image:'/remove-bg.jpg',

    }, 
    {
      name:'Change Background',
      command:'e-changebg-prompt-snow road',
      image:'/change-bg.jpg',
      input:true

    },
    {
      name:'Generative Fill',
      command:'bg-genfill,w-1000,h-960,cm-pad_resize',
      image:'/generative-fill.jpg',

    },
    {
      name:'AI Drop Shadow',
      command:'e-dropshadow',
      image:'/shadow.jpg',

    },
    {
      name:'Upsacle',
      command:'e-upscale',
      image:'/upscale.jpg',

    },
    {
      name:'Smart Crop',
      command:'fo-auto',
      image:'/smartcrop.jpg',

    },
    {
      name:'contrast',
      command:'e-contrast',
      image:'/e-contrast.jpg',

    },
    {
      name:'Grayscale',
      command:'e-grayscale',
      image:'/e-grayscale.jpg',

    },
    {
      name:'Blur',
      command:'bl-10',
      image:'/e-blur.jpg',

    },
    {
      name:'Flip',
      command:'fl-h',
      image:'/e-flip.png',

    },
  ];
  
  
  export const FontFamilyList = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Georgia',
    'Courier New',
    'Verdana',
    'Trebuchet MS',
    'Impact',
    'Comic Sans MS',
    'Lucida Console',
    'Tahoma',
    'Palatino Linotype',
    'Segoe UI',
    'Roboto',
    'Open Sans',
    'Lato',
    'Montserrat',
    'Oswald',
    'Raleway',
    'Merriweather',
    'Ubuntu',
    'Playfair Display',
    'Nunito',
    'Poppins',
  ];
  

  