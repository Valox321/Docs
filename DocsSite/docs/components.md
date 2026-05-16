# Components Overview

The UI Library offers a wide range of interactive components to build your interfaces.

## Basic Structure

All components are added inside a **Section**, which is placed inside a **Page**.

```lua
local MainPage = Window:Page({Name = "Main", Icon = "house"})
local CombatSection = MainPage:Section({Name = "Combat", Side = 1})
```

## Adding Elements

### Toggle
Creates a boolean switch.

```lua
CombatSection:Toggle({
    Name = "Kill Aura",
    Flag = "KillAura_Enabled",
    Default = false,
    Callback = function(Value)
        print("Kill Aura state:", Value)
    end
})
```

### Slider
Creates a numeric slider.

```lua
CombatSection:Slider({
    Name = "Aura Range",
    Flag = "KillAura_Range",
    Min = 1,
    Max = 50,
    Default = 15,
    Suffix = " studs",
    Decimals = 1,
    Callback = function(Value)
        print("Aura Range:", Value)
    end
})
```

For more specific configurations and elements like Keybinds, Nested Settings, and Global Chat, check the individual component pages!
