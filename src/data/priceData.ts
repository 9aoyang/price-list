export interface PriceOption {
  type: string;
  price: number | string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  prices: {
    single?: PriceOption[];
    firstTime?: PriceOption[];
    package?: PriceOption[];
  };
  description?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  services: ServiceItem[];
}

export interface MainCategory {
  id: string;
  name: string;
  icon?: string;
  subCategories: SubCategory[];
}

export const priceData: MainCategory[] = [
  {
    id: 'btl-series',
    name: '英国BTL系列',
    icon: '⚡',
    subCategories: [
      {
        id: 'emfusion',
        name: 'EMFUSION美肤炫',
        services: [
          {
            id: 'emfusion-treatment',
            name: 'EMFUSION美肤炫',
            prices: {
              single: [
                { type: '单次', price: 2980 }
              ],
              firstTime: [
                { type: '首次体验', price: 1380 }
              ],
              package: [
                { type: '疗程价格', price: '8800/6次' },
                { type: '疗程价格', price: '13800/10次' },
                { type: '疗程价格', price: '28800/24次' }
              ]
            }
          }
        ]
      },
      {
        id: 'btl360pro',
        name: 'BTL360pro系列',
        services: [
          {
            id: 'btl360pro-local',
            name: 'BTL360pro局部（上面部/眼部/下面部/颈部任选）',
            prices: {
              single: [
                { type: '单次', price: 3800 }
              ],
              firstTime: [
                { type: '首次体验', price: 2580 }
              ],
              package: [
                { type: '疗程价格', price: '16800/6次' },
                { type: '疗程价格', price: '25800/10次' },
                { type: '疗程价格', price: '48000/24次' }
              ]
            }
          },
          {
            id: 'btl360pro-full-face',
            name: 'BTL360pro全脸抗衰胶原再生',
            prices: {
              single: [
                { type: '单次', price: 6800 }
              ],
              firstTime: [
                { type: '首次体验', price: 3080 }
              ],
              package: [
                { type: '疗程价格', price: '19800/6次' },
                { type: '疗程价格', price: '30800/10次' },
                { type: '疗程价格', price: '69800/24次' }
              ]
            }
          },
          {
            id: 'btl360pro-lift',
            name: 'BTL360pro面眼颈提拉除皱紧致',
            prices: {
              single: [
                { type: '单次', price: 9800 }
              ],
              firstTime: [
                { type: '首次体验', price: 3880 }
              ],
              package: [
                { type: '疗程价格', price: '25800/6次' },
                { type: '疗程价格', price: '38800/10次' },
                { type: '疗程价格', price: '88000/24次' }
              ]
            }
          }
        ]
      },
      {
        id: 'emface',
        name: 'EMFACE',
        services: [
          {
            id: 'emface-treatment',
            name: 'EMFACE',
            prices: {
              single: [
                { type: '单次', price: 15800 },
                { type: '单次', price: 31600 }
              ],
              firstTime: [
                { type: '首次体验', price: 3980 },
                { type: '首次体验', price: 5980 }
              ],
              package: [
                { type: '疗程价格', price: '15600/单部位4次' },
                { type: '疗程价格', price: '29600/双部位4次' },
                { type: '疗程价格', price: '55000/不限部位16次' },
                { type: '疗程价格', price: '72000/不限部位24次' }
              ]
            }
          }
        ]
      }
    ]
  }
];