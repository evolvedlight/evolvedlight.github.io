---
title: Runing Blazor wasm on Github pages
date: 2024-03-09
author: Stephen Brown
---

Create a new blazor wasm project

dotnet workload install wasm-tools

Add to git

Add these:

```xml
<RunAOTCompilation>true</RunAOTCompilation>
<WasmStripILAfterAOT>true</WasmStripILAfterAOT>
```