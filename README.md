# 个人学术主页维护指南

这是按参考图结构制作的本地学术主页：顶部导航、左侧个人信息、右侧简介与研究经历、动态、论文筛选、教育、荣誉及学术服务。支持桌面和手机，无框架、无安装依赖。

当前已填入 Linfeng Wang（汪琳丰）的真实资料与四篇论文；未提供的动态、研究经历和学术服务自动隐藏。

## 打开预览

直接双击 `index.html`，用浏览器打开即可。修改后保存，刷新浏览器查看。

也可在此文件夹内运行：

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

然后访问 http://127.0.0.1:8765 。在终端按 Ctrl+C 停止。

## 在哪里维护

| 文件 | 用途 |
| --- | --- |
| `content.js` | **日常维护入口**：姓名、简介、研究方向、经历、动态、论文、教育、荣誉和服务 |
| `assets/` | 放本人照片、论文配图和 CV PDF |
| `styles.css` | 修改颜色、字号、间距、版式和手机适配 |
| `index.html` | 修改栏目标题、导航及页面结构 |
| `app.js` | 内容渲染、论文筛选、引用复制、导航高亮 |

## 第一次替换资料

1. 在 `content.js` 的 `profile` 中填入中英文姓名、身份、学校、地点和联系方式。
2. 将本人头像放入 `assets/avatar.jpg`，设置 `avatar: "assets/avatar.jpg"`。留空则显示姓名缩写，不会使用参考图中他人的照片。
3. 给 `links` 填入自己的 Scholar、GitHub 等完整地址。链接为空时不会显示。CV 可使用 `assets/cv.pdf`。
4. 修改 `bio`、`interests`、`experience`、`education`、`honors`、`service`。不需要的条目可删除，空数组写成 `[]`。如果整栏不需要，可同时删除 `index.html` 对应导航和 section，以及 `app.js` 对应渲染行。
5. 把 `news` 改成真实动态，最新一条放在最前面。
6. 把 `papers` 改成自己的论文。按希望展示的顺序排列；`tags` 自动生成筛选按钮和数量。`authors` 中与 `profile.name` 完全一致的名字自动加粗。
7. 替换完所有示例后，将 `demo: true` 改为 `demo: false`，并更新 `updated`。

## 添加论文

复制 `papers` 内的一条对象，修改字段。条目间必须有逗号。

```js
{
  title: "真实论文标题",
  authors: ["Your Name", "Coauthor Name"],
  venue: "实际会议/期刊或预印本状态 · 2026",
  year: "2026",
  badge: "实际会议简称",
  description: "用一两句话介绍问题与贡献。",
  tags: ["Time Series", "Foundation Models"],
  image: "assets/paper-figure.png", // 没有配图就填 ""
  links: { Paper: "https://你的真实论文地址", Code: "" },
  bibtex: "" // 可用反引号包裹多行真实 BibTeX；填写后显示展开与复制功能
}
```

动态和论文链接只显示已填写的地址，不放无效的演示按钮。论文配图留空时显示文字标签块。

## 设计与后续发布

默认采用英文栏目，保留中文姓名，适合学术交流。以白底、深蓝链接、细分隔线保持参考图的学术风格；动态限高滚动，论文随整页滚动，减少嵌套滚动。

当前只做本地预览，**没有发布到互联网**。将来可把本目录作为独立主页项目维护；发布时只上传本目录，避免带上外层科研工作区文件。所有资料都是静态内容，访问者可查看，因此不要在此放密钥或私密资料。

## 当前图片与署名维护

现有图片保留在主页目录：`person.jpg` 为头像；`qiyao-i.png`、`qiyao-m.png`、`bits.png`、`uvtd.png` 为论文配图。`content.js` 的路径与实际文件名保持一致即可。

论文 `authors` 按正式顺序填写；`equalContributors` 中的姓名显示上标星号，`profile.name` 对应的作者始终加粗。共同一作身份按本人提供的信息标注，QiYao-M 标记 Hanyin Cheng 与 Linfeng Wang；BITS 标记 Kangjia Yan、Linfeng Wang 与 Tianen Shen。

论文元数据来源：[QiYao-I](https://arxiv.org/abs/2610.06936)、[QiYao-M](https://arxiv.org/abs/2609.34842)、[BITS](https://arxiv.org/abs/2609.33303)、[UVTD 作者主页](https://cie.shmtu.edu.cn/2025/0302/c6367a241960/page.htm)。UVTD 链接保留用户提供的 IEEE 页面。

## 实习、联系方式和图标

- 实习在 `content.js` 的 `experience` 中维护，`logo` 为 `nio.png`；`period` 可填写起止时间，留空则隐藏。
- 邮箱、微信、Scholar、GitHub 和 CV 在 `profile` 中维护。当前简历文件名为 `汪琳丰 华东师范大学.pdf`（中间为空格）。
- 网站小图标在 `index.html` 的 `rel="icon"` 中配置，当前使用实际文件 `tu.jpg`。

## About Me 富文本维护

`bio` 中每段可写成文本片段数组；普通文字使用字符串，链接使用 `{ "text": "显示文字", "url": "链接" }`，加粗使用 `{ "text": "文字", "bold": true }`。`researchIntro` 使用相同格式；研究方向在 `interests` 中维护，相关论文链接填写在每个方向的 `links` 数组。

论文配图桌面默认宽度已调整至 280px，中等宽度为 220px，小屏手机使用单栏大图，保持原始比例。

## 中英文切换

导航右侧的「中文 / English」按钮切换语言并记住本机偏好，首次访问默认英文。`content.js` 主体维护英文，`locales.zh` 维护对应中文；头像、论文标题、作者、联系方式和资源路径共用。论文中文简介位于 `locales.zh.paperDescriptions`，顺序与 `papers` 一致。新增或调整英文内容时，请同步维护中文版本。
