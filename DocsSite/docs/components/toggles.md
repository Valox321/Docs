# Toggles

Toggles (or Checkboxes) allow users to switch an option between an on and off state.

## Toggle

Adds a toggle to a section.

```lua
local WalkSpeedToggle = SpeedSection:Toggle({
    Name = "WalkSpeed Hack",
    Flag = "WalkSpeed_Enabled",
    Default = false,
    Callback = function(Value)
        print("WalkSpeed:", Value)
    end
})
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Name` | string | The text displayed next to the toggle. |
| `Flag` | string | A unique identifier for SaveManager. |
| `Default` | boolean | The initial state of the toggle. |
| `Callback` | function | Runs when the toggle state changes. |

## Nested Settings

In Mentality Reborn, you can attach nested settings to a toggle. For example, a toggle that enables WalkSpeed can have a slider inside its settings panel to adjust the speed!

```lua
-- Create the main toggle
local WalkSpeedToggle = SpeedSection:Toggle({ ... })

-- Open nested settings for this toggle (width 200)
local SpeedSettings = WalkSpeedToggle:Settings(200)

-- Add a slider INSIDE the toggle's settings
SpeedSettings:Slider({
    Name = "Speed Value",
    Flag = "WalkSpeed_Value",
    Min = 16,
    Max = 250,
    Default = 16,
    Callback = function(Value)
        print("New Speed:", Value)
    end
})
```
