# Labels

Labels are simple text elements used to display information, group options, or act as headers inside your sections.

## Label

Adds a label to a section.

```lua
local MyLabel = ESPSection:Label("Player ESP Settings")
```

### Methods

You can update the text of a label dynamically.

```lua
MyLabel:SetText("New Label Text")
```

## Labels with Color Pickers

In Mentality Reborn, Color Pickers are often attached directly to Labels!

```lua
ESPSection:Label("ESP Color"):Colorpicker({
    Name = "Color",
    Flag = "ESP_Color",
    Default = Color3.fromRGB(0, 195, 255),
    Callback = function(Value)
        print("ESP Color changed")
    end
})
```
