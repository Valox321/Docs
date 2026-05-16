# 🚀 Getting Started

To get started with Mentality Reborn, you can load the library using `loadstring`.

### Installation
Add the following lines at the top of your script:

```lua
local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/Valox321/Mentality-Reborn/refs/heads/main/Libary.lua"))()
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/Valox321/Mentality-Reborn/refs/heads/main/SaveManager.lua"))()
```

### Creating a Window
The window is the main container for your UI.

```lua
local Window = Library:Window({
    Name = "Mentality Reborn",
    SubName = "Example Template",
    Logo = "house" -- You can use IDs or Lucide names
})
```

### Initializing
At the very end of your script, you must initialize the window:

```lua
Window:Init()
```
