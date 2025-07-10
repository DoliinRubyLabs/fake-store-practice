import { IProduct } from '@/client/entities/models'

// mock data for dev/test purpose
export const mockProducts: IProduct[] = Array(10).fill({
  id: 'product-001',
  updatedAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  slug: 'super-widget-3000',
  isBestChoice: true,
  isValueForMoney: false,
  hasDiscount: true,
  hasDetails: true,
  image: {
    id: 101,
    alt: 'Super Widget 3000',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    url: 'https://media.istockphoto.com/id/1297573779/vector/empty-illuminated-round-podium-or-platform.jpg?s=612x612&w=0&k=20&c=ZEhTLOkmbNpc9j-bf-Zw36D2OPiRjZ2Fho8Ofv2Polk=',
    thumbnailURL: 'https://placehold.co/600x400',
    filename: 'super-widget-3000.jpg',
    mimeType: 'image/jpeg',
    filesize: 204800,
    width: 600,
    height: 400,
    focalX: 0.5,
    focalY: 0.5,
  },
  shortName: 'Super Widget',
  fullName: 'Super Widget 3000 Deluxe Edition',
  estimatedPrice: 149.99,
  discountPercent: 20,
  description:
    'The Super Widget 3000 is your all-in-one solution for home and office tasks, offering unmatched performance and reliability.',
  productLink: 'https://www.amazon.com',
  rank: {
    value: 1,
    label: 'Top Rated',
  },
  details: [
    {
      title: 'Key Features',
      rows: [
        { iconSvg: '<svg><!-- battery icon --></svg>', label: 'Long-lasting battery' },
        { iconSvg: '<svg><!-- wifi icon --></svg>', label: 'Wi-Fi 6 support' },
        { iconSvg: '<svg><!-- speed icon --></svg>', label: 'High-speed performance' },
      ],
    },
    {
      title: 'Specifications',
      rows: [
        { iconSvg: '<svg><!-- memory icon --></svg>', label: '16GB RAM' },
        { iconSvg: '<svg><!-- storage icon --></svg>', label: '512GB SSD' },
        { iconSvg: '<svg><!-- display icon --></svg>', label: '4K Ultra HD display' },
      ],
    },
  ],
  meta: {
    title: 'Buy Super Widget 3000 Online | Best Price',
    description: 'Get the best deal on the Super Widget 3000. Top-rated all-in-one device with 20% off today.',
  },
})
