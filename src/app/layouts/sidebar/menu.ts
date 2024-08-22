import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 8,
    label: 'MENUITEMS.APPS.TEXT',
    icon: 'grid',
    subItems: [
      {
        id: 12,
        label: 'MENUITEMS.APPS.LIST.ECOMMERCE',
        link: '/mailbox',
        parentId: 8,
        subItems: [
          {
            id: 13,
            label: 'MENUITEMS.APPS.LIST.PRODUCTS',
            link: '/ecommerce/products',
            parentId: 12
          },
          {
            id: 14,
            label: 'MENUITEMS.APPS.LIST.PRODUCTDETAILS',
            link: '/ecommerce/product-detail/1',
            parentId: 12
          },
          {
            id: 15,
            label: 'MENUITEMS.APPS.LIST.CREATEPRODUCT',
            link: '/ecommerce/add-product',
            parentId: 12
          },
          {
            id: 16,
            label: 'MENUITEMS.APPS.LIST.ORDERS',
            link: '/ecommerce/orders',
            parentId: 12
          },
          {
            id: 17,
            label: 'MENUITEMS.APPS.LIST.ORDERDETAILS',
            link: '/ecommerce/order-details',
            parentId: 12
          },
          {
            id: 18,
            label: 'MENUITEMS.APPS.LIST.CUSTOMERS',
            link: '/ecommerce/customers',
            parentId: 12
          },
          {
            id: 19,
            label: 'MENUITEMS.APPS.LIST.SHOPPINGCART',
            link: '/ecommerce/cart',
            parentId: 12
          },
          {
            id: 20,
            label: 'MENUITEMS.APPS.LIST.CHECKOUT',
            link: '/ecommerce/checkout',
            parentId: 12
          },
          {
            id: 21,
            label: 'MENUITEMS.APPS.LIST.SELLERS',
            link: '/ecommerce/sellers',
            parentId: 12
          },
          {
            id: 22,
            label: 'MENUITEMS.APPS.LIST.SELLERDETAILS',
            link: '/ecommerce/seller-details',
            parentId: 12
          }
        ]
      },
      {
        id: 42,
        label: 'MENUITEMS.APPS.LIST.INVOICES',
        parentId: 8,
        subItems: [
          {
            id: 43,
            label: 'MENUITEMS.APPS.LIST.LISTVIEW',
            link: '/invoices/list',
            parentId: 42
          },
          {
            id: 44,
            label: 'MENUITEMS.APPS.LIST.DETAILS',
            link: '/invoices/details',
            parentId: 42
          },
          {
            id: 45,
            label: 'MENUITEMS.APPS.LIST.CREATEINVOICE',
            link: '/invoices/create',
            parentId: 42
          }
        ]
      },
    ]
  },
  {
    id: 54,
    label: 'MENUITEMS.PAGES.TEXT',
    isTitle: true
  },
  {
    id: 55,
    label: 'MENUITEMS.AUTHENTICATION.TEXT',
    icon: 'users',
    subItems: [
      {
        id: 56,
        label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNIN',
        parentId: 49,
        subItems: [
          {
            id: 57,
            label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
            link: '/auth/signin/basic',
            parentId: 56
          },
          {
            id: 58,
            label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
            link: '/auth/signin/cover',
            parentId: 56
          },
        ]
      },
      {
        id: 59,
        label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNUP',
        parentId: 49,
        subItems: [
          {
            id: 60,
            label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
            link: '/auth/signup/basic',
            parentId: 59
          },
          {
            id: 61,
            label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
            link: '/auth/signup/cover',
            parentId: 59
          },
        ]
      },
      {
        id: 62,
        label: 'MENUITEMS.AUTHENTICATION.LIST.PASSWORDRESET',
        parentId: 49,
        subItems: [
          {
            id: 63,
            label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
            link: '/auth/pass-reset/basic',
            parentId: 62
          },
          {
            id: 64,
            label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
            link: '/auth/pass-reset/cover',
            parentId: 62
          },
        ]
      },
      {
        id: 62,
        label: 'MENUITEMS.AUTHENTICATION.LIST.PASSWORDCREATE',
        parentId: 49,
        subItems: [
          {
            id: 63,
            label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
            link: '/auth/pass-create/basic',
            parentId: 62
          },
          {
            id: 64,
            label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
            link: '/auth/pass-create/cover',
            parentId: 62
          },
        ]
      },
      {
        id: 65,
        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
        parentId: 49,
        subItems: [
          {
            id: 66,
            label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
            link: '/auth/lockscreen/basic',
            parentId: 65
          },
          {
            id: 67,
            label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
            link: '/auth/lockscreen/cover',
            parentId: 65
          },
        ]
      },
      {
        id: 68,
        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGOUT',
        parentId: 49,
        subItems: [
          {
            id: 69,
            label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
            link: '/auth/logout/basic',
            parentId: 68
          },
          {
            id: 70,
            label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
            link: '/auth/logout/cover',
            parentId: 68
          },
        ]
      },
      {
        id: 71,
        label: 'MENUITEMS.AUTHENTICATION.LIST.SUCCESSMESSAGE',
        parentId: 49,
        subItems: [
          {
            id: 72,
            label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
            link: '/auth/success-msg/basic',
            parentId: 71
          },
          {
            id: 73,
            label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
            link: '/auth/success-msg/cover',
            parentId: 71
          },
        ]
      },
      {
        id: 74,
        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
        parentId: 49,
        subItems: [
          {
            id: 75,
            label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
            link: '/auth/twostep/basic',
            parentId: 74
          },
          {
            id: 76,
            label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
            link: '/auth/twostep/cover',
            parentId: 74
          },
        ]
      },
      {
        id: 77,
        label: 'MENUITEMS.AUTHENTICATION.LIST.ERRORS',
        parentId: 49,
        subItems: [
          {
            id: 78,
            label: 'MENUITEMS.AUTHENTICATION.LIST.404BASIC',
            link: '/auth/errors/404-basic',
            parentId: 77
          },
          {
            id: 79,
            label: 'MENUITEMS.AUTHENTICATION.LIST.404COVER',
            link: '/auth/errors/404-cover',
            parentId: 77
          },
          {
            id: 80,
            label: 'MENUITEMS.AUTHENTICATION.LIST.404ALT',
            link: '/auth/errors/404-alt',
            parentId: 77
          },
          {
            id: 81,
            label: 'MENUITEMS.AUTHENTICATION.LIST.500',
            link: '/auth/errors/page-500',
            parentId: 77
          },
          {
            id: 81,
            label: 'MENUITEMS.AUTHENTICATION.LIST.OFFLINE',
            link: '/auth/errors/offline',
            parentId: 77
          },
        ]
      },
    ]
  },
  {
    id: 82,
    label: 'MENUITEMS.PAGES.TEXT',
    icon: 'command',
    subItems: [
      {
        id: 83,
        label: 'MENUITEMS.PAGES.LIST.STARTER',
        link: '/pages/starter',
        parentId: 82
      },
      {
        id: 84,
        label: 'MENUITEMS.PAGES.LIST.PROFILE',
        parentId: 82,
        subItems: [
          {
            id: 85,
            label: 'MENUITEMS.PAGES.LIST.SIMPLEPAGE',
            link: '/pages/profile',
            parentId: 84
          },
          {
            id: 86,
            label: 'MENUITEMS.PAGES.LIST.SETTINGS',
            link: '/pages/profile-setting',
            parentId: 84
          },
        ]
      },
      {
        id: 87,
        label: 'MENUITEMS.PAGES.LIST.TEAM',
        link: '/pages/team',
        parentId: 82
      },
    ]
  },
  // {
  //   id: 131,
  //   label: 'MENUITEMS.LANDING.TEXT',
  //   icon: 'airplay',
  //   link: '/landing',
  //   subItems: [
  //     {
  //       id: 85,
  //       label: 'MENUITEMS.LANDING.LIST.ONEPAGE',
  //       link: '/landing',
  //       parentId: 84
  //     },
  //     {
  //       id: 86,
  //       label: 'MENUITEMS.LANDING.LIST.NFTLANDING',
  //       link: '/landing/nft',
  //       parentId: 84
  //     },
  //     {
  //       id: 87,
  //       label: 'MENUITEMS.LANDING.LIST.JOB',
  //       link: '/landing/job',
  //       parentId: 84,
  //     },
  //   ]
  // },
  // {
  //   id: 96,
  //   label: 'MENUITEMS.COMPONENTS.TEXT',
  //   isTitle: true
  // },
  // {
  //   id: 97,
  //   label: 'MENUITEMS.BASEUI.TEXT',
  //   icon: 'package',
  //   subItems: [
  //     {
  //       id: 98,
  //       label: 'MENUITEMS.BASEUI.LIST.ALERTS',
  //       link: '/ui/alerts',
  //       parentId: 97
  //     },
  //     {
  //       id: 99,
  //       label: 'MENUITEMS.BASEUI.LIST.BADGES',
  //       link: '/ui/badges',
  //       parentId: 97
  //     },
  //     {
  //       id: 100,
  //       label: 'MENUITEMS.BASEUI.LIST.BUTTONS',
  //       link: '/ui/buttons',
  //       parentId: 97
  //     },
  //     {
  //       id: 101,
  //       label: 'MENUITEMS.BASEUI.LIST.COLORS',
  //       link: '/ui/colors',
  //       parentId: 97
  //     },
  //     {
  //       id: 102,
  //       label: 'MENUITEMS.BASEUI.LIST.CARDS',
  //       link: '/ui/cards',
  //       parentId: 97
  //     },
  //     {
  //       id: 103,
  //       label: 'MENUITEMS.BASEUI.LIST.CAROUSEL',
  //       link: '/ui/carousel',
  //       parentId: 97
  //     },
  //     {
  //       id: 104,
  //       label: 'MENUITEMS.BASEUI.LIST.DROPDOWNS',
  //       link: '/ui/dropdowns',
  //       parentId: 97
  //     },
  //     {
  //       id: 105,
  //       label: 'MENUITEMS.BASEUI.LIST.GRID',
  //       link: '/ui/grid',
  //       parentId: 97
  //     },
  //     {
  //       id: 106,
  //       label: 'MENUITEMS.BASEUI.LIST.IMAGES',
  //       link: '/ui/images',
  //       parentId: 97
  //     },
  //     {
  //       id: 107,
  //       label: 'MENUITEMS.BASEUI.LIST.TABS',
  //       link: '/ui/tabs',
  //       parentId: 97
  //     },
  //     {
  //       id: 108,
  //       label: 'MENUITEMS.BASEUI.LIST.ACCORDION&COLLAPSE',
  //       link: '/ui/accordions',
  //       parentId: 97
  //     },
  //     {
  //       id: 109,
  //       label: 'MENUITEMS.BASEUI.LIST.MODALS',
  //       link: '/ui/modals',
  //       parentId: 97
  //     },
  //     {
  //       id: 111,
  //       label: 'MENUITEMS.BASEUI.LIST.PLACEHOLDERS',
  //       link: '/ui/placeholder',
  //       parentId: 97
  //     },
  //     {
  //       id: 112,
  //       label: 'MENUITEMS.BASEUI.LIST.PROGRESS',
  //       link: '/ui/progress',
  //       parentId: 97
  //     },
  //     {
  //       id: 113,
  //       label: 'MENUITEMS.BASEUI.LIST.NOTIFICATIONS',
  //       link: '/ui/notifications',
  //       parentId: 97
  //     },
  //     {
  //       id: 114,
  //       label: 'MENUITEMS.BASEUI.LIST.MEDIAOBJECT',
  //       link: '/ui/media',
  //       parentId: 97
  //     },
  //     {
  //       id: 115,
  //       label: 'MENUITEMS.BASEUI.LIST.EMBEDVIDEO',
  //       link: '/ui/video',
  //       parentId: 97
  //     },
  //     {
  //       id: 116,
  //       label: 'MENUITEMS.BASEUI.LIST.TYPOGRAPHY',
  //       link: '/ui/typography',
  //       parentId: 97
  //     },
  //     {
  //       id: 117,
  //       label: 'MENUITEMS.BASEUI.LIST.LISTS',
  //       link: '/ui/list',
  //       parentId: 97
  //     },
  //     {
  //       id: 117,
  //       label: 'MENUITEMS.BASEUI.LIST.LINKS',
  //       link: '/ui/links',
  //       badge: {
  //         variant: 'bg-success',
  //         text: 'MENUITEMS.DASHBOARD.BADGE',
  //       },
  //       parentId: 97
  //     },
  //     {
  //       id: 118,
  //       label: 'MENUITEMS.BASEUI.LIST.GENERAL',
  //       link: '/ui/general',
  //       parentId: 97
  //     },

  //     {
  //       id: 119,
  //       label: 'MENUITEMS.BASEUI.LIST.RIBBONS',
  //       link: '/ui/ribbons',
  //       parentId: 97
  //     },
  //     {
  //       id: 120,
  //       label: 'MENUITEMS.BASEUI.LIST.UTILITIES',
  //       link: '/ui/utilities',
  //       parentId: 97
  //     }
  //   ]
  // },
  // {
  //   id: 121,
  //   label: 'MENUITEMS.ADVANCEUI.TEXT',
  //   icon: 'layers',
  //   subItems: [
  //     {
  //       id: 122,
  //       label: 'MENUITEMS.ADVANCEUI.LIST.SWEETALERTS',
  //       link: '/advance-ui/sweetalerts',
  //       parentId: 121
  //     },
  //     {
  //       id: 124,
  //       label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLBAR',
  //       link: '/advance-ui/scrollbar',
  //       parentId: 121
  //     },

  //     {
  //       id: 126,
  //       label: 'MENUITEMS.ADVANCEUI.LIST.TOUR',
  //       link: '/advance-ui/tour',
  //       parentId: 121
  //     },
  //     {
  //       id: 127,
  //       label: 'MENUITEMS.ADVANCEUI.LIST.SWIPERSLIDER',
  //       link: '/advance-ui/swiper',
  //       parentId: 121
  //     },
  //     {
  //       id: 128,
  //       label: 'MENUITEMS.ADVANCEUI.LIST.RATTINGS',
  //       link: '/advance-ui/ratings',
  //       parentId: 121
  //     },
  //     {
  //       id: 129,
  //       label: 'MENUITEMS.ADVANCEUI.LIST.HIGHLIGHT',
  //       link: '/advance-ui/highlight',
  //       parentId: 121
  //     },
  //     {
  //       id: 130,
  //       label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLSPY',
  //       link: '/advance-ui/scrollspy',
  //       parentId: 121
  //     }
  //   ]
  // },
  // {
  //   id: 132,
  //   label: 'MENUITEMS.FORMS.TEXT',
  //   icon: 'file-text',
  //   subItems: [
  //     {
  //       id: 133,
  //       label: 'MENUITEMS.FORMS.LIST.BASICELEMENTS',
  //       link: '/forms/basic',
  //       parentId: 132
  //     },
  //     {
  //       id: 134,
  //       label: 'MENUITEMS.FORMS.LIST.FORMSELECT',
  //       link: '/forms/select',
  //       parentId: 132
  //     },
  //     {
  //       id: 135,
  //       label: 'MENUITEMS.FORMS.LIST.CHECKBOXS&RADIOS',
  //       link: '/forms/checkboxs-radios',
  //       parentId: 132
  //     },
  //     {
  //       id: 136,
  //       label: 'MENUITEMS.FORMS.LIST.PICKERS',
  //       link: '/forms/pickers',
  //       parentId: 132
  //     },
  //     {
  //       id: 137,
  //       label: 'MENUITEMS.FORMS.LIST.INPUTMASKS',
  //       link: '/forms/masks',
  //       parentId: 132
  //     },
  //     {
  //       id: 138,
  //       label: 'MENUITEMS.FORMS.LIST.ADVANCED',
  //       link: '/forms/advanced',
  //       parentId: 132
  //     },
  //     {
  //       id: 139,
  //       label: 'MENUITEMS.FORMS.LIST.RANGESLIDER',
  //       link: '/forms/range-sliders',
  //       parentId: 132
  //     },
  //     {
  //       id: 140,
  //       label: 'MENUITEMS.FORMS.LIST.VALIDATION',
  //       link: '/forms/validation',
  //       parentId: 132
  //     },
  //     {
  //       id: 141,
  //       label: 'MENUITEMS.FORMS.LIST.WIZARD',
  //       link: '/forms/wizard',
  //       parentId: 132
  //     },
  //     {
  //       id: 142,
  //       label: 'MENUITEMS.FORMS.LIST.EDITORS',
  //       link: '/forms/editors',
  //       parentId: 132
  //     },
  //     {
  //       id: 143,
  //       label: 'MENUITEMS.FORMS.LIST.FILEUPLOADS',
  //       link: '/forms/file-uploads',
  //       parentId: 132
  //     },
  //     {
  //       id: 144,
  //       label: 'MENUITEMS.FORMS.LIST.FORMLAYOUTS',
  //       link: '/forms/layouts',
  //       parentId: 132
  //     }
  //   ]
  // },
  // {
  //   id: 170,
  //   label: 'MENUITEMS.ICONS.TEXT',
  //   icon: 'archive',
  //   subItems: [
  //     {
  //       id: 171,
  //       label: 'MENUITEMS.ICONS.LIST.REMIX',
  //       link: '/icons/remix',
  //       parentId: 170
  //     },
  //     {
  //       id: 172,
  //       label: 'MENUITEMS.ICONS.LIST.BOXICONS',
  //       link: '/icons/boxicons',
  //       parentId: 170
  //     },
  //     {
  //       id: 173,
  //       label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
  //       link: '/icons/materialdesign',
  //       parentId: 170
  //     },
  //     {
  //       id: 174,
  //       label: 'MENUITEMS.ICONS.LIST.LINEAWESOME',
  //       link: '/icons/lineawesome',
  //       parentId: 170
  //     },
  //     {
  //       id: 175,
  //       label: 'MENUITEMS.ICONS.LIST.FEATHER',
  //       link: '/icons/feather',
  //       parentId: 170
  //     },
  //     {
  //       id: 176,
  //       label: 'MENUITEMS.ICONS.LIST.CRYPTOSVG',
  //       link: '/icons/icons-crypto',
  //       parentId: 170,
  //     },
  //   ]
  // },

];
