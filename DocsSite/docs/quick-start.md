# Quick Start

Get up and running with Mentality Reborn / UI Library in minutes.

## Basic Example

Here is a complete, minimal example to create a Window, a Page, and a Toggle.

```lua
-- 1. Load the Library
local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/Valox321/Mentality-Reborn/refs/heads/main/Libary.lua"))()

-- 2. Create the Window
local Window = Library:Window({
    Name = "Mentality Reborn",
    SubName = "Example Template",
    Logo = "120959262762131"
})

-- 3. Create Categories & Pages
Window:Category("Main Features")
local MainPage = Window:Page({Name = "Main", Icon = "house"})

-- 4. Create a Section
local MainSection = MainPage:Section({Name = "Combat", Side = 1})

-- 5. Add Elements
MainSection:Toggle({
    Name = "Kill Aura",
    Flag = "KillAura_Enabled",
    Default = false,
    Callback = function(Value)
        print("Kill Aura:", Value)
    end
})

-- 6. Initialize the Window
Window:Init()
```

## SaveManager Setup

To save configurations, load the SaveManager right after the Library:

```lua
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/Valox321/Mentality-Reborn/refs/heads/main/SaveManager.lua"))()

SaveManager:SetLibrary(Library)
SaveManager:IgnoreThemeSettings()
SaveManager:SetIgnoreIndexes({ "MenuBind" })
SaveManager:SetFolder("MentalityReborn")
-- ...
```
