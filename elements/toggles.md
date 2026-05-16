# 🔘 Toggles

Toggles are standard checkboxes used to enable or disable features.

### Method Signature
```lua
Section:Toggle(Data: table)
```

### Code Example
```lua
Section:Toggle({
    Name = "Kill Aura",
    Flag = "KillAura_Enabled",
    Default = false,
    Callback = function(Value)
        print("Kill Aura is now:", Value)
    end
})
```

### Configuration Table
| Property | Type | Description |
| :--- | :--- | :--- |
| **Name** | `string` | The text displayed next to the toggle. |
| **Flag** | `string` | The unique identifier for this element (used for saving). |
| **Default** | `boolean` | The initial state of the toggle. |
| **Callback** | `function` | Triggers whenever the value changes. |

---

> [!TIP]
> You can also call `:Set(bool)` on the returned object to change the state programmatically.
