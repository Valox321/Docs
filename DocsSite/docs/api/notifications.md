# Notifications API

Notifications are small popups that appear on the screen to inform the user about something.

## Notification

Sends a notification to the user.

```lua
Library:Notification({
    Title = "Mentality Reborn",
    Description = "Script successfully loaded!",
    Duration = 5,
    Icon = "73789337996373" -- Asset ID or Lucide Icon
})
```

### Arguments

| Argument | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `Title` | string | `"Notification"` | The title of the notification. |
| `Description`| string | `""` | The body text of the notification. |
| `Duration` | number | `5` | How long the notification stays on screen (seconds). |
| `Icon` | string | `nil` | Optional Asset ID or Lucide icon to display. |
