window.CLANG_FORMAT_OPTIONS = [
  {
    "name": "BasedOnStyle",
    "type": "String",
    "description": "The style used for all options not specifically set in the configuration.",
    "version": null,
    "deprecated": false
  },
  {
    "name": "AccessModifierOffset",
    "type": "Integer",
    "description": "The extra indent or outdent of access modifiers, e.g. public: .",
    "version": "3.3",
    "deprecated": false
  },
  {
    "name": "AlignAfterOpenBracket",
    "type": "Boolean",
    "description": "If true , horizontally aligns arguments after an open bracket.",
    "version": "3.8",
    "deprecated": false
  },
  {
    "name": "AlignArrayOfStructures",
    "type": "ArrayInitializerAlignmentStyle",
    "description": "If not None , when using initialization for an array of structs aligns the fields into columns.",
    "version": "13",
    "deprecated": false
  },
  {
    "name": "AlignConsecutiveAssignments",
    "type": "AlignConsecutiveStyle",
    "description": "Style of aligning consecutive assignments.",
    "version": "3.8",
    "deprecated": false
  },
  {
    "name": "AlignConsecutiveBitFields",
    "type": "AlignConsecutiveStyle",
    "description": "Style of aligning consecutive bit fields.",
    "version": "11",
    "deprecated": false
  },
  {
    "name": "AlignConsecutiveDeclarations",
    "type": "AlignConsecutiveStyle",
    "description": "Style of aligning consecutive declarations.",
    "version": "3.8",
    "deprecated": false
  },
  {
    "name": "AlignConsecutiveMacros",
    "type": "AlignConsecutiveStyle",
    "description": "Style of aligning consecutive macro definitions.",
    "version": "9",
    "deprecated": false
  },
  {
    "name": "AlignConsecutiveShortCaseStatements",
    "type": "ShortCaseStatementsAlignmentStyle",
    "description": "Style of aligning consecutive short case labels. Only applies if AllowShortCaseExpressionOnASingleLine or AllowShortCaseLabelsOnASingleLine is true .",
    "version": "17",
    "deprecated": false
  },
  {
    "name": "AlignConsecutiveTableGenBreakingDAGArgColons",
    "type": "AlignConsecutiveStyle",
    "description": "Style of aligning consecutive TableGen DAGArg operator colons. If enabled, align the colon inside DAGArg which have line break inside. This works only when TableGenBreakInsideDAGArg is BreakElements or BreakAll and the DAGArg is not excepted by TableGenBreakingDAGArgOperators’s effect.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "AlignConsecutiveTableGenCondOperatorColons",
    "type": "AlignConsecutiveStyle",
    "description": "Style of aligning consecutive TableGen cond operator colons. Align the colons of cases inside !cond operators.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "AlignConsecutiveTableGenDefinitionColons",
    "type": "AlignConsecutiveStyle",
    "description": "Style of aligning consecutive TableGen definition colons. This aligns the inheritance colons of consecutive definitions.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "AlignEscapedNewlines",
    "type": "EscapedNewlineAlignmentStyle",
    "description": "Options for aligning backslashes in escaped newlines.",
    "version": "5",
    "deprecated": false
  },
  {
    "name": "AlignOperands",
    "type": "OperandAlignmentStyle",
    "description": "If true , horizontally align operands of binary and ternary expressions.",
    "version": "3.5",
    "deprecated": false
  },
  {
    "name": "AlignTrailingComments",
    "type": "TrailingCommentsAlignmentStyle",
    "description": "Control of trailing comments.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "AllowAllArgumentsOnNextLine",
    "type": "Boolean",
    "description": "If a function call or braced initializer list doesn’t fit on a line, allow putting all arguments onto the next line, even if BinPackArguments is false .",
    "version": "9",
    "deprecated": false
  },
  {
    "name": "AllowAllConstructorInitializersOnNextLine",
    "type": "Boolean",
    "description": "This option is deprecated . See NextLine of PackConstructorInitializers .",
    "version": "9",
    "deprecated": true
  },
  {
    "name": "AllowAllParametersOfDeclarationOnNextLine",
    "type": "Boolean",
    "description": "If the function declaration doesn’t fit on a line, allow putting all parameters of a function declaration onto the next line even if BinPackParameters is OnePerLine .",
    "version": "3.3",
    "deprecated": false
  },
  {
    "name": "AllowBreakBeforeNoexceptSpecifier",
    "type": "BreakBeforeNoexceptSpecifierStyle",
    "description": "Controls if there could be a line break before a noexcept specifier.",
    "version": "18",
    "deprecated": false
  },
  {
    "name": "AllowBreakBeforeQtProperty",
    "type": "Boolean",
    "description": "Allow breaking before Q_Property keywords READ , WRITE , etc. as if they were preceded by a comma ( , ). This allows them to be formatted according to BinPackParameters .",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "AllowShortBlocksOnASingleLine",
    "type": "ShortBlockStyle",
    "description": "Dependent on the value, while (true) { continue; } can be put on a single line.",
    "version": "3.5",
    "deprecated": false
  },
  {
    "name": "AllowShortCaseExpressionOnASingleLine",
    "type": "Boolean",
    "description": "Whether to merge a short switch labeled rule into a single line.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "AllowShortCaseLabelsOnASingleLine",
    "type": "Boolean",
    "description": "If true , short case labels will be contracted to a single line.",
    "version": "3.6",
    "deprecated": false
  },
  {
    "name": "AllowShortCompoundRequirementOnASingleLine",
    "type": "Boolean",
    "description": "Allow short compound requirement on a single line.",
    "version": "18",
    "deprecated": false
  },
  {
    "name": "AllowShortEnumsOnASingleLine",
    "type": "Boolean",
    "description": "Allow short enums on a single line.",
    "version": "11",
    "deprecated": false
  },
  {
    "name": "AllowShortFunctionsOnASingleLine",
    "type": "ShortFunctionStyle",
    "description": "Dependent on the value, int f() { return 0; } can be put on a single line.",
    "version": "3.5",
    "deprecated": false
  },
  {
    "name": "AllowShortIfStatementsOnASingleLine",
    "type": "ShortIfStyle",
    "description": "Dependent on the value, if (a) return; can be put on a single line.",
    "version": "3.3",
    "deprecated": false
  },
  {
    "name": "AllowShortLambdasOnASingleLine",
    "type": "ShortLambdaStyle",
    "description": "Dependent on the value, auto lambda []() { return 0; } can be put on a single line.",
    "version": "9",
    "deprecated": false
  },
  {
    "name": "AllowShortLoopsOnASingleLine",
    "type": "Boolean",
    "description": "If true , while (true) continue; can be put on a single line.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "AllowShortNamespacesOnASingleLine",
    "type": "Boolean",
    "description": "If true , namespace a { class b; } can be put on a single line.",
    "version": "20",
    "deprecated": false
  },
  {
    "name": "AllowShortRecordOnASingleLine",
    "type": "ShortRecordStyle",
    "description": "Dependent on the value, struct bar { int i; }; can be put on a single line.",
    "version": "23",
    "deprecated": false
  },
  {
    "name": "AlwaysBreakAfterDefinitionReturnType",
    "type": "DefinitionReturnTypeBreakingStyle",
    "description": "The function definition return type breaking style to use. This option is deprecated and is retained for backwards compatibility.",
    "version": "3.7",
    "deprecated": true
  },
  {
    "name": "AlwaysBreakAfterReturnType",
    "type": "deprecated",
    "description": "This option is renamed to BreakAfterReturnType .",
    "version": "3.8",
    "deprecated": true
  },
  {
    "name": "AlwaysBreakBeforeMultilineStrings",
    "type": "Boolean",
    "description": "If true , always break before multiline string literals.",
    "version": "3.4",
    "deprecated": false
  },
  {
    "name": "AlwaysBreakTemplateDeclarations",
    "type": "deprecated",
    "description": "This option is renamed to BreakTemplateDeclarations .",
    "version": "3.4",
    "deprecated": true
  },
  {
    "name": "AttributeMacros",
    "type": "List of Strings",
    "description": "A vector of strings that should be interpreted as attributes/qualifiers instead of identifiers. This can be useful for language extensions or static analyzer annotations.",
    "version": "12",
    "deprecated": false
  },
  {
    "name": "BinPackArguments",
    "type": "Boolean",
    "description": "If false , a function call’s arguments will either be all on the same line or will have one line each.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "BinPackLongBracedList",
    "type": "Boolean",
    "description": "If BinPackLongBracedList is true it overrides BinPackArguments if there are 20 or more items in a braced initializer list.",
    "version": "21",
    "deprecated": false
  },
  {
    "name": "BinPackParameters",
    "type": "BinPackParametersStyle",
    "description": "The bin pack parameters style to use.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "BitFieldColonSpacing",
    "type": "BitFieldColonSpacingStyle",
    "description": "The BitFieldColonSpacingStyle to use for bitfields.",
    "version": "12",
    "deprecated": false
  },
  {
    "name": "BraceWrapping",
    "type": "BraceWrappingFlags",
    "description": "Control of individual brace wrapping cases.",
    "version": "3.8",
    "deprecated": false
  },
  {
    "name": "BracedInitializerIndentWidth",
    "type": "Integer",
    "description": "The number of columns to use to indent the contents of braced init lists. If unset or negative, ContinuationIndentWidth is used.",
    "version": "17",
    "deprecated": false
  },
  {
    "name": "BreakAdjacentStringLiterals",
    "type": "Boolean",
    "description": "Break between adjacent string literals.",
    "version": "18",
    "deprecated": false
  },
  {
    "name": "BreakAfterAttributes",
    "type": "AttributeBreakingStyle",
    "description": "Break after a group of C++11 attributes before variable or function (including constructor/destructor) declaration/definition names or before control statements, i.e. if , switch (including case and default labels), for , and while statements.",
    "version": "16",
    "deprecated": false
  },
  {
    "name": "BreakAfterJavaFieldAnnotations",
    "type": "Boolean",
    "description": "Break after each annotation on a field in Java files.",
    "version": "3.8",
    "deprecated": false
  },
  {
    "name": "BreakAfterOpenBracketBracedList",
    "type": "Boolean",
    "description": "Force break after the left bracket of a braced initializer list (when Cpp11BracedListStyle is true ) when the list exceeds the column limit.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakAfterOpenBracketFunction",
    "type": "Boolean",
    "description": "Force break after the left parenthesis of a function (declaration, definition, call) when the parameters exceed the column limit.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakAfterOpenBracketIf",
    "type": "Boolean",
    "description": "Force break after the left parenthesis of an if control statement when the expression exceeds the column limit.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakAfterOpenBracketLoop",
    "type": "Boolean",
    "description": "Force break after the left parenthesis of a loop control statement when the expression exceeds the column limit.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakAfterOpenBracketSwitch",
    "type": "Boolean",
    "description": "Force break after the left parenthesis of a switch control statement when the expression exceeds the column limit.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakAfterReturnType",
    "type": "ReturnTypeBreakingStyle",
    "description": "The function declaration return type breaking style to use.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "BreakArrays",
    "type": "Boolean",
    "description": "If true , clang-format will always break after a Json array [ otherwise it will scan until the closing ] to determine if it should add newlines between elements (prettier compatible).",
    "version": "16",
    "deprecated": false
  },
  {
    "name": "BreakBeforeBinaryOperators",
    "type": "BinaryOperatorStyle",
    "description": "The way to wrap binary operators.",
    "version": "3.6",
    "deprecated": false
  },
  {
    "name": "BreakBeforeBraces",
    "type": "BraceBreakingStyle",
    "description": "The brace breaking style to use.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "BreakBeforeCloseBracketBracedList",
    "type": "Boolean",
    "description": "Force break before the right bracket of a braced initializer list (when Cpp11BracedListStyle is true ) when the list exceeds the column limit. The break before the right bracket is only made if there is a break after the opening bracket.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakBeforeCloseBracketFunction",
    "type": "Boolean",
    "description": "Force break before the right parenthesis of a function (declaration, definition, call) when the parameters exceed the column limit.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakBeforeCloseBracketIf",
    "type": "Boolean",
    "description": "Force break before the right parenthesis of an if control statement when the expression exceeds the column limit. The break before the closing parenthesis is only made if there is a break after the opening parenthesis.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakBeforeCloseBracketLoop",
    "type": "Boolean",
    "description": "Force break before the right parenthesis of a loop control statement when the expression exceeds the column limit. The break before the closing parenthesis is only made if there is a break after the opening parenthesis.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakBeforeCloseBracketSwitch",
    "type": "Boolean",
    "description": "Force break before the right parenthesis of a switch control statement when the expression exceeds the column limit. The break before the closing parenthesis is only made if there is a break after the opening parenthesis.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "BreakBeforeConceptDeclarations",
    "type": "BreakBeforeConceptDeclarationsStyle",
    "description": "The concept declaration style to use.",
    "version": "12",
    "deprecated": false
  },
  {
    "name": "BreakBeforeInlineASMColon",
    "type": "BreakBeforeInlineASMColonStyle",
    "description": "The inline ASM colon style to use.",
    "version": "16",
    "deprecated": false
  },
  {
    "name": "BreakBeforeTemplateCloser",
    "type": "Boolean",
    "description": "If true , break before a template closing bracket ( > ) when there is a line break after the matching opening bracket ( < ).",
    "version": "21",
    "deprecated": false
  },
  {
    "name": "BreakBeforeTernaryOperators",
    "type": "Boolean",
    "description": "If true , ternary operators will be placed after line breaks.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "BreakBinaryOperations",
    "type": "BreakBinaryOperationsOptions",
    "description": "The break binary operations style to use.",
    "version": "20",
    "deprecated": false
  },
  {
    "name": "BreakConstructorInitializers",
    "type": "BreakConstructorInitializersStyle",
    "description": "The break constructor initializers style to use.",
    "version": "5",
    "deprecated": false
  },
  {
    "name": "BreakFunctionDefinitionParameters",
    "type": "Boolean",
    "description": "If true , clang-format will always break before function definition parameters.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "BreakInheritanceList",
    "type": "BreakInheritanceListStyle",
    "description": "The inheritance list style to use.",
    "version": "7",
    "deprecated": false
  },
  {
    "name": "BreakStringLiterals",
    "type": "Boolean",
    "description": "Allow breaking string literals when formatting.",
    "version": "3.9",
    "deprecated": false
  },
  {
    "name": "BreakTemplateDeclarations",
    "type": "BreakTemplateDeclarationsStyle",
    "description": "The template declaration breaking style to use.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "ColumnLimit",
    "type": "Unsigned",
    "description": "The column limit.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "CommentPragmas",
    "type": "String",
    "description": "A regular expression that describes comments with special meaning, which should not be split into lines or otherwise changed.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "CompactNamespaces",
    "type": "Boolean",
    "description": "If true , consecutive namespace declarations will be on the same line. If false , each namespace is declared on a new line.",
    "version": "5",
    "deprecated": false
  },
  {
    "name": "ConstructorInitializerAllOnOneLineOrOnePerLine",
    "type": "Boolean",
    "description": "This option is deprecated . See CurrentLine of PackConstructorInitializers .",
    "version": "3.7",
    "deprecated": true
  },
  {
    "name": "ConstructorInitializerIndentWidth",
    "type": "Unsigned",
    "description": "The number of characters to use for indentation of constructor initializer lists as well as inheritance lists.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "ContinuationIndentWidth",
    "type": "Unsigned",
    "description": "Indent width for line continuations.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "Cpp11BracedListStyle",
    "type": "BracedListStyle",
    "description": "The style to handle braced lists.",
    "version": "3.4",
    "deprecated": false
  },
  {
    "name": "DeriveLineEnding",
    "type": "Boolean",
    "description": "This option is deprecated . See DeriveLF and DeriveCRLF of LineEnding .",
    "version": "10",
    "deprecated": true
  },
  {
    "name": "DerivePointerAlignment",
    "type": "Boolean",
    "description": "If true , analyze the formatted file for the most common alignment of & and * . Pointer and reference alignment styles are going to be updated according to the preferences found in the file. PointerAlignment is then used only as fallback.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "DisableFormat",
    "type": "Boolean",
    "description": "Disables formatting completely.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "EmptyLineAfterAccessModifier",
    "type": "EmptyLineAfterAccessModifierStyle",
    "description": "Defines when to put an empty line after access modifiers. EmptyLineBeforeAccessModifier configuration handles the number of empty lines between two access modifiers.",
    "version": "13",
    "deprecated": false
  },
  {
    "name": "EmptyLineBeforeAccessModifier",
    "type": "EmptyLineBeforeAccessModifierStyle",
    "description": "Defines in which cases to put empty line before access modifiers.",
    "version": "12",
    "deprecated": false
  },
  {
    "name": "EnumTrailingComma",
    "type": "EnumTrailingCommaStyle",
    "description": "Insert a comma (if missing) or remove the comma at the end of an enum enumerator list.",
    "version": "21",
    "deprecated": false
  },
  {
    "name": "ExperimentalAutoDetectBinPacking",
    "type": "Boolean",
    "description": "If true , clang-format detects whether function calls and definitions are formatted with one parameter per line.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "FixNamespaceComments",
    "type": "Boolean",
    "description": "If true , clang-format adds missing namespace end comments for namespaces and fixes invalid existing ones. This doesn’t affect short namespaces, which are controlled by ShortNamespaceLines .",
    "version": "5",
    "deprecated": false
  },
  {
    "name": "ForEachMacros",
    "type": "List of Strings",
    "description": "A vector of macros that should be interpreted as foreach loops instead of as function calls.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "IfMacros",
    "type": "List of Strings",
    "description": "A vector of macros that should be interpreted as conditionals instead of as function calls.",
    "version": "13",
    "deprecated": false
  },
  {
    "name": "IncludeBlocks",
    "type": "IncludeBlocksStyle",
    "description": "Dependent on the value, multiple #include blocks can be sorted as one and divided based on category.",
    "version": "6",
    "deprecated": false
  },
  {
    "name": "IncludeCategories",
    "type": "List of IncludeCategories",
    "description": "Regular expressions denoting the different #include categories used for ordering #includes .",
    "version": "3.8",
    "deprecated": false
  },
  {
    "name": "IncludeIsMainRegex",
    "type": "String",
    "description": "Specify a regular expression of suffixes that are allowed in the file-to-main-include mapping.",
    "version": "3.9",
    "deprecated": false
  },
  {
    "name": "IncludeIsMainSourceRegex",
    "type": "String",
    "description": "Specify a regular expression for files being formatted that are allowed to be considered “main” in the file-to-main-include mapping.",
    "version": "10",
    "deprecated": false
  },
  {
    "name": "IndentAccessModifiers",
    "type": "Boolean",
    "description": "Specify whether access modifiers should have their own indentation level.",
    "version": "13",
    "deprecated": false
  },
  {
    "name": "IndentCaseBlocks",
    "type": "Boolean",
    "description": "Indent case label blocks one level from the case label.",
    "version": "11",
    "deprecated": false
  },
  {
    "name": "IndentCaseLabels",
    "type": "Boolean",
    "description": "Indent case labels one level from the switch statement.",
    "version": "3.3",
    "deprecated": false
  },
  {
    "name": "IndentExportBlock",
    "type": "Boolean",
    "description": "If true , clang-format will indent the body of an export { ... } block. This doesn’t affect the formatting of anything else related to exported declarations.",
    "version": "20",
    "deprecated": false
  },
  {
    "name": "IndentExternBlock",
    "type": "IndentExternBlockStyle",
    "description": "IndentExternBlockStyle is the type of indenting of extern blocks.",
    "version": "11",
    "deprecated": false
  },
  {
    "name": "IndentGotoLabels",
    "type": "IndentGotoLabelStyle",
    "description": "The goto label indenting style to use.",
    "version": "10",
    "deprecated": false
  },
  {
    "name": "IndentPPDirectives",
    "type": "PPDirectiveIndentStyle",
    "description": "The preprocessor directive indenting style to use.",
    "version": "6",
    "deprecated": false
  },
  {
    "name": "IndentRequiresClause",
    "type": "Boolean",
    "description": "Indent the requires clause in a template. This only applies when RequiresClausePosition is OwnLine , OwnLineWithBrace , or WithFollowing .",
    "version": "15",
    "deprecated": false
  },
  {
    "name": "IndentWidth",
    "type": "Unsigned",
    "description": "The number of columns to use for indentation.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "IndentWrappedFunctionNames",
    "type": "Boolean",
    "description": "Indent if a function definition or declaration is wrapped after the type.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "InsertBraces",
    "type": "Boolean",
    "description": "Insert braces after control statements ( if , else , for , do , and while ) in C++ unless the control statements are inside macro definitions or the braces would enclose preprocessor directives.",
    "version": "15",
    "deprecated": false
  },
  {
    "name": "InsertNewlineAtEOF",
    "type": "Boolean",
    "description": "Insert a newline at end of file if missing.",
    "version": "16",
    "deprecated": false
  },
  {
    "name": "InsertTrailingCommas",
    "type": "TrailingCommaStyle",
    "description": "If set to TCS_Wrapped will insert trailing commas in container literals (arrays and objects) that wrap across multiple lines. It is currently only available for JavaScript and disabled by default TCS_None . InsertTrailingCommas cannot be used together with BinPackArguments as inserting the comma disables bin-packing.",
    "version": "11",
    "deprecated": false
  },
  {
    "name": "IntegerLiteralSeparator",
    "type": "IntegerLiteralSeparatorStyle",
    "description": "Format integer literal separators ( ' for C/C++ and _ for C#, Java, and JavaScript).",
    "version": "16",
    "deprecated": false
  },
  {
    "name": "JavaImportGroups",
    "type": "List of Strings",
    "description": "A vector of prefixes ordered by the desired groups for Java imports.",
    "version": "8",
    "deprecated": false
  },
  {
    "name": "JavaScriptQuotes",
    "type": "JavaScriptQuoteStyle",
    "description": "The JavaScriptQuoteStyle to use for JavaScript strings.",
    "version": "3.9",
    "deprecated": false
  },
  {
    "name": "JavaScriptWrapImports",
    "type": "Boolean",
    "description": "Whether to wrap JavaScript import/export statements.",
    "version": "3.9",
    "deprecated": false
  },
  {
    "name": "KeepEmptyLines",
    "type": "KeepEmptyLinesStyle",
    "description": "Which empty lines are kept. See MaxEmptyLinesToKeep for how many consecutive empty lines are kept.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "KeepEmptyLinesAtEOF",
    "type": "Boolean",
    "description": "This option is deprecated . See AtEndOfFile of KeepEmptyLines .",
    "version": "17",
    "deprecated": true
  },
  {
    "name": "KeepEmptyLinesAtTheStartOfBlocks",
    "type": "Boolean",
    "description": "This option is deprecated . See AtStartOfBlock of KeepEmptyLines .",
    "version": "3.7",
    "deprecated": true
  },
  {
    "name": "KeepFormFeed",
    "type": "Boolean",
    "description": "Keep the form feed character if it’s immediately preceded and followed by a newline. Multiple form feeds and newlines within a whitespace range are replaced with a single newline and form feed followed by the remaining newlines. (See www.gnu.org/prep/standards/html_node/Formatting.html#:~:text=formfeed.)",
    "version": "20",
    "deprecated": false
  },
  {
    "name": "LambdaBodyIndentation",
    "type": "LambdaBodyIndentationKind",
    "description": "The indentation style of lambda bodies. Signature (the default) causes the lambda body to be indented one additional level relative to the indentation level of the signature. OuterScope forces the lambda body to be indented one additional level relative to the parent scope containing the lambda signature.",
    "version": "13",
    "deprecated": false
  },
  {
    "name": "Language",
    "type": "LanguageKind",
    "description": "The language that this format style targets.",
    "version": "3.5",
    "deprecated": false
  },
  {
    "name": "LineEnding",
    "type": "LineEndingStyle",
    "description": "Line ending style ( \\n or \\r\\n ) to use.",
    "version": "16",
    "deprecated": false
  },
  {
    "name": "MacroBlockBegin",
    "type": "String",
    "description": "A regular expression matching macros that start a block.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "MacroBlockEnd",
    "type": "String",
    "description": "A regular expression matching macros that end a block.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "Macros",
    "type": "List of Strings",
    "description": "A list of macros of the form <definition>=<expansion> .",
    "version": "17",
    "deprecated": false
  },
  {
    "name": "MacrosSkippedByRemoveParentheses",
    "type": "List of Strings",
    "description": "A vector of function-like macros whose invocations should be skipped by RemoveParentheses .",
    "version": "21",
    "deprecated": false
  },
  {
    "name": "MainIncludeChar",
    "type": "MainIncludeCharDiscriminator",
    "description": "When guessing whether a #include is the “main” include, only the include directives that use the specified character are considered.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "MaxEmptyLinesToKeep",
    "type": "Unsigned",
    "description": "The maximum number of consecutive empty lines to keep.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "NamespaceIndentation",
    "type": "NamespaceIndentationKind",
    "description": "The indentation used for namespaces.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "NamespaceMacros",
    "type": "List of Strings",
    "description": "A vector of macros which are used to open namespace blocks.",
    "version": "9",
    "deprecated": false
  },
  {
    "name": "NumericLiteralCase",
    "type": "NumericLiteralCaseStyle",
    "description": "Capitalization style for numeric literals.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "ObjCBinPackProtocolList",
    "type": "BinPackStyle",
    "description": "Controls bin-packing Objective-C protocol conformance list items into as few lines as possible when they go over ColumnLimit .",
    "version": "7",
    "deprecated": false
  },
  {
    "name": "ObjCBlockIndentWidth",
    "type": "Unsigned",
    "description": "The number of characters to use for indentation of ObjC blocks.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "ObjCBreakBeforeNestedBlockParam",
    "type": "Boolean",
    "description": "Break parameters list into lines when there is nested block parameters in a function call.",
    "version": "11",
    "deprecated": false
  },
  {
    "name": "ObjCPropertyAttributeOrder",
    "type": "List of Strings",
    "description": "The order in which ObjC property attributes should appear.",
    "version": "18",
    "deprecated": false
  },
  {
    "name": "ObjCSpaceAfterMethodDeclarationPrefix",
    "type": "Boolean",
    "description": "Add or remove a space between the ‘-‘/’+’ and the return type in Objective-C method declarations. i.e",
    "version": "23",
    "deprecated": false
  },
  {
    "name": "ObjCSpaceAfterProperty",
    "type": "Boolean",
    "description": "Add a space after &#64;property in Objective-C, i.e. use &#64;property (readonly) instead of &#64;property(readonly) .",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "ObjCSpaceBeforeProtocolList",
    "type": "Boolean",
    "description": "Add a space in front of an Objective-C protocol list, i.e. use Foo <Protocol> instead of Foo<Protocol> .",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "OneLineFormatOffRegex",
    "type": "String",
    "description": "A regular expression that describes markers for turning formatting off for one line. If it matches a comment that is the only token of a line, clang-format skips the comment and the next line. Otherwise, clang-format skips lines containing a matched token.",
    "version": "21",
    "deprecated": false
  },
  {
    "name": "PPIndentWidth",
    "type": "Integer",
    "description": "The number of columns to use for indentation of preprocessor statements. When set to -1 (default) IndentWidth is used also for preprocessor statements.",
    "version": "13",
    "deprecated": false
  },
  {
    "name": "PackConstructorInitializers",
    "type": "PackConstructorInitializersStyle",
    "description": "The pack constructor initializers style to use.",
    "version": "14",
    "deprecated": false
  },
  {
    "name": "PenaltyBreakAssignment",
    "type": "Unsigned",
    "description": "The penalty for breaking around an assignment operator.",
    "version": "5",
    "deprecated": false
  },
  {
    "name": "PenaltyBreakBeforeFirstCallParameter",
    "type": "Unsigned",
    "description": "The penalty for breaking a function call after call( .",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "PenaltyBreakBeforeMemberAccess",
    "type": "Unsigned",
    "description": "The penalty for breaking before a member access operator ( . , -> ).",
    "version": "20",
    "deprecated": false
  },
  {
    "name": "PenaltyBreakComment",
    "type": "Unsigned",
    "description": "The penalty for each line break introduced inside a comment.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "PenaltyBreakFirstLessLess",
    "type": "Unsigned",
    "description": "The penalty for breaking before the first << .",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "PenaltyBreakOpenParenthesis",
    "type": "Unsigned",
    "description": "The penalty for breaking after ( .",
    "version": "14",
    "deprecated": false
  },
  {
    "name": "PenaltyBreakScopeResolution",
    "type": "Unsigned",
    "description": "The penalty for breaking after :: .",
    "version": "18",
    "deprecated": false
  },
  {
    "name": "PenaltyBreakString",
    "type": "Unsigned",
    "description": "The penalty for each line break introduced inside a string literal.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "PenaltyBreakTemplateDeclaration",
    "type": "Unsigned",
    "description": "The penalty for breaking after template declaration.",
    "version": "7",
    "deprecated": false
  },
  {
    "name": "PenaltyExcessCharacter",
    "type": "Unsigned",
    "description": "The penalty for each character outside of the column limit.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "PenaltyIndentedWhitespace",
    "type": "Unsigned",
    "description": "Penalty for each character of whitespace indentation (counted relative to leading non-whitespace column).",
    "version": "12",
    "deprecated": false
  },
  {
    "name": "PenaltyReturnTypeOnItsOwnLine",
    "type": "Unsigned",
    "description": "Penalty for putting the return type of a function onto its own line.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "PointerAlignment",
    "type": "PointerAlignmentStyle",
    "description": "Pointer and reference alignment style.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "QualifierAlignment",
    "type": "QualifierAlignmentStyle",
    "description": "Different ways to arrange specifiers and qualifiers (e.g. const/volatile).",
    "version": "14",
    "deprecated": false
  },
  {
    "name": "QualifierOrder",
    "type": "List of Strings",
    "description": "The order in which the qualifiers appear. The order is an array that can contain any of the following:",
    "version": "14",
    "deprecated": false
  },
  {
    "name": "RawStringFormats",
    "type": "List of RawStringFormats",
    "description": "Defines hints for detecting supported languages code blocks in raw strings.",
    "version": "6",
    "deprecated": false
  },
  {
    "name": "ReferenceAlignment",
    "type": "ReferenceAlignmentStyle",
    "description": "Reference alignment style (overrides PointerAlignment for references).",
    "version": "13",
    "deprecated": false
  },
  {
    "name": "ReflowComments",
    "type": "ReflowCommentsStyle",
    "description": "Comment reformatting style.",
    "version": "3.8",
    "deprecated": false
  },
  {
    "name": "RemoveBracesLLVM",
    "type": "Boolean",
    "description": "Remove optional braces of control statements ( if , else , for , and while ) in C++ according to the LLVM coding style.",
    "version": "14",
    "deprecated": false
  },
  {
    "name": "RemoveEmptyLinesInUnwrappedLines",
    "type": "Boolean",
    "description": "Remove empty lines within unwrapped lines.",
    "version": "20",
    "deprecated": false
  },
  {
    "name": "RemoveParentheses",
    "type": "RemoveParenthesesStyle",
    "description": "Remove redundant parentheses.",
    "version": "17",
    "deprecated": false
  },
  {
    "name": "RemoveSemicolon",
    "type": "Boolean",
    "description": "Remove semicolons after the closing braces of functions and constructors/destructors.",
    "version": "16",
    "deprecated": false
  },
  {
    "name": "RequiresClausePosition",
    "type": "RequiresClausePositionStyle",
    "description": "The position of the requires clause.",
    "version": "15",
    "deprecated": false
  },
  {
    "name": "RequiresExpressionIndentation",
    "type": "RequiresExpressionIndentationKind",
    "description": "The indentation used for requires expression bodies.",
    "version": "16",
    "deprecated": false
  },
  {
    "name": "SeparateDefinitionBlocks",
    "type": "SeparateDefinitionStyle",
    "description": "Specifies the use of empty lines to separate definition blocks, including classes, structs, enums, and functions.",
    "version": "14",
    "deprecated": false
  },
  {
    "name": "ShortNamespaceLines",
    "type": "Unsigned",
    "description": "The maximal number of unwrapped lines that a short namespace spans. Defaults to 1.",
    "version": "13",
    "deprecated": false
  },
  {
    "name": "SkipMacroDefinitionBody",
    "type": "Boolean",
    "description": "Do not format macro definition body.",
    "version": "18",
    "deprecated": false
  },
  {
    "name": "SortIncludes",
    "type": "SortIncludesOptions",
    "description": "Controls if and how clang-format will sort #includes .",
    "version": "3.8",
    "deprecated": false
  },
  {
    "name": "SortJavaStaticImport",
    "type": "SortJavaStaticImportOptions",
    "description": "When sorting Java imports, by default static imports are placed before non-static imports. If JavaStaticImportAfterImport is After , static imports are placed after non-static imports.",
    "version": "12",
    "deprecated": false
  },
  {
    "name": "SortUsingDeclarations",
    "type": "SortUsingDeclarationsOptions",
    "description": "Controls if and how clang-format will sort using declarations.",
    "version": "5",
    "deprecated": false
  },
  {
    "name": "SpaceAfterCStyleCast",
    "type": "Boolean",
    "description": "If true , a space is inserted after C style casts.",
    "version": "3.5",
    "deprecated": false
  },
  {
    "name": "SpaceAfterLogicalNot",
    "type": "Boolean",
    "description": "If true , a space is inserted after the logical not operator ( ! ).",
    "version": "9",
    "deprecated": false
  },
  {
    "name": "SpaceAfterOperatorKeyword",
    "type": "Boolean",
    "description": "If true , a space will be inserted after the operator keyword.",
    "version": "21",
    "deprecated": false
  },
  {
    "name": "SpaceAfterTemplateKeyword",
    "type": "Boolean",
    "description": "If true , a space will be inserted after the template keyword.",
    "version": "4",
    "deprecated": false
  },
  {
    "name": "SpaceAroundPointerQualifiers",
    "type": "SpaceAroundPointerQualifiersStyle",
    "description": "Defines in which cases to put a space before or after pointer qualifiers",
    "version": "12",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeAssignmentOperators",
    "type": "Boolean",
    "description": "If false , spaces will be removed before assignment operators.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeCaseColon",
    "type": "Boolean",
    "description": "If false , spaces will be removed before case colon.",
    "version": "12",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeCpp11BracedList",
    "type": "Boolean",
    "description": "If true , a space will be inserted before a C++11 braced list used to initialize an object (after the preceding identifier or type).",
    "version": "7",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeCtorInitializerColon",
    "type": "Boolean",
    "description": "If false , spaces will be removed before constructor initializer colon.",
    "version": "7",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeEnumUnderlyingTypeColon",
    "type": "Boolean",
    "description": "If false , spaces will be removed before enum underlying type colon.",
    "version": "23",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeInheritanceColon",
    "type": "Boolean",
    "description": "If false , spaces will be removed before inheritance colon.",
    "version": "7",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeJsonColon",
    "type": "Boolean",
    "description": "If true , a space will be added before a JSON colon. For other languages, e.g. JavaScript, use SpacesInContainerLiterals instead.",
    "version": "17",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeParens",
    "type": "SpaceBeforeParensStyle",
    "description": "Defines in which cases to put a space before opening parentheses.",
    "version": "3.5",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeParensOptions",
    "type": "SpaceBeforeParensCustom",
    "description": "Control of individual space before parentheses.",
    "version": "14",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeRangeBasedForLoopColon",
    "type": "Boolean",
    "description": "If false , spaces will be removed before range-based for loop colon.",
    "version": "7",
    "deprecated": false
  },
  {
    "name": "SpaceBeforeSquareBrackets",
    "type": "Boolean",
    "description": "If true , spaces will be before [ . Lambdas will not be affected. Only the first [ will get a space added.",
    "version": "10",
    "deprecated": false
  },
  {
    "name": "SpaceInEmptyBlock",
    "type": "Boolean",
    "description": "This option is deprecated . See Block of SpaceInEmptyBraces .",
    "version": "10",
    "deprecated": true
  },
  {
    "name": "SpaceInEmptyBraces",
    "type": "SpaceInEmptyBracesStyle",
    "description": "Specifies when to insert a space in empty braces.",
    "version": "22",
    "deprecated": false
  },
  {
    "name": "SpaceInEmptyParentheses",
    "type": "Boolean",
    "description": "If true , spaces may be inserted into () . This option is deprecated . See InEmptyParentheses of SpacesInParensOptions .",
    "version": "3.7",
    "deprecated": true
  },
  {
    "name": "SpacesBeforeTrailingComments",
    "type": "Unsigned",
    "description": "The number of spaces before trailing line comments ( // - comments).",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "SpacesInAngles",
    "type": "SpacesInAnglesStyle",
    "description": "The SpacesInAnglesStyle to use for template argument lists.",
    "version": "3.4",
    "deprecated": false
  },
  {
    "name": "SpacesInCStyleCastParentheses",
    "type": "Boolean",
    "description": "If true , spaces may be inserted into C style casts. This option is deprecated . See InCStyleCasts of SpacesInParensOptions .",
    "version": "3.7",
    "deprecated": true
  },
  {
    "name": "SpacesInConditionalStatement",
    "type": "Boolean",
    "description": "If true , spaces will be inserted around if/for/switch/while conditions. This option is deprecated . See InConditionalStatements of SpacesInParensOptions .",
    "version": "10",
    "deprecated": true
  },
  {
    "name": "SpacesInContainerLiterals",
    "type": "Boolean",
    "description": "If true , spaces are inserted inside container literals (e.g. ObjC and Javascript array and dict literals). For JSON, use SpaceBeforeJsonColon instead.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "SpacesInLineCommentPrefix",
    "type": "SpacesInLineComment",
    "description": "How many spaces are allowed at the start of a line comment. To disable the maximum set it to -1 , apart from that the maximum takes precedence over the minimum.",
    "version": "13",
    "deprecated": false
  },
  {
    "name": "SpacesInParens",
    "type": "SpacesInParensStyle",
    "description": "Defines in which cases spaces will be inserted after ( and before ) .",
    "version": "17",
    "deprecated": false
  },
  {
    "name": "SpacesInParensOptions",
    "type": "SpacesInParensCustom",
    "description": "Control of individual spaces in parentheses.",
    "version": "17",
    "deprecated": false
  },
  {
    "name": "SpacesInParentheses",
    "type": "Boolean",
    "description": "If true , spaces will be inserted after ( and before ) . This option is deprecated . The previous behavior is preserved by using SpacesInParens with Custom and by setting all SpacesInParensOptions to true except for InCStyleCasts and InEmptyParentheses .",
    "version": "3.7",
    "deprecated": true
  },
  {
    "name": "SpacesInSquareBrackets",
    "type": "Boolean",
    "description": "If true , spaces will be inserted after [ and before ] . Lambdas without arguments or unspecified size array declarations will not be affected.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "Standard",
    "type": "LanguageStandard",
    "description": "Parse and format C++ constructs compatible with this standard.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "StatementAttributeLikeMacros",
    "type": "List of Strings",
    "description": "Macros which are ignored in front of a statement, as if they were an attribute. So that they are not parsed as identifier, for example for Qts emit.",
    "version": "12",
    "deprecated": false
  },
  {
    "name": "StatementMacros",
    "type": "List of Strings",
    "description": "A vector of macros that should be interpreted as complete statements.",
    "version": "8",
    "deprecated": false
  },
  {
    "name": "TabWidth",
    "type": "Unsigned",
    "description": "The number of columns used for tab stops.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "TableGenBreakInsideDAGArg",
    "type": "DAGArgStyle",
    "description": "The styles of the line break inside the DAGArg in TableGen.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "TableGenBreakingDAGArgOperators",
    "type": "List of Strings",
    "description": "Works only when TableGenBreakInsideDAGArg is not DontBreak. The string list needs to consist of identifiers in TableGen. If any identifier is specified, this limits the line breaks by TableGenBreakInsideDAGArg option only on DAGArg values beginning with the specified identifiers.",
    "version": "19",
    "deprecated": false
  },
  {
    "name": "TemplateNames",
    "type": "List of Strings",
    "description": "A vector of non-keyword identifiers that should be interpreted as template names.",
    "version": "20",
    "deprecated": false
  },
  {
    "name": "TypeNames",
    "type": "List of Strings",
    "description": "A vector of non-keyword identifiers that should be interpreted as type names.",
    "version": "17",
    "deprecated": false
  },
  {
    "name": "TypenameMacros",
    "type": "List of Strings",
    "description": "A vector of macros that should be interpreted as type declarations instead of as function calls.",
    "version": "9",
    "deprecated": false
  },
  {
    "name": "UseCRLF",
    "type": "Boolean",
    "description": "This option is deprecated . See LF and CRLF of LineEnding .",
    "version": "10",
    "deprecated": true
  },
  {
    "name": "UseTab",
    "type": "UseTabStyle",
    "description": "The way to use tab characters in the resulting file.",
    "version": "3.7",
    "deprecated": false
  },
  {
    "name": "VariableTemplates",
    "type": "List of Strings",
    "description": "A vector of non-keyword identifiers that should be interpreted as variable template names.",
    "version": "20",
    "deprecated": false
  },
  {
    "name": "VerilogBreakBetweenInstancePorts",
    "type": "Boolean",
    "description": "For Verilog, put each port on its own line in module instantiations.",
    "version": "17",
    "deprecated": false
  },
  {
    "name": "WhitespaceSensitiveMacros",
    "type": "List of Strings",
    "description": "A vector of macros which are whitespace-sensitive and should not be touched.",
    "version": "11",
    "deprecated": false
  },
  {
    "name": "WrapNamespaceBodyWithEmptyLines",
    "type": "WrapNamespaceBodyWithEmptyLinesStyle",
    "description": "Wrap namespace body with empty lines.",
    "version": "20",
    "deprecated": false
  }
];
