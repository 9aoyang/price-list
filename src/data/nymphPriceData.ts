import type { MainCategory } from './priceData';

export const nymphPriceData: MainCategory[] = [
  // 1. Basic Facial
  {
    id: 'n-series-2',
    name: 'Basic Facial',
    slogan: '温和清洁补水·稳护健康肤质',
    assetKey: 'nymph/basic_facial',
    subCategories: [
      {
        id: 'n-sub-2-1',
        name: 'Basic Facial',
        services: [
          {
            id: 'n-service-2-1',
            name: '韩式超微气泡清洁',
            prices: { single: [{ type: '单次', price: 458 }], firstTime: [{ type: '首次体验', price: 388 }], package: [{ type: '疗程价格', price: '2680/10次' }] }
          },
          {
            id: 'n-service-2-2',
            name: '水漾保湿护理',
            prices: { single: [{ type: '单次', price: 458 }], firstTime: [{ type: '首次体验', price: 388 }] }
          },
          {
            id: 'n-service-2-3',
            name: '屏障修复护理（敏感肌/晒后）',
            prices: { single: [{ type: '单次', price: 458 }], firstTime: [{ type: '首次体验', price: 388 }] }
          },
          {
            id: 'n-service-2-4',
            name: '胶原蛋白再生护理',
            prices: { single: [{ type: '单次', price: 458 }], firstTime: [{ type: '首次体验', price: 388 }] }
          },
          {
            id: 'n-service-2-5',
            name: '痘肌针清护理',
            prices: { single: [{ type: '单次', price: 488 }], firstTime: [{ type: '首次体验', price: 428 }], package: [{ type: '疗程价格', price: '3580/10次' }] }
          },
          {
            id: 'n-service-2-6',
            name: '眼部瑜伽',
            prices: { single: [{ type: '单次', price: 198 }], firstTime: [{ type: '首次体验', price: 108 }], package: [{ type: '疗程价格', price: '880/10次' }] }
          },
          {
            id: 'n-service-2-7',
            name: '德国cosmech眼部护理',
            prices: { single: [{ type: '单次', price: 298 }], firstTime: [{ type: '首次体验', price: 228 }], package: [{ type: '疗程价格', price: '1980/10次' }] }
          },
          {
            id: 'n-service-2-8',
            name: '天鹅颈',
            prices: { single: [{ type: '单次', price: 328 }], firstTime: [{ type: '首次体验', price: 268 }], package: [{ type: '疗程价格', price: '2280/10次' }] }
          },
          {
            id: 'n-service-2-9',
            name: '水漾注氧（需配合其他护理）',
            prices: { single: [{ type: '单次', price: 298 }], firstTime: [{ type: '首次体验', price: 268 }], package: [{ type: '疗程价格', price: '2280/10次' }] }
          },
          {
            id: 'n-service-2-10',
            name: '黄金手部嫩白管理',
            prices: { single: [{ type: '单次', price: 268 }], firstTime: [{ type: '首次体验', price: 198 }], package: [{ type: '疗程价格', price: '1680/10次' }] }
          }
        ]
      }
    ]
  },
  // 2. Basic Body
  {
    id: 'n-series-1',
    name: 'Basic Body',
    slogan: '舒缓塑形养护·焕新肌理质感',
    assetKey: 'nymph/basic_body',
    subCategories: [
      {
        id: 'n-sub-1-1',
        name: 'Basic Body',
        services: [
          {
            id: 'n-service-1-2',
            name: '精油SPA45mins',
            prices: { single: [{ type: '单次', price: 458 }], firstTime: [{ type: '首次体验', price: 388 }], package: [{ type: '疗程价格', price: '3280/10次' }] }
          },
          {
            id: 'n-service-1-3',
            name: '全身舒缓精油spa60mins',
            prices: { single: [{ type: '单次', price: 680 }], firstTime: [{ type: '首次体验', price: 558 }], package: [{ type: '疗程价格', price: '4580/10次' }] }
          },
          {
            id: 'n-service-1-4',
            name: '韩式多功能黑科技身体30mins',
            prices: { single: [{ type: '单次', price: 680 }], firstTime: [{ type: '首次体验', price: 528 }], package: [{ type: '疗程价格', price: '2280/10次' }] }
          },
          {
            id: 'n-service-1-5',
            name: '淋巴排毒（单部位）',
            prices: { single: [{ type: '单次', price: 328 }], firstTime: [{ type: '首次体验', price: 268 }], package: [{ type: '疗程价格', price: '2280/10次' }] }
          },
          {
            id: 'n-service-1-6',
            name: '泰式解压放松头疗',
            prices: { single: [{ type: '单次', price: 880 }], firstTime: [{ type: '首次体验', price: 678 }], package: [{ type: '疗程价格', price: '4580/10次' }] }
          },
          {
            id: 'n-service-1-7',
            name: '泰式喜马拉雅盐石疗愈spa',
            prices: { single: [{ type: '单次', price: 1280 }], firstTime: [{ type: '首次体验', price: 980 }], package: [{ type: '疗程价格', price: '8800/10次' }] }
          },
          {
            id: 'n-service-1-8',
            name: '泰式神奇贝壳舒压spa',
            prices: { single: [{ type: '单次', price: 1280 }], firstTime: [{ type: '首次体验', price: 980 }], package: [{ type: '疗程价格', price: '8800/10次' }] }
          },
          {
            id: 'n-service-1-9',
            name: '身体小部位刷酸',
            prices: { single: [{ type: '单次', price: 680 }], firstTime: [{ type: '首次体验', price: 540 }], package: [{ type: '疗程价格', price: '1380/3次' }] }
          },
          {
            id: 'n-service-1-10',
            name: '身体四肢/背部刷酸',
            prices: { single: [{ type: '单次', price: 1680 }], firstTime: [{ type: '首次体验', price: 1580 }], package: [{ type: '疗程价格', price: '3980/3次' }] }
          }
        ]
      }
    ]
  },
  // 3. Bespoke Facial
  {
    id: 'n-series-3',
    name: 'Bespoke Facial',
    slogan: '针对性改善·优化肌肤状态',
    assetKey: 'nymph/bespoke_facial',
    subCategories: [
      {
        id: 'n-sub-3-1',
        name: 'Bespoke Facial',
        services: [
          {
            id: 'n-service-3-1',
            name: '眼部焕彩紧致护理',
            prices: { single: [{ type: '单次', price: 798 }], firstTime: [{ type: '首次体验', price: 558 }], package: [{ type: '疗程价格', price: '4580/10次' }] }
          },
          {
            id: 'n-service-3-2',
            name: '日式深层清洁护理',
            prices: { single: [{ type: '单次', price: 528 }], firstTime: [{ type: '首次体验', price: 388 }], package: [{ type: '疗程价格', price: '3580/10次' }] }
          },
          {
            id: 'n-service-3-3',
            name: '日式提升紧致护理',
            prices: { single: [{ type: '单次', price: 680 }], firstTime: [{ type: '首次体验', price: 458 }], package: [{ type: '疗程价格', price: '4280/10次' }] }
          },
          {
            id: 'n-service-3-4',
            name: 'LDM水滴修复提升',
            prices: { single: [{ type: '单次', price: 720 }], firstTime: [{ type: '首次体验', price: 588 }], package: [{ type: '疗程价格', price: '4960/10次' }] }
          },
          {
            id: 'n-service-3-5',
            name: '比利时2B白金护理',
            prices: { single: [{ type: '单次', price: 780 }], firstTime: [{ type: '首次体验', price: 618 }], package: [{ type: '疗程价格', price: '5280/10次' }] }
          },
          {
            id: 'n-service-3-6',
            name: '水光焕能精华护理',
            prices: { single: [{ type: '单次', price: 880 }], firstTime: [{ type: '首次体验', price: 680 }], package: [{ type: '疗程价格', price: '5680/10次' }] }
          },
          {
            id: 'n-service-3-7',
            name: '抗糖AGT减龄护理',
            prices: { single: [{ type: '单次', price: 980 }], firstTime: [{ type: '首次体验', price: 880 }], package: [{ type: '疗程价格', price: '6800/10次' }] }
          }
        ]
      }
    ]
  },
  // 4. Deluxe-SWISS
  {
    id: 'n-series-6',
    name: 'Deluxe-SWISS',
    slogan: '奢享抗衰修护·焕活年轻肌感',
    assetKey: 'nymph/deluxe_swiss',
    subCategories: [
      {
        id: 'n-sub-6-1',
        name: 'Deluxe-SWISS',
        services: [
          {
            id: 'n-service-6-1',
            name: 'wishpro精华胶囊（单颗任选）',
            prices: { single: [{ type: '单次', price: 1280 }], firstTime: [{ type: '首次体验', price: 960 }], package: [{ type: '疗程价格', price: '8800/10次' }] }
          },
          {
            id: 'n-service-6-2',
            name: 'wishpro精华胶囊（两颗任选）',
            prices: { single: [{ type: '单次', price: 1980 }], firstTime: [{ type: '首次体验', price: 1480 }], package: [{ type: '疗程价格', price: '11800/10次' }] }
          },
          {
            id: 'n-service-6-3',
            name: '法尔曼菁凝保湿护理',
            prices: { single: [{ type: '单次', price: 1080 }], firstTime: [{ type: '首次体验', price: 798 }], package: [{ type: '疗程价格', price: '7800/10次' }] }
          },
          {
            id: 'n-service-6-4',
            name: '法尔曼幸福面膜护理',
            prices: { single: [{ type: '单次', price: 1280 }], firstTime: [{ type: '首次体验', price: 960 }], package: [{ type: '疗程价格', price: '9800/10次' }] }
          },
          {
            id: 'n-service-6-5',
            name: '法尔曼骨胶原眼部护理',
            prices: { single: [{ type: '单次', price: 1980 }], firstTime: [{ type: '首次体验', price: 1480 }], package: [{ type: '疗程价格', price: '12800/10次' }] }
          },
          {
            id: 'n-service-6-6',
            name: '法尔曼骨胶原面部护理',
            prices: { single: [{ type: '单次', price: 3080 }], firstTime: [{ type: '首次体验', price: 2380 }], package: [{ type: '疗程价格', price: '26800/10次' }] }
          },
          {
            id: 'n-service-6-7',
            name: '瑞妍清洁五部曲',
            prices: { single: [{ type: '单次', price: 1080 }], firstTime: [{ type: '首次体验', price: 798 }], package: [{ type: '疗程价格', price: '7580/10次' }] }
          },
          {
            id: 'n-service-6-8',
            name: '瑞妍鬼脸弹绷护理',
            prices: { single: [{ type: '单次', price: 1280 }], firstTime: [{ type: '首次体验', price: 960 }], package: [{ type: '疗程价格', price: '8580/10次' }] }
          },
          {
            id: 'n-service-6-9',
            name: '美肤微雕',
            prices: { single: [{ type: '单次', price: 1880 }], firstTime: [{ type: '首次体验', price: 1180 }], package: [{ type: '疗程价格', price: '9600/10次' }] }
          },
          {
            id: 'n-service-6-10',
            name: '美国DMK生物酶疗',
            prices: { single: [{ type: '单次', price: 1980 }], firstTime: [{ type: '首次体验', price: 1280 }], package: [{ type: '疗程价格', price: '2980/3次' }] }
          }
        ]
      }
    ]
  },
  // 5. BTL
  {
    id: 'n-series-4',
    name: 'BTL',
    subCategories: [
      {
        id: 'n-sub-4-1',
        name: 'EMFUSION',
        slogan: '整体激活皮肤组织，全面强化肌肤功能',
        assetKey: 'nymph/btl/emfusion',
        services: [
           {
            id: 'n-service-4-1',
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
            id: 'n-service-4-2',
            name: 'EMFUSION高光炫肤',
            prices: { 
              single: [{ type: '单次', price: 3280 }], 
              firstTime: [{ type: '首次体验', price: 2680 }], 
              package: [
                { type: '疗程价格', price: '21800/10次' }, 
                { type: '疗程价格', price: '38800/20次' }
              ] 
            }
          }
        ]
      },
      {
        id: 'n-sub-4-2',
        name: 'NEW Ultra360',
        slogan: '强化韧带组织，实现全新提升效果',
        assetKey: 'nymph/btl/ultra360',
        services: [
          {
            id: 'n-service-4-3',
            name: 'BTL360pro局部（上面部/面中部/颈部任选）',
            prices: { 
              single: [{ type: '单次', price: 3800 }], 
              firstTime: [{ type: '首次体验', price: 2380 }], 
              package: [
                { type: '疗程价格', price: '15800/6次' }, 
                { type: '疗程价格', price: '19800/10次' }, 
                { type: '疗程价格', price: '42800/24次' }
              ] 
            }
          },
          {
            id: 'n-service-4-4',
            name: 'BTL360pro全脸抗衰胶原再生',
            prices: { 
              single: [{ type: '单次', price: 6800 }], 
              firstTime: [{ type: '首次体验', price: 4280 }], 
              package: [
                { type: '疗程价格', price: '19800/5次' }, 
                { type: '疗程价格', price: '35800/10次' }, 
                { type: '疗程价格', price: '69800/24次' }
              ] 
            }
          },
          {
            id: 'n-service-4-5',
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
        id: 'n-sub-4-3',
        name: 'NEW Ultra360 prolift治疗方案',
        services: [
          {
            id: 'n-service-4-6',
            name: 'prolift局部',
            prices: { 
              single: [{ type: '单次', price: 4980 }], 
              firstTime: [{ type: '首次体验', price: 2680 }], 
              package: [
                { type: '疗程价格', price: '22800/10次' }, 
                { type: '疗程价格', price: '48000/24次' }, 
                { type: '疗程价格', price: '86200/48次' }
              ] 
            }
          }
        ]
      },
      {
        id: 'n-sub-4-4',
        name: 'EMFACE',
        slogan: '重塑抗衰肌群，紧致面部轮廓，面部整体年轻',
        assetKey: 'nymph/btl/emface',
        services: [
           {
            id: 'n-service-4-7',
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
                { type: '疗程价格', price: '15800/单部位4个点' },
                { type: '疗程价格', price: '29800/双部位8个点' },
                { type: '疗程价格', price: '38800/双部位12个点' },
                { type: '疗程价格', price: '72000/不限部位24个点' }
              ] 
            }
          }
        ]
      }
    ]
  },
  // 6. Celllight
  {
    id: 'n-series-5',
    name: 'celllight',
    slogan: '匀净提亮肤色·焕活健康肤态',
    assetKey: 'nymph/celllight',
    subCategories: [
      {
        id: 'n-sub-5-1',
        name: 'celllight',
        services: [
          {
            id: 'n-service-5-1',
            name: 'DPL精准光子嫩肤（单模式）',
            prices: { 
              single: [{ type: '单次', price: 1580 }], 
              firstTime: [{ type: '首次体验', price: 1380 }], 
              package: [{ type: '疗程价格', price: '6800/6次' }] 
            }
          },
           {
            id: 'n-service-5-2',
            name: 'DPL精准光子嫩肤（全模式）',
            prices: { 
              single: [{ type: '单次', price: 2280 }], 
              firstTime: [{ type: '首次体验', price: 1680 }], 
              package: [{ type: '疗程价格', price: '8800/6次' }] 
            }
          }
        ]
      }
    ]
  },
  // 7. Smooth
  {
    id: 'n-series-7',
    name: '精致美肌',
    slogan: '温和无痛脱毛·持久光滑嫩肤',
    assetKey: 'nymph/smooth',
    subCategories: [
      {
        id: 'n-sub-7-1',
        name: '精致美肌',
        services: [
          {
            id: 'n-service-7-1',
            name: '上下唇部',
            prices: { single: [{ type: '单次', price: 1280 }], firstTime: [{ type: '首次体验', price: 980 }], package: [{ type: '疗程价格', price: '780/包年' }] }
          },
          {
            id: 'n-service-7-2',
            name: '腋下',
            prices: { single: [{ type: '单次', price: 1680 }], firstTime: [{ type: '首次体验', price: 1280 }], package: [{ type: '疗程价格', price: '980' }] }
          },
          {
            id: 'n-service-7-3',
            name: '小手臂',
            prices: { single: [{ type: '单次', price: 3280 }], firstTime: [{ type: '首次体验', price: 3080 }], package: [{ type: '疗程价格', price: '2680' }] }
          },
          {
            id: 'n-service-7-4',
            name: '全手臂（包含小手臂）',
            prices: { single: [{ type: '单次', price: 4680 }], firstTime: [{ type: '首次体验', price: 4080 }], package: [{ type: '疗程价格', price: '3680' }] }
          },
          {
            id: 'n-service-7-5',
            name: '小腿',
            prices: { single: [{ type: '单次', price: 3980 }], firstTime: [{ type: '首次体验', price: 3580 }], package: [{ type: '疗程价格', price: '2980' }] }
          },
          {
            id: 'n-service-7-6',
            name: '全腿部（包含小腿）',
            prices: { single: [{ type: '单次', price: 4980 }], firstTime: [{ type: '首次体验', price: 4680 }], package: [{ type: '疗程价格', price: '4080' }] }
          },
          {
            id: 'n-service-7-7',
            name: '比基尼VI',
            prices: { single: [{ type: '单次', price: 5980 }], firstTime: [{ type: '首次体验', price: 5680 }], package: [{ type: '疗程价格', price: '4980' }] }
          },
          {
            id: 'n-service-7-8',
            name: '比基尼VIO',
            prices: { single: [{ type: '单次', price: 6800 }], firstTime: [{ type: '首次体验', price: 6680 }], package: [{ type: '疗程价格', price: '5680' }] }
          }
        ]
      }
    ]
  },
  // 8. Targeted
  {
    id: 'n-series-8',
    name: 'Targeted',
    subCategories: [
      {
        id: 'n-sub-8-1',
        name: 'Targeted',
        services: [
          {
            id: 'n-service-8-1',
            name: '纯白面部',
            prices: { 
              single: [{ type: '单次', price: 880 }], 
              firstTime: [{ type: '首次体验', price: 698 }], 
              package: [
                { type: '疗程价格', price: '1980/3次' },
                { type: '疗程价格', price: '2980/5次' }
              ] 
            }
          },
          {
            id: 'n-service-8-2',
            name: '纯白身体',
            prices: { single: [{ type: '单次', price: 1680 }], firstTime: [{ type: '首次体验', price: 1280 }], package: [{ type: '疗程价格', price: '2980/3次' }] }
          },
          {
            id: 'n-service-8-3',
            name: '中胚层痘肌管理',
            prices: { single: [{ type: '单次', price: 2980 }], firstTime: [{ type: '首次体验', price: 2080 }], package: [{ type: '疗程价格', price: '4980/3次' }] }
          },
          {
            id: 'n-service-8-4',
            name: '中胚层痘肌pro',
            prices: { single: [{ type: '单次', price: 4980 }], firstTime: [{ type: '首次体验', price: 3580 }], package: [{ type: '疗程价格', price: '9800/3次' }] }
          },
          {
            id: 'n-service-8-5',
            name: '中胚层透白管理',
            prices: { single: [{ type: '单次', price: 3680 }], firstTime: [{ type: '首次体验', price: 3280 }], package: [{ type: '疗程价格', price: '8800/3次' }] }
          }
        ]
      }
    ]
  }
];