# 🎚️ Sliders

Sliders allow users to select a numeric value within a specific range.

### Method Signature
```lua
Section:Slider(Data: table)
```

### Code Example
```lua
Section:Slider({
    Name = "Walkspeed",
    Flag = "Walkspeed_Value",
    Min = 16,
    Max = 250,
    Default = 16,
    Decimals = 1,
    Suffix = " studs/s",
    Callback = function(Value)
        print("New speed:", Value)
    end
})
```

### Configuration Table
| Property | Type | Description |
| :--- | :--- | :--- |
| **Name** | `string` | The text label for the slider. |
| **Flag** | `string` | The unique identifier for saving. |
| **Min** | `number` | The minimum possible value. |
| **Max** | `number` | The maximum possible value. |
| **Default** | `number` | The starting value. |
| **Decimals** | `number` | Number of decimal places to show. |
| **Suffix** | `string` | Text appended to the value display. |
| **Callback** | `function` | Triggers when the slider moves. |
