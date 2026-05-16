# 🖼️ Window

The Window is the core container of your UI. It handles the title, logo, and overall layout.

### Method Signature
```lua
Library:Window(Data: table)
```

### Code Example
```lua
local Window = Library:Window({
    Name = "Mentality Reborn",
    SubName = "v1.0.0",
    Logo = "house" -- Use Lucide icon names or Asset IDs
})
```

### Configuration Table
| Property | Type | Description |
| :--- | :--- | :--- |
| **Name** | `string` | The main title shown at the top of the UI. |
| **SubName** | `string` | A subtitle or version number shown next to the title. |
| **Logo** | `string` | The icon name or ID for the top-left logo. |

---

> [!INFO]
> The Window must be initialized with `Window:Init()` at the end of your script for it to show up.
