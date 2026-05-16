# Categories & Pages

Pages are used to organize your components. You can group Pages into Categories for a cleaner sidebar layout.

## Category

Creates a header in the sidebar to group the pages below it.

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

## Section

Before adding interactive elements, you must create a Section inside a Page.

```lua
local CombatSection = MainPage:Section({
    Name = "Combat Options", 
    Side = 1 -- 1 for Left, 2 for Right column
})
```
