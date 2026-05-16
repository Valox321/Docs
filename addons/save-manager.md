# 💾 SaveManager

The SaveManager is a powerful addon that handles config saving and loading.

### Setup
```lua
SaveManager:SetLibrary(Library)
SaveManager:SetFolder("MyFolder")
SaveManager:SetIgnoreIndexes({ "MenuBind" })

-- Build the UI
SaveManager:BuildConfigSection(SettingsPage)

-- Load on startup
SaveManager:LoadAutoloadConfig()
```

### Configuration Table
| Method | Arguments | Description |
| :--- | :--- | :--- |
| **SetLibrary** | `Library` | Passes the UI library instance. |
| **SetFolder** | `string` | Sets the folder name in workspace. |
| **IgnoreThemeSettings** | `void` | Prevents saving theme colors. |
| **BuildConfigSection** | `Page` | Adds the Config UI to a page. |

---

> [!IMPORTANT]
> Always ignore the `MenuBind` flag to prevent the UI from closing unexpectedly during a config load.
