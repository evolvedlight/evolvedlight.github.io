---
title: Running Blazor WASM on GitHub Pages
date: 2024-03-09
author: Stephen Brown
---

Create a new Blazor WASM project

dotnet workload install wasm-tools

Add to git

Add these:

```xml
<RunAOTCompilation>true</RunAOTCompilation>
<WasmStripILAfterAOT>true</WasmStripILAfterAOT>
```