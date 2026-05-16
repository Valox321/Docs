# Sections

Sections are containers inside a Page that hold your UI elements (Toggles, Sliders, Buttons, etc.). You must create a Section before adding any interactive components.

## Section

Creates a section block inside a Page.

```lua
local CombatSection = MainPage:Section({
    Name = "Combat Options", 
    Side = 1
})
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Name` | string | The header text of the section. |
| `Side` | number | Which column to place the section in (`1` for Left, `2` for Right). |

## Adding Elements

Once you have a Section, you can add components to it using its methods:

```lua
CombatSection:Toggle({
    Name = "Enable Feature",
    Flag = "Feature_Toggle",
    Callback = function(Value)
        -- Do something
    end
})
```

For a list of all available elements you can add to a Section, check out the **UI Elements** category in the sidebar.
