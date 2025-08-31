// 价目表数据类型定义
export interface PriceOption {
  type: string;
  price: number | string;
}

export interface Service {
  id: string;
  name: string;
  prices: {
    single?: PriceOption[];
    firstTime?: PriceOption[];
    package?: PriceOption[];
  };
}

export interface SubCategory {
  id: string;
  name: string;
  services: Service[];
}

export interface MainCategory {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

// 8个系列的完整价目表数据
export const priceData: MainCategory[] = [
  // 1. BTL系列
  {
    id: 'series-1',
    name: 'BTL',
    subCategories: [
      {
        id: 'sub-1',
        name: 'EMFUSION',
        services: [
          {
            id: 'service-1',
            name: 'EMFUSION美芙炫',
            prices: {
              single: [{ type: '单次', price: 2680 }],
              firstTime: [{ type: '首次体验', price: 1680 }],
              package: [
                { type: '疗程价格', price: '13800/10次' },
                { type: '疗程价格', price: '28800/24次' },
                { type: '疗程价格', price: '52800/48次' }
              ]
            }
          },
          {
            id: 'service-2',
            name: 'EMFUSION高光炫肤',
            prices: {
              single: [{ type: '单次', price: 3280 }],
              firstTime: [{ type: '首次体验', price: 2680 }],
              package: [
                { type: '疗程价格', price: '21600/10次' },
                { type: '疗程价格', price: '38600/20次' }
              ]
            }
          }
        ]
      },
      {
        id: 'sub-2', 
        name: 'NEW Ultra360',
        services: [
          {
            id: 'service-3',
            name: 'BTL360pro局部（上面部/面中部/颈部任选）',
            prices: {
              single: [{ type: '单次', price: 3800 }],
              firstTime: [{ type: '首次体验', price: 2380 }],
              package: [
                { type: '疗程价格', price: '14800/6次' },
                { type: '疗程价格', price: '19800/10次' },
                { type: '疗程价格', price: '43800/24次' }
              ]
            }
          },
          {
            id: 'service-4',
            name: 'BTL360pro全脸抗衰胶原再生',
            prices: {
              single: [{ type: '单次', price: 6800 }],
              firstTime: [{ type: '首次体验', price: 3680 }],
              package: [
                { type: '疗程价格', price: '19800/6次' },
                { type: '疗程价格', price: '30800/10次' },
                { type: '疗程价格', price: '69800/24次' }
              ]
            }
          },
          {
            id: 'service-5',
            name: 'BTL360pro面眼颈轮廓紧致',
            prices: {
              single: [{ type: '单次', price: 9800 }],
              firstTime: [{ type: '首次体验', price: 4680 }],
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
        id: 'sub-3',
        name: 'NEW Ultra360 prolift治疗方案',
        services: [
          {
            id: 'service-6',
            name: 'prolift局部',
            prices: {
              single: [{ type: '单次', price: 4980 }],
              firstTime: [{ type: '首次体验', price: 2680 }],
              package: [
                { type: '疗程价格', price: '48000/24次' },
                { type: '疗程价格', price: '86200/48次' }
              ]
            }
          }
        ]
      },
      {
        id: 'sub-4',
        name: 'EMFACE',
        services: [
          {
            id: 'service-7',
            name: 'EMFACE',
            prices: {
              single: [
                { type: '单次', price: 15800 },
                { type: '单次', price: 31600 }
              ],
              firstTime: [
                { type: '首次体验', price: 3980 },
                { type: '首次体验', price: 7980 }
              ],
              package: [
                { type: '疗程价格', price: '15600/单部位4个点' },
                { type: '疗程价格', price: '29600/双部位8个点' },
                { type: '疗程价格', price: '38600/双部位12个点' },
                { type: '疗程价格', price: '72000/不限部位24个点' }
              ]
            }
          }
        ]
      }
    ]
  }
]