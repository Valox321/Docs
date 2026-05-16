# SaveManager

Using the SaveManager addon to manage configurations and themes in Mentality Reborn.

## What is the SaveManager?

The SaveManager is an addon that allows you to save, load, delete and set autoload configurations in your scripts. It handles all UI states (Toggles, Sliders, Dropdowns, ColorPickers) automatically based on the `Flag` you provide to them.

## Quick Start

To quickly get started with the SaveManager addon, you can use the following code:

```lua
local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/Valox321/Mentality-Reborn/refs/heads/main/Libary.lua"))()
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/Valox321/Mentality-Reborn/refs/heads/main/SaveManager.lua"))()

local Window = Library:Window({Name = "Mentality Reborn", SubName = "SaveManager Demo", Logo = "120959262762131"})
local SettingsPage = Window:Page({Name = "Settings", Icon = "122669828593160"})

-- Set the library
SaveManager:SetLibrary(Library)

-- Don't save theme settings in configuration
SaveManager:IgnoreThemeSettings()

-- Manual Ignore List (will ignore all Toggles/Options with the indexes provided)
-- Here we are ignoring the menu keybind
SaveManager:SetIgnoreIndexes({ "MenuBind" })

-- Map out folder structure
SaveManager:SetFolder("MentalityReborn")
-- SaveManager:SetSubFolder("specific-game") -- Optional: per-place subfolder

-- Builds our config menu on the right side of our settings tab
SaveManager:BuildConfigSection(SettingsPage)

-- Load the autoload config
SaveManager:LoadAutoloadConfig()

Window:Init()
```

## API Reference

### Methods

#### `SetLibrary`
Sets the library to use for the SaveManager.
```lua
SaveManager:SetLibrary(Library)
```

#### `SetFolder`
Sets the root folder to use for the SaveManager inside the executor's workspace.
```lua
SaveManager:SetFolder(folderName)
```

#### `SetSubFolder`
Sets the subfolder to use for the SaveManager. This is not required, but can be used to save configs for specific places inside of the game.
```lua
SaveManager:SetSubFolder(subfolderName)
```

#### `SetIgnoreIndexes`
Sets the indexes (Flags) to ignore when saving configs.
```lua
SaveManager:SetIgnoreIndexes({ "MenuBind", "AimbotKeybind" })
```

#### `IgnoreThemeSettings`
Adds the default theme-related indexes to the ignore list so configs do not override user themes.
```lua
SaveManager:IgnoreThemeSettings()
```

#### `Save`
Serializes the current library state to a JSON file inside the configured folder tree. Returns boolean, string? where the second value contains an error message when the save fails.
```lua
local success, err = SaveManager:Save(name)
```

#### `Load`
Loads a JSON configuration produced by the save method and applies it to the library controls. Returns boolean, string? describing the outcome.
```lua
local success, err = SaveManager:Load(name)
```

#### `Delete`
Removes a configuration file from disk. Returns boolean, string? describing the outcome.
```lua
local success, err = SaveManager:Delete(name)
```

#### `RefreshConfigList`
Scans the folder tree and returns an array of available configuration names (without extensions).
```lua
local configs = SaveManager:RefreshConfigList()
```

#### `GetAutoloadConfig`
Reads the persistent autoload marker and returns the config name that should be auto-loaded. Returns "none" if nothing is set.
```lua
local name = SaveManager:GetAutoloadConfig()
```

#### `LoadAutoloadConfig`
Loads and applies the configuration marked for autoload if a name is stored on disk.
```lua
SaveManager:LoadAutoloadConfig()
```

#### `SaveAutoloadConfig`
Sets the configuration that should load automatically on script startup.
```lua
local success, err = SaveManager:SaveAutoloadConfig(name)
```

#### `DeleteAutoLoadConfig`
Clears the autoload marker so no configuration is loaded automatically.
```lua
local success, err = SaveManager:DeleteAutoLoadConfig()
```

#### `BuildConfigSection`
Creates the SaveManager UI in your library tab so users can create, load, overwrite and manage configs directly. This call also ignores the config management controls when saving.
```lua
SaveManager:BuildConfigSection(tab)
```

#### `SetLoadingOrder`
Allows you to change the order of element types when loading any config.
```lua
SaveManager:SetLoadingOrder(true, { "Dropdown", "ColorPicker", "Keybind", "Slider", "Input", "Toggle" })
```
