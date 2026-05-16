# Sliders

Sliders allow users to select a numeric value within a specified range.

## Slider

Adds a slider to a section.

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

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Name` | string | The text displayed above the slider. |
| `Flag` | string | A unique identifier for SaveManager. |
| `Min` | number | The minimum allowed value. |
| `Max` | number | The maximum allowed value. |
| `Default` | number | The initial value. |
| `Suffix` | string | Optional text to append to the value (e.g., `" studs"`). |
| `Decimals` | number | Number of decimal places (0 for integers). |
| `Callback` | function | Runs when the slider value changes. |
