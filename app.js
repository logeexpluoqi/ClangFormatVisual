const GROUPS = [
  ["foundation", "基础风格", "基础样式、列宽、短语句与整体格式策略。"],
  ["indent", "缩进", "缩进宽度、续行缩进、命名空间与 case 的缩进。"],
  ["spacing", "空格与对齐", "空格规则、指针/引用位置以及连续对齐。"],
  ["braces", "换行与花括号", "花括号风格、块结构与定义块间距。"],
  ["include", "头文件与导入", "include、using、main include 与排序策略。"],
  ["comments", "注释与空行", "注释回流、空行保持和注释相关规则。"],
  ["language", "语言与特殊场景", "语言相关、宏、requires、概念与特殊语法配置。"],
  ["advanced", "高级对象配置", "支持多行 YAML 片段的复杂配置项。"],
  ["deprecated", "兼容与弃用", "保留旧字段，便于兼容历史项目。"],
];

const DEFAULTS = {
  BasedOnStyle: "LLVM",
  ColumnLimit: 100,
  IndentWidth: 4,
  ContinuationIndentWidth: 4,
  TabWidth: 4,
  UseTab: "Never",
  BreakBeforeBraces: "Attach",
  PointerAlignment: "Left",
  ReferenceAlignment: "Pointer",
  NamespaceIndentation: "All",
  SpaceBeforeParens: "ControlStatements",
  IncludeBlocks: "Preserve",
  ReflowComments: "Always",
  AllowShortIfStatementsOnASingleLine: "Never",
  AllowShortFunctionsOnASingleLine: "InlineOnly",
  AlignConsecutiveAssignments: "Consecutive",
  AlignAfterOpenBracket: "Align",
  CompactNamespaces: false,
  IndentCaseLabels: true,
  SortIncludes: "CaseInsensitive",
  SeparateDefinitionBlocks: "Leave",
};

const ENUMS = {
  BasedOnStyle: ["LLVM", "Google", "Chromium", "Mozilla", "WebKit", "Microsoft", "GNU", "InheritParentConfig"],
  AlignArrayOfStructures: ["Left", "Right", "None"],
  AlignAfterOpenBracket: ["Align", "DontAlign", "AlwaysBreak", "BlockIndent"],
  AlignEscapedNewlines: ["DontAlign", "Left", "LeftWithLastLine", "Right"],
  AlignOperands: ["DontAlign", "Align", "AlignAfterOperator"],
  AllowBreakBeforeNoexceptSpecifier: ["Never", "OnlyWithParen", "Always"],
  AllowShortBlocksOnASingleLine: ["Never", "Empty", "Always"],
  AllowShortFunctionsOnASingleLine: ["None", "InlineOnly", "Inline", "Empty", "All"],
  AllowShortIfStatementsOnASingleLine: ["Never", "WithoutElse", "OnlyFirstIf", "AllIfsAndElse"],
  AllowShortLambdasOnASingleLine: ["None", "Empty", "Inline", "All"],
  AllowShortRecordOnASingleLine: ["Never", "EmptyAndAttached", "Empty", "Always"],
  AlwaysBreakAfterDefinitionReturnType: ["None", "All", "TopLevel"],

  BitFieldColonSpacing: ["Both", "None", "Before", "After"],
  BreakAfterAttributes: ["Always", "Leave", "LeaveAll", "Never"],
  BreakAfterReturnType: ["None", "Automatic", "ExceptShortType", "All", "TopLevel", "AllDefinitions", "TopLevelDefinitions"],
  BreakBeforeBinaryOperators: ["None", "NonAssignment", "All"],
  BreakBeforeBraces: ["Attach", "Linux", "Mozilla", "Stroustrup", "Allman", "Whitesmiths", "GNU", "WebKit", "Custom"],
  BreakBeforeConceptDeclarations: ["Never", "Allowed", "Always"],
  BreakBeforeInlineASMColon: ["Never", "OnlyMultiline", "Always"],
  BreakConstructorInitializers: ["BeforeColon", "BeforeComma", "AfterColon", "AfterComma"],
  BreakInheritanceList: ["BeforeColon", "BeforeComma", "AfterColon", "AfterComma"],
  BreakTemplateDeclarations: ["Leave", "No", "MultiLine", "Yes"],
  Cpp11BracedListStyle: ["Block", "FunctionCall", "AlignFirstComment"],
  EmptyLineAfterAccessModifier: ["Never", "Leave", "Always"],
  EmptyLineBeforeAccessModifier: ["Never", "Leave", "LogicalBlock", "Always"],
  EnumTrailingComma: ["Leave", "Insert", "Remove"],
  IncludeBlocks: ["Preserve", "Merge", "Regroup"],
  IndentExternBlock: ["AfterExternBlock", "NoIndent", "Indent"],
  IndentGotoLabels: ["NoIndent", "OuterIndent", "InnerIndent", "HalfIndent"],
  IndentPPDirectives: ["None", "AfterHash", "BeforeHash", "Leave"],
  InsertTrailingCommas: ["None", "Wrapped"],
  JavaScriptQuotes: ["Leave", "Single", "Double"],
  LambdaBodyIndentation: ["Signature", "OuterScope"],
  Language: ["None", "C", "Cpp", "CSharp", "Java", "JavaScript", "Json", "ObjC", "Proto", "TableGen", "TextProto", "Verilog"],
  LineEnding: ["LF", "CRLF", "DeriveLF", "DeriveCRLF"],
  MainIncludeChar: ["Quote", "AngleBracket", "Any"],
  NamespaceIndentation: ["None", "Inner", "All"],
  ObjCBinPackProtocolList: ["Auto", "Always", "Never"],
  PackConstructorInitializers: ["Never", "BinPack", "CurrentLine", "NextLine", "NextLineOnly"],
  PointerAlignment: ["Left", "Right", "Middle"],
  QualifierAlignment: ["Leave", "Left", "Right", "Custom"],
  ReferenceAlignment: ["Pointer", "Left", "Right", "Middle"],
  ReflowComments: ["Never", "IndentOnly", "Always"],
  RemoveParentheses: ["Leave", "MultipleParentheses", "ReturnStatement"],
  RequiresClausePosition: ["OwnLine", "OwnLineWithBrace", "WithPreceding", "WithFollowing", "SingleLine"],
  RequiresExpressionIndentation: ["OuterScope", "Keyword"],
  SeparateDefinitionBlocks: ["Leave", "Always", "Never"],
  SortJavaStaticImport: ["Before", "After"],
  SortUsingDeclarations: ["Never", "Lexicographic", "LexicographicNumeric"],
  SortIncludes: ["CaseInsensitive", "CaseSensitive", "Never"],
  SpaceAroundPointerQualifiers: ["Default", "Before", "After", "Both"],
  SpaceBeforeParens: ["Never", "ControlStatements", "ControlStatementsExceptControlMacros", "NonEmptyParentheses", "Always", "Custom"],
  SpaceInEmptyBraces: ["Always", "Block", "Never"],
  SpacesInAngles: ["Never", "Always", "Leave"],
  SpacesInParens: ["Never", "Custom"],
  Standard: ["c++03", "c++11", "c++14", "c++17", "c++20", "Latest", "Auto"],
  TableGenBreakInsideDAGArg: ["DontBreak", "BreakElements", "BreakAll"],
  UseTab: ["Never", "ForIndentation", "ForContinuationAndIndentation", "AlignWithSpaces", "Always"],
  WrapNamespaceBodyWithEmptyLines: ["Never", "Always", "Leave"],
};

const COMPLEX_TYPES = new Set([
  "AlignConsecutiveStyle",
  "BreakBinaryOperationsOptions",

  "IntegerLiteralSeparatorStyle",
  "KeepEmptyLinesStyle",
  "NumericLiteralCaseStyle",
  "ShortCaseStatementsAlignmentStyle",
  "SortIncludesOptions",
  "SpacesInLineComment",

  "SpacesInParensCustom",
  "TrailingCommentsAlignmentStyle",
]);

const LIST_TYPE_PATTERN = /^List of /;

const MANUAL_DESC = {
  BasedOnStyle: "指定当前配置继承自哪一种内置风格，未单独设置的字段会从这里继承。",
  AttributeMacros: "列出应按属性或限定符理解的宏名称，避免它们被当作普通标识符解析。",
  ColumnLimit: "控制目标列宽，注释回流、换行决策和部分长表达式布局都会受它影响。",
  IndentWidth: "设置基础缩进宽度，影响代码块、类成员和普通语句的层级缩进。",
  ContinuationIndentWidth: "设置续行缩进宽度，影响长参数列表、链式调用和长表达式换行后的缩进。",
  TabWidth: "设置 Tab 在视觉上的宽度，用于混合 Tab/空格时的显示和对齐。",
  UseTab: "决定缩进时是否使用 Tab，以及 Tab 仅用于缩进还是也参与对齐。",
  BreakBeforeBraces: "控制函数、类、命名空间等结构中左花括号的位置。",
  PointerAlignment: "控制指针星号与类型名或变量名之间的贴合方式。",
  ReferenceAlignment: "控制引用符号 & 的对齐方式，可跟随指针规则或单独指定。",
  NamespaceIndentation: "控制命名空间主体是否缩进，以及只缩进内部命名空间还是全部缩进。",
  SpaceBeforeParens: "控制 if、for、while、函数定义等圆括号前是否保留空格。",
  IncludeBlocks: "控制多个 include 块是保留原块、合并，还是重新分组。",
  SortIncludes: "控制头文件排序行为。新版 clang-format 支持通过 YAML 对象细化排序策略。",
  ReflowComments: "控制长注释是否按照列宽自动回流整理。",
  CompactNamespaces: "控制嵌套命名空间是否压缩成 `namespace a::b` 的形式。",
  SeparateDefinitionBlocks: "控制类、函数、命名空间等定义块之间是否自动插入或移除空行。",
  AlignAfterOpenBracket: "控制函数参数、初始化列表等内容在开括号后是否水平对齐。",
  AlignConsecutiveAssignments: "控制连续赋值语句是否按等号对齐，也支持更细粒度的 YAML 对象写法。",
  AllowShortIfStatementsOnASingleLine: "控制短 if 是否允许压缩成单行，以及压缩到什么程度。",
  AllowShortFunctionsOnASingleLine: "控制短函数是否允许压缩成单行，以及压缩到什么程度。",
  ForEachMacros: "列出应按 foreach 语义解析的宏名称，避免它们被按普通函数调用排版。",
  IfMacros: "列出应按条件语句解析的宏名称，避免宏调用场景被错误缩进或换行。",
  IndentCaseLabels: "控制 switch 中的 case/default 标签是否再向内缩进一级。",
  IncludeCategories: "定义 include 分类与排序优先级，便于把系统头、项目头和第三方头分组整理。",
  JavaImportGroups: "定义 Java import 的前缀分组顺序，用于控制导入块的排列。",
  Macros: "声明具有展开规则的宏定义，帮助 clang-format 正确理解宏参数和表达式结构。",
  MacrosSkippedByRemoveParentheses: "列出在 `RemoveParentheses` 处理中应跳过的函数式宏，避免误改语义。",
  NamespaceMacros: "列出用于开启命名空间块的宏名称，使格式化器按命名空间结构处理其内容。",
  ObjCPropertyAttributeOrder: "定义 Objective-C 属性修饰符的输出顺序，让属性声明保持统一风格。",
  QualifierOrder: "自定义 `const`、`volatile` 等限定符的排列顺序，配合 `QualifierAlignment` 使用。",
  RawStringFormats: "定义原始字符串的语言识别和规范化规则，便于对嵌入代码块继续格式化。",
  SpacesInLineCommentPrefix: "控制行注释 `//` 后允许保留的最小和最大前缀空格数。",
  StatementAttributeLikeMacros: "列出位于语句前但应按属性看待的宏，避免它们扰乱语句格式识别。",
  StatementMacros: "列出应被当作完整语句处理的宏名称，避免分号和换行规则出错。",
  TableGenBreakingDAGArgOperators: "限定 TableGen DAG 参数中允许触发拆行的操作符集合。",
  TemplateNames: "列出应按模板名理解的标识符，帮助 clang-format 正确判断尖括号语义。",
  TypeNames: "列出应按类型名理解的标识符，减少复杂声明或宏场景中的误判。",
  TypenameMacros: "列出应按类型声明解析的宏名称，避免其被按函数调用方式排版。",
  VariableTemplates: "列出应按变量模板名理解的标识符，改善现代 C++ 模板代码的格式判断。",
  WhitespaceSensitiveMacros: "列出对空白敏感、不应被重新排版的宏，避免格式化破坏语义。",
};

const ENUM_HELP = {
  BasedOnStyle: {
    LLVM: "采用 LLVM 预设风格作为基础。",
    Google: "采用 Google C++ 风格作为基础。",
    Chromium: "采用 Chromium 风格作为基础。",
    Mozilla: "采用 Mozilla 风格作为基础。",
    WebKit: "采用 WebKit 风格作为基础。",
    Microsoft: "采用 Microsoft 风格作为基础。",
    GNU: "采用 GNU 风格作为基础。",
    InheritParentConfig: "在当前目录基础上继续继承上层配置。",
  },
  UseTab: {
    Never: "缩进和对齐都使用空格。",
    ForIndentation: "缩进用 Tab，对齐仍使用空格。",
    ForContinuationAndIndentation: "前导缩进和续行缩进优先使用 Tab，对齐细节再补空格。",
    AlignWithSpaces: "缩进可用 Tab，但额外对齐始终补空格。",
    Always: "缩进和对齐都允许使用 Tab。",
  },
  BreakBeforeBraces: {
    Attach: "左花括号紧跟在声明后。",
    Linux: "函数保持同行，其他结构可换行。",
    Mozilla: "更偏向 Mozilla 风格的花括号布局。",
    Stroustrup: "偏向 Stroustrup 风格的函数和控制语句布局。",
    Allman: "左花括号统一另起一行。",
    Whitesmiths: "左花括号另起一行并向内缩进。",
    GNU: "采用 GNU 风格的花括号位置。",
    WebKit: "采用 WebKit 风格的花括号位置。",
    Custom: "通过其他子项单独控制花括号包装规则。",
  },
  PointerAlignment: {
    Left: "星号贴近类型名。",
    Right: "星号贴近变量名。",
    Middle: "星号位于类型和变量之间。",
  },
  ReferenceAlignment: {
    Pointer: "引用符号跟随指针对齐规则。",
    Left: "引用符号贴近类型名。",
    Right: "引用符号贴近变量名。",
    Middle: "引用符号位于类型和变量之间。",
  },
  NamespaceIndentation: {
    None: "命名空间主体不额外缩进。",
    Inner: "只缩进内部命名空间。",
    All: "所有命名空间主体都缩进。",
  },
  IncludeBlocks: {
    Preserve: "保留原有 include 分组结构。",
    Merge: "尽量合并 include 块。",
    Regroup: "重新分组并排序 include 块。",
  },
  SpaceBeforeParens: {
    Never: "括号前不保留空格。",
    ControlStatements: "只在 if/for/while 等控制语句前保留空格。",
    ControlStatementsExceptControlMacros: "控制语句保留空格，但控制宏除外。",
    NonEmptyParentheses: "只在非空括号场景按规则处理空格。",
    Always: "所有括号前都保留空格。",
    Custom: "通过自定义子项控制不同场景的空格。",
  },
  AllowShortIfStatementsOnASingleLine: {
    Never: "短 if 不压成单行。",
    WithoutElse: "仅允许没有 else 的短 if 压成单行。",
    OnlyFirstIf: "只允许 if/else-if 链的首个 if 压成单行。",
    AllIfsAndElse: "允许整条 if/else 链尽量压成单行。",
  },
  AllowShortFunctionsOnASingleLine: {
    None: "短函数也保持多行。",
    InlineOnly: "只压缩类内联短函数。",
    Inline: "优先压缩内联短函数。",
    Empty: "只压缩空函数。",
    All: "所有足够短的函数都可压成单行。",
  },
  AllowShortLambdasOnASingleLine: {
    None: "lambda 保持多行。",
    Empty: "只压缩空 lambda。",
    Inline: "优先压缩内联参数中的短 lambda。",
    All: "所有足够短的 lambda 都可压成单行。",
  },
  AllowShortRecordOnASingleLine: {
    Never: "结构体或类声明保持多行。",
    EmptyAndAttached: "仅在花括号未换行时压缩空 record。",
    Empty: "只压缩空 record。",
    Always: "所有足够短的 record 都可压成单行。",
  },
  AllowShortBlocksOnASingleLine: {
    Never: "代码块保持多行。",
    Empty: "只压缩空代码块。",
    Always: "短代码块允许压成单行。",
  },
  SeparateDefinitionBlocks: {
    Leave: "保持原有定义块空行。",
    Always: "定义块之间强制插入空行。",
    Never: "定义块之间尽量移除多余空行。",
  },
  ReflowComments: {
    Never: "不主动回流长注释。",
    IndentOnly: "只整理缩进，不重排注释内容。",
    Always: "按列宽主动整理长注释。",
  },
  BreakTemplateDeclarations: {
    Leave: "保持模板声明与后续声明之间的现有换行。",
    No: "尽量不在模板声明后主动换行。",
    MultiLine: "仅当声明本身已多行时再拆开模板头。",
    Yes: "模板声明后统一换行。",
  },
  BreakBeforeConceptDeclarations: {
    Never: "模板头与 concept 声明尽量保持同一行。",
    Allowed: "需要时允许把 concept 放到下一行。",
    Always: "concept 声明前总是换行。",
  },
  BreakBeforeInlineASMColon: {
    Never: "内联 asm 的冒号前不换行。",
    OnlyMultiline: "仅多行 asm 语句在冒号前换行。",
    Always: "内联 asm 的冒号前统一换行。",
  },
  AllowBreakBeforeNoexceptSpecifier: {
    Never: "noexcept 前不换行。",
    OnlyWithParen: "仅带条件的 `noexcept(...)` 允许前置换行。",
    Always: "noexcept 前始终允许换行。",
  },
  Language: {
    None: "不强制指定语言，由 clang-format 自动判断。",
    C: "按 C 语言规则格式化。",
    Cpp: "按 C++ 语言规则格式化。",
    CSharp: "按 C# 语言规则格式化。",
    Java: "按 Java 语言规则格式化。",
    JavaScript: "按 JavaScript 规则格式化。",
    Json: "按 JSON 规则格式化。",
    ObjC: "按 Objective-C 规则格式化。",
    Proto: "按 Protocol Buffers 规则格式化。",
    TableGen: "按 LLVM TableGen 规则格式化。",
    TextProto: "按 TextProto 规则格式化。",
    Verilog: "按 Verilog/SystemVerilog 规则格式化。",
  },
  LineEnding: {
    LF: "统一使用 LF 换行。",
    CRLF: "统一使用 CRLF 换行。",
    DeriveLF: "优先根据输入内容推断，偏向 LF。",
    DeriveCRLF: "优先根据输入内容推断，偏向 CRLF。",
  },
  MainIncludeChar: {
    Quote: "主 include 倾向使用双引号判断。",
    AngleBracket: "主 include 倾向使用尖括号判断。",
    Any: "不区分引号或尖括号形式。",
  },
  Standard: {
    "c++03": "按 C++03 语法和规则处理。",
    "c++11": "按 C++11 语法和规则处理。",
    "c++14": "按 C++14 语法和规则处理。",
    "c++17": "按 C++17 语法和规则处理。",
    "c++20": "按 C++20 语法和规则处理。",
    Latest: "使用 clang-format 当前支持的最新语言标准。",
    Auto: "根据输入内容自动判断语言标准。",
  },
  IndentExternBlock: {
    AfterExternBlock: "保持与旧版 extern 块缩进行为兼容。",
    NoIndent: "extern 块体不额外缩进。",
    Indent: "extern 块体整体向内缩进。",
  },
  IndentGotoLabels: {
    NoIndent: "goto 标签不额外缩进。",
    OuterIndent: "goto 标签向外层缩进显示。",
    InnerIndent: "goto 标签向内缩进一级。",
    HalfIndent: "goto 标签使用半级缩进。",
  },
  IndentPPDirectives: {
    None: "预处理指令不做缩进。",
    AfterHash: "`#` 保持列首，后续内容再缩进。",
    BeforeHash: "整个预处理指令一起缩进。",
    Leave: "尽量保留原有预处理缩进。",
  },
  QualifierAlignment: {
    Leave: "保持限定符原有顺序。",
    Left: "限定符尽量靠近类型左侧。",
    Right: "限定符尽量靠近标识符右侧。",
    Custom: "按 `QualifierOrder` 自定义限定符顺序。",
  },
  SortJavaStaticImport: {
    Before: "静态 import 排在普通 import 前。",
    After: "静态 import 排在普通 import 后。",
  },
  SortUsingDeclarations: {
    Never: "不排序 using 声明。",
    Lexicographic: "按字典序排序 using 声明。",
    LexicographicNumeric: "按带数字感知的字典序排序 using 声明。",
  },
};

const COMMON_ENUM_HELP = {
  Always: "始终应用这条规则。",
  Never: "不主动应用这条规则。",
  Leave: "尽量保留现有写法，不主动重排。",
  None: "关闭该类处理或不额外施加规则。",
  All: "对该场景的所有匹配内容都生效。",
  Left: "靠左侧排布。",
  Right: "靠右侧排布。",
  Middle: "放在中间位置。",
  Before: "放在目标内容之前处理。",
  After: "放在目标内容之后处理。",
  Both: "前后两侧同时处理。",
  Preserve: "保留原始结构，不主动重组。",
  Merge: "尽量合并成更紧凑的结构。",
  Regroup: "重新分组后再处理。",
  Custom: "通过对应子配置项做更细粒度控制。",
  Auto: "根据上下文自动选择。",
  Automatic: "根据行长和上下文自动决定。",
  Single: "统一使用单引号风格。",
  Double: "统一使用双引号风格。",
  Wrapped: "仅在已换行的场景中生效。",
  Quote: "按双引号形式处理。",
  AngleBracket: "按尖括号形式处理。",
  Any: "两种形式都接受，不额外限制。",
  Indent: "对目标内容增加一级缩进。",
  NoIndent: "不增加额外缩进。",
  Default: "采用默认处理方式。",
  Pointer: "跟随指针相关规则处理。",
  Signature: "以声明签名所在层级为基准处理。",
  OuterScope: "以外层作用域为基准处理。",
  OwnLine: "单独放到新的一行。",
  OwnLineWithBrace: "单独起一行，并和后续大括号联动。",
  WithPreceding: "尽量跟前一部分保持同一行。",
  WithFollowing: "尽量跟后一部分保持同一行。",
  SingleLine: "尽量压成单行。",
  BinPack: "尽量把多个元素压缩在更少的行里。",
  OnePerLine: "元素尽量按一行一个排布。",
  AlwaysOnePerLine: "始终一行一个排布。",
  CurrentLine: "优先保留在当前行继续排布。",
  NextLine: "优先换到下一行继续排布。",
  NextLineOnly: "只允许整体换到下一行排布。",
  DontAlign: "不做额外列对齐。",
  Align: "按列对齐。",
  AlignAfterOperator: "在操作符换行场景中优先对齐操作数主体。",
  LeftWithLastLine: "向左对齐，并参考最后一行位置。",
  LF: "使用 LF 换行。",
  CRLF: "使用 CRLF 换行。",
  DeriveLF: "根据输入推断，偏向 LF。",
  DeriveCRLF: "根据输入推断，偏向 CRLF。",
  LeaveAll: "尽量保持现有换行与分布，不主动折叠。",
  ExceptShortType: "短返回类型尽量保持同一行，其他情况可换行。",
  TopLevel: "只对顶层声明或定义重点生效。",
  AllDefinitions: "对所有函数定义都应用该规则。",
  TopLevelDefinitions: "只对顶层函数定义应用该规则。",
  NonAssignment: "优先作用于非赋值类二元操作符。",
  Allowed: "允许在需要时启用，但不强制。",
  OnlyMultiline: "仅在多行场景中启用。",
  OnlyWithParen: "仅在带括号的形式中启用。",
  BeforeColon: "换行点放在冒号前。",
  BeforeComma: "换行点放在逗号前。",
  AfterColon: "换行点放在冒号后。",
  AfterComma: "换行点放在逗号后。",
  Block: "更偏向块状、分行更明显的排版。",
  FunctionCall: "按函数调用风格处理这类列表。",
  AlignFirstComment: "优先与首个注释位置对齐。",
  LogicalBlock: "按逻辑代码块决定是否保留空行。",
  Insert: "自动插入该类标记或符号。",
  Remove: "自动移除该类标记或符号。",
  AfterHash: "在 `#` 之后再做内容缩进。",
  BeforeHash: "连同 `#` 一起整体缩进。",
  Keyword: "以 `requires` 关键字所在列作为缩进基准。",
  MultipleParentheses: "只移除多层重复括号，保留必要括号。",
  ReturnStatement: "重点处理 return 语句中的冗余括号。",
  InlineOnly: "只在内联场景中应用。",
  Inline: "优先在内联或紧凑场景中应用。",
  Empty: "仅对空内容场景应用。",
  EmptyAndAttached: "仅在内容为空且大括号未拆行时应用。",
  WithoutElse: "仅对没有 else 的 if 生效。",
  OnlyFirstIf: "只优先处理首个 if 分支。",
  AllIfsAndElse: "整条 if / else 链都尽量采用该风格。",
  DontBreak: "尽量不在该处拆行。",
  BreakElements: "按元素边界拆行。",
  BreakAll: "尽量全面拆行以提高可读性。",
  Lexicographic: "按普通字典序排序。",
  LexicographicNumeric: "按支持数字比较的字典序排序。",
  ControlStatements: "主要作用于控制语句。",
  ControlStatementsExceptControlMacros: "控制语句应用，控制宏除外。",
  NonEmptyParentheses: "主要作用于非空括号。",
};

const metas = window.CLANG_FORMAT_OPTIONS || [];
const state = {};
const cards = new Map();
const sections = new Map();
const navs = new Map();
const tabs = new Map();
let activeGroup = "foundation";

const $ = (s) => document.querySelector(s);
const searchInput = $("#searchInput");
const changedOnlyToggle = $("#changedOnlyToggle");
const deprecatedToggle = $("#deprecatedToggle");
const groupNav = $("#groupNav");
const groupContainer = $("#groupContainer");
const changedCount = $("#changedCount");
const visibleCount = $("#visibleCount");
const previewTabs = $("#previewTabs");
const previewTitle = $("#previewTitle");
const previewDescription = $("#previewDescription");
const previewCode = $("#previewCode");
const previewStatus = $("#previewStatus");
const previewMeta = $("#previewMeta");
const yamlOutput = $("#yamlOutput");
const yamlMeta = $("#yamlMeta");
const copyButton = $("#copyButton");
const downloadButton = $("#downloadButton");
const importButton = $("#importButton");
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = ".clang-format";
fileInput.style.display = "none";
const resetButton = $("#resetButton");

function inferDescription(meta) {
  const name = meta.name;
  if (/deprecated/i.test(meta.type) || meta.deprecated) return "兼容旧版本配置，建议优先使用新的替代字段。";
  if (LIST_TYPE_PATTERN.test(meta.type)) return "这是列表型配置项，支持用多行 YAML 列表填写多个规则或名称。";
  if (/^AlignArrayOfStructures$/.test(name)) return "控制结构体数组初始化时是否按列对齐，便于快速比较各列字段。";
  if (/^AllowShort/.test(name)) return "控制对应短语句或短结构是否压缩为单行。";
  if (/^AlignEscapedNewlines/.test(name)) return "控制宏换行反斜杠在多行定义中的对齐位置。";
  if (/^AlignOperands/.test(name)) return "控制二元或三元表达式换行后，操作数是否沿同一列对齐。";
  if (/^AlignTrailingComments/.test(name)) return "控制行尾注释是否对齐，以及跨空行时如何延续对齐。";
  if (/^Align/.test(name)) return "控制对应语法结构是否按列对齐。";
  if (/BinPack/.test(name)) return "控制参数、初始化项或协议列表是尽量压紧排列，还是拆成更清晰的多行布局。";
  if (/Indent|TabWidth|Continuation/.test(name)) return "控制对应代码结构的缩进宽度或缩进方式。";
  if (/Pointer|Reference|Qualifier/.test(name)) return "控制指针、引用或限定符在代码中的贴靠位置。";
  if (/Space|Spaces/.test(name)) return "控制对应语法位置的空格保留方式。";
  if (/ReturnType/.test(name)) return "控制返回类型与函数名之间在长声明场景下是否换行。";
  if (/TemplateDeclarations|ConceptDeclarations|Noexcept|BinaryOperators|InheritanceList/.test(name)) return "控制模板、概念、运算符或继承列表等结构在长行场景下的换行方式。";
  if (/Break|Brace|Braces/.test(name)) return "控制换行位置以及花括号布局方式。";
  if (/Include|Import|Using|MainInclude/.test(name)) return "控制头文件、导入或 using 声明的分组与排序方式。";
  if (/Comment|EmptyLine/.test(name)) return "控制注释整理、空行保留或行尾注释的排版方式。";
  if (/Namespace/.test(name)) return "控制命名空间相关的缩进、压缩或空行布局。";
  if (/LineEnding/.test(name)) return "控制输出文件采用哪一种换行符风格。";
  if (/Language|Standard/.test(name)) return "控制目标语言或语言标准，从而影响语法识别和格式规则。";
  if (/Requires/.test(name)) return "控制 requires 子句或 requires 表达式的换行与缩进位置。";
  if (/Parentheses|BracedList/.test(name)) return "控制括号、初始化列表等结构在格式化时的排版策略。";
  return `控制 ${name} 在格式化时的处理方式。`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlightCpp(code) {
  const keywords = /\b(namespace|class|struct|template|typename|requires|if|switch|case|default|return|inline|auto|const|void|bool|int|true|false|break)\b/g;
  const types = /\b(std::string|FormatterPreview)\b/g;
  const numbers = /\b\d+\b/g;

  return code
    .split("\n")
    .map((line) => {
      if (/^\s*#/.test(line)) {
        return `<span class="token-preprocessor">${escapeHtml(line)}</span>`;
      }

      const commentIndex = line.indexOf("//");
      let codePart = commentIndex >= 0 ? line.slice(0, commentIndex) : line;
      const commentPart = commentIndex >= 0 ? line.slice(commentIndex) : "";

      let html = escapeHtml(codePart);
      html = html.replace(/"([^"\\]|\\.)*"/g, (match) => `<span class="token-string">${match}</span>`);
      html = html.replace(keywords, '<span class="token-keyword">$1</span>');
      html = html.replace(types, '<span class="token-type">$1</span>');
      html = html.replace(numbers, '<span class="token-number">$&</span>');
      html = html.replace(/\b(buildPreview|render|score|apply|format)\b(?=\s*\()/g, '<span class="token-function">$1</span>');

      if (commentPart) {
        html += `<span class="token-comment">${escapeHtml(commentPart)}</span>`;
      }
      return html;
    })
    .join("\n");
}

function versionLabel(meta) {
  if (meta.deprecated) return "兼容旧字段";
  return meta.version ? `clang-format ${meta.version}` : "标准配置项";
}

function typeLabel(meta, control) {
  if (meta.deprecated || meta.type === "deprecated") return "弃用项";
  if (LIST_TYPE_PATTERN.test(meta.type)) return "列表";
  if (control === "checkbox") return "布尔";
  if (control === "number") return "数值";
  if (control === "textarea") return "YAML";
  if (control === "select") return "枚举";
  return "文本";
}

function desc(meta) {
  return MANUAL_DESC[meta.name] || inferDescription(meta);
}

function enumHelp(meta, value) {
  if (value === "") return "未显式设置时，将回退到 clang-format 的默认行为或继承风格。";
  const map = ENUM_HELP[meta.name] || ENUM_HELP[meta.type];
  if (map && map[value]) return map[value];
  if (COMMON_ENUM_HELP[value]) return COMMON_ENUM_HELP[value];
  return `当前取值为 ${value}，可结合右侧预览和导出 YAML 一起确认效果。`;
}

function controlHint(meta, control, value = "") {
  if (control === "checkbox") return "勾选表示 `true`，取消勾选表示 `false`。";
  if (control === "number") return "输入数值，留空后可通过“恢复默认”回到初始状态。";
  if (LIST_TYPE_PATTERN.test(meta.type)) return "支持输入 YAML 列表，例如每行以 `- ` 开头填写一个项。";
  if (control === "textarea") return "输入标准 YAML 片段，用于复杂对象型配置。";
  if (control === "select") return enumHelp(meta, value);
  return "输入字段值，留空表示不显式导出该项。";
}

function groupOf(meta) {
  if (meta.deprecated || meta.type === "deprecated") return "deprecated";
  if (/Include|Import|Using|MainInclude|JavaImportGroups/.test(meta.name)) return "include";
  if (/Comment|EmptyLine|KeepEmptyLines|ReflowComments|TrailingComments|SpacesInLineComment/.test(meta.name)) return "comments";
  if (/Indent|Tab|Continuation|NamespaceIndentation|AccessModifierOffset|PPDirective|GotoLabel/.test(meta.name)) return "indent";
  if (/Pointer|Reference|Space|Spaces|Align|Qualifier|Pack|Operand|QualifierOrder/.test(meta.name)) return "spacing";
  if (/Brace|Braces|Break|CompactNamespaces|SeparateDefinitionBlocks|WrapNamespaceBodyWithEmptyLines/.test(meta.name)) return "braces";
  if (/Language|Standard|JavaScript|ObjC|Java|Proto|Verilog|TableGen|Requires|Concept|Macro|LineEnding|TemplateNames|TypeNames|VariableTemplates|RawStringFormats/.test(meta.name)) return "language";
  if (COMPLEX_TYPES.has(meta.type)) return "advanced";
  return "foundation";
}

function defaultValue(meta) {
  if (meta.name in DEFAULTS) return DEFAULTS[meta.name];
  if (meta.type === "Boolean") return false;
  return "";
}

function controlOf(meta) {
  if (meta.type === "Boolean") return ["checkbox"];
  if (meta.type === "Integer" || meta.type === "Unsigned") return ["number"];
  if (LIST_TYPE_PATTERN.test(meta.type)) return ["textarea"];
  if (COMPLEX_TYPES.has(meta.type)) return ["textarea"];
  const options = ENUMS[meta.name] || ENUMS[meta.type];
  if (options) return ["select", options];
  return ["text"];
}

function initState() {
  metas.forEach((meta) => {
    state[meta.name] = { value: defaultValue(meta), defaultValue: defaultValue(meta), touched: false, group: groupOf(meta) };
  });
}

function tpl(control) {
  if (control === "checkbox") return $("#checkboxTemplate").content.cloneNode(true).firstElementChild;
  if (control === "number") return $("#numberTemplate").content.cloneNode(true).firstElementChild;
  if (control === "textarea") return $("#textareaTemplate").content.cloneNode(true).firstElementChild;
  return $("#selectTemplate").content.cloneNode(true).firstElementChild;
}

function isDefault(name) {
  return JSON.stringify(state[name].value) === JSON.stringify(state[name].defaultValue);
}

function setActive(group) {
  activeGroup = group;
  navs.forEach((el, id) => el.classList.toggle("is-active", id === group));
  tabs.forEach((el, id) => el.classList.toggle("is-active", id === group));
  renderPreview();
}

function buildCard(meta) {
  const [control, options] = controlOf(meta);
  const card = tpl(control);
  const badge = card.querySelector(".option-badge");
  card.querySelector(".option-name").textContent = meta.name;
  card.querySelector(".option-subtitle").textContent = versionLabel(meta);
  card.querySelector(".option-description").textContent = desc(meta);
  badge.textContent = typeLabel(meta, control);
  badge.title = meta.type;
  const hintEl = card.querySelector(".option-hint");
  hintEl.textContent = controlHint(meta, control, String(state[meta.name].value ?? ""));
  if (meta.deprecated) card.classList.add("is-deprecated");

  let input = control === "checkbox" ? card.querySelector(".option-checkbox") : card.querySelector(".option-input");
  if (control === "select") {
    if (state[meta.name].defaultValue === "") {
      const emptyOpt = document.createElement("option");
      emptyOpt.value = "";
      emptyOpt.textContent = "未设置";
      input.append(emptyOpt);
    }
    options.forEach((value) => {
      const opt = document.createElement("option");
      opt.value = value;
      opt.textContent = value;
      opt.title = enumHelp(meta, value);
      input.append(opt);
    });
  } else if (control === "text") {
    input.outerHTML = `<input class="option-input" type="text">`;
    input = card.querySelector(".option-input");
  } else if (control === "number") {
    input.step = "1";
  }

  const write = (value) => {
    if (control === "checkbox") input.checked = Boolean(value);
    else input.value = value;
    if (control === "select") hintEl.textContent = controlHint(meta, control, String(value ?? ""));
  };
  const read = () => control === "checkbox" ? input.checked : control === "number" ? (input.value === "" ? "" : Number(input.value)) : input.value;
  write(state[meta.name].value);

  const sync = () => {
    state[meta.name].value = read();
    state[meta.name].touched = !isDefault(meta.name);
    card.classList.toggle("is-touched", state[meta.name].touched);
    hintEl.textContent = controlHint(meta, control, String(state[meta.name].value ?? ""));
    setActive(state[meta.name].group);
    renderAll();
  };

  input.addEventListener("input", sync);
  if (control === "select") input.addEventListener("change", sync);
  input.addEventListener("focus", () => setActive(state[meta.name].group));
  card.addEventListener("click", () => setActive(state[meta.name].group));
  card.querySelector(".option-reset").addEventListener("click", (event) => {
    event.preventDefault();
    state[meta.name].value = state[meta.name].defaultValue;
    state[meta.name].touched = false;
    write(state[meta.name].defaultValue);
    card.classList.remove("is-touched");
    renderAll();
  });

  cards.set(meta.name, { card, input, control });
  return card;
}

function buildNavAndTabs() {
  GROUPS.forEach(([id, title]) => {
    const nav = document.createElement("button");
    nav.type = "button";
    nav.textContent = title;
    nav.addEventListener("click", () => {
      setActive(id);
      document.querySelector(`#group-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    groupNav.append(nav);
    navs.set(id, nav);

    if (id !== "deprecated") {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.textContent = title;
      tab.addEventListener("click", () => setActive(id));
      previewTabs.append(tab);
      tabs.set(id, tab);
    }
  });
}

function buildSections() {
  GROUPS.forEach(([id, title, description]) => {
    const section = document.createElement("section");
    section.className = "group-section";
    section.id = `group-${id}`;
    section.innerHTML = `
      <div class="group-head">
        <div>
          <p class="panel-kicker">${title}</p>
          <h2>${title}</h2>
          <p>${description}</p>
        </div>
        <span class="group-chip">0 项</span>
      </div>
      <div class="group-grid"></div>
    `;
    const grid = section.querySelector(".group-grid");
    metas
      .filter((meta) => state[meta.name].group === id)
      .sort((a, b) => (DEFAULTS[a.name] ? -1 : 0) - (DEFAULTS[b.name] ? -1 : 0) || a.name.localeCompare(b.name))
      .forEach((meta) => grid.append(buildCard(meta)));
    groupContainer.append(section);
    sections.set(id, { section, grid, chip: section.querySelector(".group-chip") });
  });
}

function current(name) {
  return state[name].touched ? state[name].value : state[name].defaultValue;
}

function bool(name, fallback = false) {
  const value = current(name);
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    if (/^(false|never|none)$/i.test(value.trim())) return false;
    if (/enabled:\s*false/i.test(value)) return false;
    if (value.trim() === "") return fallback;
    return true;
  }
  return fallback;
}

function num(name, fallback = 0) {
  const value = current(name);
  return value === "" || Number.isNaN(Number(value)) ? fallback : Number(value);
}

function str(name, fallback = "") {
  const value = current(name);
  return value === "" ? fallback : String(value);
}

function indent(level) {
  return /Always|ForIndentation/.test(str("UseTab", "Never")) ? "\t".repeat(level) : " ".repeat(level * num("IndentWidth", 4));
}

function cont(level) {
  return /Always/.test(str("UseTab", "Never")) ? "\t".repeat(level) : " ".repeat(level * num("ContinuationIndentWidth", 4));
}

function spaceBefore(kind) {
  const value = str("SpaceBeforeParens", "ControlStatements");
  if (value === "Always") return " ";
  if (value === "Never" || value === "NonEmptyParentheses") return "";
  return kind === "control" ? " " : "";
}

function pointerToken() {
  const value = str("PointerAlignment", "Left");
  return value === "Right" ? "std::string *name" : value === "Middle" ? "std::string * name" : "std::string* name";
}

function referenceToken() {
  const value = str("ReferenceAlignment", "Pointer");
  const mode = value === "Pointer" ? str("PointerAlignment", "Left") : value;
  return mode === "Right" ? "const std::string &label" : mode === "Middle" ? "const std::string & label" : "const std::string& label";
}

function commentLines(text, level) {
  if (/never|false/i.test(str("ReflowComments", "Always"))) return [`${indent(level)}// ${text}`];
  const limit = Math.max(24, num("ColumnLimit", 100) - indent(level).length - 3);
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";
  words.forEach((word) => {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (candidate.length > limit) {
      lines.push(`${indent(level)}// ${currentLine}`);
      currentLine = word;
    } else currentLine = candidate;
  });
  if (currentLine) lines.push(`${indent(level)}// ${currentLine}`);
  return lines;
}

function includeLines() {
  const base = ["#include <algorithm>", "#include <string>", "#include <vector>"];
  const local = ['#include "formatter_preview.h"'];
  const ordered = bool("SortIncludes", true) ? [...base].sort() : [...base];
  return str("IncludeBlocks", "Preserve") === "Merge" ? [...ordered, ...local] : [...ordered, "", ...local];
}

function previewScene() {
  if (activeGroup === "indent") {
    const ns = str("NamespaceIndentation", "All");
    const outer = ns === "All" ? 1 : 0;
    const inner = ns === "None" ? 0 : ns === "Inner" ? 1 : 2;
    const indentWidth = num("IndentWidth", 4);
    const caseLabelsIndented = bool("IndentCaseLabels", true);
    const caseBlocksIndented = bool("IndentCaseBlocks", false);
    const accessModifiersIndented = bool("IndentAccessModifiers", false);
    const constructorInitializerIndentWidth = num("ConstructorInitializerIndentWidth", 4);
    const continuationIndentWidth = num("ContinuationIndentWidth", 4);
    const bracedInitializerIndentWidth = num("BracedInitializerIndentWidth", -1);
    const lambdaBodyIndentation = str("LambdaBodyIndentation", "Signature");
    
    // 计算switch语句的缩进级别
    const switchIndent = inner + 3;
    const caseLabelIndent = caseLabelsIndented ? switchIndent + 1 : switchIndent;
    const caseBlockIndent = caseBlocksIndented ? caseLabelIndent + 1 : caseLabelIndent;
    const accessModifierIndent = accessModifiersIndented ? inner + 2 : inner + 1;
    
    // 计算lambda的缩进级别
    const lambdaIndent = lambdaBodyIndentation === "OuterScope" ? inner + 2 : inner + 3;
    
    return {
      title: "缩进预览",
      description: "展示命名空间、续行缩进、switch/case、类成员访问修饰符、构造函数初始化列表、lambda体和IndentWidth的缩进差异。",
      code: [
        "namespace demo",
        "{",
        `${indent(outer)}namespace detail`,
        `${indent(outer)}{`,
        `${indent(inner)}class Formatter`,
        `${indent(inner)}{`,
        `${indent(accessModifierIndent)}public:`,
        `${indent(inner + 2)}Formatter(int m, const std::string& n)`,
        `${indent(inner + 2)}    : mode(m)`,
        `${indent(inner + 2)}    , name(n) {}`,
        `${indent(inner + 2)}void render()`,
        `${indent(inner + 2)}{`,
        `${indent(inner + 3)}auto payload = buildPreview(`,
        `${indent(inner + 3)}${cont(1)}firstArgument,`,
        `${indent(inner + 3)}${cont(1)}secondArgument,`,
        `${indent(inner + 3)}${cont(1)}thirdArgument);`,
        `${indent(inner + 3)}switch${spaceBefore('control')}(mode) {`,
        `${indent(caseLabelIndent)}case 0:`,
        `${indent(caseBlockIndent)}processFirstCase();`,
        `${indent(caseBlockIndent)}break;`,
        `${indent(caseLabelIndent)}case 1:`,
        `${indent(caseBlockIndent)}processSecondCase();`,
        `${indent(caseBlockIndent)}break;`,
        `${indent(caseLabelIndent)}default:`,
        `${indent(caseBlockIndent)}processDefaultCase();`,
        `${indent(caseBlockIndent)}break;`,
        `${indent(inner + 3)}}`,
        `${indent(inner + 3)}auto lambda = [this]() {`,
        `${indent(lambdaIndent)}return mode + name.length();`,
        `${indent(inner + 3)}};`,
        `${indent(inner + 2)}}`,
        `${indent(accessModifierIndent)}private:`,
        `${indent(inner + 2)}int mode;`,
        `${indent(inner + 2)}std::string name;`,
        `${indent(inner)}};`,
        `${indent(outer)}}`,
        "}",
      ].join("\n"),
    };
  }

  if (activeGroup === "spacing") {
    const aligned = !/none|false/i.test(str("AlignConsecutiveAssignments", "Consecutive"));
    const continued = bool("AlignAfterOpenBracket", true) ? "             " : cont(1);
    const spaceBeforeAssignment = bool("SpaceBeforeAssignmentOperators", true);
    const spaceBeforeCtorColon = bool("SpaceBeforeCtorInitializerColon", true);
    const spaceBeforeInheritanceColon = bool("SpaceBeforeInheritanceColon", true);
    const spaceBeforeCaseColon = bool("SpaceBeforeCaseColon", false);
    const spaceInEmptyBraces = str("SpaceInEmptyBraces", "Never");
    const spaceAfterTemplateKeyword = bool("SpaceAfterTemplateKeyword", true);
    
    return {
      title: "空格与对齐预览",
      description: "展示指针/引用、括号前空格、赋值运算符空格、冒号空格、模板关键字空格与连续赋值对齐。",
      code: [
        `std::string format${spaceBefore('function')}(${pointerToken()}, ${referenceToken()}, bool ready)`,
        "{",
        `${indent(1)}auto payload = buildPreview(`,
        `${indent(1)}${continued}label,`,
        `${indent(1)}${continued}name,`,
        `${indent(1)}${continued}ready);`,
        "",
        aligned ? `${indent(1)}auto width   = 120;` : `${indent(1)}auto width = 120;`,
        aligned ? `${indent(1)}auto height  = 80;` : `${indent(1)}auto height = 80;`,
        aligned ? `${indent(1)}auto retries = 3;` : `${indent(1)}auto retries = 3;`,
        aligned ? `${indent(1)}auto timeout = 5000;` : `${indent(1)}auto timeout = 5000;`,
        "",
        `${indent(1)}if${spaceBefore('control')}(ready)`,
        `${indent(1)}{`,
        `${indent(2)}return format${spaceBefore('function')}(ptr, ref, true);`,
        `${indent(1)}}`,
        "}",
        "",
        "class Derived : public Base",  // 受SpaceBeforeInheritanceColon影响
        "{",
        `${indent(1)}public:`,
        `${indent(1)}Derived()${spaceBeforeCtorColon ? " " : ""}: value(0) {}`,  // 受SpaceBeforeCtorInitializerColon影响
        `${indent(1)}void process()`,
        `${indent(1)}{`,
        `${indent(2)}int x${spaceBeforeAssignment ? " " : ""}= 10;`,  // 受SpaceBeforeAssignmentOperators影响
        `${indent(2)}switch (mode) {`,
        `${indent(3)}case 0${spaceBeforeCaseColon ? " " : ""}:`,  // 受SpaceBeforeCaseColon影响
        `${indent(4)}break;`,
        `${indent(3)}}`,
        `${indent(2)}}`,
        "};",
        "",
        `${spaceAfterTemplateKeyword ? "template <typename T>" : "template<typename T>"}`,  // 受SpaceAfterTemplateKeyword影响
        "void process()",
        "{",
        `${indent(1)}std::vector<int> empty${spaceInEmptyBraces === "Always" ? "{ }" : "{}"};`,  // 受SpaceInEmptyBraces影响
        "}",
      ].join("\n"),
    };
  }

  if (activeGroup === "braces") {
    const breakBefore = ["Allman", "GNU", "Whitesmiths", "Mozilla"].includes(str("BreakBeforeBraces", "Attach"));
    const compact = bool("CompactNamespaces", false);
    const breakConstructorInitializers = str("BreakConstructorInitializers", "BeforeColon");
    const breakInheritanceList = str("BreakInheritanceList", "BeforeColon");
    const packConstructorInitializers = str("PackConstructorInitializers", "BinPack");
    const emptyLineAfterAccessModifier = str("EmptyLineAfterAccessModifier", "Leave");
    const emptyLineBeforeAccessModifier = str("EmptyLineBeforeAccessModifier", "Leave");
    
    const lines = compact ? ["namespace demo::detail"] : ["namespace demo"];
    if (breakBefore) lines.push("{"); else lines[0] += " {";
    if (!compact) lines.push(`${indent(1)}namespace detail`, `${indent(1)}{`);
    const level = compact ? 1 : 2;
    
    // 添加空行控制
    if (emptyLineBeforeAccessModifier === "Always") lines.push("");
    
    if (breakBefore) lines.push(`${indent(level)}void render()`, `${indent(level)}{`); else lines.push(`${indent(level)}void render() {`);
    lines.push(`${indent(level + 1)}apply();`);
    lines.push(`${indent(level)}}`);
    
    if (str("SeparateDefinitionBlocks", "Leave") === "Always") lines.push("");
    
    // 构造函数，展示BreakConstructorInitializers和PackConstructorInitializers
    if (breakBefore) lines.push(`${indent(level)}Formatter()`, `${indent(level)}${breakConstructorInitializers === "BeforeColon" ? ":" : ""}`); 
    else lines.push(`${indent(level)}Formatter() ${breakConstructorInitializers === "BeforeColon" ? ":" : ""}`);
    
    if (packConstructorInitializers === "BinPack") {
      lines.push(`${indent(level + 1)}: mode(0), name(""), value(42) {}`);
    } else if (packConstructorInitializers === "NextLine") {
      lines.push(`${indent(level + 1)}: mode(0)`);
      lines.push(`${indent(level + 1)}, name("")`);
      lines.push(`${indent(level + 1)}, value(42) {}`);
    } else {
      lines.push(`${indent(level + 1)}: mode(0), name(""), value(42) {}`);
    }
    lines.push(`${indent(level)}}`);
    
    if (str("SeparateDefinitionBlocks", "Leave") === "Always") lines.push("");
    
    // 类定义，展示BreakInheritanceList
    if (breakBefore) lines.push(`${indent(level)}class Formatter`, `${indent(level)}${breakInheritanceList === "BeforeColon" ? ": public Base" : ""}`); 
    else lines.push(`${indent(level)}class Formatter${breakInheritanceList === "BeforeColon" ? " : public Base" : ""} {`);
    
    if (breakBefore && breakInheritanceList === "BeforeColon") {
      lines.push(`${indent(level + 1)}: public Base`);
      lines.push(`${indent(level)}{`);
    }
    
    if (emptyLineAfterAccessModifier === "Always") lines.push("");
    lines.push(`${indent(level + 1)}public:`);
    if (emptyLineAfterAccessModifier === "Always") lines.push("");
    
    if (breakBefore) lines.push(`${indent(level + 2)}void process()`, `${indent(level + 2)}{`); else lines.push(`${indent(level + 2)}void process() {`);
    lines.push(`${indent(level + 3)}// implementation`);
    lines.push(`${indent(level + 2)}}`);
    lines.push(`${indent(level)}};`);
    if (!compact) lines.push(`${indent(1)}}`);
    lines.push("}");
    return { title: "换行与花括号预览", description: "展示花括号位置、紧凑命名空间、构造函数初始化列表、继承列表、访问修饰符空行和定义块间空行的效果。", code: lines.join("\n") };
  }

  if (activeGroup === "include") {
    return { title: "头文件与导入预览", description: "只展示 include 分组、排序和局部头文件块的变化。", code: includeLines().join("\n") };
  }

  if (activeGroup === "comments") {
    return {
      title: "注释与空行预览",
      description: "展示注释回流和注释相关的排版片段。",
      code: [
        ...commentLines("This preview isolates comment wrapping, empty line behavior and line-comment spacing for quick comparison.", 0),
        "",
        "class FormatterPreview",
        "{",
        `${indent(1)}// This is a single line comment`,
        `${indent(1)}int score;`,
        "",
        `${indent(1)}/* This is a multi-line comment`,
        `${indent(1)}   that spans multiple lines`,
        `${indent(1)}   to demonstrate comment wrapping */`,
        `${indent(1)}std::string name;`,
        "",
        `${indent(1)}// Another single line comment`,
        `${indent(1)}void process()`,
        `${indent(1)}{`,
        `${indent(2)}// Implementation comment`,
        `${indent(1)}}`,
        "};"
      ].join("\n"),
    };
  }

  if (activeGroup === "language" || activeGroup === "advanced" || activeGroup === "deprecated") {
    return {
      title: activeGroup === "language" ? "语言与特殊场景预览" : "高级配置预览",
      description: "这类字段常用于特殊语法或细粒度规则，建议结合右侧 YAML 一起观察。",
      code: [
        "template <typename T>",
        "requires requires(T value)",
        "{",
        `${indent(1)}value.render();`,
        "}",
        "",
        "template <typename T, typename U>",
        "auto combine${spaceBefore('function')}(T&& t, U&& u) -> decltype(auto)",
        "{",
        `${indent(1)}return t + u;`,
        "}",
        "",
        "enum class Color",
        "{",
        `${indent(1)}Red,`,
        `${indent(1)}Green,`,
        `${indent(1)}Blue,`,
        "};",
        "",
        "BraceWrapping:",
        "  AfterClass: true",
        "  AfterFunction: false",
      ].join("\n"),
    };
  }

  return {
    title: "基础风格预览",
    description: "展示列宽、短 if、短函数与基础风格最相关的片段。",
    code: [
      ...commentLines("This scene focuses on column width, short statements and the baseline style cascade.", 0),
      "",
      str("AllowShortFunctionsOnASingleLine", "InlineOnly") === "None" ? "inline int score()\n{\n    return 42;\n}" : "inline int score() { return 42; }",
      "",
      str("AllowShortIfStatementsOnASingleLine", "Never") === "Never"
        ? `if${spaceBefore('control')}(ready)\n{\n${indent(1)}return score();\n}`
        : `if${spaceBefore('control')}(ready) return score();`,
      "",
      str("AllowShortBlocksOnASingleLine", "Never") === "Never"
        ? `for${spaceBefore('control')}(int i = 0; i < 10; ++i)\n{\n${indent(1)}process(i);\n}`
        : `for${spaceBefore('control')}(int i = 0; i < 10; ++i) process(i);`,
    ].join("\n"),
  };
}

function quote(value) {
  const text = String(value).trim();
  if (!text) return "";
  if (/^[-+]?\d+(\.\d+)?$/.test(text) || /^(true|false|null)$/i.test(text) || /^[A-Za-z_][A-Za-z0-9_.:-]*$/.test(text) || /^['"]/.test(text) || /^[\[{]/.test(text)) return text;
  return JSON.stringify(text);
}

function buildYaml() {
  const touchedMetas = metas
    .filter((meta) => state[meta.name].touched)
    .filter((meta) => meta.type === "Boolean" || String(state[meta.name].value).trim() !== "");
  
  const braceWrappingMetas = touchedMetas.filter((meta) => meta.name.startsWith("BraceWrapping."));
  const spaceBeforeParensMetas = touchedMetas.filter((meta) => meta.name.startsWith("SpaceBeforeParensOptions."));
  const otherMetas = touchedMetas.filter((meta) => !meta.name.startsWith("BraceWrapping.") && !meta.name.startsWith("SpaceBeforeParensOptions."));
  
  const otherYaml = otherMetas.map((meta) => {
    const value = state[meta.name].value;
    if (meta.type === "Boolean") return `${meta.name}: ${value ? "true" : "false"}`;
    if (String(value).includes("\n")) return `${meta.name}:\n${String(value).split("\n").map((line) => `  ${line}`).join("\n")}`;
    return `${meta.name}: ${quote(value)}`;
  });
  
  let braceWrappingYaml = [];
  if (braceWrappingMetas.length > 0) {
    braceWrappingYaml.push("BraceWrapping:");
    braceWrappingMetas.forEach((meta) => {
      const key = meta.name.replace("BraceWrapping.", "");
      const value = state[meta.name].value;
      braceWrappingYaml.push(`  ${key}: ${value ? "true" : "false"}`);
    });
  }
  
  let spaceBeforeParensYaml = [];
  if (spaceBeforeParensMetas.length > 0) {
    spaceBeforeParensYaml.push("SpaceBeforeParensOptions:");
    spaceBeforeParensMetas.forEach((meta) => {
      const key = meta.name.replace("SpaceBeforeParensOptions.", "");
      const value = state[meta.name].value;
      spaceBeforeParensYaml.push(`  ${key}: ${value ? "true" : "false"}`);
    });
  }
  
  return [...otherYaml, ...braceWrappingYaml, ...spaceBeforeParensYaml].join("\n");
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const changedOnly = changedOnlyToggle.checked;
  const includeDeprecated = deprecatedToggle.checked;
  metas.forEach((meta) => {
    const refs = cards.get(meta.name);
    const show =
      (!query || meta.name.toLowerCase().includes(query) || desc(meta).toLowerCase().includes(query)) &&
      (!changedOnly || state[meta.name].touched) &&
      (includeDeprecated || state[meta.name].group !== "deprecated");
    refs.card.hidden = !show;
  });
  GROUPS.forEach(([id]) => {
    const refs = sections.get(id);
    const count = Array.from(refs.grid.children).filter((card) => !card.hidden).length;
    refs.section.hidden = count === 0;
    refs.chip.textContent = `${count} 项`;
  });
  changedCount.textContent = String(metas.filter((meta) => state[meta.name].touched).length);
  visibleCount.textContent = String(Array.from(cards.values()).filter(({ card }) => !card.hidden).length);
}

function renderPreview() {
  const scene = previewScene();
  const time = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  previewTitle.textContent = scene.title;
  previewDescription.textContent = scene.description;
  previewCode.innerHTML = highlightCpp(scene.code);
  previewStatus.textContent = `已刷新 ${time}`;
  previewMeta.textContent = GROUPS.find(([id]) => id === activeGroup)?.[1] || "基础风格";
}

function renderAll() {
  yamlOutput.value = buildYaml();
  yamlMeta.textContent = state ? `已写入 ${metas.filter((meta) => state[meta.name].touched).length} 项` : "仅导出已修改项";
  applyFilters();
  renderPreview();
}

function copyYaml() {
  const done = () => {
    copyButton.textContent = "已复制";
    setTimeout(() => {
      copyButton.textContent = "复制 YAML";
    }, 1200);
  };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(yamlOutput.value).then(done);
    return;
  }
  yamlOutput.focus();
  yamlOutput.select();
  document.execCommand("copy");
  done();
}

function downloadYaml() {
  const blob = new Blob([yamlOutput.value], { type: "text/yaml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = ".clang-format";
  a.click();
  URL.revokeObjectURL(url);
}

function resetAll() {
  metas.forEach((meta) => {
    state[meta.name].value = state[meta.name].defaultValue;
    state[meta.name].touched = false;
    const refs = cards.get(meta.name);
    if (refs.control === "checkbox") refs.input.checked = Boolean(state[meta.name].defaultValue);
    else refs.input.value = state[meta.name].defaultValue;
    refs.card.classList.remove("is-touched");
  });
  setActive("foundation");
  renderAll();
}

initState();
buildNavAndTabs();
buildSections();
searchInput.addEventListener("input", applyFilters);
changedOnlyToggle.addEventListener("change", applyFilters);
deprecatedToggle.addEventListener("change", applyFilters);
copyButton.addEventListener("click", copyYaml);
downloadButton.addEventListener("click", downloadYaml);

importButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const yamlContent = e.target.result;
      const config = parseYaml(yamlContent);
      loadConfig(config);
      alert("配置导入成功！");
    } catch (error) {
      alert("导入失败：" + error.message);
    }
  };
  reader.readAsText(file);
  event.target.value = ""; // 重置文件输入
});

function parseYaml(yaml) {
  const lines = yaml.split("\n");
  const config = {};
  let currentIndent = 0;
  let currentPath = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const indent = line.length - trimmed.length;
    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue;

    const key = trimmed.substring(0, colonIndex).trim();
    const value = trimmed.substring(colonIndex + 1).trim();

    // 调整当前路径
    while (indent < currentIndent) {
      currentPath.pop();
      currentIndent -= 2; // 假设缩进为2个空格
    }

    if (value) {
      // 有值，直接设置
      const fullKey = currentPath.length > 0 ? currentPath.join(".") + "." + key : key;
      config[fullKey] = parseValue(value);
    } else {
      // 无值，进入下一级
      currentPath.push(key);
      currentIndent = indent + 2;
    }
  }

  return config;
}

function parseValue(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (!isNaN(value) && value !== "") return parseInt(value);
  if (value.startsWith("'") && value.endsWith("'")) return value.substring(1, value.length - 1);
  if (value.startsWith('"') && value.endsWith('"')) return value.substring(1, value.length - 1);
  return value;
}

function setState(name, value, touched = false) {
  const meta = metas.find(m => m.name === name);
  if (meta) {
    state[name].value = value;
    state[name].touched = touched || !isDefault(name);
    const card = cards.get(name);
    if (card) {
      const { input, control } = card;
      if (control === "checkbox") input.checked = Boolean(value);
      else input.value = value;
      card.card.classList.toggle("is-touched", state[name].touched);
    }
  }
}

function updateYaml() {
  yamlOutput.value = buildYaml();
  yamlMeta.textContent = state ? `已写入 ${metas.filter((meta) => state[meta.name].touched).length} 项` : "仅导出已修改项";
}

function updateChangedCount() {
  changedCount.textContent = String(metas.filter((meta) => state[meta.name].touched).length);
  visibleCount.textContent = String(Array.from(cards.values()).filter(({ card }) => !card.hidden).length);
}

function loadConfig(config) {
  for (const [key, value] of Object.entries(config)) {
    const meta = metas.find(m => m.name === key);
    if (meta) {
      setState(key, value, true);
    }
  }
  renderGroups();
  updateYaml();
  renderPreview();
  updateChangedCount();
}
resetButton.addEventListener("click", resetAll);
setActive("foundation");
renderAll();
