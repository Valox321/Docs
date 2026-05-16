# Installation

Welcome to the UI Library documentation. This guide will show you how to load and initialize the library in your Roblox scripts.

## Getting the Source

You can load the Library and the SaveManager directly from GitHub using `loadstring`.

```lua
local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/Valox321/Mentality-Reborn/refs/heads/main/Libary.lua"))()
```

## Basic Initialization

After loading the library, create your Window.

```lua
local Window = Library:Window({
    Name = "Mentality Reborn",
    SubName = "Script Hub",
    Logo = "120959262762131"
})
```

::: warning Important
You **must** call `Window:Init()` at the very end of your script to properly render and start the UI!
:::

```lua
-- Add your pages and elements here...

Window:Init()
```
