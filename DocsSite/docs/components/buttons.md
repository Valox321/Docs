# Buttons

Buttons are simple clickable elements that execute a function when pressed.

## Button

Adds a button to a section.

```lua
local MyButton = CombatSection:Button({
    Name = "Execute Action",
    Callback = function()
        print("Button was pressed!")
    end
})
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Name` | string | The text displayed on the button. |
| `Callback` | function | The function that runs when the button is clicked. |
