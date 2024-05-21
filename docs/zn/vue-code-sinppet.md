---
title: vscode vue文件代码片段
date: 2020-09-02 11:50:47
type: categories
tags: vue
categories: 编程
archives: vue
copyright: true
comments: true
---

> vue.json 文件

```
{
	"Print to console": {
	   "prefix": "vue",
	   "body": [
		  "<template>",
		  "\t<div>\n",
		  "\t</div>",
		  "</template>\n",
		  "<script>",
		  "export default {",
		  "\tname:'${TM_FILENAME_BASE}',",
		  "\tcomponents: {\n",
		  "\t},",
		  "\tprops: {\n",
		  "\t},",
		  "\tdata() {",
		  "\t\treturn {\n",
		  "\t\t};",
		  "\t},",
		  "\tcomputed: {\n",
		  "\t},",
		  "\twatch: {\n",
		  "\t},",
		  "\tcreated() {\n",
		  "\t},",
		  "\tmounted() {\n",
		  "\t},",
		  "\tmethods: {\n",
		  "\t},",
		  "};",
		  "</script>\n",
		  "<style scoped lang=\"${1:scss}\">\n",
		  "</style>\n",
	   ],
	   "description": "Create vue template"
	}
 }
```