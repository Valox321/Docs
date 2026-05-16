# 🧱 Components

Documentation for all UI components available in Mentality Reborn.

### Window
The main window of the library.
```lua
local Window = Library:Window({
    Name = "Title",
    SubName = "Subtitle",
    Logo = "house"
})
```

### Page & Section
Organize your features into pages and sections.
```lua
local Page = Window:Page({Name = "Home", Icon = "house"})
local Section = Page:Section({Name = "Combat", Side = 1}) -- Side 1 is Left, Side 2 is Right
```

### Toggle
A standard checkbox toggle.
```lua
Section:Toggle({
    Name = "Kill Aura",
    Flag = "KillAura_Enabled", -- Flag used for saving
    Default = false,
    Callback = function(Value)
        print("Toggled:", Value)
    end
})
```

### Slider
A slider for numeric values.
```lua
Section:Slider({
    Name = "Aura Range",
    Flag = "KillAura_Range",
    Min = 1,
    Max = 50,
    Default = 15,
    Suffix = " studs",
    Decimals = 1, -- Number of decimal places
    Callback = function(Value)
        print("Slider:", Value)
    end
})
```

### Dropdown
A searchable dropdown menu.
```lua
Section:Dropdown({
    Name = "Target Mode",
    Flag = "Aura_Mode",
    Items = {"Distance", "Health", "FOV"},
    Default = "Distance",
    Callback = function(Value)
        print("Selected:", Value)
    end
})
```
