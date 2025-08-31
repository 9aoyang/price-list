export interface PriceOption {
  type: string
  price: number | string
  description?: string
}

export interface ServiceItem {
  id: string
  name: string
  prices: {
    single?: PriceOption[]
    firstTime?: PriceOption[]
    package?: PriceOption[]
  }
  description?: string
}

export interface SubCategory {
  id: string
  name: string
  services: ServiceItem[]
}

export interface MainCategory {
  id: string
  name: string
  icon?: string
  subCategories: SubCategory[]
}

export const priceData: MainCategory[] = [
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
              single: [
                {
                  type: '单次',
                  price: 2680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 1680
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '13800/10次'
                },
                {
                  type: '疗程价格',
                  price: '28800/24次'
                },
                {
                  type: '疗程价格',
                  price: '52800/48次'
                }
              ]
            }
          },
          {
            id: 'service-2',
            name: 'EMFUSION高光炫肤',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 3280
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 2680
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '21600/10次'
                },
                {
                  type: '疗程价格',
                  price: '38600/20次'
                }
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
              single: [
                {
                  type: '单次',
                  price: 3800
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 2380
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '14800/6次'
                },
                {
                  type: '疗程价格',
                  price: '19800/10次'
                },
                {
                  type: '疗程价格',
                  price: '43800/24次'
                }
              ]
            }
          },
          {
            id: 'service-4',
            name: 'BTL360pro全脸抗衰胶原再生',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 6800
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 3680
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '19800/6次'
                },
                {
                  type: '疗程价格',
                  price: '30800/10次'
                },
                {
                  type: '疗程价格',
                  price: '69800/24次'
                }
              ]
            }
          },
          {
            id: 'service-5',
            name: 'BTL360pro面眼颈轮廓紧致',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 9800
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 4680
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '25800/6次'
                },
                {
                  type: '疗程价格',
                  price: '38800/10次'
                },
                {
                  type: '疗程价格',
                  price: '88000/24次'
                }
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
              single: [
                {
                  type: '单次',
                  price: 4980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 2680
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '48000/24次'
                },
                {
                  type: '疗程价格',
                  price: '86200/48次'
                }
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
                {
                  type: '单次',
                  price: 15800
                },
                {
                  type: '单次', 
                  price: 31600
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 3980
                },
                {
                  type: '首次体验',
                  price: 7980
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '15600/单部位4个点'
                },
                {
                  type: '疗程价格',
                  price: '29600/双部位8个点'
                },
                {
                  type: '疗程价格',
                  price: '38600/双部位12个点'
                },
                {
                  type: '疗程价格',
                  price: '72000/不限部位24个点'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'series-2',
    name: 'INDIBA',
    subCategories: [
      {
        id: 'sub-1',
        name: 'INDIBA身体系列',
        services: [
          {
            id: 'service-8',
            name: '身体任意部位',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 2680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 1880
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '16800/10次'
                },
                {
                  type: '疗程价格',
                  price: '32800/30次'
                },
                {
                  type: '疗程价格',
                  price: '46000/50次'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'sub-2',
        name: 'INDIBA调理',
        services: [
          {
            id: 'service-9',
            name: '面部',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 3980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 2980
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '19800/10次'
                }
              ]
            }
          },
          {
            id: 'service-10',
            name: '私密',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 6980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 4980
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '39800/10次'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'series-3',
    name: 'Basic  FACIAL',
    subCategories: [
      {
        id: 'sub-default-1',
        name: 'Basic  FACIAL',
        services: [
          {
            id: 'service-11',
            name: 'Aqua深层毛孔净化管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 518
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '4580/10次'
                }
              ]
            }
          },
          {
            id: 'service-12',
            name: 'Aqua水漾润肤管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 518
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '4580/10次'
                }
              ]
            }
          },
          {
            id: 'service-13',
            name: 'Aqua冰封舒敏修护管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 518
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '4580/10次'
                }
              ]
            }
          },
          {
            id: 'service-14',
            name: 'Aqua水润净化管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 880
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 658
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '5680/10次'
                }
              ]
            }
          },
          {
            id: 'service-14-1',
            name: 'Aqua清净化管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 880
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 658
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '5680/10次'
                }
              ]
            }
          },
          {
            id: 'service-15',
            name: '小分子灌注补水（搭配护理操作）',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 298
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 268
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '2280/10次'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'series-4',
    name: 'Basic  Body',
    subCategories: [
      {
        id: 'sub-default-1',
        name: 'Basic  Body',
        services: [
          {
            id: 'service-16',
            name: '科美｜磁波科技仪器',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 528
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '4280/10次'
                }
              ]
            }
          },
          {
            id: 'service-17',
            name: '泰式头部颂钵疗愈',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 880
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 678
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '4580/10次'
                }
              ]
            }
          },
          {
            id: 'service-18',
            name: '喜马拉雅粉晶疗愈spa',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 1280
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 980
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '8800/10次'
                }
              ]
            }
          },
          {
            id: 'service-19',
            name: '深海熔岩热贝舒压spa',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 1280
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 980
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '8800/10次'
                }
              ]
            }
          },
          {
            id: 'service-20',
            name: '玫瑰木鼠尾草牛奶泡浴',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 368
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 298
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '2680/10次'
                }
              ]
            }
          },
          {
            id: 'service-21',
            name: '红酒情调泡泡浴',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 398
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 328
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '2880/10次'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'series-4',
    name: 'Deluxe-SWISS',
    subCategories: [
      {
        id: 'sub-default-1',
        name: 'cellllight',
        services: [
          {
            id: 'service-30',
            name: 'celllight光子嫩肤-单模式',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 1580
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 1280
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '6800/6次'
                }
              ]
            }
          },
          {
            id: 'service-31',
            name: 'celllight光子嫩肤-全模式',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 2280
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 1680
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '8800/6次'
                }
              ]
            }
          },
          {
            id: 'service-32',
            name: 'celllight牛奶光',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 1280
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 1180
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '9800/10次'
                }
              ]
            }
          },
          {
            id: 'service-33',
            name: '光动力',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 1280
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 880
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '6800/10次'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'series-5',
    name: 'cellllight',
    subCategories: [
      {
        id: 'sub-default-1',
        name: '精致美肌',
        services: [
          {
            id: 'service-34',
            name: '上下唇部',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 1280
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 980
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '780/包年'
                }
              ]
            }
          },
          {
            id: 'service-35',
            name: '腋下',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 1680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 1280
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '980/包年'
                }
              ]
            }
          },
          {
            id: 'service-36',
            name: '小手臂',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 3280
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 3080
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '2680/包年'
                }
              ]
            }
          },
          {
            id: 'service-37',
            name: '全手臂（包含小手臂）',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 4680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 4080
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '3680/包年'
                }
              ]
            }
          },
          {
            id: 'service-38',
            name: '小腿',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 3980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 3580
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '2980/包年'
                }
              ]
            }
          },
          {
            id: 'service-39',
            name: '全腿部（包含小腿）',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 4980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 4680
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '4080/包年'
                }
              ]
            }
          },
          {
            id: 'service-40',
            name: '比基尼VI',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 5980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 5680
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '4980/包年'
                }
              ]
            }
          },
          {
            id: 'service-41',
            name: '比基尼VIO',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 6800
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 6680
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '5680/包年'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'series-6',
    name: '精致美肌',
    subCategories: [
      {
        id: 'sub-default-1',
        name: '私人订制',
        services: [
          {
            id: 'service-42',
            name: '全效赋活眼部排毒管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 580
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 428
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '3980/10次'
                }
              ]
            }
          },
          {
            id: 'service-43',
            name: '多肽眼部胶原管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 758
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '6980/10次'
                }
              ]
            }
          },
          {
            id: 'service-44',
            name: '漫画手|美手管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 580
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 428
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '3980/10次'
                }
              ]
            }
          },
          {
            id: 'service-45',
            name: '千金手|美手管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 758
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '6980/10次'
                }
              ]
            }
          },
          {
            id: 'service-46',
            name: '少女背|美背管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 498
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '4280/10次'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'series-7',
    name: '私人订制',
    subCategories: [
      {
        id: 'sub-default-1',
        name: '私人订制',
        services: [
          {
            id: 'service-47',
            name: '全效赋活眼部排毒管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 580
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 428
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '3980/10次'
                }
              ]
            }
          },
          {
            id: 'service-48',
            name: '多肽眼部胶原管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 758
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '6980/10次'
                }
              ]
            }
          },
          {
            id: 'service-49',
            name: '漫画手|美手管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 580
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 428
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '3980/10次'
                }
              ]
            }
          },
          {
            id: 'service-50',
            name: '千金手|美手管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 980
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 758
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '6980/10次'
                }
              ]
            }
          },
          {
            id: 'service-51',
            name: '少女背|美背管理',
            prices: {
              single: [
                {
                  type: '单次',
                  price: 680
                }
              ],
              firstTime: [
                {
                  type: '首次体验',
                  price: 498
                }
              ],
              package: [
                {
                  type: '疗程价格',
                  price: '4280/10次'
                }
              ]
            }
          }
        ]
      }
    ]
  }
]
