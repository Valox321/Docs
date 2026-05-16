# Color Pickers

Color Pickers allow users to select RGB colors.

## Colorpicker

Colorpickers in this library are often attached to `Labels` or other elements.

```lua
ESPSection:Label("ESP Color"):Colorpicker({
    Name = "Color",
    Flag = "ESP_Color",
    Default = Color3.fromRGB(0, 195, 255),
    Callback = function(Value)
        print("ESP Color changed to", Value)
    end
})
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Name` | string | The text displayed for the color picker. |
| `Flag` | string | A unique identifier for SaveManager. |
| `Default` | Color3 | The default color. |
| `Callback` | function | Runs when the color changes. |
