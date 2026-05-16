# Keybinds

Keybinds allow users to bind an action to a specific key on their keyboard.

## Keybind

Adds a keybind element to a section.

```lua
SpeedSection:Keybind({
    Name = "Toggle Speed",
    Flag = "WalkSpeed_Keybind",
    Default = Enum.KeyCode.V,
    Callback = function()
        print("Key pressed!")
    end
})
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Name` | string | The text displayed for the keybind. |
| `Flag` | string | A unique identifier for SaveManager. |
| `Default` | Enum.KeyCode | The default key assigned to this bind. |
| `Callback` | function | Runs when the assigned key is pressed. |

## Keybind Menu

If you want users to see which keybinds are currently active, you can use the global [Keybind Menu](/api/keybind-menu).
