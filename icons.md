# ✨ Icons & Lucide

Mentality Reborn features a built-in Lucide icon system. You can use icons by their names directly from the [Lucide Icon Gallery](https://lucide.dev/icons).

### How to use
Instead of looking up long Roblox asset IDs, you can simply pass the name of the icon as a string.

```lua
-- Example: Using 'house' and 'zap'
local MainPage = Window:Page({Name = "Main", Icon = "house"})
local MovementPage = Window:Page({Name = "Movement", Icon = "zap"})
```

### Supported Icons
All icons found on the Lucide website are supported. Some common ones include:
*   `house`
*   `settings`
*   `user`
*   `eye`
*   `swords`
*   `terminal`
*   `globe`

### Using Asset IDs
If you still want to use your own uploaded assets, you can still pass the numeric ID as a string:
```lua
Icon = "123456789"
```
