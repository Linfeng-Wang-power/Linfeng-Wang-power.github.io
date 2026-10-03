// 日常维护入口：个人资料、论文、教育与荣誉。
// equalContributors 填写需标注共同一作星号的姓名；本人姓名自动加粗。
// 空的 experience / news / service 数组会自动隐藏对应栏目。
window.homepage = {
  "demo": false,
  "profile": {
    "name": "Linfeng Wang",
    "chineseName": "汪琳丰",
    "initials": "LW",
    "role": "M.S. Student",
    "institution": "East China Normal University",
    "tagline": "Foundation Models · Time Series Analysis",
    "location": "Shanghai, China",
    "avatar": "person.jpg",
    "email": "lfwang@stu.ecnu.edu.cn",
    "links": [
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/citations?user=cVpjug8AAAAJ&hl=zh-CN"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/Linfeng-Wang-power"
      },
      {
        "label": "CV",
        "url": "汪琳丰 华东师范大学.pdf"
      }
    ],
    "wechat": "wlf0435xiao",
    "phone": "15901989972"
  },
  "bio": [
    [
      "I am currently a Master’s student in Data Science and Engineering at ",
      {
        "text": "East China Normal University (ECNU)",
        "bold": true
      },
      ", Shanghai, and a member of the ",
      {
        "text": "Decision Intelligence Lab",
        "url": "https://decisionintelligence.github.io/index"
      },
      ". I am advised by Prof. ",
      {
        "text": "Chenjuan Guo",
        "url": "https://faculty.ecnu.edu.cn/_s37/gcj/main.psp"
      },
      ". I am also fortunate to receive guidance from ",
      {
        "text": "Bin Yang",
        "url": "https://binyangdk.github.io/"
      },
      ", ",
      {
        "text": "Yang Shu",
        "url": "https://faculty.ecnu.edu.cn/_s37/sy2/main.psp"
      },
      ", and ",
      {
        "text": "Kai Zhao",
        "url": "https://faculty.ecnu.edu.cn/_s37/zk2_28885/main.psp"
      },
      "."
    ],
    [
      "My current research focuses on ",
      {
        "text": "Foundation Models",
        "bold": true
      },
      " and ",
      {
        "text": "Time Series Analysis",
        "bold": true
      },
      ". For more information, please take a look at my ",
      {
        "text": "CV",
        "url": "汪琳丰 华东师范大学.pdf"
      },
      ". Feel free to contact me on WeChat: ",
      {
        "text": "wlf0435xiao",
        "bold": true
      },
      "."
    ]
  ],
  "interests": [
    {
      "title": "Foundation Models",
      "description": "Multimodal time series foundation models, role-aware modeling of endogenous and exogenous modalities, and retrieval-based adaptation.",
      "links": [
        {
          "label": "QiYao-M",
          "url": "https://arxiv.org/abs/2609.34842"
        }
      ]
    },
    {
      "title": "Time Series Analysis",
      "description": "Time series forecasting and fair, comprehensive evaluation of irregular time series forecasting methods.",
      "links": [
        {
          "label": "BITS",
          "url": "https://arxiv.org/abs/2609.33303"
        }
      ]
    }
  ],
  "experience": [
    {
      "title": "NIO",
      "role": "Computer Vision Intern",
      "logo": "nio.png",
      "description": "Developed computer vision algorithms for battery swap stations and deployed a camera calibration algorithm for battery swap station cameras.",
      "period": "2024.11 — 2025.03"
    }
  ],
  "news": [],
  "papers": [
    {
      "title": "QiYao-M: Multimodal Time Series Foundation Model with Role-Aware Modeling of Endogenous and Exogenous Modalities",
      "authors": [
        "Hanyin Cheng",
        "Linfeng Wang",
        "Zhengbo Qu",
        "Yang Shu",
        "Zhongwen Rao",
        "Meng Wang",
        "Yijie Li",
        "Xin Jiang",
        "Bin Yang",
        "Chenjuan Guo"
      ],
      "equalContributors": [
        "Hanyin Cheng",
        "Linfeng Wang"
      ],
      "venue": "arXiv preprint · 2026",
      "year": "2026",
      "badge": "QiYao-M",
      "description": "A multimodal time series foundation model that distinguishes endogenous and exogenous modalities, combining temporal modeling with retrieval-based adaptation.",
      "tags": [
        "Foundation Models",
        "Time Series Analysis"
      ],
      "image": "qiyao-m.png",
      "links": {
        "Paper": "https://arxiv.org/abs/2609.34842"
      },
      "bibtex": ""
    },
    {
      "title": "BITS: Rethinking Fair and Comprehensive Evaluation for Irregular Time Series Forecasting",
      "authors": [
        "Kangjia Yan",
        "Linfeng Wang",
        "Tianen Shen",
        "Xiangfei Qiu",
        "Ruitong Zhang",
        "Hao Miao",
        "Jilin Hu",
        "Chenjuan Guo",
        "Bin Yang",
        "Christian S. Jensen"
      ],
      "equalContributors": [
        "Kangjia Yan",
        "Linfeng Wang",
        "Tianen Shen"
      ],
      "venue": "arXiv preprint · 2026",
      "year": "2026",
      "badge": "BITS",
      "description": "A benchmark for irregular time series forecasting, with consistent evaluation protocols and complementary metrics across eleven datasets from nine domains.",
      "tags": [
        "Time Series Analysis"
      ],
      "image": "bits.png",
      "links": {
        "Paper": "https://arxiv.org/abs/2609.33303"
      },
      "bibtex": ""
    },
    {
      "title": "UVTD: A Large-Scale Multilabel Data Set for Underwater Vision Tasks",
      "authors": [
        "Zhengyong Wang",
        "Meng Yu",
        "Lei Cao",
        "Pengyu Liu",
        "Linfeng Wang",
        "Xiang Li",
        "Yixiao Hong",
        "Chang He",
        "Liquan Shen"
      ],
      "equalContributors": [],
      "venue": "IEEE Journal of Oceanic Engineering · 50(2), 898–918 · 2025",
      "year": "2025",
      "badge": "UVTD",
      "description": "",
      "tags": [
        "Computer Vision"
      ],
      "image": "uvtd.png",
      "links": {
        "Paper": "https://ieeexplore.ieee.org/abstract/document/10850640"
      },
      "bibtex": ""
    }
  ],
  "education": [
    {
      "period": "2025.09 — Present",
      "title": "East China Normal University · 华东师范大学",
      "description": "M.S. Student"
    },
    {
      "period": "2021.09 — 2025.06",
      "title": "Shanghai University · 上海大学",
      "description": "Undergraduate Student"
    },
    {
      "period": "2018.09 — 2021.06",
      "title": "Shanghai Songjiang No. 2 High School · 上海市松江二中",
      "description": "High School Student"
    }
  ],
  "honors": [
    {
      "period": "2025.06",
      "title": "Shanghai Municipal Scholarship",
      "description": "上海市奖学金"
    },
    {
      "period": "2025.06",
      "title": "Shanghai Outstanding Graduate",
      "description": "上海市优秀毕业生"
    }
  ],
  "service": [],
  "updated": "2026.10",
  "researchIntro": [
    "My current research interests focus on ",
    {
      "text": "Foundation Models",
      "bold": true
    },
    " and ",
    {
      "text": "Time Series Analysis",
      "bold": true
    },
    ", with an emphasis on:"
  ],
  "locales": {
    "zh": {
      "profile": {
        "role": "硕士研究生",
        "institution": "华东师范大学",
        "tagline": "基础模型 · 时间序列分析",
        "location": "中国，上海",
        "links": [
          {
            "label": "谷歌学术",
            "url": "https://scholar.google.com/citations?user=cVpjug8AAAAJ&hl=zh-CN"
          },
          {
            "label": "GitHub",
            "url": "https://github.com/Linfeng-Wang-power"
          },
          {
            "label": "简历",
            "url": "汪琳丰 华东师范大学.pdf"
          }
        ]
      },
      "bio": [
        [
          "我目前是上海",
          {
            "text": "华东师范大学（ECNU）",
            "bold": true
          },
          "数据科学与工程方向的硕士研究生，也是",
          {
            "text": "决策智能实验室",
            "url": "https://decisionintelligence.github.io/index"
          },
          "的成员。我的导师是 ",
          {
            "text": "Chenjuan Guo",
            "url": "https://faculty.ecnu.edu.cn/_s37/gcj/main.psp"
          },
          " 教授，同时有幸得到 ",
          {
            "text": "Bin Yang",
            "url": "https://binyangdk.github.io/"
          },
          "、",
          {
            "text": "Yang Shu",
            "url": "https://faculty.ecnu.edu.cn/_s37/sy2/main.psp"
          },
          " 和 ",
          {
            "text": "Kai Zhao",
            "url": "https://faculty.ecnu.edu.cn/_s37/zk2_28885/main.psp"
          },
          " 的指导。"
        ],
        [
          "我的研究主要聚焦于",
          {
            "text": "基础模型",
            "bold": true
          },
          "与",
          {
            "text": "时间序列分析",
            "bold": true
          },
          "。更多信息请查看我的",
          {
            "text": "简历",
            "url": "汪琳丰 华东师范大学.pdf"
          },
          "，欢迎通过微信联系我：",
          {
            "text": "wlf0435xiao",
            "bold": true
          },
          "。"
        ]
      ],
      "researchIntro": [
        "我的研究兴趣主要包括",
        {
          "text": "基础模型",
          "bold": true
        },
        "和",
        {
          "text": "时间序列分析",
          "bold": true
        },
        "，重点关注："
      ],
      "interests": [
        {
          "title": "基础模型",
          "description": "多模态时间序列基础模型、区分内生与外生模态作用的建模方法，以及基于检索的模型适配。",
          "links": [
            {
              "label": "QiYao-M",
              "url": "https://arxiv.org/abs/2609.34842"
            }
          ]
        },
        {
          "title": "时间序列分析",
          "description": "时间序列预测，以及不规则时间序列预测方法的公平、全面评估。",
          "links": [
            {
              "label": "BITS",
              "url": "https://arxiv.org/abs/2609.33303"
            }
          ]
        }
      ],
      "experience": [
        {
          "title": "蔚来 · NIO",
          "role": "视觉算法实习生",
          "logo": "nio.png",
          "description": "负责换电站视觉算法，上线换电站摄像头校准算法。",
          "period": "2024.11 — 2025.03"
        }
      ],
      "education": [
        {
          "period": "2025.09 — 至今",
          "title": "华东师范大学",
          "description": "硕士研究生"
        },
        {
          "period": "2021.09 — 2025.06",
          "title": "上海大学",
          "description": "本科生"
        },
        {
          "period": "2018.09 — 2021.06",
          "title": "上海市松江二中",
          "description": "高中生"
        }
      ],
      "honors": [
        {
          "period": "2025.06",
          "title": "上海市奖学金",
          "description": ""
        },
        {
          "period": "2025.06",
          "title": "上海市优秀毕业生",
          "description": ""
        }
      ],
      "paperDescriptions": [
        "区分内生与外生模态作用的多模态时间序列基础模型，将时序建模与基于检索的适配相结合。",
        "面向不规则时间序列预测的基准，覆盖九个领域的十一个数据集，提供统一评估流程与互补指标。",
        ""
      ]
    }
  }
};
