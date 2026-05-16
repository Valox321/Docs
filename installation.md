# ⚙️ Installation

To use Mentality Reborn, you simply need to load the library and SaveManager using `loadstring`.

### Loader Script
Paste this at the top of your script to initialize the library.

```lua
local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/Valox321/Mentality-Reborn/refs/heads/main/Libary.lua"))()
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/Valox321/Mentality-Reborn/refs/heads/main/SaveManager.lua"))()
```

### Full Example Template
```lua
local Library = loadstring(game:HttpGet("..."))()
local Window = Library:Window({ Name = "My Script", Logo = "house" })

local Main = Window:Page({ Name = "Main", Icon = "zap" })
local Section = Main:Section({ Name = "Combat" })

Section:Toggle({ Name = "Enabled", Flag = "Enable" })

Window:Init()
```

---

> [!WARNING]
> Ensure you are using a script executor that supports `game:HttpGet` and `loadstring`.
