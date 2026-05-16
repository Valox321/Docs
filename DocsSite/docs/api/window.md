# Window API

The Window is the main container for your UI.

## Window

Creates a new Window instance.

```lua
local Window = Library:Window({
    Name = "Mentality Reborn",
    SubName = "Example Template",
    Logo = "120959262762131"
})
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Name` | string | The main title of your UI. |
| `SubName` | string | Subtitle displayed next to the title. |
| `Logo` | string | The Roblox Asset ID for the window logo. |

## KeybindList

Creates a draggable UI element that displays active keybinds.

```lua
local KeybindList = Library:KeybindList("Active Keybinds")
```

## Window:Init()

::: danger Crucial Step
You **must** call `Window:Init()` at the very bottom of your script, after all pages and components have been added. If you forget this, the UI will not render or function properly!
:::

```lua
Window:Init()
```
