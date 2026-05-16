# Pages

Pages are the main navigation tabs used to organize your UI components into different areas (e.g., Main, ESP, Settings).

## Category

You can optionally group your pages into categories. Categories appear as headers in the sidebar navigation.

```lua
Window:Category("Combat & Movement")
```

## Page

Creates a new Page (Tab) in the Window.

```lua
local MainPage = Window:Page({
    Name = "Main", 
    Icon = "house" -- Lucide icon or Asset ID
})
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Name` | string | The name displayed on the page button. |
| `Icon` | string | The icon name or asset ID (e.g., `"house"`). |
