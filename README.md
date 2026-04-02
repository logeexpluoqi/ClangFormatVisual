# ClangFormatVisual

一个可直接在浏览器打开的静态网页工具，用于可视化配置标准 `clang-format` 选项，并导出 `.clang-format` 文件。

当前版本的目标是：

- 只保留标准 `clang-format` 配置项
- 所有界面说明使用中文
- 左侧分类配置，右侧固定实时预览
- 仅导出已修改项，便于生成简洁的 `.clang-format`

## 使用方式

1. 直接用浏览器打开 [index.html](./index.html)。
2. 在左侧按类别调整标准 `clang-format` 配置项。
3. 右侧预览区会实时刷新对应的效果片段。
4. 点击“导出 .clang-format”下载配置文件，或点击“复制 YAML”复制生成内容。
5. 使用搜索和“仅看已修改”可以快速定位目标字段。

## 文件结构

- [index.html](./index.html): 页面结构
- [styles.css](./styles.css): 苹果风格视觉样式与响应式布局
- [app.js](./app.js): 标准 clang-format 字段分组、实时预览、搜索过滤与 YAML 导出逻辑
- [clang-format-options-data.js](./clang-format-options-data.js): 从 LLVM 文档抽取出的完整配置元数据
- [scripts/generate-options-data.js](./scripts/generate-options-data.js): 重新生成完整配置元数据的脚本
