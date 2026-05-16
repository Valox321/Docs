# 💾 SaveManager

The SaveManager allows you to save and load configurations automatically.

### Setup
Ensure you initialize the SaveManager after creating your library.

```lua
SaveManager:SetLibrary(Library)
SaveManager:IgnoreThemeSettings() -- Optional: don't save theme colors
SaveManager:SetIgnoreIndexes({ "MenuBind" }) -- Important: ignore the menu toggle key
SaveManager:SetFolder("MyScriptFolder") -- Name of the folder in workspace

-- Build the UI in your settings page
SaveManager:BuildConfigSection(SettingsPage)

-- Load the autoload config on startup
SaveManager:LoadAutoloadConfig()
```

### Methods
*   `SaveManager:Save(name)`: Saves current flags to a file.
*   `SaveManager:Load(name)`: Loads flags from a file.
*   `SaveManager:Delete(name)`: Deletes a config file.
*   `SaveManager:RefreshConfigList()`: Returns a list of all saved configs.
